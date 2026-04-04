# 部署与更新指南（GitHub Pages + GitHub Actions）

本文档记录本项目（Docusaurus 静态站点）从本地到公网的完整部署流程，并说明后续如何更新网站内容。

> 当前站点类型：**GitHub Pages 用户站点**
>
> - GitHub 用户：`LongwayBai`
> - 仓库名：`LongwayBai.github.io`
> - 访问域名：`https://longwaybai.github.io`

---

## 1. 项目结构与关键文件

- `docusaurus.config.ts`：站点 URL / baseUrl / GitHub 信息（影响页面链接、资源路径、Edit this page 等）
- `docs/`：文档内容（会生成到站点的 `/docs/...`）
- `src/`、`static/`：自定义页面、组件与静态资源
- `build/`：本地构建输出目录（**不用提交**，会由 CI 构建生成并部署）
- `.github/workflows/deploy-pages.yml`：GitHub Actions 自动构建并发布到 Pages 的工作流

---

## 2. 一次性部署流程（你已完成，可用于复盘/新环境重做）

### 2.1 创建 GitHub 仓库

1. 在 GitHub 新建仓库：`LongwayBai.github.io`（建议 public）
2. 该仓库是 **用户站点仓库**（用户名 + `.github.io`），GitHub Pages 会默认使用根路径 `/` 作为站点 baseUrl。

### 2.2 配置 Docusaurus 站点信息

在 `docusaurus.config.ts` 中设置：

- `url: 'https://longwaybai.github.io'`
- `baseUrl: '/'`
- `organizationName: 'LongwayBai'`
- `projectName: 'LongwayBai.github.io'`

> 说明：
> - **用户站点**（`username.github.io`）：`baseUrl` 通常是 `/`。
> - **项目站点**（`username.github.io/repo`）：`baseUrl` 通常是 `'/repo/'`。

### 2.3 添加 GitHub Actions 自动部署

本项目使用 `.github/workflows/deploy-pages.yml`：

- 触发条件：
  - `push` 到 `main`
  - 或手动 `workflow_dispatch`
- 流程：
  1. `npm ci`
  2. `npm run build`（生成 `build/`）
  3. `actions/upload-pages-artifact` 上传 `build/`
  4. `actions/deploy-pages` 部署到 GitHub Pages

### 2.4 推送代码到远端

在项目根目录执行（示例）：

```bash
git add -A
git commit -m "update"
git push
```

> GitHub HTTPS 推送如果提示密码，请使用 **Personal Access Token(PAT)**，不要用账号密码。

### 2.5 在 GitHub 开启 Pages

在 GitHub 仓库页面：

- **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**

然后到 **Actions** 页面查看工作流 `Deploy to GitHub Pages` 是否成功。

### 2.6 验证上线

- 打开：`https://longwaybai.github.io`
- 如刚发布后短时间出现缓存/404，等待 1–5 分钟后刷新。

---

## 3. 日常更新网站内容（推荐流程）

日常更新只需要：**改内容 → 本地预览（可选）→ push**，GitHub Actions 会自动重新部署。

### 3.1 更新文档（Docs）

- 文档目录：`docs/`
- 修改/新增 `.md` 或 `.mdx` 文件即可。

本地预览：

```bash
npm install
npm run start
```

浏览器访问本地开发地址（命令行会提示，一般是 `http://localhost:3000`）。

### 3.2 更新图片/静态资源

两种常用方式：

1. 放在 `static/` 下（推荐）：
   - 例如 `static/img/banner.png`
   - 页面中引用时路径是 `/img/banner.png`

2. 放在 `src/` 相关目录里，通过组件/导入使用（适合需要打包处理的资源）。

### 3.3 本地构建验证（建议在大改动后做一次）

```bash
npm run build
npm run serve
```

- `build`：生成静态站点到 `build/`
- `serve`：本地以生产方式预览构建产物

### 3.4 提交并触发自动部署

```bash
git add -A
git commit -m "docs: update"
git push
```

推送到 `main` 后会自动触发 GitHub Actions。

---

## 4. 查看部署状态与日志

1. 进入仓库 → **Actions**
2. 点击最新一次 `Deploy to GitHub Pages`
3. 常见会看到两个 Job：
   - `build`（安装依赖、构建、上传产物）
   - `deploy`（发布到 Pages）

如果失败：打开失败步骤，复制最后几十行日志用于排查。

---

## 5. 常见问题（Troubleshooting）

### 5.1 页面样式/资源 404

- 现象：页面能打开但 CSS/JS 404
- 常见原因：`baseUrl` 配置不正确
  - 用户站点应为 `/`
  - 项目站点常为 `'/repo/'`

### 5.2 Actions 失败：Node 版本/依赖问题

- 本项目 `package.json` 指定 `node >= 20`
- 工作流已固定 Node 20
- 如依赖变化，请确保 `package-lock.json` 与 `npm ci` 一致。

### 5.3 Actions 成功但页面没更新

- 等待 1–5 分钟（Pages/CDN 有缓存）
- 确认推送到的是 `main` 分支
- 确认 Actions 最新一次 run 的 `deploy` job 成功

---

## 6. （可选）自定义域名

如果你以后想使用自己的域名（例如 `www.example.com`）：

1. 在仓库 Settings → Pages 里填写 Custom domain
2. 按照 GitHub 提示在 DNS 添加 `CNAME` 或 `A/AAAA` 记录
3. 建议开启 HTTPS（GitHub Pages 支持）

---

## 7. 快速备忘（TL;DR）

- 更新内容：改 `docs/`、`src/` 或 `static/` → `git commit` → `git push`
- 发布机制：push 到 `main` → Actions 构建 → 自动部署 Pages
- 访问地址：`https://longwaybai.github.io`
