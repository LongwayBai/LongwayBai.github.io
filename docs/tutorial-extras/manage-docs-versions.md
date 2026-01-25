---
sidebar_position: 1
---

# 管理文档版本

Docusaurus 可以管理你的文档的多个版本。

## 创建一个文档版本

发布项目的 1.0 版本：

```bash
npm run docusaurus docs:version 1.0
```

`docs` 目录会被复制到 `versioned_docs/version-1.0`，同时会创建 `versions.json`。

你的文档现在有 2 个版本：

- `1.0` 位于 `http://localhost:3000/docs/`（1.0 版本文档）
- `current` 位于 `http://localhost:3000/docs/next/`（**即将发布但尚未发布的文档**）

## 添加版本下拉菜单

为了在不同版本间无缝切换，添加一个版本下拉菜单。

修改 `docusaurus.config.js` 文件：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

版本下拉菜单会出现在导航栏中：

![文档版本下拉菜单](./img/docsVersionDropdown.png)

## 更新已有版本

你可以在各自的目录中编辑已版本化的文档：

- `versioned_docs/version-1.0/hello.md` 会更新 `http://localhost:3000/docs/hello`
- `docs/hello.md` 会更新 `http://localhost:3000/docs/next/hello`
