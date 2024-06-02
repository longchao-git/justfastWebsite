<template>
    <div class="articles">
        <div v-html="articlesContent"></div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    components: {},
    data() {
        return {
            articlesContent: '<h1 style="color: red;" >我是内容记录</h1>',
        };
    },

    async fetch() {},
    methods: {},
    mounted() {},
};
</script>
<style>
.main-content {
    background-color: #ffffff;
    /* padding: 24px 0; */
}
</style>
<style scoped lang="scss">
.articles {
    width: 80%;
    min-height: 70vh;
    margin: 0 auto;
    padding: 24px 0;
}

/*中屏幕*/
@media screen and(max-width: $big-pc-width) {

}

@media screen and (max-width: $pad-max-width) {

}

@media screen and (max-width: $phone-max-width) {

}
</style>
