import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

import { ethers } from 'hardhat'
import { Minting, PenguinNFT } from '../../typechain'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments } = hre
  const { deploy } = deployments
  const [deployer] = await ethers.getSigners()
  console.log('Setup nft')

  const nft = (await ethers.getContract('PenguinNFT')) as PenguinNFT
  const minting = (await ethers.getContract('Minting')) as Minting
  const minter_role = await nft.MINTER_ROLE()

  if (!(await nft.hasRole(minter_role, minting.address))) {
    const tx = await nft.setMinter(minting.address)
    await tx.wait()
  }

  console.log('Done')
}

export default func
func.tags = ['Setup nft']
func.dependencies = ['NFT']
func.runAtTheEnd = true
func.skip = async (hre) => true
