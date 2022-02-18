import fs from 'fs'
import path from 'path'
import { URLS, Hashes } from './pin_files'

const URIS = 'uris.json'

interface URI {
  name: string
  image: string
  description: string
}

function main() {
  console.log('Creating uris')

  const urlsPath = path.join(__dirname, '..', URLS)
  const urisPath = path.join(__dirname, '..', URIS)

  const urls = JSON.parse(fs.readFileSync(urlsPath).toString()) as Hashes
  const uris = {} as { [key: string]: URI }

  for (const name of Object.keys(urls)) {
    console.log('For', name)
    const key = name.split('.')[0]
    uris[key] = {
      name: 'Test',
      description: 'Test description',
      image: urls[name],
    }
  }
  fs.writeFileSync(urisPath, JSON.stringify(uris, null, 2))
  console.log('Done')
}

if (require.main === module) {
  main()
}
