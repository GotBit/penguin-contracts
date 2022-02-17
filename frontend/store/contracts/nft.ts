import { defineStore } from 'pinia'

import { BigNumber, ContractTransaction, ethers } from 'ethers'

import { useUser } from '../user'
import { safe, useContracts } from '../../utils'

import axios from 'axios'

export interface Data {
  name: string
  description: string
  image: string
  attributes: [
    {
      trait_type: 'Rarity'
      value: string
    },
    {
      trait_type: 'Special'
    }?
  ]
}

export interface NFT {
  tokenURI: string
  tokenId: BigNumber
  price: BigNumber
  data: Data
}

export const useNFT = defineStore('nft', {
  state: () => {
    return {
      nfts: [] as NFT[],
      loading: false,
    }
  },
  actions: {
    async loadBefore() {},
    async load() {
      const user = useUser()
      if (!user.login) {
        console.error('Load in store/nft.ts, user is not login')
        return
      }
      this.loading = true

      await this.getNFTs()

      this.loading = false
      console.log('Loaded store/nft.ts')
    },

    async getNFTs() {
      const user = useUser()
      if (!user.login) return

      const { nft, assist } = useContracts(user.chainId)

      let [nftInfo, errorNFTInfo] = await safe(
        assist.getERC721HolderTokens(nft.address, user.wallet)
      )
      if (errorNFTInfo) {
        console.error(errorNFTInfo)
        return
      }
      const nfts = [] as NFT[]

      const [data, errorData] = await safe(
        Promise.all(nftInfo[0].map(async (uri: string) => (await axios.get(uri)).data))
      )
      if (errorData) {
        console.error(errorData)
        return
      }
      nftInfo = [...nftInfo, data]

      console.log(nftInfo)
      const [tokenURIs, tokenIds, prices, datas] = nftInfo

      for (let i = 0; i < tokenURIs.length; i++) {
        nfts.push({
          tokenURI: tokenURIs[i],
          tokenId: tokenIds[i],
          price: prices[i],
          data: datas[i],
        })
      }

      this.nfts = nfts
      console.log(this.nfts)
    },

    async loadURIs() {},
  },
})
