import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "🏠 首页",
    link: "/",
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
    text: "📃 博客日志",
    link: "/pages/ef044f/",
  },
  {
    text: "ℹ️ 关于",
    link: "/intro.md",
  },
]);
