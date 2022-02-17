import { defineStore } from 'pinia'

import { BigNumber, ContractTransaction, ethers } from 'ethers'

import { useUser, DEFAULT_CHAINID } from '../user'
import { safe, useContracts } from '../../utils'
import { Token } from '~/typechain'
import { useForeignTokens } from './foreignTokens'
import { useToken } from './token'

export interface Rarity {
  name: string
  defaultAmount: number
  img: string
}

export const useMixing = defineStore('mixing', {
  state: () => {
    return {
      loading: false,
      problem: '',
      claimed: false,
      pickedMixToken: '',
      pickedRarity: null as Rarity | null,
      pickedAmount: 0,
      rarities: [
        {
          name: 'Gold',
          defaultAmount: 1,
          img: 'gold',
        },
        {
          name: 'Silver',
          defaultAmount: 2,
          img: 'silver',
        },
        {
          name: 'Bronze',
          defaultAmount: 3,
          img: 'bronze',
        },
      ],
    }
  },
  actions: {
    async loadBefore() {},
    async load() {
      const user = useUser()
      if (!user.login) {
        console.error('Load in store/mixing.ts, user is not login')
        return
      }
      this.loading = true

      this.claimed = await this.isClaimed()
      console.log(this.claimed)

      this.loading = false

      console.log('Loaded store/mixing.ts')
    },
    async isClaimed(): Promise<boolean> {
      const user = useUser()
      if (!user.login) return false

      const { mixing } = useContracts(user.chainId)

      const [requestId, errorRequestId] = await safe(mixing.requestIds(user.wallet))
      if (errorRequestId) {
        console.error(errorRequestId)
        return false
      }

      const [shake, errorShake] = await safe(mixing.shakes(requestId))
      if (errorShake) {
        console.error(errorShake)
        return false
      }

      return shake.claimed || shake.amount.eq(0)
    },
    pickMixToken(token: string) {
      this.pickedMixToken = token
    },
    defaultAmount(rarity: string) {
      return this.rarities.filter((e) => e.name === rarity)[0].defaultAmount
    },
    pickRarity(rarity: Rarity) {
      this.pickedRarity = rarity
      if (rarity) this.pickedAmount = rarity.defaultAmount
      else this.pickedAmount = 0
    },
    plusAmount() {
      this.pickedAmount += 1
    },
    minusAmount() {
      if (this.pickedRarity!.defaultAmount > this.pickedAmount - 1) return
      this.pickedAmount -= 1
    },
    async calculateAmounts(
      rarity: Rarity,
      mixToken: string,
      amount: number
    ): Promise<[BigNumber, BigNumber]> {
      const user = useUser()
      let chainId = DEFAULT_CHAINID
      if (user.login) chainId = user.chainId

      const { mixing } = useContracts(chainId)

      console.log(rarity.name, mixToken, amount)
      const [[tokenAmount, mixTokenAmount], errorAmounts] = await safe(
        mixing.calculateAmounts(rarity.name, mixToken, amount)
      )

      if (errorAmounts) {
        console.error(errorAmounts)
        return [BigNumber.from(0), BigNumber.from(0)]
      }
      console.log(tokenAmount, mixTokenAmount)
      return [tokenAmount, mixTokenAmount]
    },
    async getAmountsLabel(): Promise<string> {
      if (!this.pickedRarity || !this.pickedMixToken || !this.pickedAmount) {
        return ''
      }
      console.log(this.pickedAmount)
      const [tokenAmount, mixTokenAmount] = await this.calculateAmounts(
        this.pickedRarity!,
        this.pickedMixToken,
        this.pickedAmount
      )

      const foreignTokens = useForeignTokens()
      return `${mixTokenAmount.formatString(18, 2)} ${
        foreignTokens.symbols[this.pickedMixToken]
      } + ${tokenAmount.formatString(18, 2)} VODKA`
    },

    async shake() {
      if (this.loading) {
        console.log('Mixing is busy')
        return
      }

      console.log('Shake!')
      const user = useUser()
      if (!user.login) return

      const { mixing } = useContracts(user.chainId)
      this.loading = true

      // check approves
      const token = useToken()
      const foreignTokens = useForeignTokens()

      await Promise.all([
        token.approveMax(mixing.address),
        foreignTokens.approveMax(
          foreignTokens.tokens[this.pickedMixToken] as Token,
          mixing.address
        ),
      ])

      // ----
      const [txMix, errorMix] = await safe(
        mixing
          .connect(user.signer!)
          .shake(this.pickedRarity!.name, this.pickedMixToken, this.pickedAmount)
      )
      if (errorMix) {
        console.error(errorMix)
        this.problem = 'Mix error'
        this.loading = false
        return
      }

      await txMix.wait()

      this.loading = false
    },
    async mix() {
      console.log('Mix!')
      const user = useUser()
      if (!user.login) return

      const { mixing } = useContracts(user.chainId)
      this.loading = true

      const [txShake, errorShake] = await safe(mixing.connect(user.signer!).mix())
      if (errorShake) {
        console.error(errorShake)
        this.problem = 'Shake problem'
        this.loading = false
        return
      }
      await txShake.wait()

      this.loading = false
    },
  },
})
