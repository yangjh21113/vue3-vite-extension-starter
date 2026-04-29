# Vite + Vue 3 Chrome Extension Template

基于 Vite + Vue 3 + TypeScript 的 Chrome Manifest V3 插件开发模板。

## 功能特性

- Chrome Manifest V3 支持
- Vue 3 + TypeScript + Composition API
- 6 个独立入口：Popup / Content Script / Background / Side Panel / New Tab / Options
- Pinia 状态管理 + Vue Router
- ESLint 9 (flat config) + Prettier 代码规范
- Husky + lint-staged + Commitlint 提交规范
- 一键生成扩展图标 (Sharp)
- manifest.json 版本号自动同步

## 快速开始

```bash
# 安装依赖
pnpm install

# 开发（并行启动 Popup / Side Panel / New Tab）
pnpm dev

# 单个入口开发
pnpm dev:popup        # Popup 开发 (localhost:3000)
pnpm dev:content      # Content Script 开发
pnpm dev:sidePanel    # Side Panel 开发
pnpm dev:newtab       # New Tab 开发
pnpm dev:options      # Options 开发

# 构建
pnpm build            # 全量构建（并行，推荐）
pnpm build:sync       # 全量构建（串行）

# 工具脚本
pnpm icons            # 从 SVG 生成多尺寸图标
pnpm sync-version     # 从 package.json 同步版本号到 manifest.json

# 代码质量
pnpm format           # 一键格式化 + 自动修复
pnpm format:check     # 格式检查（不修改文件）
pnpm typecheck        # TypeScript 类型检查
```

## 项目结构

```
├── src/
│   ├── popup/          # 插件弹出窗口（点击图标打开）
│   ├── content/        # 内容脚本（注入页面）
│   ├── background/     # Service Worker 后台脚本
│   ├── sidePanel/      # Chrome 侧边栏面板
│   ├── newtab/         # 新标签页覆盖
│   ├── options/        # 扩展设置页面
│   ├── api/            # API 请求封装
│   └── common/         # 公共资源
│       ├── assets/     # 静态资源（SVG 图标等）
│       ├── components/ # 全局组件（SvgIcon 等）
│       └── utils/      # 工具函数（消息通信、本地存储）
├── public/
│   ├── manifest.json   # Chrome 插件清单
│   ├── images/         # 多尺寸扩展图标
│   └── favicon.ico     # 站点图标
├── scripts/
│   ├── generate-icons.mjs    # 图标生成脚本
│   └── sync-manifest-version.mjs  # 版本号同步脚本
├── buildAll.js         # 全量构建脚本（基于 Vite build() API）
├── singleBuild.js      # 单个构建产物合并脚本
├── globalConfig.js     # 全局路径配置
├── vite.base.config.js # Vite 配置工厂函数
└── vite.*.config.js    # 各入口 Vite 配置（继承 base）
```

## 加载到 Chrome

1. 运行 `pnpm build` 完成构建
2. 打开 Chrome → `chrome://extensions/`
3. 开启「开发者模式」→ 「加载已解压的扩展程序」
4. 选择项目根目录下的 `build/` 文件夹

## 环境变量

复制 `.env.example` 为 `.env` 并填写：

```env
VITE_API_BASE_URL=https://your-api-base-url
```

## 技术栈

| 技术 | 版本 |
|------|------|
| Vite | 7.x |
| Vue | 3.x |
| TypeScript | 5.x |
| Node.js | >= 22 |
| pnpm | >= 10 |
