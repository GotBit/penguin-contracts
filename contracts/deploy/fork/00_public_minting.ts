import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

import { ethers } from 'hardhat'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments } = hre
  const { deploy } = deployments
  const [deployer] = await ethers.getSigners()

  const nft = await ethers.getContract('PenguinNFT')
  const minting = await ethers.getContract('Minting')

  await deploy('PublicMinting', {
    from: deployer.address,
    args: [nft.address, minting.address],
    log: true,
  })
}
export default func
func.tags = ['PublicMinting']
func.skip = async (hre) => !hre.network.tags.fork
