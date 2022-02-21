import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { expect } from 'chai'
import { BigNumberish, BigNumber, Signer, Wallet } from 'ethers'
import { ethers, deployments, time, network } from 'hardhat'
import utils, { calculateRoot, generateProof } from '../utils'
import { Minting, Minting__factory, PenguinNFT, PenguinNFT__factory } from '../typechain'

const ONE_DAY = 60 * 60 * 24

const usersAmount = 2

function hash(address: string): string {
  return ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(['address'], [address])
  )
}

describe('', async function () {
  let Minting: Minting__factory
  let minting: Minting
  let Token: PenguinNFT__factory
  let token: PenguinNFT
  let owner: SignerWithAddress
  let usersOG: Wallet[]
  let usersWhitelist: Wallet[]
  let defaultUser: SignerWithAddress
  let ownerAddress: string
  let rootOG: string
  let proofOG: any[]
  let leavesOG: string[]
  let rootWhitelist: string
  let proofWhitelist: any[]
  let leavesWhitelist: string[]

  this.beforeEach('deploying', async function () {
    ;[owner, defaultUser] = await ethers.getSigners()

    usersOG = []
    leavesOG = []
    proofOG = []
    usersWhitelist = []
    leavesWhitelist = []
    proofWhitelist = []
    for (let i = 0; i < usersAmount; i++) {
      // let signer: SignerWithAddress
      // ;[signer] = await ethers.getSigners()
      // usersOG.push(signer)
      let wallet = ethers.Wallet.createRandom()
      usersOG.push(wallet)
      const tx = await defaultUser.sendTransaction({
        to: wallet.address,
        value: ethers.utils.parseEther('0.5'),
      })
      await tx.wait()
      console.log(await wallet.connect(ethers.provider).getBalance())
      console.log('wallet')
    }

    for (let i = 0; i < usersAmount; i++) {
      // let signer: SignerWithAddress
      // ;[signer] = await ethers.getSigners()
      // usersWhitelist.push(signer)
      let wallet = ethers.Wallet.createRandom()
      usersWhitelist.push(wallet)
      const tx = await defaultUser.sendTransaction({
        to: wallet.address,
        value: ethers.utils.parseEther('0.5'),
      })

      await tx.wait()
      console.log(await defaultUser.getBalance())
      console.log('wallet')
    }
    for (const user of usersOG) {
      leavesOG.push(hash(user.address))
    }
    for (const user of usersWhitelist) {
      leavesWhitelist.push(hash(user.address))
    }

    rootOG = utils.calculateRoot(leavesOG)
    for (const user of usersOG) {
      proofOG.push(utils.generateProof(leavesOG, hash(user.address)))
    }
    console.log(leavesOG, 'LEAVES OG')
    console.log(rootOG, 'ROOT OG')
    console.log(proofOG, 'PROOF OG')

    rootWhitelist = utils.calculateRoot(leavesWhitelist)
    for (const user of usersWhitelist) {
      proofWhitelist.push(utils.generateProof(leavesWhitelist, hash(user.address)))
    }
    console.log(leavesWhitelist, 'LEAVES WHITELIST')
    console.log(rootWhitelist, 'ROOT WHITELIST')
    console.log(proofWhitelist, 'PROOF WHITELIST')

    ownerAddress = await owner.getAddress()

    Token = await ethers.getContractFactory('PenguinNFT')
    token = await Token.deploy(10000)

    // await token.mint(ethers.constants.WeiPerEther.mul(1000_000_000))

    Minting = await ethers.getContractFactory('Minting')
    minting = await Minting.deploy(token.address)

    // await token.approve(minting.address, ethers.constants.MaxUint256)

    minting.saveRootOg(rootOG)
    minting.saveRootWhitelist(rootWhitelist)
    await token.setMinter(minting.address)
  })
  it('zero proof', async function () {
    await minting.startMinting()
    console.log('mint started')

    const leafsOG = [hash(defaultUser.address)]
    const proofOG = generateProof(leafsOG, hash(defaultUser.address))
    const rootOG = calculateRoot(leafsOG)
    console.log(await minting.verify(proofOG, rootOG, hash(defaultUser.address)))
    await minting.saveRootOg(rootOG)
    console.log('before', await minting.minted(defaultUser.address))
    await minting.connect(defaultUser).mint(6, proofOG)

    console.log('after', await minting.minted(defaultUser.address))
  })

  it.only('mint first day', async function () {
    //before prepare
    for (let i = 0; i < usersAmount; i++) {
      await expect(
        minting
          .connect(usersWhitelist[i].connect(ethers.provider))
          .mint(6, proofWhitelist[i])
      ).to.be.revertedWith('Mint have not started yet')
    }
    //prepare
    await minting.startMinting()
    console.log('mint started')

    //default user
    for (let i = 0; i < usersAmount; i++) {
      await expect(minting.connect(defaultUser).mint(8, [])).to.be.revertedWith(
        'You cant mint the nft right now'
      )

      //OG
      expect(
        await minting.connect(usersOG[i].connect(ethers.provider)).mint(8, proofOG[0])
      )
      await expect(
        minting.connect(usersOG[i].connect(ethers.provider)).mint(8, proofOG[0])
      ).to.be.revertedWith('You cant mint zero')

      //Whitelist
      expect(
        await minting
          .connect(usersWhitelist[i].connect(ethers.provider))
          .mint(6, proofWhitelist[i])
      )
      await expect(
        minting
          .connect(usersWhitelist[i].connect(ethers.provider))
          .mint(8, proofWhitelist[i])
      ).to.be.revertedWith('You cant mint zero')
    }

    // Minted amount
    const mintedOG = await minting.minted(usersOG[0].address)
    const mintedWhitelist = await minting.minted(usersWhitelist[0].address)
    console.log(
      mintedOG.toString(),
      mintedWhitelist.toString(),
      'minted OG and Whitelist'
    )
    // finish
    await minting.stopMinting()
  })
  // it.only('mint after first day', async function () {
  //   //before prepare
  //   expect(minting.connect(userWhitelist1).mint(6, proofWhitelist)).to.be.revertedWith(
  //     'Mint have not started yet'
  //   )
  //   console.log(proofOG, 'PROOF OG')
  //   //prepare
  //   await minting.startMinting()
  //   console.log('mint started')
  //   await time.increaseTime(ONE_DAY)
  //   console.log('day skipped')
  //   // default user
  //   expect(minting.connect(defaultUser).mint(8, proofOG))
  //   // OG
  //   expect(minting.connect(userOG1).mint(10, proofOG))
  //   expect(minting.connect(userOG1).mint(20, proofOG))
  //   expect(minting.connect(userOG1).mint(40, proofOG))
  //   // Whitelist
  //   expect(minting.connect(userWhitelist1).mint(10, proofOG))
  //   expect(minting.connect(userWhitelist1).mint(20, proofOG))
  //   expect(minting.connect(userWhitelist1).mint(40, proofOG))
  //   //Minted amount
  //   const mintedOG = await minting.minted(userOG1.address)
  //   const mintedWhitelist = await minting.minted(userWhitelist1.address)
  //   console.log(
  //     mintedOG.toString(),
  //     mintedWhitelist.toString(),
  //     'minted OG and Whitelist'
  //   )
  //   //finish
  //   await minting.stopMinting()
  // })
  // it('7 days skip', async function () {
  //   //before prepare
  //   expect(minting.connect(userWhitelist1).mint(6, proofWhitelist)).to.be.revertedWith(
  //     'Mint have not started yet'
  //   )
  //   //prepare
  //   await minting.startMinting()
  //   console.log('mint started')
  //   await time.increaseTime(7 * ONE_DAY)
  //   console.log('day skipped')
  //   //default user
  //   expect(minting.connect(defaultUser).mint(8, [])).to.be.revertedWith(
  //     'Mint have not started yet'
  //   )
  //   //finish
  //   await minting.stopMinting()
  // })
  // it('Penguin NFT', async function () {
  //   //mint
  //   await expect(token.connect(userWhitelist1).mint(userOG1.address, 6)).to.be.reverted
  //   //set minter
  //   expect(await token.setMinter(userOG1.address))
  //   expect(await token.connect(userOG1).mint(userOG1.address, 6))
  //   //revoke minter
  //   expect(await token.revokeMinter(userOG1.address))
  //   await expect(token.connect(userOG1).mint(userOG1.address, 6)).to.be.reverted
  //   expect(token.setURI('userOG.address'))
  // })
})
