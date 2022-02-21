import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import chainlink from '../../chainlink.json'

import { ethers } from 'hardhat'
import { Minting, PenguinNFT } from '../../typechain'

const chain = chainlink.bsc_testnet

const router = '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments } = hre
  const { deploy } = deployments
  const [deployer, _, bank] = await ethers.getSigners()

  const nft = (await ethers.getContract('PenguinNFT')) as PenguinNFT

  await deploy('Minting', {
    from: deployer.address,
    args: [nft.address, router, chain.VRF, chain.LINK, chain.key, chain.fee],
    log: true,
  })
}
export default func
func.tags = ['Minting']
func.dependencies = ['NFT']
func.skip = async (hre) => !hre.network.tags.test
