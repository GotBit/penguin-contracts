import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

import { ethers } from 'hardhat'
import { Minting, PenguinNFT } from '../../typechain'

const addressOG = '0x4E1602505a69Ad2De90Fe1CD65d198f60781Ad73'
const addressWhitelist = '0x1EEcF3334A3b9C07048Ed82717b2405A82F88569'

function hash(address: string): string {
  return ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(['address'], [address])
  )
}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments } = hre
  const { deploy } = deployments
  const [deployer, _, bank] = await ethers.getSigners()
  console.log('Setup minting')

  const minting = (await ethers.getContract('Minting')) as Minting
  if (
    (await minting.OGRoot()) !== hash(addressOG) ||
    (await minting.whitelistRoot()) !== hash(addressWhitelist)
  ) {
    const txOg = await minting.saveRootOg(hash(addressOG))
    const txWhite = await minting.saveRootWhitelist(hash(addressWhitelist))

    await Promise.all([txOg.wait(), txWhite.wait()])
  }

  console.log('Done')
}

export default func
func.tags = ['Setup minting']
func.dependencies = ['Minting']
func.runAtTheEnd = true
func.skip = async (hre) => !hre.network.tags.test
