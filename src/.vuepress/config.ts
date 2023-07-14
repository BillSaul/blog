import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "秋澪冬安",
  description: "个人技术博客，记录和分享各种技术知识",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
