import fs from 'fs'
import path from 'path'
import pinataSDK from '@pinata/sdk'
import secrets from './.secrets'

const pinata = pinataSDK(secrets.API_KEY, secrets.API_SECRET)
const pinataURL = 'https://gateway.pinata.cloud/ipfs/'

const MAX_PATCH = 3

const FILES_FOLDER = 'files-test'
const HASHES = 'hashes.json'
const URLS = 'urls.json'

async function pinFile(fileStream: fs.ReadStream): Promise<string | null> {
  try {
    const result = await pinata.pinFileToIPFS(fileStream)
    return result.IpfsHash
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

async function loadPatch(
  promises: Promise<string | null>[],
  fileNames: string[],
  hashes: Hashes
): Promise<Hashes> {
  console.log('Loading patch...')
  const resolves = await Promise.all(promises)

  for (let i = 0; i < resolves.length; i++) {
    const hash = resolves[i]
    if (hash) hashes[fileNames[i]] = hash
    else console.log('Problem!', fileNames[i])
  }

  return hashes
}

function saveURLs(hashes: Hashes) {
  const urls = {} as Hashes
  for (const key of Object.keys(hashes)) {
    urls[key] = pinataURL + hashes[key]
  }
  const urlsPath = path.join(__dirname, '..', URLS)
  fs.writeFileSync(urlsPath, JSON.stringify(urls, null, 2))
}

async function main() {
  let hashes = loadHashes()

  const filesPath = path.join(__dirname, '..', FILES_FOLDER)
  const files = fs.readdirSync(filesPath)

  let promises = []
  let fileNames = []

  for (const file of files) {
    if (Object.keys(hashes).includes(file)) continue
    console.log('Add to patch', file)

    const fileStream = fs.createReadStream(path.join(filesPath, file))
    promises.push(pinFile(fileStream))
    fileNames.push(file)

    if (promises.length >= MAX_PATCH) {
      hashes = await loadPatch(promises, fileNames, hashes)

      saveHashes(hashes)
      promises = []
      fileNames = []

      console.log('Next patch')
    }
  }

  // resolve promises that left
  if (promises.length > 0) {
    hashes = await loadPatch(promises, fileNames, hashes)
    saveHashes(hashes)
    promises = []
    fileNames = []

    console.log('Next patch')
  }

  saveHashes(hashes)
  saveURLs(hashes)
}

main()
