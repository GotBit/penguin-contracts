import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

import { ethers, fork } from 'hardhat'
import { PenguinNFT } from '../../typechain'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments } = hre
  const { deploy } = deployments
  const [deployer] = await ethers.getSigners()
  console.log('Setup nft')

  const nft = (await ethers.getContract('PenguinNFT')) as PenguinNFT
  const publicMinting = await ethers.getContract('PublicMinting')
  const minterRole = await nft.MINTER_ROLE()

  const owner = await fork.impersonateAccount(await nft.owner())
  await fork.setBalance(owner.address, ethers.constants.WeiPerEther.mul(100))

  if (!(await nft.hasRole(minterRole, publicMinting.address))) {
    const tx = await nft.connect(owner).setMinter(publicMinting.address)
    await tx.wait()
  }

  console.log('Done')
}

export default func
func.tags = ['Setup nft']
func.dependencies = ['PublicMinting']
func.runAtTheEnd = true
func.skip = async (hre) => !hre.network.tags.fork
