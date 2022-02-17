import { defineStore } from 'pinia'

import { BigNumber, ContractTransaction, ethers } from 'ethers'

import { useUser } from '../user'
import { safe, useContracts } from '../../utils'
import { Token } from '~/typechain'

export const useForeignTokens = defineStore('foreignTokens', {
  state: () => {
    return {
      tokens: {} as { [address: string]: Token },
      balances: {} as { [token: string]: BigNumber },
      allowances: {} as { [token: string]: { [spender: string]: boolean } },
      symbols: {} as { [token: string]: string },
      names: {} as { [token: string]: string },
      loading: false,
    }
  },
  actions: {
    async loadBefore() {
      const user = useUser()

      const tokens = [
        useContracts(user.chainId).busd,
        useContracts(user.chainId).wbnb,
        useContracts(user.chainId).usdt,
        useContracts(user.chainId).zlw,
      ]

      const data = await Promise.all(
        tokens.map(async (token) => ({
          token,
          symbol: await this.getSymbol(token),
          name: await this.getName(token),
        }))
      )

      data.map((d) => {
        this.tokens[d.token.address] = d.token
        this.names[d.token.address] = d.name
        this.symbols[d.token.address] = d.symbol
      })
    },

    async load() {
      const user = useUser()
      if (!user.login) {
        console.error('Load in store/foreignTokens.ts, user is not login')
        return
      }

      this.loading = true

      const tokens = [
        useContracts(user.chainId).busd,
        useContracts(user.chainId).wbnb,
        useContracts(user.chainId).usdt,
        useContracts(user.chainId).zlw,
      ]
      const spenders = [useContracts(user.chainId).mixing.address]

      const data = await Promise.all(
        tokens.map(async (token) => ({
          token,
          balance: await this.getBalance(token),
          allowances: await Promise.all(
            spenders.map(async (s) => ({
              spender: s,
              allowance: await this.hasAllowance(token, s),
            }))
          ),
        }))
      )

      data.map((d) => {
        this.balances[d.token.address] = d.balance
        for (const allowance of d.allowances) {
          this.allowances[d.token.address] = { [allowance.spender]: allowance.allowance }
        }
      })

      console.log('symbols:', this.symbols)
      this.loading = false
      console.log('Loaded store/foreignTokens.ts')
    },

    async getName(token: Token): Promise<string> {
      const [name, errorName] = await safe(token.name())
      if (errorName) {
        console.error(errorName)
        return ''
      }
      return name
    },

    async getSymbol(token: Token): Promise<string> {
      const [symbol, errorSymbol] = await safe(token.symbol())
      if (errorSymbol) {
        console.error(errorSymbol)
        return ''
      }
      return symbol
    },

    async getBalance(token: Token): Promise<BigNumber> {
      const user = useUser()
      if (!user.login) return BigNumber.from(0)

      const [balance, errorBalance] = await safe(token.balanceOf(user.wallet))
      if (errorBalance) {
        console.error(errorBalance)
        return BigNumber.from(0)
      }
      return balance
    },

    async getAllowance(token: Token, address: string): Promise<BigNumber> {
      const user = useUser()
      if (!user.login) return BigNumber.from(0)

      const [allowance, errorAllowance] = await safe(
        token.allowance(user.wallet, address)
      )
      if (errorAllowance) {
        console.error(errorAllowance)
        return BigNumber.from(0)
      }
      return allowance
    },

    async hasAllowance(token: Token, address: string): Promise<boolean> {
      if (!useUser().login) return false
      const allowance = await this.getAllowance(token, address)
      return allowance.gte(ethers.constants.MaxUint256.div(2))
    },

    async approve(
      token: Token,
      spender: string,
      amount: BigNumber
    ): Promise<ContractTransaction | null> {
      const user = useUser()
      if (!user.login) return null

      const [txApprove, errorApprove] = await safe(
        token.connect(user.signer!).approve(spender, amount)
      )
      if (errorApprove) {
        console.error(errorApprove)
        return null
      }
      return txApprove
    },

    async approveMax(token: Token, spender: string): Promise<ContractTransaction | null> {
      if (!useUser().login) return null
      if (await this.hasAllowance(token, spender)) return null

      const txApprove = await this.approve(token, spender, ethers.constants.MaxUint256)
      if (!txApprove) return null

      await txApprove.wait()
      return txApprove
    },
  },
})
