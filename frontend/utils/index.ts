import { Contract, providers } from 'ethers'

import { node } from './node'
import { Chain } from '@/store/user'

import contracts from '@/settings/contracts.json'
import {
  AssistNFT,
  CocktailNFT,
  Dispenser,
  Lottery,
  Mixing,
  Multistaking,
  Staking,
  Token,
} from '@/typechain'

export async function safe(promise: Promise<any>) {
  try {
    const result = await promise
    return [result, null]
  } catch (error) {
    return [null, error]
  }
}

export function getChainRpc(chainId: Chain): string {
  const chainName = contracts[chainId][0].name
  return node(chainName).rpc
}

export function getChainName(chainId: Chain): string {
  const chainName = contracts[chainId][0].name
  return node(chainName).name
}

export function getChainHex(chainId: Chain): string {
  const chainName = contracts[chainId][0].name
  return '0x' + node(chainName).chainId.toString(16)
}

export function getChainScanner(chainId: Chain): string {
  const chainName = contracts[chainId][0].name
  return node(chainName).scanner
}

// TODO: add getChainDescription for metamask new network

export function useContracts(chainId: Chain) {
  const provider = new providers.JsonRpcProvider(getChainRpc(chainId))
  const contractsInfo = contracts[chainId][0].contracts

  return {
    /// TOKENS
    token: new Contract(
      contractsInfo['Vodka Token'].address,
      contractsInfo['Vodka Token'].abi,
      provider
    ) as Token,
    busd: new Contract(
      contractsInfo.BUSD.address,
      contractsInfo.BUSD.abi,
      provider
    ) as Token,
    usdt: new Contract(
      contractsInfo.USDT.address,
      contractsInfo.USDT.abi,
      provider
    ) as Token,
    wbnb: new Contract(
      contractsInfo.WBNB.address,
      contractsInfo.WBNB.abi,
      provider
    ) as Token,
    zlw: new Contract(
      contractsInfo.ZLW.address,
      contractsInfo.ZLW.abi,
      provider
    ) as Token,

    /// NFT
    nft: new Contract(
      contractsInfo.CocktailNFT.address,
      contractsInfo.CocktailNFT.abi,
      provider
    ) as CocktailNFT,
    assist: new Contract(
      contractsInfo.AssistNFT.address,
      contractsInfo.AssistNFT.abi,
      provider
    ) as AssistNFT,

    /// APPS
    mixing: new Contract(
      contractsInfo.Mixing.address,
      contractsInfo.Mixing.abi,
      provider
    ) as Mixing,
    staking: new Contract(
      contractsInfo.Staking.address,
      contractsInfo.Staking.abi,
      provider
    ) as Staking,
    multistaking: new Contract(
      contractsInfo.Multistaking.address,
      contractsInfo.Multistaking.abi,
      provider
    ) as Multistaking,
    lottery: new Contract(
      contractsInfo.Lottery.address,
      contractsInfo.Lottery.abi,
      provider
    ) as Lottery,
    dispenser: new Contract(
      contractsInfo.Dispenser.address,
      contractsInfo.Dispenser.abi,
      provider
    ) as Dispenser,
  }
}
