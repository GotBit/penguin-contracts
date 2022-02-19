import fs from 'fs'
import path from 'path'
import { URLS, Hashes } from './pin_files'

const URIS = 'uris.json'
const ATTR = 'csvjson.json'

interface Attribute {
  trait_type: string
  value: string
}

interface URI {
  name: string
  image: string
  description: string
  attributes?: Attribute[]
}
function capitalizeFirstLetter(str: string): string {
  return str[0].toUpperCase() + str.slice(1)
}

function generateAttributes(attr: { [key: string]: string }): Attribute[] {
  const attrs = [] as Attribute[]
  for (const key of Object.keys(attr)) {
    if (key === 'ID' || key === 'IMAGE') continue
    attrs.push({
      trait_type: capitalizeFirstLetter(key.toLowerCase()),
      value: attr[key],
    })
  }
  return attrs
}

function main() {
  console.log('Creating uris')

  const urlsPath = path.join(__dirname, '..', URLS)
  const urisPath = path.join(__dirname, '..', URIS)
  const attrPath = path.join(__dirname, '..', ATTR)

  const urls = JSON.parse(fs.readFileSync(urlsPath).toString()) as Hashes
  const uris = {} as { [key: string]: URI }
  const attrs = JSON.parse(fs.readFileSync(attrPath).toString())

  for (const name of Object.keys(urls)) {
    let _attr = {}
    for (const attr of attrs)
      if (attr.IMAGE === name) {
        _attr = attr
        break
      }

    console.log('For', name)
    console.log(_attr)

    const key = name.split('.')[0]
    uris[key] = {
      name: 'Genesis Penguins',
      description:
        '10,000 uniquely generated Genesis Penguins living on the Ethereum Blockchain.',
      image: urls[name],
      attributes: generateAttributes(_attr),
    }
  }
  fs.writeFileSync(urisPath, JSON.stringify(uris, null, 2))
  console.log('Done')
}

if (require.main === module) {
  main()
}
