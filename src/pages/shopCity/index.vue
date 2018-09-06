<!--  -->
<template>
  <div class='page app'>
      <div class="city-wrapper">
        
            <transition name="fade">
                <nav  class="top-bar p-x-2" v-if="topBarShow">
                  <div class="top-bar-l fl text-oh  font-color-sub">{{shareCardInfo.strCompany}}商城</div>
                  <div class="top-bar-r font-color-sub fr">
                    <i-icon class="p-a-1" type="publishgoods_fill" size="24"/>
                      <i-icon class="p-a-1" type="mine" size="24"/>
                      <i-icon class="p-a-1" type="share" size="24"/>
                  </div>
                </nav>
            </transition>
          <header class="banner">
            <img src="http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" alt="">
            <div class="nav-right clearfix">
              <i-icon class="center-a" type="publishgoods_fill" size="22"/>
                 <i-icon class="center-a" type="mine" size="22"/>
              <i-icon class="center-a" type="share" size="22"/>
           
            </div>
          </header>
          <div class="shopTitle p-a-1  bgf">
            <div class="shop-logo center-a  radius">
              <img class="radius" :src="shareCardInfo.strAvatarUrl" alt="">
            </div>
            <div  class="shop-name">
              <h4 class="font-title bold">{{shareCardInfo.strCompany}}商城</h4>
              <p><i-icon type="task_fill" color="#2d8cf0" size="20"/>&nbsp;认证企业</p>
            </div>
          </div>
          <!-- 商品列表 -->
          <div class="shop-list">
            <ul class="p-y-2 p-x-1 clearfix">
              <li class="shop-items oh radius bgf fl m-b-2" @click="goDetails(items.Id,items.Name)" v-for="(items,index) in products" :key="items.id">
                <div class="shop-top center-a">
                  <img class="shop-img" :src="items.CoverImage" alt="">
                  <div class="shop-tip font-title center-a p-x-1">推荐产品</div>
                </div>
                <div class="p-a-1">
                      <p  class="shop-desc text-oh-2 font-title">{{items.Name}}{{'('+items.ProductDetails+')'}}</p>
                      <p class="shop-price  ">¥&nbsp;{{items.SalePrice}}</p>
                </div>
            
              </li>
            </ul>
          </div>
      </div>
      <i-divider content="我是有底线的！"></i-divider>
  </div>
</template>

<script>
import api from '@/utils/api'
import {addEditLog} from '@/http'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      topBarShow: false,
      products: ''
    }
  },
  onPageScroll (event) {
    const scrollTop = event.scrollTop
    if (scrollTop > 200) {
      this.topBarShow = true
    } else {
      this.topBarShow = false
    }
  },
  onPullDownRefresh: function () {
    this.productList()
    wx.stopPullDownRefresh()
  },
  components: {},

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
    this.addShopLog()
    this.productList()
  },

  methods: {
    async addShopLog () {
      var Details = this.userInfo.strName + '查看了' + this.shareCardInfo.strName + '的公司商城'

      var paramData = {'Name': '查看了商城', 'Type': '106', 'Details': Details, 'Controller': 'find', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}

      await addEditLog(paramData)
    },
    async goDetails (id, name) {
      this.$router.push({path: '/pages/shopDetails/main', query: {id: id}})
      var Details = this.userInfo.strName + '查看了' + this.shareCardInfo.strName + '公司商城的' + name

      var paramData = {'Name': '查看了产品', 'Type': '106', 'Details': Details, 'Controller': 'find', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}

      await addEditLog(paramData)
    },
    async productList () {
      var data = {'@CompanyId': this.shareCardInfo.CompanyId}

      var res = await api.get_Product_info(data)
      this.products = res.dgData

      // console.log(res)
    }
  }
}
</script>
<style lang='scss' scoped>
.banner{
  width: 100%;
  height: 160px;
  img{
    width: 100%;
    height: 100%;
  }
  .nav-right{
    position: absolute;
    right: 8px;
    top:8px;
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
.shopTitle{
  position: relative;

}
.shop-logo{
  position: absolute;
  width: 100px;
  padding: 5px;
  left: 8px;
  top:-40px;
  background: #fff;
  img{
    width: 80px;
    height: 80px;
  }
}
.shop-name{
  padding-left:116px; 
}
.shop-price{
  color:#f5222d;
}
.shop-items{
  width: calc((100% - 16px)/2);

  margin-right: 8px;
}
.shop-items:nth-child(2n){
  margin-right: 0;
  margin-left: 8px;
}
.shop-top{
  position: relative;
  width: 100%;
   height: 170px;
   border-bottom: 1px solid #dddee1;
   .shop-tip{
     position: absolute;
     top:0;
     left: 8px;
     width: 44px;
     height: 50px;
     border-bottom-right-radius: 18px;
     border-bottom-left-radius: 18px;
    color: #fff;
    background: #ff4d4f;
    line-height: 18px;
    text-align: center;

   }
}
.shop-img{
  display: block;
  width: 100%;
  max-height:170px;

  
}

</style>