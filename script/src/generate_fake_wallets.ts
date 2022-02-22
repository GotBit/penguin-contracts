import { ethers } from 'ethers'
import fs from 'fs'
import path from 'path'

function main() {
  const l = []
  for (let i = 0; i < 1000; i++) {
    l.push(ethers.Wallet.createRandom().address)
  }
  console.log(l)
  fs.writeFileSync(path.join(__dirname, '..', 'walletsOG.json'), JSON.stringify(l))
}

main()
