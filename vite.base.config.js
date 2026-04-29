import { mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const rootDir = import.meta.dirname

export function createConfig(options = {}) {
  const { outDir, input, entry, format, name, fileName, cssName, port, open, proxy } = options

  const base = {
    resolve: {
      alias: {
        '@': rootDir + '/src'
      }
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [rootDir + '/src/common/assets/svgs']
      })
    ]
  }

  // HTML multi-page mode
  if (input) {
    return mergeConfig(base, {
      build: {
        outDir,
        rollupOptions: {
          input: rootDir + '/' + input
        }
      },
      server: { port, open, proxy }
    })
  }

  // Library mode (content script, background)
  const libConfig = {
    build: {
      outDir,
      lib: {
        entry: rootDir + '/' + entry,
        formats: [format || 'iife'],
        ...(name ? { name } : {}),
        ...(fileName ? { fileName } : {})
      }
    }
  }

  if (cssName) {
    libConfig.build.rollupOptions = {
      output: {
        assetFileNames: () => cssName
      }
    }
  }

  return mergeConfig(base, libConfig)
}
