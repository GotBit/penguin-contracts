import { HardhatUserConfig, task } from 'hardhat/config'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-gas-reporter'
import 'solidity-coverage'
import 'hardhat-contract-sizer'
import 'hardhat-deploy'

import './extensions/time'
import './extensions/fork'
import './extensions/bignumber'
import './extensions/string'

import secrets from './.secrets'
import { node } from './utils/node'

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()
  for (const account of accounts) {
    console.log(account.address)
  }
})

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.11',
      },
      {
        version: '0.6.6',
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      tags: ['fork'],
      forking: {
        url: node('eth_mainnet').rpc,
      },
    },
    bsc_mainnet: {
      url: node('bsc_mainnet').rpc,
      accounts: secrets.bsc_mainnet.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.bsc_mainnet.api,
        },
      },
    },
    bsc_testnet: {
      url: node('bsc_testnet').rpc,
      accounts: secrets.bsc_testnet.keys,
      tags: ['test'],
      verify: {
        etherscan: {
          apiKey: secrets.bsc_testnet.api,
        },
      },
    },
    rinkeby: {
      url: node('rinkeby').rpc,
      accounts: secrets.rinkeby.keys,
      tags: ['test'],
      verify: {
        etherscan: {
          apiKey: secrets.rinkeby.api,
        },
      },
    },
    eth_mainnet: {
      url: node('eth_mainnet').rpc,
      accounts: secrets.eth_mainnet.keys,
      tags: ['main'],
      verify: {
        etherscan: {
          apiKey: secrets.eth_mainnet.api,
        },
      },
    },
  },
  gasReporter: {
    enabled: true,
    currency: 'ETH',
    gasPrice: 60,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
  },
}

export default config
