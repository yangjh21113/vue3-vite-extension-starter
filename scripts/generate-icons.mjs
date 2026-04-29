import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const svgPath = path.join(import.meta.dirname, 'public/images/icon.svg')
const outDir = path.join(import.meta.dirname, 'public/images')
const sizes = [16, 32, 48, 128]

const svg = fs.readFileSync(svgPath, 'utf-8')

for (const size of sizes) {
  await sharp(Buffer.from(svg))
    .resize(size, size)
    .png()
    .toFile(path.join(outDir, `icon${size}.png`))
  console.log(`Generated icon${size}.png`)
}

console.log('All icons generated successfully')
