import { defineClientConfig } from "@vuepress/client";
import runtime from "./components/runtime.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("runtime", runtime);
  },
});
