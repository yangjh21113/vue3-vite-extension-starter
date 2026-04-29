import { defineConfig } from 'vite'
import { createConfig } from './vite.base.config.js'
import { CRX_BACKGROUND_OUTDIR } from './globalConfig.js'

export default defineConfig(
  createConfig({
    outDir: CRX_BACKGROUND_OUTDIR,
    entry: 'src/background/index.ts',
    format: 'es',
    fileName: () => 'background.js'
  })
)
