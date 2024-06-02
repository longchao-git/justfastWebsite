<template>
    <div class="cloud_sales_home p-relative">
        <template v-if="true">
            <!-- 热门VLOG -->
            <expansion-market :title="$t('home.moduleTitle')[0]"/>
            <!-- 热门游记 -->
            <expansion-market :title="$t('home.moduleTitle')[1]" />
        </template>
        <template v-else>
            <!-- tab 样式  热门VLOG 热门游记-->
            <sales-good-util />
        </template>

    </div>
</template>

<script>
import ExpansionMarket from './expansionMarket';
import SalesGoodUtil from './salesGoodUtil';

export default {
    components: {
        ExpansionMarket,
        SalesGoodUtil,
    },
};
</script>

<style lang="scss" scoped>
.cloud_sales_home {
}

/* 中屏幕*/
@media screen and(max-width: $big-pc-width) {
}

/** 平板屏幕 */
@media screen and (max-width: $pad-max-width) {
}

/** 手机屏幕 */
@media screen and (max-width: $phone-max-width) {
}
</style>
