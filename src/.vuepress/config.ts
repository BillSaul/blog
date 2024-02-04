import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "秋澪冬安",
  description: "个人技术博客，记录和分享各种技术知识",

  theme,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
