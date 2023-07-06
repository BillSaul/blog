<template></template>

<script>
export default {
    created() {
        if (typeof this.$ssrContext !== "undefined") {
            this.$ssrContext.userHeadTags += `<script type='application/ld+json'>
            {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "${this.$page.title || this.$title}",
                "url": "${"https://www.meowpass.com" + this.$page.path}",
                "image": [
                    "https://www.meowpass.com/assets/img/head-portrait.webp"
                ],
                "datePublished": "${
                    (this.$page.frontmatter.date && new Date(this.$page.frontmatter.date).toISOString()) ||
                    (this.$page.lastUpdated && new Date(this.$page.lastUpdated).toISOString()) ||
                    new Date().toISOString()
                }",
                "dateModified": "${(this.$page.lastUpdated && new Date(this.$page.lastUpdated).toISOString()) || new Date().toISOString()}",
                "author": [{
                    "@type": "Person",
                    "name": "秋澪冬安",
                    "url": "https://www.meowpass.com"
                }]
            }
            <\/script>`;
        }
    },
};
</script>
