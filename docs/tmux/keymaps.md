---
sidebar_position: 3
title: 快捷键速查
description: LongwayBai/tmux-config 常用快捷键与记忆方式。
---

这一页列出的快捷键，默认都指的是**安装了 LongwayBai/tmux-config 之后**的行为。

前缀键统一是：

```text
Ctrl+a
```

## 会话和窗口

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+a c` | 创建新窗口 |
| `Ctrl+a d` | 从当前会话分离 |
| `Ctrl+a r` | 重命名当前窗口 |
| `Ctrl+a R` | 重命名当前会话 |
| `Ctrl+a Ctrl+r` | 重新加载配置 |

## Pane 操作

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+a \|` | 左右分栏 |
| `Ctrl+a _` | 上下分栏 |
| `Ctrl+a [` | 切到上一个 pane |
| `Ctrl+a ]` | 切到下一个 pane |
| `Ctrl+a x` | 关闭当前 pane |
| `Ctrl+a +` | 最大化 / 还原当前 pane |

![tmux 的左右分栏与上下分栏效果](/img/tmux/split-screen.png)

*图：把 `|` 记成左右分栏，把 `_` 记成上下分栏，通常比记术语更直观。*

## 复制与粘贴

| 快捷键 | 功能 |
|--------|------|
| `Alt+Up` | 进入复制模式 |
| `Ctrl+a p` | 粘贴缓冲区 |
| `Ctrl+a Ctrl+p` | 选择缓冲区后粘贴 |

复制模式中的常用键：

| 按键 | 功能 |
|------|------|
| `v` | 开始选择 |
| `y` | 复制选择内容 |
| `Y` | 复制整行 |
| `D` | 复制到行尾 |

:::warning[这些键只在复制模式里有效]
`v`、`y`、`Y`、`D` 这些键通常只在复制模式里有效。在普通 shell 提示符里按，不会出现期待的行为。
:::

## 插件相关

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+a Shift+I` | 安装插件 |
| `Ctrl+a Shift+U` | 更新插件 |
| `Ctrl+a Alt+u` | 卸载不再需要的插件 |
