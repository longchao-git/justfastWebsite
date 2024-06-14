<template>
    <div class="detail_container">
        <sales-good-util />
      <div class="flex flex-a-c flex-j-c" style="cursor: pointer">
        <span class="color-242424 font14">点击加载更多</span>
      </div>
    </div>
</template>

<script>
import config from '../config';
import { mapMutations } from 'vuex';
import salesGoodUtil from '../components/cloudSales/salesGoodUtil';

export default {
    components: {
      salesGoodUtil
    },
    data() {
        return {


        };
    },

    async fetch() {},
    methods: {
        handleAuthor(){
            window.location.href = '/authorIndex'
        }
    },
    mounted() {},
};
</script>
<style>
.main-content {
    background-color: #f5f5f5;
}
</style>
<style scoped lang="scss">
.detail_container {
    width: 90%;
    margin: 0 auto;
    padding: 24px 0;

}

</style>
