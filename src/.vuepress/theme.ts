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
      name: "秋澪冬安",
      url: "https://www.meowpass.com",
    },
    // 字体图标资源链接
    iconAssets: "fontawesome-with-brands",
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
    copyright: "Copyright © 2020-至今 秋澪冬安",
    // 页脚
    footer:
      '备案信息：<a href="https://beian.miit.gov.cn" target="_blank">蜀ICP备2022009760号-1</a> | <img src="/assets/images/beian_icon.png" style="vertical-align: text-top;margin-right: 2px;"/><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51012402000786">川公网安备51012402000786号</a>',
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
      medias: {
        Email: "mailto:info@example.com",
        GitHub: "https://github.com/BillSaul",
      },
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

    // 插件配置
    plugins: {
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
        serverURL: "https://waline-1-h6460307.deta.app",
      },

      components: {
        components: ["Badge", "VPCard"],
      },

      // 此处开启了很多功能用于演示，你应仅保留用到的功能。
      mdEnhance: {
        align: true,
        attrs: true,
        codetabs: true,
        component: true,
        demo: true,
        figure: true,
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

        // 在启用之前安装 chart.js
        // chart: true,

        // insert component easily

        // 在启用之前安装 echarts
        // echarts: true,

        // 在启用之前安装 flowchart.ts
        // flowchart: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // 在启用之前安装 katex
        // katex: true,

        // 在启用之前安装 mathjax-full
        // mathjax: true,

        // 在启用之前安装 mermaid
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // 在启用之前安装 reveal.js
        // revealJs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },

        // 在启用之前安装 @vue/repl
        // vuePlayground: true,

        // install sandpack-vue3 before enabling it
        // sandpack: true,
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
