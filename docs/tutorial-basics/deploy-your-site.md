---
sidebar_position: 5
---

# 部署你的网站

Docusaurus 是一个**静态站点生成器**（也称为 **[Jamstack](https://jamstack.org/)**）。

它会将你的网站构建为简单的**静态 HTML、JavaScript 和 CSS 文件**。

## 构建你的网站

为**生产环境**构建网站：

```bash
npm run build
```

静态文件会生成在 `build` 目录中。

## 部署你的网站

在本地测试生产构建：

```bash
npm run serve
```

`build` 目录现在会在 [http://localhost:3000/](http://localhost:3000/) 提供服务。

现在你可以非常轻松地将 `build` 目录部署到**几乎任何地方**，并且通常**免费**或成本很低（参见 **[部署指南](https://docusaurus.io/docs/deployment)**）。
