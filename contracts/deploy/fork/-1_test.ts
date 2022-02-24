import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

import { ethers, fork } from 'hardhat'
import { PublicMinting } from '../../typechain'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments } = hre
  const { deploy } = deployments
  const [deployer] = await ethers.getSigners()

  const nft = await ethers.getContract('PenguinNFT')
  const publicMinting = (await ethers.getContract('PublicMinting')) as PublicMinting

  const owner = await fork.impersonateAccount(await nft.owner())
  await fork.setBalance(owner.address, ethers.constants.WeiPerEther.mul(100))

  const users = [
    '0xe75c49e27b92745e6139aeb54fb821f961c64e70',
    '0x5ee42438d0d8fc399c94ef3543665e993e847b49',
    '0xefa8d282426f33d31d2e8d510480e26c7ef9a9bf',
    '0xc457175d731b1d1b2813a4fe3532468ece2ace2a',
    '0xc5d32931d52b115abb6d9fb4a678032f69e026fb',
    '0xc3785384a1237c424719abedde75c8f96d5ef15a',
    '0x9368a60bd4e7fdc17bc803ea94b19f0665be9b30',
    '0xedf05534554e3f104b4b6d486f53f05183838e43',
    '0x06488c021b44b2cb1e6f134167b1a56297edd7c1',
    '0xb95d9a04683188dc2b04a5529e5ad55f7d88f096',
    '0x2dccbffb389576d2da4e9b71a9016e213bbd5ec7',
    '0x22c1d82e0d3ba8087c2dfad766befe511184c8a3',
    '0x180b26c707fa474f740f28e15b595e1f19d3d5b8',
    '0xc46bcc76e4be53a2e8b805b2e10d32c6d51ca7f5',
    '0xd4c4a4b11f80dc75ee534c0da478cfe388b5baad',
    '0x74eef621d080c31cd76a8dc9ae850d72353b9ca6',
    '0x0e71a0516455835ee197826084ea300a4835f4a4',
    '0x6fdfd586d03cda0fffcfdf49a16ec7d4453fc3b9',
    '0x0ef8582381874780e4cdbbeaef8bfa1f9cd34dae',
    '0xda96f68a117b223c7ee50f44ffe28f927d29d82b',
  ]
  const quantities = [2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 4, 4]

  const tx1 = await publicMinting.connect(owner).stop()
  await tx1.wait()

  const balanceBefore = await owner.getBalance()
  const tx = await publicMinting.connect(owner).mintMass(quantities, users)
  const r = await tx.wait()
  const balanceAfter = await owner.getBalance()

  console.log({ tx })
  console.log({ r })

  console.log('gas used', r.gasUsed)
  console.log('cumgas', r.cumulativeGasUsed)
  console.log({ balanceAfter })
  console.log({ balanceBefore })
}
export default func
func.tags = ['']
func.skip = async (hre) => !hre.network.tags.test_fork
