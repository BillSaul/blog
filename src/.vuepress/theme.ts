import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
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
  // navbar
  navbar,
  // sidebar
  sidebar,
  // 侧边栏排序方式
  sidebarSorter: "filename",
  copyright: "Copyright © 2020-至今 秋澪冬安",
  // 页脚
  footer:
    '备案信息：<a href="https://beian.miit.gov.cn" target="_blank">蜀ICP备2022009760号-1</a> | <img src="/assets/images/beian_icon.png" style="vertical-align: text-top;margin-right: 2px;"/><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51012402000786">川公网安备51012402000786号</a>',
  // 是否默认显示页脚
  displayFooter: true,

  // 博客选项
  blog: {
    // 文章列表中展示的文章信息
    articleInfo: ["Original", "Date", "PageView", "Category", "Tag", "ReadingTime"],
    // 口号、座右铭或介绍语
    description: "一个前端开发者",
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

  // page meta
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

    // all features are enabled for demo, only preserve features you need here
    // Markdown 增强配置
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
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
      vPre: true,
      vuePlayground: true,
    },
  },
});
