# 部署与更新指南（GitHub Pages + GitHub Actions）

本文档记录本项目（Docusaurus 静态站点）从本地到公网的完整部署流程，并说明后续如何更新网站内容。

> 当前站点类型：**GitHub Pages 用户站点**
>
> - GitHub 用户：`LongwayBai`
> - 仓库名：`DocBit.github.io`
> - 默认域名：`https://DocBit.github.io`
> - 当前访问域名：`https://DocBit.github.io`

---

## 1. 项目结构与关键文件

- `docusaurus.config.ts`：站点 URL / baseUrl / GitHub 信息（影响页面链接、资源路径、Edit this page 等）
- `docs/`：文档内容（会生成到站点的 `/docs/...`）
- `src/`、`static/`：自定义页面、组件与静态资源
- `static/CNAME`：自定义域名配置文件，内容应为 `DocBit.github.io`
- `build/`：本地构建输出目录（**不用提交**，会由 CI 构建生成并部署）
- `.github/workflows/deploy-pages.yml`：GitHub Actions 自动构建并发布到 Pages 的工作流

---

## 2. 部署流程

### 2.1 配置 Docusaurus 站点信息

在 `docusaurus.config.ts` 中设置：

- `url: 'https://DocBit.github.io'`
- `baseUrl: '/'`
- `organizationName: 'LongwayBai'`
- `projectName: 'DocBit.github.io'`

### 2.2 自定义域名配置 (Custom Domain)

本项目使用 `DocBit.github.io` 作为访问域名。

1. **仓库端配置**：在 `static/CNAME` 文件中写入 `DocBit.github.io`，并与当前仓库名保持一致。
2. **GitHub 端配置**：确认 GitHub 仓库的 **Settings → Pages** 指向当前仓库发布结果，并使用 `DocBit.github.io` 作为对外访问域名。

### 2.3 GitHub Actions 自动部署

本项目使用 `.github/workflows/deploy-pages.yml`：

- 触发条件：`push` 到 `main` 分支。
- 流程：安装依赖、运行 `npm run build`、上传构建产物并部署。

---

## 3. 日常更新内容

日常更新只需要：**修改内容 → 本地预览（可选）→ push**。

### 3.1 本地预览

```bash
npm install
npm run start
```

### 3.2 提交更新

```bash
git add -A
git commit -m "docs: update content"
git push
```

推送后，GitHub Actions 会自动触发构建与部署。

---

## 4. 查看部署状态

1. 进入仓库 → **Actions**。
2. 查看最新的 `Deploy to GitHub Pages` 运行情况。

---

## 5. 常见问题

- **页面 404**：如果仓库刚完成改名，先确认 Pages 已绑定到 `DocBit.github.io`，然后等待 GitHub Pages 配置生效。
- **样式缺失**：检查 `docusaurus.config.ts` 中的 `baseUrl` 是否为 `/`。
