import fs from 'fs'
import path from 'path'

// Chrome Extension 最终 build 目录
export const CRX_OUTDIR = 'build'
// Chrome popup 最终 build 目录
export const CRX_POPUP_OUTFIR = '_build_popup'
// 临时 build content script 的目录
export const CRX_CONTENT_OUTDIR = '_build_content'
// 临时 build background script 的目录
export const CRX_BACKGROUND_OUTDIR = '_build_background'
// 临时 build sidePanel script 的目录
export const CRX_SIDEPANEL_OUTDIR = '_build_sidepanel'
// 临时 build newtab script 的目录
export const CRX_NEWTAB_OUTDIR = '_build_newtab'
// 临时 build options script 的目录
export const CRX_OPTIONS_OUTDIR = '_build_options'

// 拷贝目录（Node 16.7+）
export const copyDirectory = (srcDir, destDir) => {
  fs.cpSync(srcDir, destDir, { recursive: true, force: true })
}

// 删除目录及文件（Node 14.14+）
export const deleteDirectory = dir => {
  fs.rmSync(dir, { recursive: true, force: true })
}
