import { resolve } from 'path'
import fs from 'fs'
import {
  copyDirectory,
  deleteDirectory,
  CRX_OUTDIR,
  CRX_CONTENT_OUTDIR,
  CRX_BACKGROUND_OUTDIR,
  CRX_POPUP_OUTFIR,
  CRX_SIDEPANEL_OUTDIR,
  CRX_NEWTAB_OUTDIR,
  CRX_OPTIONS_OUTDIR
} from './globalConfig.js'

const outDir = resolve(process.cwd(), CRX_OUTDIR)

// Clean build dir before single build to avoid stale artifacts
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true })
}
fs.mkdirSync(outDir, { recursive: true })

const curType = process.argv[2]

const copyMap = {
  content: CRX_CONTENT_OUTDIR,
  background: CRX_BACKGROUND_OUTDIR,
  sidePanel: CRX_SIDEPANEL_OUTDIR,
  popup: CRX_POPUP_OUTFIR,
  newtab: CRX_NEWTAB_OUTDIR,
  options: CRX_OPTIONS_OUTDIR
}

const srcDir = copyMap[curType]
if (srcDir) {
  copyDirectory(resolve(process.cwd(), srcDir), outDir)
  deleteDirectory(resolve(process.cwd(), srcDir))
}
