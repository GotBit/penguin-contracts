import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { expect } from 'chai'
import { BigNumberish, BigNumber, Signer } from 'ethers'
import { ethers, deployments, time } from 'hardhat'
import { Minting, Minting__factory, Penguin, Penguin__factory } from '../typechain'

const ONE_DAY = 60 * 60 * 24

describe('', async function () {
  let Minting: Minting__factory
  let minting: Minting
  let Token: Penguin__factory
  let token: Penguin
  let owner: SignerWithAddress
  let userOG: SignerWithAddress
  let userWhitelist: SignerWithAddress
  let defaultUser: SignerWithAddress
  let ownerAddress: string

  this.beforeEach('deploying', async function () {
    ;[owner, userOG, userWhitelist, defaultUser] = await ethers.getSigners()
    ownerAddress = await owner.getAddress()

    Token = await ethers.getContractFactory('Penguin')
    token = await Token.deploy()

    // await token.mint(ethers.constants.WeiPerEther.mul(1000_000_000))

    Minting = await ethers.getContractFactory('Minting')
    minting = await Minting.deploy(token.address)

    // await token.approve(minting.address, ethers.constants.MaxUint256)
    await token.setMinter(minting.address)
    await minting.setOG(userOG.address)
    await minting.setWhitelist(userWhitelist.address)
    console.log('user OG set')
    console.log('user Whitelist set')
  })
  it('mint first day', async function () {
    //before prepare
    expect(minting.connect(userWhitelist).mint(6, [])).to.be.revertedWith(
      'Mint have not started yet'
    )
    //prepare
    await minting.startMinting()
    console.log('mint started')
    const verifyOG = await minting.connect(userOG).verifyOG(userOG.address, [])
    console.log(verifyOG, userOG.address, 'userOG is OG')
    const verifyWhitelist = await minting
      .connect(userOG)
      .verifyWhitelist(userWhitelist.address, [])
    console.log(verifyWhitelist, userWhitelist.address, 'userWhitelist is whitelist')
    //default user
    expect(minting.connect(defaultUser).mint(8, [])).to.be.revertedWith(
      'You cant mint the nft right now'
    )
    //OG
    expect(minting.connect(userOG).mint(8, []))
    expect(minting.connect(userOG).mint(8, [])).to.be.revertedWith('You cant mint zero')
    //Whitelist
    expect(minting.connect(userWhitelist).mint(6, []))
    expect(minting.connect(userWhitelist).mint(8, [])).to.be.revertedWith(
      'You cant mint zero'
    )
    // Minted amount
    const mintedOG = await minting.minted(userOG.address)
    const mintedWhitelist = await minting.minted(userWhitelist.address)
    console.log(
      mintedOG.toString(),
      mintedWhitelist.toString(),
      'minted OG and Whitelist'
    )
    // finish
    await minting.stopMinting()
  })
  it('mint after first day', async function () {
    //before prepare
    expect(minting.connect(userWhitelist).mint(6, [])).to.be.revertedWith(
      'Mint have not started yet'
    )
    //prepare
    await minting.startMinting()
    console.log('mint started')
    await time.increaseTime(ONE_DAY)
    console.log('day skipped')
    const verifyOG = await minting.connect(userOG).verifyOG(userOG.address, [])
    console.log(verifyOG, userOG.address, 'userOG is OG')
    const verifyWhitelist = await minting
      .connect(userOG)
      .verifyWhitelist(userWhitelist.address, [])
    console.log(verifyWhitelist, userWhitelist.address, 'userWhitelist is whitelist')
    //default user
    expect(await minting.connect(defaultUser).mint(8, []))
    //OG
    expect(await minting.connect(userOG).mint(10, []))
    expect(await minting.connect(userOG).mint(20, []))
    expect(await minting.connect(userOG).mint(40, []))
    //Whitelist
    expect(await minting.connect(userWhitelist).mint(6, []))
    expect(minting.connect(userOG).mint(8, [])).to.be.revertedWith('You cant mint zero')
    //Minted amount
    const mintedOG = await minting.minted(userOG.address)
    const mintedWhitelist = await minting.minted(userWhitelist.address)
    console.log(
      mintedOG.toString(),
      mintedWhitelist.toString(),
      'minted OG and Whitelist'
    )
    //finish
    await minting.stopMinting()
  })
  it('7 days skip', async function () {
    //before prepare
    expect(minting.connect(userWhitelist).mint(6, [])).to.be.revertedWith(
      'Mint have not started yet'
    )
    //prepare
    await minting.startMinting()
    console.log('mint started')
    await time.increaseTime(7 * ONE_DAY)
    console.log('day skipped')
    const verifyOG = await minting.connect(userOG).verifyOG(userOG.address, [])
    console.log(verifyOG, userOG.address, 'userOG is OG')
    const verifyWhitelist = await minting
      .connect(userOG)
      .verifyWhitelist(userWhitelist.address, [])
    console.log(verifyWhitelist, userWhitelist.address, 'userWhitelist is whitelist')
    //default user
    expect(minting.connect(defaultUser).mint(8, [])).to.be.revertedWith(
      'Mint have not started yet'
    )
    //finish
    await minting.stopMinting()
  })
  it('Penguin NFT', async function () {
    //mint
    await expect(token.connect(userWhitelist).mint(userOG.address, 6)).to.be.reverted
    //set minter
    expect(await token.setMinter(userOG.address))
    expect(await token.connect(userOG).mint(userOG.address, 6))
    //revoke minter
    expect(await token.revokeMinter(userOG.address))
    await expect(token.connect(userOG).mint(userOG.address, 6)).to.be.reverted
    expect(token.setURI('userOG.address'))
  })
})
