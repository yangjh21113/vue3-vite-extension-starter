import { defineConfig } from 'vite'
import { createConfig } from './vite.base.config.js'
import { CRX_CONTENT_OUTDIR } from './globalConfig.js'

export default defineConfig(
  createConfig({
    outDir: CRX_CONTENT_OUTDIR,
    entry: 'src/content/index.ts',
    format: 'iife',
    name: 'ContentScript',
    fileName: () => 'content.js',
    cssName: 'content.css',
    open: '/content.html'
  })
)
