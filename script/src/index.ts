import fs from 'fs'
import path from 'path'
import pinataSDK from '@pinata/sdk'
import secrets from './.secrets'

const pinata = pinataSDK(secrets.API_KEY, secrets.API_SECRET)
const pinataURL = 'https://gateway.pinata.cloud/ipfs/'

const FILES_FOLDER = 'files'
const HASHES = 'hashes.json'

async function pinFile(fileStream: fs.ReadStream): Promise<string | null> {
  try {
    const result = await pinata.pinFileToIPFS(fileStream)
    return pinataURL + result.IpfsHash
  } catch (e) {
    console.error(e)
    return null
  }
}

interface Hashes {
  [name: string]: string
}

function loadHashes(): Hashes {
  const hashesPath = path.join(__dirname, '..', HASHES)
  const hashes = JSON.parse(fs.readFileSync(hashesPath).toString())
  return hashes
}

function saveHashes(hashes: Hashes) {
  const hashesPath = path.join(__dirname, '..', HASHES)
  fs.writeFileSync(hashesPath, JSON.stringify(hashes, null, 2))
}

async function main() {
  const hashes = loadHashes()

  const filesPath = path.join(__dirname, '..', FILES_FOLDER)
  const files = fs.readdirSync(filesPath)

  for (const file of files) {
    if (Object.keys(hashes).includes(file)) continue
    console.log('Loading...', file)

    const fileStream = fs.createReadStream(path.join(filesPath, file))
    const hash = await pinFile(fileStream)
    if (hash) hashes[file] = hash
    else console.log('Problem!', file)
  }

  saveHashes(hashes)
}

main()
