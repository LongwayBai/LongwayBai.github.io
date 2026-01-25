---
sidebar_position: 2
---

# 创建文档

文档是**一组页面**，通过以下方式连接在一起：

- **侧边栏**
- **上一页/下一页导航**
- **版本管理**

## 创建你的第一篇文档

在 `docs/hello.md` 创建一个 Markdown 文件：

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

新文档现在可以在 [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello) 访问。

## 配置侧边栏

Docusaurus 会根据 `docs` 目录自动**创建侧边栏**。

添加元数据来自定义侧边栏的标签与位置：

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

你也可以在 `sidebars.js` 中显式创建侧边栏：

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
