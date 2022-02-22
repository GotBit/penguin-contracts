import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import chainlink from '../../chainlink.json'

import { ethers } from 'hardhat'
import { Minting, PenguinNFT } from '../../typechain'

const routers = {
  rinkeby: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  bsc_testnet: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
  eth_mainnet: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
} as any

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments } = hre
  const { deploy } = deployments
  const [deployer] = await ethers.getSigners()

  const nft = (await ethers.getContract('PenguinNFT')) as PenguinNFT
  const chain = (chainlink as any)[hre.network.name]
  await deploy('Minting', {
    from: deployer.address,
    args: [
      nft.address,
      routers[hre.network.name],
      chain.VRF,
      chain.LINK,
      chain.key,
      chain.fee,
    ],
    log: true,
  })
}
export default func
func.tags = ['Minting']
func.dependencies = ['NFT']
func.skip = async (hre) => !hre.network.tags.main
