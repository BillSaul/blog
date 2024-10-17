import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "🏠 首页",
    link: "/",
  },
  {
    text: "⭐ 收藏",
    children: [
      {
        text: "🌐 网站",
        link: "/pages/87b1e9/",
      },
      {
        text: "📦 资源",
        link: "/pages/c47f0e/",
      },
      {
        text: "📝 教程",
        link: "/pages/f7b22f/",
      },
      {
        text: "📐 制表符",
        link: "/pages/47886c/",
      },
    ],
  },
  {
    text: "🗂️ 索引",
    children: [
      {
        text: "🗃️ 分类",
        link: "/category/",
      },
      {
        text: "🏷️ 标签",
        link: "/tag/",
      },
      {
        text: "🗄️ 归档",
        link: "/timeline/",
      },
    ],
  },
  {
    text: "ℹ️ 关于",
    link: "/intro.md",
  },
  {
    text: "🚦 服务监控",
    link: "https://status.meowpass.com",
  },
]);
