import fs from 'fs'
import path from 'path'

const packagePath = path.join(import.meta.dirname, '../package.json')
const manifestPath = path.join(import.meta.dirname, '../public/manifest.json')

const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))

if (manifest.version !== pkg.version) {
  manifest.version = pkg.version
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
  console.log(`Manifest version updated to ${pkg.version}`)
} else {
  console.log(`Manifest version already up to date (${pkg.version})`)
}
