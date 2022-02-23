import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber } from 'ethers'
import { extendEnvironment } from 'hardhat/config'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const IMPERSONATE_ACCOUNT = 'hardhat_impersonateAccount'
const SET_BALANCE = 'hardhat_setBalance'

export type Snapshot = string

export class ForkPlugin {
  hre: HardhatRuntimeEnvironment

  methods = {
    IMPERSONATE_ACCOUNT,
    SET_BALANCE,
  }

  constructor(hre: HardhatRuntimeEnvironment) {
    this.hre = hre
  }

  async impersonateAccount(address: string): Promise<SignerWithAddress> {
    await this.hre.network.provider.request({
      method: this.methods.IMPERSONATE_ACCOUNT,
      params: [address],
    })
    return this.hre.ethers.getSigner(address)
  }

  async setBalance(address: string, balance: BigNumber) {
    await this.hre.network.provider.request({
      method: this.methods.SET_BALANCE,
      params: [address, balance.toHexString().replace('0x0', '0x')],
    })
  }
}

declare module 'hardhat/types/runtime' {
  export interface HardhatRuntimeEnvironment {
    fork: ForkPlugin
  }
}

extendEnvironment((hre) => {
  hre.fork = new ForkPlugin(hre)
})
