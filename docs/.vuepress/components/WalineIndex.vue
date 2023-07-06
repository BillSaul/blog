<template>
    <component v-if="Waline" :is="Waline" />
</template>
<script>
export default {
    name: "WalineIndex",
    data() {
        return {
            Waline: null,
        };
    },
    mounted() {
        // 使用动态注册的方式，加载 Waline 核心组件
        // 详见 ==> https://v1.vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions
        import("./Waline").then((module) => {
            this.Waline = module.default;
        });
    },
};
</script>