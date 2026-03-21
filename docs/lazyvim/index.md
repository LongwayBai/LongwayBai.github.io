---
sidebar_position: 1
---

# LazyVim 个人配置

基于 [LazyVim](https://github.com/LazyVim/LazyVim) 构建的个人 Neovim 配置，集成了丰富的插件和个性化配置。

![intro](https://private-user-images.githubusercontent.com/254935088/549778077-25592202-64b7-4ce1-a781-0a36d0bf9b76.gif)

## 特性

- 🚀 基于 LazyVim，快速启动和流畅体验
- 🎨 精选主题配置（Tokyo Night / Catppuccin）
- 🔧 完善的 LSP 支持，配合 Lspsaga 增强交互
- 📝 优化的代码补全（Blink.cmp）
- 🌳 集成 Yazi 文件管理器
- 📊 美化的 Markdown 渲染和预览
- 🎯 自定义键位映射和工作流优化

## 主要插件

### 主题和界面
- **tokyonight.nvim** - Tokyo Night 主题（透明背景）
- **catppuccin/nvim** - Catppuccin Frappe 主题（默认）
- **lualine.nvim** - 优化的状态栏显示
- **mini.icons** - 图标支持
- **snacks.nvim** - 增强的仪表盘和 UI 组件

### 编辑器增强
- **nvim-treesitter** - 语法高亮和代码理解
- **yazi.nvim** - 终端文件管理器集成
- **better-escape.nvim** - 优化的 Esc 映射（jk/jj）

### LSP 和补全
- **lspsaga.nvim** - LSP UI 增强
- **blink.cmp** - 代码补全引擎

### Markdown 支持
- **render-markdown.nvim** - 实时 Markdown 渲染
- **markdown-preview.nvim** - 浏览器预览

## 目录结构

```
~/.config/nvim/
├── init.lua                 # 入口文件
├── lazyvim.json            # LazyVim 配置
├── lua/
│   ├── config/
│   │   ├── autocmds.lua    # 自动命令
│   │   ├── keymaps.lua     # 键位映射
│   │   ├── lazy.lua        # Lazy.nvim 配置
│   │   └── options.lua     # 编辑器选项
│   └── plugins/
│       ├── ai.lua          # AI 插件配置
│       ├── code.lua        # 代码编辑插件
│       ├── editor.lua      # 编辑器增强插件
│       ├── lsp.lua         # LSP 配置
│       ├── theme.lua       # 主题配置
│       └── ui.lua          # UI 增强插件
```

## 相关资源

- 源码仓库：[LongwayBai/lazyvim-config](https://github.com/LongwayBai/lazyvim-config)
- 许可证：[Apache License 2.0](https://github.com/LongwayBai/lazyvim-config/blob/main/LICENSE)
