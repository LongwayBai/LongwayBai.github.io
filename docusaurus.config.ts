import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'docbit.github.io',
  tagline: 'Developer notes, terminal habits, and toolsmith workflows',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docbit.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LongwayBai', // Usually your GitHub org/user name.
  projectName: 'docbit.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/LongwayBai/LongwayBai.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/',
        zhUserDict: [
          '终端复用器',
          '快捷键速查',
          '安装与环境准备',
          '安装与初始配置',
          '插件与扩展',
          '悬浮文档',
          '代码格式化',
          '文件管理',
          '文档预览',
        ].join('\n'),
        removeDefaultStopWordFilter: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 100,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        fuzzyMatchingDistance: 1,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'docbit.github.io',
      logo: {
        alt: 'docbit.github.io Logo',
        src: 'img/logo-light.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '笔记 / Notes',
        },
        {
          href: 'https://github.com/LongwayBai/lazyvim-config',
          label: 'LazyVim',
          position: 'right',
        },
        {
          href: 'https://github.com/LongwayBai/LongwayBai.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '沉淀',
          items: [
            {
              label: 'LazyVim 配置',
              to: '/docs/lazyvim',
            },
            {
              label: 'Tmux 工作流',
              to: '/docs/tmux',
            },
          ],
        },
        {
          title: '开源',
          items: [
            {
              label: 'LazyVim Config',
              href: 'https://github.com/LongwayBai/lazyvim-config',
            },
            {
              label: 'Site Source',
              href: 'https://github.com/LongwayBai/LongwayBai.github.io',
            },
          ],
        },
        {
          title: '连接',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/LongwayBai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} docbit.github.io. Notes from the command line.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
