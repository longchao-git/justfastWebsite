<template>
  <div class='detail_container'>
    <expansion-market :lists='lists' />
    <div class='flex flex-a-c flex-j-c mt3' style='cursor: pointer' @click='bindTapCilck'>
      <span class=' font18 '
            style='font-weight: 500;color: #ee8080'>{{ morehidden ? $t('creation.title') : $t('creation.oneTitle') }}</span>
    </div>
  </div>
</template>

<script>
import config from '../config';
import { mapGetters, mapMutations } from 'vuex';

import ExpansionMarket from '@/components/cloudSales/expansionMarket';

export default {
  components: {
    ExpansionMarket
  },
  data() {
    return {
      page: 1,
      lists: [],
      keywords: '',
      morehidden: true
    };
  },

  async fetch() {
  },
  methods: {
    ...mapMutations(['SET_KEYWORDS']),
    handleAuthor() {
      window.location.href = '/authorIndex';
    },
    bindTapCilck() {
      this.page++;
      this.shopSearch();
    },
    shopSearch() {
      this.morehidden = true;

      const params = {
        data: { 'page': this.page, 'title': this.keywords,lat:localStorage.getItem('LAT') || 40.4202472,lng:  localStorage.getItem('LNG') || -3.7160397}
      };

      this.$axios.post('/client/waimai/shop/search', params).then(res => {
        if (res.items.length == 0) {
          this.morehidden = false;
        } else {
          this.morehidden = true;
        }
        if (this.page == 1) {
          this.lists = res.items;
        } else {
          this.lists = this.lists.concat(res.items);
        }
      }).catch(err => {
        this.$message.info(err.message);
      });
    }
  },
  computed: {
    ...mapGetters({
      cityId: 'cityId',
      locale: 'getLocale'
    })
  },
  watch: {
    cityId(newVal, oldVal) {
      this.shopSearch();
    },
    locale(newVal, oldVal) {
      this.shopSearch();
    }
  },
  mounted() {
    if (this.$route.query.keywords) {
      this.keywords = this.$route.query.keywords;
      this.SET_KEYWORDS(this.$route.query.keywords);
    }
    this.shopSearch();
  }
};
</script>

<style scoped lang='scss'>
.detail_container {
  margin: 0 auto;
  padding: 24px 0;
  background: white;
}

</style>
