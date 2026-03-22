---
sidebar_position: 2
---

# 安装指南

## 环境要求

### 必需工具

| 工具 | 说明 | 安装命令 (macOS) | 安装命令 (Linux) |
|------|------|------------------|------------------|
| **Neovim** >= 0.11.2 | 编辑器本体 | `brew install neovim` | `sudo apt install neovim` |
| **Git** | 版本控制 | `brew install git` | `sudo apt install git` |
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

LazyVim 默认通过 Mason 管理和安装 LSP。首次启动后，可以在 Neovim 中执行以下命令打开 Mason 界面，并按需安装语言服务器：

```vim
:Mason
```
![Mason](/img/mason.png)

常见场景：

- Python：安装 `pyright` 或 `basedpyright`
- TypeScript/JavaScript：安装 `tsserver` 或 `vtsls`
- C/C++：安装 `clangd`
- JSON：安装 `json-lsp`
- Markdown：安装 `marksman`
- Lua: 安装 `lua-language-server`

注意：部分 LSP 仍然依赖系统环境中的运行时或工具链，例如 Node.js、Python、clangd 等，请先确保这些基础依赖已安装。

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
:LspLog
:Mason
```

### 清除缓存

```bash
rm -rf ~/.local/state/nvim
rm -rf ~/.local/share/nvim
```
