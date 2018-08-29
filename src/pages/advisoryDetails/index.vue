<!--  -->
<template>
  <div class='page app p-a-2'>
      <div class="artical-t font-color-title">
          {{news.strTitle}}
      </div>
      <div class="artical-company font-color-main m-y-2">
         <span>{{ news.strText}}</span><span class="time m-l-1 font-sub">{{ news.dCreateTime}}</span>
      </div>
      <div class="artical-cont">
        <rich-text :nodes="news.strContent"></rich-text>
      
      </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      show: false,
      id: null,
      title: '',
      news: {},
      relatedNews: []
    }
  },

  components: {},

  computed: {},
  created () {
  },
  mounted () {
    this.getData()
  },
  onPullDownRefresh () {
    this.getData()
  },
  methods: {

    async getData () {
      const obj = this.$route.query
      wx.setNavigationBarTitle({
        title: obj.title
      })
      var _this = this
      var par = {
        '$rowIndex': 1,
        '$id': obj.id
      }
      const res = await api.get_PropagandaColumn(par)
      console.log(res)
      var item = res.dgData[0]
      this.news = res.dgData[0]

      this.title = item.strTitle
      // this.news.newsauthor = item.dCreateTime
      // this.news.newssource = item.strName
      // this.news.detail = item.strContent
      wx.stopPullDownRefresh()
    }
  }
}
</script>
<style lang='scss' scoped>
.font-color-title{
    font-size: 16px;
    font-weight: bold;
}
</style>