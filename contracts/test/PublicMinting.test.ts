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
    it('should stop', async () => {
      const { publicMinting } = await setup()
      const [, user] = await ethers.getSigners()

      const owner = await fork.impersonateAccount(await publicMinting.owner())

      await publicMinting.connect(owner).stop()
      expect(await publicMinting.startTimestamp()).to.be.eq(0)

      await expect(publicMinting.connect(user).stop()).reverted
    })
    it('should mint to user', async () => {
      const { publicMinting, nft } = await setup()

      const users = []
      const quantities = []
      for (let i = 0; i < 10; i++) users.push(ethers.Wallet.createRandom().address)
      for (let i = 0; i < 10; i++) quantities.push(2)
      await publicMinting.mintMass(quantities, users)
      for (let i = 0; i < 10; i++) {
        expect(await nft.balanceOf(users[i])).to.be.eq(quantities[i])
      }
      await publicMinting.start()

      await expect(publicMinting.mintMass(quantities, users)).reverted
    })
  })
  describe('Minting', () => {
    it('should mint max quantity', async () => {
      const { publicMinting } = await setup()

      await publicMinting.start()
      const maxQuantity = await publicMinting.maxQuantity()

      let amountBefore = await publicMinting.amount()
      await publicMinting.mint(maxQuantity)
      let amountAfter = await publicMinting.amount()
      expect(amountBefore.sub(amountAfter)).to.be.eq(maxQuantity)

      amountBefore = await publicMinting.amount()
      await publicMinting.mint(maxQuantity.add(100))
      amountAfter = await publicMinting.amount()
      expect(amountBefore.sub(amountAfter)).to.be.eq(maxQuantity)

      amountBefore = await publicMinting.amount()
      await publicMinting.mint(1)
      amountAfter = await publicMinting.amount()
      expect(amountBefore.sub(amountAfter)).to.be.eq(1)
    })
    it('should mint all without problem', async () => {
      const { publicMinting } = await setup()
      const [, user] = await ethers.getSigners()

      await publicMinting.start()

      for (let i = 0; i < 5; i++) {
        await publicMinting.connect(user).mint(20)
      }
    })
  })
})
