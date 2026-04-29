import { resolve } from 'path'
import { build } from 'vite'
import {
  copyDirectory,
  deleteDirectory,
  CRX_POPUP_OUTFIR,
  CRX_OUTDIR,
  CRX_CONTENT_OUTDIR,
  CRX_BACKGROUND_OUTDIR,
  CRX_NEWTAB_OUTDIR,
  CRX_SIDEPANEL_OUTDIR,
  CRX_OPTIONS_OUTDIR
} from './globalConfig.js'

const buildConfigs = [
  { config: 'vite.content.config.js', label: 'content' },
  { config: 'vite.background.config.js', label: 'background' },
  { config: 'vite.popup.config.js', label: 'popup' },
  { config: 'vite.newtab.config.js', label: 'newtab' },
  { config: 'vite.sidePanel.config.js', label: 'sidePanel' },
  { config: 'vite.options.config.js', label: 'options' }
]

const buildOne = async ({ config, label }) => {
  await build({ configFile: config })
  process.stdout.write(`--------${label} 打包完毕--------\n`)
}

const afterBuildFun = () => {
  const outDir = resolve(process.cwd(), CRX_OUTDIR)

  for (const dir of [
    CRX_POPUP_OUTFIR,
    CRX_CONTENT_OUTDIR,
    CRX_BACKGROUND_OUTDIR,
    CRX_SIDEPANEL_OUTDIR,
    CRX_NEWTAB_OUTDIR,
    CRX_OPTIONS_OUTDIR
  ]) {
    copyDirectory(resolve(process.cwd(), dir), outDir)
    deleteDirectory(resolve(process.cwd(), dir))
  }
}

const buildAllAsync = async () => {
  process.stdout.write('--------****开始异步打包****--------\n')
  await Promise.all(buildConfigs.map(buildOne))
  process.stdout.write('--------开始整理文件夹--------\n')
  afterBuildFun()
  process.stdout.write('--------整理完毕--------\n')
}

const buildAllSync = async () => {
  process.stdout.write('--------****开始同步打包****--------\n')
  for (const item of buildConfigs) {
    await buildOne(item)
  }
  afterBuildFun()
}

const isSync = process.argv[2] === 'sync'

const start = async () => {
  const startTime = Date.now()
  try {
    if (isSync) {
      await buildAllSync()
    } else {
      await buildAllAsync()
    }
    process.stdout.write(
      `--------打包完成，耗时：${((Date.now() - startTime) / 1000).toFixed(2)}s--------\n`
    )
  } catch (err) {
    process.stderr.write(`--------打包失败：${err.message}--------\n`)
    process.exit(1)
  }
}

start()
