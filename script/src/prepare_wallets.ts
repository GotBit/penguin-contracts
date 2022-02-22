import { ethers } from 'ethers'
import fs from 'fs'
import path from 'path'

const walletsRawFile = 'wallets_raw.txt'
const walletsFile = 'wallets.json'

function main() {
  const walletsRaw = fs
    .readFileSync(path.join(__dirname, '..', walletsRawFile))
    .toString()
  const wallets = {
    OG: [] as string[],
    whitelist: [] as string[],
  }
  for (const wallet of walletsRaw.split('\n')) {
    const spec = '\t'
    const address = wallet.split(spec)[0]
    const isOG = wallet.split(spec)[1] === '4'
    if (isOG) wallets.OG.push(address)
    else wallets.whitelist.push(address)
  }
  fs.writeFileSync(
    path.join(__dirname, '..', walletsFile),
    JSON.stringify(wallets, null, 2)
  )
}

main()
