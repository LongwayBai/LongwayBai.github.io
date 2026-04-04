# 部署与更新指南（GitHub Pages + GitHub Actions）

本文档记录本项目（Docusaurus 静态站点）从本地到公网的完整部署流程，并说明后续如何更新网站内容。

> 当前站点类型：**GitHub Pages 用户站点**
>
> - GitHub 用户：`LongwayBai`
> - 仓库名：`LongwayBai.github.io`
> - 默认域名：`https://longwaybai.github.io`（当前生效域名）
> - 目标自定义域名：`https://docbit.github.io`（配置中，待生效）

---

## 1. 项目结构与关键文件

- `docusaurus.config.ts`：站点 URL / baseUrl / GitHub 信息（影响页面链接、资源路径、Edit this page 等）
- `docs/`：文档内容（会生成到站点的 `/docs/...`）
- `src/`、`static/`：自定义页面、组件与静态资源
- `static/CNAME`：自定义域名配置文件，内容应为 `docbit.github.io`
- `build/`：本地构建输出目录（**不用提交**，会由 CI 构建生成并部署）
- `.github/workflows/deploy-pages.yml`：GitHub Actions 自动构建并发布到 Pages 的工作流

---

## 2. 部署流程

### 2.1 配置 Docusaurus 站点信息

在 `docusaurus.config.ts` 中设置：

- `url: 'https://docbit.github.io'`
- `baseUrl: '/'`
- `organizationName: 'LongwayBai'`
- `projectName: 'docbit.github.io'`

### 2.2 自定义域名配置 (Custom Domain)

本项目**目标**使用 `docbit.github.io` 作为自定义域名。

1. **仓库端配置**（已完成）：在 `static/CNAME` 文件中写入 `docbit.github.io`。这确保了每次部署后 GitHub Pages 都能获取此域名配置。
2. **GitHub 端配置**（待验证）：需在 GitHub 仓库的 **Settings → Pages → Custom domain** 中填写 `docbit.github.io`。
   - **重要提示**：如果 GitHub Pages 设置界面无法保存该自定义域名，通常是因为 DNS 记录尚未指向 GitHub。`static/CNAME` 仅是仓库侧的先决条件，GitHub 侧的最终绑定仍依赖于 GitHub 的验证过程。在验证成功前，默认访问地址仍为 `https://longwaybai.github.io`。

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

- **页面 404**：如果是新设置的自定义域名，DNS 生效可能需要几分钟到几小时。
- **样式缺失**：检查 `docusaurus.config.ts` 中的 `baseUrl` 是否为 `/`。
