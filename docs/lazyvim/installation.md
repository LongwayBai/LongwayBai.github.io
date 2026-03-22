---
sidebar_position: 2
title: 安装与环境准备
description: 安装 LongwayBai/lazyvim-config，并提前理解这套 LazyVim 配置对系统环境有什么要求。
---

这一页单独把安装流程拎出来，方便你边操作边对照。

我自己装这套配置时，真正花时间的通常不是 `git clone`，而是把 Neovim、Node.js、搜索工具和语言环境补齐。配置本身不难装，麻烦的是依赖漏掉之后，表面上能打开，实际上很多功能都用不起来。

## 1. 安装前先确认这些依赖

在克隆配置之前，先确认下面这些基础工具已经在系统里。

### 必需工具

这些缺了，Neovim 要么起不来，要么很多基础能力会直接失效。

| 工具 | 作用 | macOS 安装 | Linux 安装 |
| :--- | :--- | :--- | :--- |
| **Neovim >= 0.11.2** | 编辑器本体 | `brew install neovim` | `sudo apt install neovim` |
| **Git** | 拉配置、更新配置 | `brew install git` | `sudo apt install git` |
| **Node.js** | 一部分 LSP 和插件依赖它 | `brew install node` | `sudo apt install nodejs` |
| **Ripgrep** | 全局搜索文本 | `brew install ripgrep` | `sudo apt install ripgrep` |
| **fd** | 查找文件 | `brew install fd` | `sudo apt install fd-find` |

如果你是在 Debian / Ubuntu 上装的 `fd-find`，要多留意一下：很多系统里它实际提供的命令名是 `fdfind`，不是 `fd`。如果后面你发现某些查找功能不工作，第一步就先确认这里是不是对上了。

### 推荐工具

这些不是“打不开就报错”的级别，但装上之后，体验会完整很多。

| 工具 | 对应功能 | 为什么需要 |
| :--- | :--- | :--- |
| **Yazi** | 文件管理 | 这套配置里会频繁用到它。 |
| **Lazygit** | Git 管理 | 对应文档里的 Git 快捷键。 |
| **StyLua** | Lua 格式化 | 改配置时会更省心。 |

## 2. 备份旧配置

如果你之前已经有自己的 Neovim 配置，建议先备份。LazyVim 这套配置不是“临时加载一下”，而是会直接占用 `~/.config/nvim` 这套目录。

```bash
mv ~/.config/nvim ~/.config/nvim.bak
mv ~/.local/share/nvim ~/.local/share/nvim.bak
mv ~/.local/state/nvim ~/.local/state/nvim.bak
mv ~/.cache/nvim ~/.cache/nvim.bak
```

这里最值得注意的是：除了配置目录，LazyVim 相关的插件数据和缓存也一起备份了。这样后面如果想回滚，会轻松很多。

## 3. 克隆配置并首次启动

```bash
git clone https://github.com/LongwayBai/lazyvim-config.git ~/.config/nvim
nvim
```

第一次打开时，LazyVim 会自动安装插件。这个阶段看起来像是在“自己忙自己的”，其实是正常的。先别急着关掉，等它把该装的东西拉完。

## 4. 语言支持怎么装

这套配置通过 Mason 来管理 LSP（语言服务器）。装好基础环境后，如果你要写某种语言，再去补对应的语言服务器即可。

在 Neovim 里输入：

```vim
:Mason
```

![Mason 界面](/img/lazyvim/mason.png)

*图：Mason 的管理界面。读这张图时，重点不是它列了多少工具，而是要知道这里负责的是“语言服务器和相关工具的安装状态”，不是整个系统运行时。*

这里有一个新手最容易踩的坑：**Mason 只是帮你下载和管理语言服务器的可执行文件，它并不包含系统级的运行时。**

比如你用 Mason 装了 `pyright`，但你系统里如果没有安装 Python 解释器，或者没有配置好虚拟环境，LSP 还是起不来。同理，Node.js、C++ 编译器这类基础环境，需要你自己在系统层级先准备好。

常见语言建议优先装这几个：

- Python：`basedpyright` (比原版好用一点)
- TypeScript / JS：`vtsls`
- C / C++：`clangd`
- Lua：`lua-language-server`
- Markdown：`marksman`

## 5. 更新

```bash
cd ~/.config/nvim
git pull
```

然后在 Neovim 里执行：

```vim
:Lazy update
```

如果你只是改了配置文件，通常重开一次 `nvim` 就够了；如果是插件本身更新，记得顺手把 `:Lazy update` 也跑一下。

## 6. 常见问题排查

如果装完之后“不太对劲”，大概率先从这几项查起。

### 1. 先看健康检查

```vim
:Lazy health
:checkhealth
```

这两个命令最大的价值，不是“看一眼就结束”，而是它会直接告诉你缺的是什么。很多安装问题其实不用猜，跟着提示补依赖就行。

### 2. LSP 不工作，就直接查它

```vim
:LspInfo
:LspLog
:Mason
```

如果没有高亮、没有跳转、没有补全，通常不是“LazyVim 坏了”，而是语言服务器没装好，或者系统环境没跟上。

### 3. 插件更新后怪怪的，先清缓存

有时候更新插件之后，缓存里的旧状态会干扰当前配置。这种情况先别急着重装，先把状态目录清掉试试：

```bash
rm -rf ~/.local/state/nvim
rm -rf ~/.local/share/nvim
```

不过这两个目录删掉之后，插件状态和一部分缓存也会一起重建，下一次启动通常会重新下载或重新生成一些内容。所以我一般只在“明显不对劲，而且前面的检查都看过了”的时候才这么做。

如果你是第一次接触 LazyVim，我更建议的顺序是：**先装好、先能打开、先能跳转和搜索，再慢慢折腾主题、插件和键位。** 这样会顺很多。
