---
sidebar_position: 2
---

# 安装指南

## 环境要求

### 必需工具

| 工具 | 说明 | 安装命令 (macOS) | 安装命令 (Linux) |
|------|------|------------------|------------------|
| **Neovim** >= 0.11.2 | 编辑器本体 | `brew install neovim` | `sudo apt install neovim` |
| **Git** | 版本控制 | 已安装 | 已安装 |
| **Node.js** | LSP 和插件支持 | `brew install node` | `curl -fsSL https://deb.nodesource.com/setup_lts.x \| sudo -E bash -` |
| **Ripgrep** | 代码搜索 | `brew install ripgrep` | `sudo apt install ripgrep` |
| **fd** | 文件查找 | `brew install fd` | `sudo apt install fd-find` |

### 推荐工具

| 工具 | 说明 | 安装命令 (macOS) | 安装命令 (Linux) |
|------|------|------------------|------------------|
| **Yazi** | 文件管理器 | `brew install yazi` | `cargo install --locked yazi-fm` |
| **lazygit** | Git TUI | `brew install lazygit` | 详见 [lazygit releases](https://github.com/jesseduffield/lazygit/releases) |
| **StyLua** | Lua 格式化 | `brew install stylua` | `cargo install stylua` |

## 安装步骤

### 1. 备份现有配置

```bash
mv ~/.config/nvim ~/.config/nvim.bak
mv ~/.local/share/nvim ~/.local/share/nvim.bak
mv ~/.local/state/nvim ~/.local/state/nvim.bak
mv ~/.cache/nvim ~/.cache/nvim.bak
```

### 2. 克隆配置

```bash
git clone https://github.com/LongwayBai/lazyvim-config.git ~/.config/nvim
```

### 3. 启动 Neovim

```bash
nvim
```

首次启动时，LazyVim 会自动安装所有插件。

## 语言支持安装

根据你的开发需求安装相应的 LSP 服务器：

```bash
# Python
pip install python-lsp-server

# TypeScript/JavaScript
npm install -g typescript typescript-language-server

# C/C++ (macOS)
brew install llvm

# JSON
npm install -g vscode-langservers-extracted

# Markdown
npm install -g marksman
```

## 更新

```bash
# 更新配置文件
cd ~/.config/nvim
git pull

# 在 Neovim 中更新插件
:Lazy update
```

## 故障排查

### 检查健康状态

```vim
:Lazy health
:checkhealth
```

### LSP 问题

```vim
:LspInfo
:Mason
```

### 清除缓存

```bash
rm -rf ~/.local/state/nvim
rm -rf ~/.local/share/nvim
```
