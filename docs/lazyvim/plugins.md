---
sidebar_position: 4
---

# 插件配置

## 启用的 LazyVim Extras

```lua
"lazyvim.plugins.extras.ai.copilot"        -- GitHub Copilot AI 补全
"lazyvim.plugins.extras.ai.sidekick"       -- AI 编程助手
"lazyvim.plugins.extras.lang.clangd"       -- C/C++ 语言支持
"lazyvim.plugins.extras.lang.json"         -- JSON 语言支持
"lazyvim.plugins.extras.lang.markdown"     -- Markdown 语言支持
"lazyvim.plugins.extras.lang.python"       -- Python 语言支持
"lazyvim.plugins.extras.lang.typescript"   -- TypeScript 语言支持
```

## 主题配置

### Catppuccin (默认)

使用 Catppuccin Frappé 主题，位于 `lua/plugins/theme.lua`：

```lua
{
  "catppuccin/nvim",
  opts = {
    flavour = "frappe",
    transparent_background = true,
  },
}
```

### Tokyo Night

备用主题配置：

```lua
{
  "folke/tokyonight.nvim",
  opts = {
    transparent = true,
  },
}
```

## 补全配置

使用 Blink.cmp 作为补全引擎：

```lua
{
  "sagcn/blink.cmp",
  opts = {
    completion = {
      menu = {
        border = "rounded",
      },
      accept = {
        auto_brackets = {
          enabled = true,
        },
      },
    },
    keymap = {
      preset = "enter",
      ["<Tab>"] = { "select_next", "fallback" },
      ["<S-Tab>"] = { "select_prev", "fallback" },
    },
  },
}
```

## LSP 配置

使用 Lspsaga 增强 LSP UI：

```lua
{
  "nvimdev/lspsaga.nvim",
  init = function()
    require("lspsaga").setup({
      ui = {
        border = "rounded",
      },
      symbol_in_winbar = {
        in_custom = true,
      },
    })
  end,
}
```

## 文件管理器

集成 Yazi：

```lua
{
  "mikavilpas/yazi.nvim",
  event = { "VeryLazy" },
  keys = {
    {
      "<leader>fy",
      function()
        require("yazi").yazi()
      end,
      desc = "Open Yazi",
    },
    {
      "<leader>fw",
      function()
        require("yazi").yazi(nil, 1)
      end,
      desc = "Open Yazi in cwd",
    },
  },
}
```

## Markdown 支持

### 实时渲染

```lua
{
  "MeanderingProgrammer/render-markdown.nvim",
  ft = { "markdown" },
  opts = {
    render_modes = { "activity", "VirtualText" },
  },
}
```

### 浏览器预览

```lua
{
  "iamcco/markdown-preview.nvim",
  cmd = { "MarkdownPreviewToggle", "MarkdownPreview", "MarkdownPreviewStop" },
  build = "cd app && yarn install",
  init = function()
    vim.g.mkdp_filetypes = { "markdown" }
  end,
  ft = { "markdown" },
}
```

## 编辑器增强

### 快速转义

```lua
{
  "max397574/better-escape.nvim",
  event = { "InsertEnter" },
  opts = {
    mapping = { "jk", "jj" },
    timeout = vim.opt.timeoutlen,
  },
}
```

### 文本标记

```lua
{
  "vitrin1212/Mark--KarKat",
  event = { "VeryLazy" },
  config = function()
    require("config.mark").setup()
  end,
}
```
