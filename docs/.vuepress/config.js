const path = require("path");
module.exports = {
    title: "秋澪冬安",
    description: "个人技术博客，记录和分享各种技术知识",
    theme: "vdoing",

    // Webpack配置，生产环境使用CDN资源
    configureWebpack: (config) => {
        const NODE_ENV = process.env.NODE_ENV;
        //判断是否是生产环境
        if (NODE_ENV === "production") {
            return {
                // output: {
                //     publicPath: "https://cdn.jsdelivr.net/gh/billsaul/blog-static-files/"
                // },
                resolve: {
                    //配置路径别名
                    alias: {
                        public: path.resolve(__dirname, "./public"),
                    },
                },
            };
        } else {
            return {
                resolve: {
                    //配置路径别名
                    alias: {
                        public: path.resolve(__dirname, "./public"),
                    },
                },
            };
        }
    },

    // 修改内部的 Webpack 配置，配置loader，正常加载webp图片
    chainWebpack: (config) => {
        config.module
            .rule("url-loader")
            .test(/\.(webp)(\?.*)?$/)
            .use("url-loader")
            .loader("url-loader")
            .end();
    },

    head: [
        ["link", { rel: "icon", href: "/assets/img/favicon.ico" }],
        [
            "meta",
            {
                name: "keywords",
                content: "前端,Vue,树莓派,Linux,秋澪冬安,CSS,HTML,Ubuntu,博客",
            },
        ],
        //百度统计
        [
            "script",
            {},
            `
            var _hmt = _hmt || [];
            (function () {
                let isLocal = window.location.hostname.includes("localhost");
                if (!isLocal) {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?42a6e3794104622250cf5f06ad78bda3";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                }
            })();
            `,
        ],
        //腾讯云 前端性能监控
        ["script", { type: "text/javascript", src: "https://cdn-go.cn/aegis/aegis-sdk/latest/aegis.min.js" }],
        [
            "script",
            {},
            `
            (function () {
                let isLocal = window.location.hostname.includes("localhost");
                if (!isLocal) {
                    const aegis = new Aegis({
                        id: 'ZEYd2cva7GymOlq17q',
                        reportApiSpeed: true,
                        reportAssetSpeed: true,
                        spa: true
                    });
                }
            })();
            `,
        ],
    ],

    //主题配置
    themeConfig: {
        // bodyBgImg: [
        //     // "https://api.paugram.com/wallpaper/"
        //     "https://www.dmoe.cc/random.php"
        // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
        // bodyBgImgOpacity: 0.3, // body背景图透明度，选值 0 ~ 1.0, 默认0.5
        //导航栏
        nav: [
            { text: "🏠 主页", link: "/" },
            {
                text: "⭐ 收藏",
                link: "/pages/87b1e9/",
                items: [
                    { text: "🌐 网站", link: "/pages/87b1e9/" },
                    { text: "📦 资源", link: "/pages/c47f0e/" },
                    { text: "📝 教程", link: "/pages/f7b22f/" },
                    { text: "📐 制表符", link: "/pages/47886c/" },
                ],
            },
            {
                text: "🗂️ 索引",
                link: "/archives/",
                items: [
                    { text: "🗃️ 分类", link: "/categories/" },
                    { text: "🏷️ 标签", link: "/tags/" },
                    { text: "🗄️ 归档", link: "/archives/" },
                ],
            },
            {
                text: "🚩 个人建站",
                items: [
                    {
                        text: "原神祈愿记录",
                        link: "https://billsaul.gitee.io/genshinrecord",
                    },
                ],
            },
            { text: "📃 博客日志", link: "/pages/ef044f/" },
            { text: "ℹ️ 关于", link: "/pages/6a287c/" },
        ],
        // 自动生成结构化侧边栏
        sidebar: "structuring",
        //初始状态是否打开侧边栏，默认true
        // sidebarOpen: false,
        // 是否显示快捷翻页按钮 (此按钮是文章页左右两边的箭头按钮，小屏中不会显示。)
        pageButton: false,
        //导航栏头像
        logo: "/assets/img/logo.webp",
        //博主信息，显示在首页侧边栏
        blogger: {
            avatar: "/assets/img/head-portrait.webp",
            name: "秋澪冬安",
            slogan: "风带来故事的种子，时间使之发芽",
        },
        //社交图标，显示于博主信息栏和页脚栏
        social: {
            iconfontCssFile: "//at.alicdn.com/t/c/font_3352320_kj9yh7yo1yq.css", // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
            icons: [
                {
                    iconClass: "icon-github",
                    title: "GitHub",
                    link: "https://github.com/BillSaul",
                },
                {
                    iconClass: "icon-youjian",
                    title: "发邮件",
                    link: "mailto:MisakaMikoto@email.cn",
                },
                {
                    iconClass: "icon-gitee",
                    title: "Gitee",
                    link: "https://gitee.com/billsaul",
                },
            ],
        },
        //页脚信息
        footer: {
            createYear: 2020, // 博客创建年份
            copyrightInfo: '秋澪冬安 | <a href="https://beian.miit.gov.cn" target="_blank">蜀ICP备2022009760号-1</a> | <img src="/assets/img/beian_icon.png" style="vertical-align: text-top;margin-right: 2px;"/><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51012402000786">川公网安备51012402000786号</a>', // 博客版权信息，支持a标签
        },
        // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        lastUpdated: "上次编辑",
        // 页面风格
        pageStyle: "card",
    },
    // 设置网站语言
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 "/" 作为其路径。
        "/": {
            lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
        },
    },

    // 代码块显示行号
    // markdown: {
    //     lineNumbers: true,
    // },

    //插件配置
    plugins: [
        //图片缩放
        [
            "vuepress-plugin-zooming",
            {
                selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
                delay: 1000, //进入一个页面后，经过一定延迟后使页面中的图片支持缩放
                options: {
                    bgColor: "rgba(87, 87, 87, 0.6)",
                },
            },
        ],
        //平滑滚动
        ["vuepress-plugin-smooth-scroll"],
        //代码一键复制
        [
            "one-click-copy",
            {
                copyMessage: "复制成功",
                duration: 1000, // 提示信息显示时间
                showInMobile: false, // 是否在移动端显示，默认：false
            },
        ],
        // 最后升级时间
        [
            "@vuepress/last-updated",
            {
                transformer: (timestamp, lang) => {
                    const dayjs = require("dayjs"); // https://day.js.org/
                    return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
                },
            },
        ],
        // 注册使用组件
        [
            {
                name: "custom-plugins",
                globalUIComponents: ["WalineIndex"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
            },
        ],
        // 生成站点地图
        [
            "sitemap",
            {
                hostname: "https://www.meowpass.com",
            },
        ],
        // JSON-LD 生成模块
        require("./plugins/vuepress-plugin-jsonld"),
    ],
};
