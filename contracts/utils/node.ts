import secrets from '../.secrets'

interface Node {
  name: string
  rpc: string
  chainId: number
}

export function node(name: string): Node {
  switch (name) {
    case 'bsc_mainnet':
      return {
        name,
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/bsc/mainnet`,
        chainId: 56,
      }
    case 'bsc_testnet':
      return {
        name,
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/bsc/testnet`,
        chainId: 97,
      }
    case 'rinkeby':
      return {
        name,
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/eth/rinkeby`,
        chainId: 4,
      }
    case 'eth_mainnet':
      return {
        name,
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/eth/mainnet`,
        chainId: 1,
      }
  }
  return {} as Node
}
