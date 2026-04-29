import { defineConfig } from 'vite'
import { createConfig } from './vite.base.config.js'
import { CRX_SIDEPANEL_OUTDIR } from './globalConfig.js'

export default defineConfig(
  createConfig({
    outDir: CRX_SIDEPANEL_OUTDIR,
    input: 'sidePanel.html',
    open: '/sidePanel.html'
  })
)
