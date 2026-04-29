import { defineConfig } from 'vite'
import { createConfig } from './vite.base.config.js'
import { CRX_OPTIONS_OUTDIR } from './globalConfig.js'

export default defineConfig(
  createConfig({
    outDir: CRX_OPTIONS_OUTDIR,
    input: 'options.html',
    open: '/options.html'
  })
)
