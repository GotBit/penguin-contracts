import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

import { ethers } from 'hardhat'
import { Minting, PenguinNFT } from '../../typechain'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments } = hre
  const { deploy } = deployments
  const [deployer, _, bank] = await ethers.getSigners()

  const nft = (await ethers.getContract('PenguinNFT')) as PenguinNFT

  await deploy('Minting', {
    from: deployer.address,
    args: [nft.address],
    log: true,
  })
}
export default func
func.tags = ['Minting']
func.dependencies = ['NFT']
func.skip = async (hre) => !hre.network.tags.test
