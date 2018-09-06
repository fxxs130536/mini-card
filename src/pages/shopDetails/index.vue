<!--  -->
<template>
  <div class='page app fixed'>
      <header class="banner bgf p-a-2 m-b-1">
        
           
        <!-- 滚动顶部菜单 -->
        <nav  class="top-bar p-x-2" v-if="topBarShow">
          <!-- <div class="top-bar-l fl text-oh  font-color-sub">加推科技商城</div> -->
          <div class="top-bar-r font-color-sub fr">
            <i-icon class="p-a-1" type="publishgoods_fill" size="24"/>
              <i-icon class="p-a-1" type="mine" size="24"/>
              <i-icon class="p-a-1" type="share" size="24"/>
          </div>
        </nav>

        <swiper :indicator-dots="indicatorDots"
            :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="#fff" indicator-active-color="#2d8cf0" class="swiper radius oh">
            <block>
            
                <swiper-item>
              
                <image  :src="products.CoverImage" class="slide-image " width="100%" height="100%"/>
                </swiper-item>
            </block>
        </swiper>
            <div class="nav-right clearfix">
              <i-icon class="center-a" type="publishgoods_fill" size="22"/>
                 <i-icon class="center-a" type="mine" size="22"/>
              <i-icon class="center-a" type="share" size="22"/>
           
            </div>
            <div class=" font-title text-oh-2 bold m-t-2 m-b-1">
               {{products.Name}}{{'('+products.ProductDetails+')'}}
            </div>
          <div class="header-b clearfix">
              <p class="fl red bold">¥&nbsp;{{products.SalePrice}}</p>
              <!-- <p class="fr font-sub">运费：包邮</p> -->
          </div>
        </header>
        <div class="details bgf">
            <h4 class="bold font-title text-center p-y-1 details-t ">商品详情</h4>
            <div class="p-x-2">
                <slideFull :imgUrls='imgUrls' :sildeModelShow=false></slideFull>
            </div>
        </div>
        <div class="tabBar">          
            <i-row>
                <i-col span="6" i-class="col-class">
                    <div class="center-a tabBar-itmes" @click="goHome">
                    <i-icon type="homepage" size="22"/>
                    <p>商城首页</p>
                     </div>
                </i-col>
                <i-col span="18" i-class="col-class">
                    <button class="center-a tabBar-itmes redb" open-type="contact">
                        
                        <i-icon type="customerservice" size="22"/>
                        <p>咨询</p>
                    </button>
                    
                </i-col>
                
            </i-row>
           

        </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import { mapGetters, mapActions } from 'vuex'
import slideFull from '@/components/slideFull'
export default {
  data () {
    return {
      topBarShow: false,
      imgUrls: [
        // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      products: ''
    }
  },
  onPageScroll (event) {
    const scrollTop = event.scrollTop
    if (scrollTop > 150) {
      this.topBarShow = true
    } else {
      this.topBarShow = false
    }
  },
  components: {
    slideFull
  },

  computed: {
    ...mapGetters({
      shareCardInfo: 'shareCardInfo',
      shareOpenId: 'shareOpenId',
      openId: 'openId',
      userInfo: 'userInfo'
    })
  },

  mounted () {
    this.topBarShow = false
    this.getDetailsInfo()
  },

  methods: {
    goHome () {
      console.log(1)
      this.$router.go(1)
    },
    async getDetailsInfo () {
      var id = this.$route.query.id

      var data = {'@CompanyId': this.shareCardInfo.CompanyId, '@ProductId': id}
      var res = await api.get_Product_info(data)
      console.log(res)
      this.products = res.dgData[0]
      this.imgUrls = res.dgData[0].ImageArray
    }

  }
}
</script>
<style lang='scss' scoped>

.banner{
  width: 100%;

  img{
    width: 100%;
    height: 100%;
  }
  .nav-right{
    position: absolute;
    right: 32px;
    top:32px;
    i-icon {
      margin-left: 8px;
      float: left;
      color: #fff;
      background: rgba(0, 0, 0, 0.2);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      z-index: 1;
    }
    
  }
}
.top-bar{
  position: fixed;
  top:0;
  left: 0;
  height:44px ;
  line-height: 44px;
  width: 100%;
  background: #e8e8e8;
  z-index: 9;

}
.top-bar-l{
  max-width: 60%;
  font-size: 16px;
}
.swiper {
  width: 100%;
  height: 350px;
  .slide-image {
    width: 100%;
    height: 350px;
  }
}
.details-t{
    border-bottom: 1px solid #dddee1;
} 

.redb{
color: #fff;
background: #f5222d;
border-radius: 0;
}
</style>