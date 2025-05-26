import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
  {
    // 当前网站部署到的域名
    hostname: "https://www.meowpass.com",
    // 启用热重载
    hotReload: true,
    // 文章信息展示的内容
    // pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
    // 文章显示的默认作者信息
    author: {
      name: "薄荷屋",
      url: "https://www.meowpass.com",
    },
    // 导航栏图标
    logo: "/assets/images/logo.webp",
    // 仓库链接
    repo: "BillSaul/blog",
    // 文档在仓库中的目录
    docsDir: "src",
    // 导航栏配置
    navbar,
    // 侧边栏配置
    sidebar,
    // 侧边栏排序方式
    sidebarSorter: "filename",
    // 默认的版权信息
    copyright: "Copyright © 2020-至今 薄荷屋",
    // 页脚
    footer: `备案信息：<a href="https://beian.miit.gov.cn" target="_blank">蜀ICP备2022009760号-1</a> | 
      <img src="/assets/images/beian_icon.png" style="vertical-align: text-top;margin-right: 2px;"/>
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51012402000786">
        川公网安备51012402000786号
      </a>`,
    // 是否默认显示页脚
    displayFooter: true,
    // 是否展示编辑此页链接
    editLink: false,
    // 是否显示页面贡献者
    contributors: false,

    // 博客选项
    blog: {
      // 文章列表中展示的文章信息
      articleInfo: [
        "Original",
        "Date",
        "PageView",
        "Category",
        "Tag",
        "ReadingTime",
      ],
      // 口号、座右铭或介绍语
      description: "风带来故事的种子，时间使之发芽",
      // 博主的个人介绍地址
      intro: "/intro.html",
      // 博主的媒体链接配置
      medias: {},
    },

    // 加密配置
    encrypt: {
      config: {
        "/demo/encrypt.html": ["1234"],
      },
    },

    // 多语言配置
    metaLocales: {
      editLink: "在 GitHub 上编辑此页",
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    markdown: {
      alert: true,
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 取消注释它们如果你需要 TeX 支持
      // math: {
      //   // 启用前安装 katex
      //   type: "katex",
      //   // 或者安装 mathjax-full
      //   type: "mathjax",
      // },

      // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
      // revealjs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 chart.js
      // chartjs: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // 在启用之前安装 sandpack-vue3
      // sandpack: true,
    },

    // 在这里配置主题提供的插件
    plugins: {
      // 公告插件
      notice: [
        {
          key: "notice_20241101_01",
          path: "/pages/703eb3/",
          title: "⚠️ 请注意文章时效性",
          content: `
            <strong>
              <p>
                <span style="color: red;">请注意！</span>本博客当前主题已更换为：<br/>
                VuePress Theme Hope
              </p>
              <p>由于新的主题自身支持 Waline 评论插件和本教程中的所有功能，因此本教程内容已不再维护。</p>
              <p>请自行判断本教程是否适用于当前的 Waline 版本和 Vdoing 主题版本。</p>
            </strong>
          `,
        },
      ],

      // 博客配置
      blog: {
        // 自动生成的摘要的长度
        excerptLength: 0,
      },

      // 评论插件配置
      comment: {
        // 评论服务提供者
        provider: "Waline",
        // Waline 的服务端地址
        serverURL: "https://waline.meowpass.com",
        // 强制登录后才能发表评论
        login: "force",
        lang: "zh-CN",
        locale: {
          placeholder: "欢迎留言。（如果你还没有登录，需在登录后才能留言）",
        },
        reaction: [],
      },

      // 搜索插件配置
      docsearch: {
        appId: "VV20RWK0ME",
        apiKey: "60749599495f1e191368dacfd581d74a",
        indexName: "meowpass",
      },

      components: {
        components: ["Badge", "VPCard"],
      },

      // 图标
      icon: {
        assets: "//at.alicdn.com/t/c/font_4830723_aqtwv5u7p0d.css",
      },

      // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cacheImage: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    },
  },
  {
    custom: true,
  }
);
