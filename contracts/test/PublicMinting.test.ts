import { expect } from 'chai'
import { ethers, deployments, fork } from 'hardhat'
import { Minting, PenguinNFT, PublicMinting } from '../typechain'

const setup = deployments.createFixture(async () => {
  await deployments.fixture()
  return {
    nft: (await ethers.getContract('PenguinNFT')) as PenguinNFT,
    publicMinting: (await ethers.getContract('PublicMinting')) as PublicMinting,
    minting: (await ethers.getContract('Minting')) as Minting,
  }
})

describe('PublicMinting', () => {
  describe('Owner functions', () => {
    it('should change max quantity', async () => {
      const { publicMinting } = await setup()
      const [, user] = await ethers.getSigners()

      const owner = await fork.impersonateAccount(await publicMinting.owner())

      const newMaxQuantity = 1
      await publicMinting.connect(owner).setMaxQuantity(newMaxQuantity)
      expect(await publicMinting.maxQuantity()).to.be.eq(newMaxQuantity)

      await expect(publicMinting.connect(user).setMaxQuantity(newMaxQuantity)).reverted
    })
    it('should change duration', async () => {
      const { publicMinting } = await setup()
      const [, user] = await ethers.getSigners()

      const owner = await fork.impersonateAccount(await publicMinting.owner())

      const newDuration = 1
      await publicMinting.connect(owner).setDuration(newDuration)
      expect(await publicMinting.duration()).to.be.eq(newDuration)

      await expect(publicMinting.connect(user).setDuration(newDuration)).reverted
    })
    it('should start', async () => {
      const { publicMinting } = await setup()
      const [, user] = await ethers.getSigners()

      const owner = await fork.impersonateAccount(await publicMinting.owner())

      await publicMinting.connect(owner).start()
      expect(await publicMinting.startTimestamp()).to.be.gt(0)

      await expect(publicMinting.connect(user).start()).reverted
    })
    it('should stop ', async () => {})
  })
})
