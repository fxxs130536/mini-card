<!--  -->
<template>
  <div class='page app'>
      <swiper :indicator-dots="indicatorDots"
            :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="#fff" indicator-active-color="#2d8cf0" class="swiper">
            <block v-for="(itmes,index) in imgUrls" :key="index" >
                <swiper-item>
                <image  :src="itmes" class="slide-image" width="100%" height="100%"/>
                </swiper-item>
            </block>
        </swiper>
        <div class="web-wrapper">
        <div class="title bg font-title p-x-2 p-y-1 font-color">
                    公司介绍
                </div>
                <div class="web-cont p-a-2 bgf m-a-2">
                    <p class="font-title">加推</p>
                    <p class="font-title">致力于提升企业销售效率</p>
                    <p class="font">全球智能</p>
                    <span>这是图片</span>
                </div>
        </div>
        <div class="web-wrapper">
            <div class="title bg font-title p-x-2 p-y-1 font-color">
                    产品介绍
                </div>
                <div class="web-cont p-a-2 bgf m-a-2">
                    <p class="font-title">不至于领先</p>
                    <p class="font-title">致力于提升企业销售效率</p>
                    <p class="font">全球智能</p>
                    <span>这是图片</span>
                </div>
        </div>
        <!-- 企业咨询 -->
         <div class="web-wrapper">
            <div class="title bg font-title p-x-2 p-y-1 font-color">
                    企业咨询
            </div>
           
            <ul class="m-l-2 tem-list">
                <li class="tem-items p-y-2">
                    <div class="tem-items-img">
                    <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
                        
                    </div>
                    <div class="tem-items-r p-x-1" @click="artical">
                            <p class="font-title m-b-2">
                                电商玩法升级， 电商玩法升级， 电商玩法升级， 电商玩法升级， 电商玩法升级，
                            </p>
                            <span class="font">2018-07-20</span>
                    </div>
                </li>
            </ul>
        </div>
         <!-- 公司视频 -->
         <div class="web-wrapper">
            <div class="title bg font-title p-x-2 p-y-1 font-color">
                    公司视频
            </div>           
            <video class="video"  src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"  danmu-btn=false  controls objectFit ="fill" show-fullscreen-btn></video>
        </div>
        <!-- 核心成员 -->
         <div class="web-wrapper">
            <div class="title bg font-title p-x-2 p-y-1 font-color">
                    核心成员
            </div>           
           <i-row :type="flex" i-class="teams m-x-1 m-y-2">
            <i-col :span="12" i-class="col-class m-b-2 p-x-1">
                 <div class="teams-img">
                            <img class="" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
                    </div>
                    <h4 class="font-title teams-name">刘德华</h4>
                    <p class="teams-post font-title">打扫厕所</p>
                    <div class="teams-divider m-y-1"></div>
                    <p class="teams-p">前微信扫地王</p>
                    <p class="teams-p">前阿里挑粪王前阿里挑粪</p>
                    <p class="teams-p">前阿里挑粪王前阿里挑粪王</p>
            </i-col>
            <i-col :span="12" i-class="col-class m-b-2 p-x-1">
                 <div class="teams-img">
                            <img class="" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
                </div>
                <div class="teams-r p-x-1">
                    <h4 class="font-title teams-name">刘德华</h4>
                    <p class="teams-post font-title">打扫厕所</p>
                    <div class="teams-divider m-y-1"></div>
                    <p class="teams-p">前微信扫地王</p>
                    <p class="teams-p">前阿里挑粪王前阿里挑粪</p>
                    <p class="teams-p">前阿里挑粪王前阿里挑粪王</p>
                </div>
               
            </i-col>

             <i-col :span="12" i-class="col-class m-b-2 p-x-1">
                 <div class="teams-img">
                            <img class="" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
                </div>
                <div class="teams-r p-x-1">
                    <h4 class="font-title teams-name">刘德华</h4>
                    <p class="teams-post font-title">打扫厕所</p>
                    <div class="teams-divider m-y-1"></div>
                    <p class="teams-p">前微信扫地王</p>
                    <p class="teams-p">前阿里挑粪王前阿里挑粪</p>
                    <p class="teams-p">前阿里挑粪王前阿里挑粪adadada王</p>
                </div>
               
            </i-col>
    </i-row>
        </div>
        <!-- 我们正在寻找 -->

         <div class="web-wrapper">
            <div class="title bg font-title p-x-2 p-y-1 font-color">
                    我们正在寻找
            </div>
              <div class="web-cont  bgf m-a-2 radius">
                <i-row i-class="look-list p-x-1  p-y-2">
              
                <i-col span="12" i-class="col-class look-items p-x-1 m-b-2" v-for="(items,index) in 4" :key="index">
                    <div class="radius look-wrapper center-a" :style="{ background:'#ed3f14' }">
                        <div class="">
                        <p>拥有丰富</p>
                        <p>企业资源</p>
                        <p>渠道合作伙伴</p>
                        </div>
                        
                    </div>                 
                </i-col> 
                
                 
            </i-row>
            </div>            
        </div>   
        <!-- 服务客户 -->
        
         <div class="web-wrapper">
            <div class="title bg font-title p-x-2 p-y-1 font-color">
                    服务客户
            </div>
              <div class="web-cont  bgf m-a-2 radius p-y-2">
                  <p class="font-title bold">全国30+行业</p>
                  <p class="font-title bold">700+品牌已选择加推</p>
                   <i-row i-class="look-list p-x-1  p-y-2 server-lsit">
              
                <i-col span="6" i-class="col-class look-items p-x-1 m-b-2 server-items" v-for="(items,index) in 4" :key="index">
                             <div class="radius server-wrapper">
                                 <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
                            </div>   
                </i-col> 
                
                 
            </i-row>
            </div>
        </div>
        <!-- 加入我们 -->
        
         <div class="web-wrapper">
            <div class="title bg font-title p-x-2 p-y-1 font-color">
                    加入我们
            </div>
            <div class="web-cont  bgf p-a-2 radius">
            <p class="font-title bold m-b-1">如果你有手有脚有颜值，会撸代码欢迎入坑！！！</p>
             <i-row  i-class="join-list ">
                 <i-col span="24" i-class="col-class join-items border p-x-1 p-y-2 center-y m-b-2" @click="joinUs"> 
                        <div class="join-l fl">
                            <h4 class="bold">java高级工程师</h4>
                            <div class="join-ask">
                                <span>薪资：20000</span>
                                <span>经验：5</span>
                                 <span>学历：本科</span>
                            </div>
                        </div>
                        <div class="join-r fr text-right">
                            <i-icon type="enter" color="#495060" size="22" />
                        </div>
                 </i-col> 

            </i-row>
            </div>
            </div>
            <!-- 联系我们 -->
             <div class="web-wrapper">
                <div class="title bg font-title p-x-2 p-y-1 font-color">
                        联系我们
                </div>
            
                <i-button @click="call('05780000888')" type="primary" size="default" i-class="m-x-2 bold font-size-title" >05780000888</i-button>
            </div>
            <!-- 公司地址 -->
             <div class="web-wrapper bg">
                <div class="title bg font-title p-x-2 p-y-1 font-color-sub">
                        公司地址
                </div>
            
                <div class="p-a-2">
                    
                    <p class="font-title font-color-sub center-y ">
                        <i-icon type="coordinates_fill" color="#80848f" size="22"/>
                        广东省佛山市阿呆多久单ad阿达i
                    </p>
                    <footer class="text-center m-t-2 font-sub">
                        <img class="footer-logo" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
                        <p >印生活技术支持</p>
                    </footer>
                </div>
            </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    call (str) {
      wx.makePhoneCall({
        phoneNumber: str
      })
    },
    artical (obj) {
      this.$router.push({ path: '/pages/advisoryDetails/main', query: { id: 1, title: '咨询详情' } })
    },
    joinUs () {
      this.$router.push({ path: '/pages/advisoryDetails/main', query: { id: 1, title: '招聘详情' } })
    }
  }
}
</script>
<style lang='scss' scoped>

