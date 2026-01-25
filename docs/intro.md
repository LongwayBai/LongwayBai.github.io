---
sidebar_position: 1
---

# 教程简介

让我们在 **不到 5 分钟**内了解 **Docusaurus**。

## 开始使用

通过 **创建一个新站点**开始。

或者通过 **[docusaurus.new](https://docusaurus.new)** **立即体验 Docusaurus**。

### 你需要准备

- [Node.js](https://nodejs.org/en/download/) 版本 20.0 或以上：
  - 安装 Node.js 时，建议勾选所有与依赖相关的选项。

## 生成一个新站点

使用 **classic 模板**生成一个新的 Docusaurus 站点。

运行以下命令后，classic 模板会自动添加到你的项目中：

```bash
npm init docusaurus@latest my-website classic
```

你可以在命令提示符、PowerShell、Terminal，或代码编辑器的任意集成终端中输入该命令。

该命令也会安装运行 Docusaurus 所需的全部依赖。

## 启动站点

运行开发服务器：

```bash
cd my-website
npm run start
```

`cd` 命令用于切换当前工作目录。为了使用你新创建的 Docusaurus 站点，你需要在终端中进入该目录。

`npm run start` 会在本地构建网站并通过开发服务器提供访问，你可以在 http://localhost:3000/ 查看。

打开 `docs/intro.md`（本页）并编辑几行内容：站点会**自动重载**并显示你的修改。
