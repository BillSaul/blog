import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import externalLinkRedirect from "./plugins/external-link-redirect.js";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "薄荷屋",
  description: "个人技术博客，记录和分享各种技术知识",

  plugins: [
    externalLinkRedirect({
      internalDomains: ["meowpass.com"],
      redirectPath: "https://www.meowpass.com/go.html",
      urlParamName: "url",
    }),
  ],

  head: [
    // 百度统计脚本
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        const isMyWebSite = window.location.hostname.includes("meowpass.com");
        if (isMyWebSite) {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?b3eec175381ad9162a641e5fb8bd0548";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        }
      })();
      `,
    ],
    // 腾讯云前端性能监控
    ["script", { src: "https://tam.cdn-go.cn/aegis-sdk/latest/aegis.min.js" }],
    [
      "script",
      {},
      `
      (function() {
        const isMyWebSite = window.location.hostname.includes("meowpass.com");
        if (isMyWebSite) {
          if (typeof Aegis === 'function') {
            var aegis = new Aegis({
              id: 'lJxq1HyLrObPoynRlJ', // 上报 id
              reportApiSpeed: true, // 接口测速
              reportAssetSpeed: true, // 静态资源测速
              spa: true, // spa 应用页面跳转的时候开启 pv 计算
            hostUrl: 'https://rumt-zh.com'
            });
          }
        }
      })();
      `,
    ],
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
