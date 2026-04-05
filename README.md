# DocBit

[English](./README.en.md) | 简体中文

DocBit 是一个基于 Docusaurus 构建的个人技术笔记站点，用来整理日常开发中的工具配置、终端工作流、问题排查记录和阶段性思考。

- 在线访问: <https://longwaybai.github.io>
- 站点定位: developer notes, terminal habits, and toolsmith workflows
- 仓库用途: 站点源码、文档内容和部署配置都集中在这里维护

## 内容概览

当前站点主要包含这些内容方向：

- `OpenCode`：AI coding agent 的使用笔记、配置思路和工作流实践
- `LazyVim`：基于个人配置整理的安装、快捷键和插件说明
- `Tmux`：从基础概念到配置、美化和常用操作的实践笔记
- `工作笔记风格内容`：强调过程、取舍和试错痕迹，而不只是最后结论

如果你也习惯把开发环境、命令行工具和日常流程沉淀成长期可复用的文档，这个仓库应该会比较对胃口。

## 技术栈

- [Docusaurus 3.9.2](https://docusaurus.io/)
- React 19
- TypeScript 5
- `@easyops-cn/docusaurus-search-local` 本地搜索
- GitHub Pages 部署

## 快速开始

### 环境要求

- Node.js `>= 20.0`
- Yarn 或 npm

### 安装依赖

```bash
yarn install
```

或：

```bash
npm install
```

### 本地开发

```bash
yarn start
```

启动后默认会在本地打开开发服务器，适合实时预览文档和页面修改。

### 预览生产构建

```bash
yarn preview
```

这个命令会先构建站点，再用本地服务预览生成结果。

## 常用命令

```bash
yarn start        # 启动开发服务器
yarn preview      # 构建并本地预览
yarn build        # 生成静态站点到 build/
yarn serve        # 本地启动生产构建产物
yarn typecheck    # TypeScript 检查
yarn clear        # 清理 Docusaurus 缓存
yarn deploy       # 部署到 GitHub Pages
```

## 目录结构

```text
.
├── blog/                  # 博客内容
├── docs/                  # 文档内容
│   ├── intro.md
│   ├── lazyvim/
│   ├── opencode/
│   └── tmux/
├── src/                   # 自定义页面、组件与样式
├── static/                # 静态资源
├── docusaurus.config.ts   # 站点配置
├── sidebars.ts            # 文档侧边栏配置
├── package.json
└── README.md
```

## 部署说明

这个仓库默认面向 GitHub Pages 部署，站点地址配置在 `docusaurus.config.ts` 中。

使用 SSH：

```bash
USE_SSH=true yarn deploy
```

不使用 SSH：

```bash
GIT_USER=<your-github-username> yarn deploy
```

推送到 `main` 后，仓库中的 GitHub Actions 也会负责站点构建与发布。

## 维护说明

- 文档内容以中文为主
- 写作风格偏工作笔记，强调过程、原因和可复用经验
- 页面配置与站点行为主要集中在 `docusaurus.config.ts`、`sidebars.ts` 和 `src/`

如果你只是想浏览内容，直接访问线上站点即可；如果你想继续维护这个仓库，优先从 `docs/` 和 `docusaurus.config.ts` 开始看会更快进入状态。
