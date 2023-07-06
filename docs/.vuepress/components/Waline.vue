<template>
    <div id="waline"></div>
</template>
<script>
import Waline from "@waline/client";
const locale = { placeholder: "欢迎留言。(填写邮箱可在被回复时收到邮件提醒)" };
export default {
    name: "Waline",
    data() {
        return {
            walineTemplate: "", // 存储初始化的评论区模板
            firstLoad: true, // 是否第一次初始化评论区
            isLocal: false, // 是否是本地环境
        };
    },

    mounted() {
        // 判断是否是本地调试
        this.isLocal = window.location.hostname.includes("localhost");
        // 第一次打开网站且不是首页，初始化评论区
        // 不初始化评论区的页面：首页、404、分类、归档、标签页面；comment: false 的文章页
        if (
            (this.$frontmatter.comment == undefined ||
                this.$frontmatter.comment) &&
            this.$route.path != "/" &&
            this.$route.path != "/archives/" &&
            this.$route.path != "/tags/" &&
            this.$route.path != "/categories/" &&
            !this.isFourZeroFour(this.$route)
        ) {
            // 延迟初始化评论区，防止加载过快导致评论区初始化失败
            const t = setTimeout(() => {
                this.mountVisitorPage();
                clearTimeout(t);
            }, 500);
        }
        // 在首页、标签页、分类页时，初始化 waline 并文章加载阅读数
        if (
            this.$route.path == "/categories/" ||
            this.$route.path == "/tags/" ||
            this.$route.path == "/"
        ) {
            const t = setTimeout(() => {
                this.mountVisitorList();
                this.deleteComment();
                clearTimeout(t);
            }, 500);
        }
    },

    watch: {
        $route(to, from) {
            // 404、归档页面，不做回应
            // 首页、分类、标签页面，显示文章阅读量
            if (
                this.$route.path == "/categories/" ||
                this.$route.path == "/tags/" ||
                this.$route.path == "/"
            ) {
                const t = setTimeout(() => {
                    this.mountVisitorList();
                    clearTimeout(t);
                }, 500);
                return;
            } else if (
                to.path == from.path ||
                this.isFourZeroFour(to) ||
                this.$route.path == "/archives/"
            ) {
                return;
            }
            // 通过 frontmatter 的 comment 判断文章页是否需要评论区
            if (
                this.getCommentByFrontmatter(to) == undefined ||
                this.getCommentByFrontmatter(to)
            ) {
                const t = setTimeout(() => {
                    // 是否是第一次初始化过 waline
                    if (this.firstLoad) {
                        // 初始化 waline，并加载评论区
                        this.walineInit();
                        this.firstLoad = false;
                    } else {
                        // 仅加载评论区，刷新阅读数，不再初始化 waline
                        this.mountVisitorPage();
                        this.loadWaline();
                    }
                    clearTimeout(t);
                }, 500);
            } else {
                // 如果文章页不需要评论区，且初始化过 waline，则删除评论区
                if (!this.firstLoad) {
                    this.deleteComment();
                }
            }
        },
    },

    methods: {
        // 初始化 waline
        walineInit() {
            this.vWaline = Waline({
                el: "#waline",
                serverURL: "https://waline-1-h6460307.deta.app",
                visitor: this.isLocal ? false : true,
                dark: "body.theme-mode-dark",
                locale,
            });
            this.loadWaline();
        },
        // 更新信息
        updateInfo() {
            this.vWaline.update();
        },

        /**************** 评论区功能 ****************/
        // 加载 waline 评论区
        loadWaline() {
            let page = document.getElementsByClassName("page")[0];
            let comment = document.getElementById("waline");
            // 判断是否初始化过 waline
            if (this.firstLoad) {
                // 存储评论区模板
                this.walineTemplate = comment;
            } else {
                // 从存储的评论区模板中提取评论区
                comment = this.walineTemplate;
            }
            // 插入评论区
            page ? page.appendChild(comment) : "";
            // 更新评论区
            this.updateInfo();
        },
        // 判定当前页面是不是 404
        isFourZeroFour(route) {
            let flag = true;
            this.$site.pages.forEach((item) => {
                if (item.path == route.path) {
                    flag = false;
                }
            });
            return flag;
        },
        // 获取 frontmatter 的 comment
        getCommentByFrontmatter(route) {
            let comment = "";
            this.$site.pages.forEach((item) => {
                if (item.path == route.path) {
                    comment = item.frontmatter.comment;
                }
            });
            return comment;
        },
        // 删除评论区
        deleteComment() {
            let comment = document.getElementById("waline");
            comment ? comment.parentNode.removeChild(comment) : "";
        },

        /**************** 访问量功能 ****************/
        // 在文章列表加载阅读数
        mountVisitorList() {
            // 获取当前页面的所有文章列表
            const parentElement = document.querySelectorAll(
                ".post-list > div > .post >  .title-wrapper"
            );
            // 遍历文章列表
            parentElement.forEach((element) => {
                // 获取文章 a 标签中的 href 属性
                let a = element.querySelector("h2 > a");
                // 生成模板
                let template = document.createElement("span");
                template.title = "阅读数量";
                template.className = "iconfont icon-chakanshu";
                template.innerHTML = `<span class="waline-visitor-count" id="${a.getAttribute(
                    "href"
                )}"><span title="正在获取..." class="loading iconfont icon-lodaing"></span></span>`;
                // 挂载模板
                let target = element.querySelector(".article-info");
                if (!this.isMountedView(target)) {
                    target.appendChild(template);
                }
            });
            // 是否初始化过 waline
            if (this.firstLoad) {
                // 添加 loading 效果
                let style = document.createElement("style");
                style.innerHTML = `@keyframes turn {
                    0% {
                    transform: rotate(0deg);
                    }
                    100% {
                    transform: rotate(360deg);
                    }
                }
                .loading {
                    display: inline-block;
                    animation: turn 1s linear infinite;
                    -webkit-animation: turn 1s linear infinite;
                }`;
                document.head.appendChild(style);
                this.walineInit();
                this.firstLoad = false;
            } else {
                this.updateInfo();
            }
        },
        // 在文章页加载阅读数
        mountVisitorPage() {
            // 获取元素
            const parentElement = document.querySelector(
                ".articleInfo-wrap > .articleInfo > .info"
            );
            if (parentElement) {
                // 生成模板
                let template = document.createElement("div");
                template.title = "阅读数量";
                template.className = "date iconfont icon-chakanshu";
                template.style.float = "left";
                template.style.marginLeft = "20px";
                template.style.fontSize = "0.8rem";
                template.innerHTML = `<span style="margin-left: 3px;" href="javascript:;" class="waline-visitor-count" id="${this.$route.path}"><span title="正在获取..." class="loading iconfont icon-lodaing"></span></span>`;
                // 挂载模板
                if (!this.isMountedView(parentElement)) {
                    parentElement.appendChild(template);
                } else {
                    let element =
                        parentElement.querySelector(".icon-chakanshu");
                    element.innerHTML = `<span href="javascript:;" class="waline-visitor-count" id="${this.$route.path}"><span title="正在获取..." class="loading iconfont icon-lodaing"></span></span>`;
                }
            }
            // 是否初始化过 waline
            if (this.firstLoad) {
                // 添加 loading 效果
                let style = document.createElement("style");
                style.innerHTML = `@keyframes turn {
                    0% {
                    transform: rotate(0deg);
                    }
                    100% {
                    transform: rotate(360deg);
                    }
                }
                .loading {
                    display: inline-block;
                    animation: turn 1s linear infinite;
                    -webkit-animation: turn 1s linear infinite;
                }`;
                document.head.appendChild(style);
                this.walineInit();
                this.firstLoad = false;
            }
        },
        // 判定元素是否已经挂载
        isMountedView(parentElement) {
            var element = parentElement.querySelector(".icon-chakanshu");
            if (element) {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>
