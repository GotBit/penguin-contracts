import { defineStore } from 'pinia'
import { providers } from 'ethers'

import { useToken } from './contracts/token'
import { useForeignTokens } from './contracts/foreignTokens'
import { useNFT } from './contracts/nft'
import { useMixing } from './contracts/mixing'

import { getChainHex, getChainRpc } from '@/utils'

import config from '@/settings/config'

import WalletConnectProvider from '@walletconnect/web3-provider'

export type Chain = '97'
export const chainIds = config.CHAINS as Chain[]
export const DEFAULT_CHAINID = '97' as Chain

const registerContracts = [useToken, useForeignTokens, useNFT, useMixing]

export const useUser = defineStore('user', {
  state: () => {
    return {
      wallet: '',
      _signer: () => null as null | providers.JsonRpcSigner,
      chainId: DEFAULT_CHAINID,
      login: false,
      loading: false,
    }
  },
  getters: {
    signer: (state) => state._signer(),
    walletLabel: (state) => (state.wallet ? state.wallet.shortAddress() : 'Connect'),
  },
  actions: {
    async before() {
      // load contracts before
      registerContracts.forEach((c) => c().loadBefore())
      console.log('done')
    },
    async connect(wallet: string, signer: providers.JsonRpcSigner, chainId: string) {
      this.loading = true
      console.log('Connect: ', wallet, chainId)
      this.wallet = wallet
      this._signer = () => signer
      this.login = true
      this.chainId = chainId.toString() as Chain

      console.log('Loading contracts for', this.wallet)

      // loads contracts on login
      registerContracts.forEach((c) => c().load())

      this.loading = false
    },

    async connectWalletconnect() {
      try {
        console.log('Connecting to walletconnect...')

        const rpc = {} as { [key: number]: string }
        rpc[parseInt(DEFAULT_CHAINID)] = getChainRpc(DEFAULT_CHAINID)

        const wc = new WalletConnectProvider({
          rpc,
          chainId: parseInt(DEFAULT_CHAINID),
          qrcode: true,
        })

        await wc.enable()
        const provider = new providers.Web3Provider(wc)
        const signer = provider.getSigner()
        const wallet = await signer.getAddress()

        this.connect(wallet, signer, DEFAULT_CHAINID)
      } catch (error) {
        console.error(error)
      }
    },
    async connectMetamask() {
      try {
        console.log('Connecting to metamask...')
        if (!(window as any).ethereum) throw new Error('Please set up MetaMask properly')

        const wallet = (
          await (window as any).ethereum.request?.({
            method: 'eth_requestAccounts',
          })
        )[0] as string

        const provider = new providers.Web3Provider(
          ((window as any).ethereum as any) || (window as any).web3
        )
        const signer = provider.getSigner()
        const chainId = (await provider?.getNetwork())?.chainId

        if (!chainIds.includes(chainId.toString() as Chain)) {
          await this.switchChainId(DEFAULT_CHAINID)
        }

        this.connect(wallet, signer, chainId.toString())
        ;((window as any).ethereum as any).once(
          'chainChanged',
          async (chainId: string) => {
            await this.connectMetamask()
          }
        )
        ;((window as any).ethereum as any).once(
          'accountsChanged',
          this.addressChangeHandler
        )
      } catch (error) {
        console.error(error)
      }
    },

    async switchChainId(chainId: Chain) {
      // if (this.chainId === chainId) return
      try {
        await (window as any).ethereum.request?.({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: getChainHex(chainId) }],
        })
        await this.connectMetamask()
      } catch (error) {
        console.error(error)
      }
    },
    async addressChangeHandler(addresses: string[]) {
      if (addresses[0]) this.wallet = addresses[0]
      ;((window as any).ethereum as any).once(
        'accountsChanged',
        this.addressChangeHandler
      )
    },
  },
})
