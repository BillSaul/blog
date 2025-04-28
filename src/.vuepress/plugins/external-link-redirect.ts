import { Markdown } from "vuepress/markdown";

// 定义插件选项接口
interface ExternalLinkRedirectOptions {
  internalDomains?: string[];
  redirectPath?: string;
  urlParamName?: string;
}

const external_link_redirect = (options: ExternalLinkRedirectOptions = {}) => ({
  name: "external-link-redirect",
  extendsMarkdown: (md: Markdown) => {
    md.core.ruler.after("inline", "external_link_redirect", (state) => {
      const tokens = state.tokens;
      // 从选项中获取内部域名和重定向路径，提供默认值
      const internalDomains = options.internalDomains || [];
      const redirectPath = options.redirectPath || "/go.html";
      const urlParamName = options.urlParamName || "url";

      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (token.type === "inline" && token.children) {
          token.children.forEach((child) => {
            if (child.type === "link_open") {
              const hrefIndex = child.attrIndex("href");
              if (hrefIndex >= 0 && child.attrs) {
                const hrefAttr = child.attrs[hrefIndex];
                const href = hrefAttr[1];
                if (/^https?:\/\//i.test(href)) {
                  let isInternalLink = false;
                  try {
                    const hrefUrl = new URL(href);
                    isInternalLink = internalDomains.some(
                      (domain) =>
                        hrefUrl.hostname === domain ||
                        hrefUrl.hostname.endsWith(`.${domain}`)
                    );
                  } catch (e) {
                    console.error("Invalid URL:", href, e);
                  }

                  if (!isInternalLink) {
                    try {
                      hrefAttr[1] = `${redirectPath}?${urlParamName}=${encodeURIComponent(
                        href
                      )}`;
                    } catch (e) {
                      console.error("Error encoding URL:", href, e);
                      hrefAttr[1] = `${redirectPath}?${urlParamName}=${href}`; // 回退到不编码的 URL
                    } finally {
                      child.attrSet("target", "_blank");
                      child.attrSet("rel", "noopener noreferrer");
                    }
                  }
                }
              }
            }
          });
        }
      }
    });
  },
});

export default external_link_redirect;
