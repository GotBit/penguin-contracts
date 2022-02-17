import { defineStore } from 'pinia'

import { BigNumber, ContractTransaction, ethers } from 'ethers'

import { useUser } from '../user'
import { safe, useContracts } from '../../utils'
import axios from 'axios'

export const useToken = defineStore('token', {
  state: () => {
    return {
      balance: BigNumber.from(0) as BigNumber,
      balanceUSD: '0.05',
      allowances: {} as { [spender: string]: boolean },
      loading: false,
    }
  },
  actions: {
    async loadBefore() {},
    async load() {
      const user = useUser()
      if (!user.login) {
        console.error('Load in store/token.ts, user not is login')
        return
      }
      this.loading = true

      this.balance = await this.getBalance()
      this.balanceUSD = await this.getBalanceUSD()
      console.log(this.balanceUSD)
      const spenders = [useContracts(user.chainId).mixing.address]
      const allowances = await Promise.all(
        spenders.map(async (s) => ({
          spender: s,
          allowance: await this.hasAllowance(s),
        }))
      )
      allowances.map((a) => {
        this.allowances[a.spender] = a.allowance
      })

      this.loading = false
      console.log('Loaded store/token.ts')
    },

    async getBalance(): Promise<BigNumber> {
      const user = useUser()
      if (!user.login) return BigNumber.from(0)

      const { token } = useContracts(user.chainId)
      const [balance, errorBalance] = await safe(token.balanceOf(user.wallet))
      if (errorBalance) {
        console.error(errorBalance)
        return BigNumber.from(0)
      }
      return balance
    },

    async getBalanceUSD(precision = 9): Promise<string> {
      return this.balance
        .mul(
          Math.floor(
            (
              await axios.get(
                'https://api.coingecko.com/api/v3/simple/price?ids=vodka-token&vs_currencies=usd'
              )
            ).data['vodka-token'].usd *
              10 ** precision
          )
        )
        .div(10 ** precision)
        .formatString(18, 2)
    },

    async getAllowance(address: string): Promise<BigNumber> {
      const user = useUser()
      if (!user.login) return BigNumber.from(0)

      const { token } = useContracts(user.chainId)
      const [allowance, errorAllowance] = await safe(
        token.allowance(user.wallet, address)
      )
      if (errorAllowance) {
        console.error(errorAllowance)
        return BigNumber.from(0)
      }
      return allowance
    },

    async hasAllowance(address: string): Promise<boolean> {
      if (!useUser().login) return false
      const allowance = await this.getAllowance(address)
      return allowance.gte(ethers.constants.MaxUint256.div(2))
    },

    async approve(
      spender: string,
      amount: BigNumber
    ): Promise<ContractTransaction | null> {
      const user = useUser()
      if (!user.login) return null

      const { token } = useContracts(user.chainId)
      const [txApprove, errorApprove] = await safe(
        token.connect(user.signer!).approve(spender, amount)
      )
      if (errorApprove) {
        console.error(errorApprove)
        return null
      }
      return txApprove
    },

    async approveMax(spender: string): Promise<ContractTransaction | null> {
      if (!useUser().login) return null
      if (await this.hasAllowance(spender)) return null

      const txApprove = await this.approve(spender, ethers.constants.MaxUint256)
      if (!txApprove) return null

      await txApprove.wait()
      return txApprove
    },
  },
})
