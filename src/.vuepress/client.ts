import { defineClientConfig } from "vuepress/client";
import runtime from "./components/runtime.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("runtime", runtime);

    let timeoutId: ReturnType<typeof setTimeout>;

    router.afterEach((to, from) => {
      if (
        typeof window !== "undefined" &&
        (to.path === "/" || to.path !== from.path)
      ) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          const elements = document.querySelectorAll(".vp-blog-type-switcher");
          elements.forEach((el) => {
            const buttons = el.querySelectorAll("button");
            if (/^\/article\//.test(to.path) && buttons.length > 0) {
              buttons[0].click();
            } else if (/^\/category\//.test(to.path) && buttons.length > 1) {
              buttons[1].click();
            } else if (/^\/tag\//.test(to.path) && buttons.length > 2) {
              buttons[2].click();
            } else if (/^\/timeline\//.test(to.path) && buttons.length > 3) {
              buttons[3].click();
            } else if (buttons.length > 1) {
              buttons[1].click();
            }
          });
        }, 500);
      }
    });
  },
});
