import fs from 'fs'
import path from 'path'
import { URLS, Hashes } from './pin_files'

const URIS = 'uris.json'
const URIS_FOLDER = 'uris'

interface URI {
  name: string
  image: string
  description: string
}

function main() {
  console.log('Creating uris in files')

  const urisPath = path.join(__dirname, '..', URIS)

  const uris = JSON.parse(fs.readFileSync(urisPath).toString()) as Hashes
  for (const name of Object.keys(uris)) {
    const content = uris[name]
    const uriPath = path.join(__dirname, '..', URIS_FOLDER, name + '.json')
    fs.writeFileSync(uriPath, JSON.stringify(content, null, 2))
  }
  console.log('Done')
}

if (require.main === module) {
  main()
}