.teams{
    width: 100%;
}
.swiper {
  width: 100%;
  height: 350px;
  .slide-image {
    width: 100%;
    height: 350px;
  }
}
.title {
  background: #e9eaec;
}
.web-cont {
  p,
  span {
    text-align: center;
  }
}
.tem-items{
    display: flex;
    border-bottom: 1px solid #dddee1;
}
.tem-items-img{
    flex: 1;
    img{
        width:120px;
        height: 80px;
    }
}
.tem-items-r{
    flex: 2;
    box-sizing: border-box;
    p{
        font-weight: bold;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
   p,span{box-sizing: border-box;}
}
.video{
    width: 100%;
}
.teams-img{
    width: 100%;
    img{
          width: 100%;
          height: 163px;
    }
}
.col-class{
    box-sizing: border-box;
}
.teams-name{
    font-weight: bold;
    font-size: 16px;
}
.teams-divider{
    width: 50%;
    border-bottom: 1px solid #dddee1
}
.look-items{
   
   
    .look-wrapper{
         width: 100%;
        display: flex;
        align-items: center;
         height: 150px;
        color: #fff;
}
}
.server-wrapper{
    img{
        
            width: 100%;
            height: 50px;
    }
}
.join-items{
    width: 100%;
}
.join-l{
    width: 80%;

}
.join-r{
    width:20% ;
}
.join-ask{
    span{
        margin-left:12px; 
    }
    span:first-child{
        margin-left:0; 
    }
}
.footer-logo{
    width: 80px;
    height: 40px;
}
</style>