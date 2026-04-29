import { defineConfig } from 'vite'
import { createConfig } from './vite.base.config.js'
import { CRX_NEWTAB_OUTDIR } from './globalConfig.js'

export default defineConfig(
  createConfig({
    outDir: CRX_NEWTAB_OUTDIR,
    input: 'newtab.html',
    open: '/newtab.html'
  })
)
