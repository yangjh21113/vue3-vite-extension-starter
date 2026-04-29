import { defineConfig } from 'vite'
import { createConfig } from './vite.base.config.js'
import { CRX_POPUP_OUTFIR } from './globalConfig.js'

export default defineConfig(
  createConfig({
    outDir: CRX_POPUP_OUTFIR,
    input: 'index.html',
    port: 3000,
    open: '/',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1/',
        changeOrigin: true
      }
    }
  })
)
