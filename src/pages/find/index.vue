<!--  -->
<template>
  <div class='page app bgf' @click="actionShow = false;sendShow=false">
      <div v-if="news.newslist != '' ||news.newslist != '[]' ">
      <div   class="find-wrapper p-a-2 find-list" v-for="(items,index) in news.newslist" :key="items.newsid">
          <i-row i-class=" ">
            <i-col span="4" i-class="col-class ">
                <img class="find-img" :src="items.strTitleUrl" alt="">
            </i-col>
            <i-col span="20" i-class="col-class p-l-1">
                <div class="find-header clearfix">
                    
                    <h4 class="font-color-main font-title bold text-oh fl find-header-1 p-r-1">{{items.strText}}</h4>
                    <p class="border p-x-1 text-oh fl find-header-2">公司</p>
                   
                    <button class="font-color-main text-oh fr find-header-3 text-right shareBtn" open-type="share" :data-id="items.id" :data-strTitle="items.strTitle" :data-img="items.strTitleUrl">转发</button>

                </div>
                <div class="find-body">
                    <!-- 文章 -->
                    <div class="artical bg m-t-1">
                        <i-row i-class="p-a-1 " @click="detailArtical(items.id,items.strTitle)">
                            <i-col span="5">
                                <img class="artical-img" :src="items.strTitleUrl" alt="">
                            </i-col>
                            <i-col span="19">
                                <p class="font bold artical-cont text-oh-2 p-l-1 ">
                                    {{items.strTitle}}
                                </p>
                            </i-col>
                        </i-row>
                    </div>
                </div>
                <div class="find-footer">
                    <div class="font-sub clearfix">
                         <span class="find-time fl p-y-1">{{items.dCreateTime}}</span>
                        <!-- <div class="find-action fr p-a-1 " @click.stop="actionShow = !actionShow">
                            <i-icon type="message_fill" size="22" class="msg-icon" />
                            
                            <div class="find-action-c clearfix  radius oh" v-show="actionShow" >
                                <div class="fl center-a p-y-1"><i-icon class="m-r-1" type="like" size="18"/>赞</div>
                                <div class="fl center-a p-y-1" @click.stop="comment"><i-icon  class="m-r-1" type="brush" size="18" />评论</div>
                            </div>
                        </div> -->
                    </div>
                   <!-- <div class="p-a-1 bg">
                       <div class="link-num font-color-main p-b-1">
                           <i-icon class="m-r-1 font-color-main link-num-icon" type="like" size="18"/>
                           董小姐, 董小姐, 董小姐, 董小姐, 董小姐, 董小姐, 董小姐, 董小姐, 董小姐, 董小姐, 董小姐,
                       </div>
                       <div class="find-comment p-t-1">
                           <div class="find-comment-lsit ">
                                <div class="find-comment-name  font-color-main ">
                                    董小姐
                                </div>
                                 <p class="font font-color-title">
                                     帅哥约吗？
                                 </p>
                           </div>
                       </div>
                   </div> -->
                </div>
            </i-col>
           
        </i-row>
          
      </div>
      </div>
      <div v-else class="text-center m-a-2">空空余也！</div>
      <div class="send-comment clearfix p-x-2 p-b-1" v-if="sendShow" @click.stop>
        
              <div class="send-comment-inp border fl m-r-1">
                 <input class='send-comment-input p-x-1' :value="sendValue" type="text" left  focus=true confirm-type='发送' @change="psotComment"/>
                </div>
          <div class="font font-color-main fl  send-comment-inp-btn center-a border" @click="psotComment">
             发送
              
          </div>         
      </div>
      <i-divider v-if="tip" content="已经没有更多了！"></i-divider>

  </div>
</template>

<script>
import api from '@/utils/api'
import {addEditLog} from '@/http'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      actionShow: false,
      sendValue: '',
      sendShow: false,
      sharePara: {ab: 'aad'},
      page: 1,
      news: {
        toplist: [],
        newslist: []
      },
      tip: false,
      par: {
        $rowIndex: 0
      }
    }
  },
  onShareAppMessage (e) {
    console.log(e)

    var id = e.target.dataset.id
    var artTitle = e.target.dataset.strTitle
    var img = e.target.dataset.img
    var para = {id: id, title: '公司动态详情', type: 'share'}
    var title = '转发' + artTitle + '文章'
    return {
      title: '转发文章',
      imageUrl: img,
      path: '/pages/transfer/main?shareOpenId=' + this.shareOpenId + '&target=/pages/advisoryDetails/main' + '&para=' + para,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {

      }
    }
  },
  onPullDownRefresh () {
    this.news.newslist = []
    this.par['$rowIndex'] = 0
    this.getData()
  },
  onReachBottom (e) {
    wx.showLoading({
      title: '玩命加载中'
    })
    this.getData()
    wx.hideLoading()
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
    this.addFindeLog()
    wx.hideShareMenu()
    this.getData()
  },

  methods: {
    async addFindeLog () {
      var Details = this.userInfo.strName + '查看了' + this.shareCardInfo.strName + '的公司动态'

      var paramData = {'Name': '公司动态', 'Type': '108', 'Details': Details, 'Controller': 'find', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}

      await addEditLog(paramData)
    },
    async getData () {
      var _this = this
      this.par['$rowIndex']++
      const res = await api.get_PropagandaColumn(this.par)
      const dgData = res.dgData

      dgData.map(item => {
        _this.news.newslist.push(item)
      })

      wx.stopPullDownRefresh()
      wx.hideLoading()
    },
    async detailArtical (id, artTitle) {
      this.$router.push({ path: '/pages/advisoryDetails/main', query: { id: id, title: '公司动态详情' } })
      var Details = this.userInfo.strName + '查阅了' + this.shareCardInfo.strName + '公司文章' + artTitle

      var paramData = {'Name': '公司动态详情', 'Type': '109', 'Details': Details, 'Controller': 'find', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}

      await addEditLog(paramData)
    },
    comment () {
      this.actionShow = false
      this.sendShow = true
    },
    psotComment () {
      const val = this.sendValue
      if (!val) {
        return false
      }
    }

  }

}
</script>
<style lang='scss' scoped>
.app{
    background: #fff;
    min-height: 100vh;
}
.find-img{
    width: 100%;
    height: 50px;
}
.find-list{
    border-bottom: 1px solid #dddee1;
}
.find-header-1{
    max-width: 50%;
}
.find-header-2{
     max-width: 25%;
}
.find-header-3{
     max-width: 25%;
}
.artical-img{
    width: 100%;
    height: 40px;
}
.find-action{
    position: relative;
    .find-action-c{
        position: absolute;
        width: 140px;
        top: 0;
        left: -145px;
        height: 36px;
        
        // line-height: 36px;
        background: #595959;
        color: #fff;
        div{
            width: 50%;
            text-align: center;
        }
        div:first-child{
            border-right: 1px solid #262626;
        }
    }
}
.msg-icon{
    margin-right: -8px;
}
.link-num-icon{
    position: relative; 
    top:-2px;
}
.link-num{
    vertical-align: middle;
}
.find-comment{
    border-top:1px  solid #dddee1;
       background: #fff;
}
.find-comment-lsit{
    display: flex;
}
.find-comment-name::after{
    content: '：';
    position: relative;
    right: 0;
    top: 0;
    display: inline-block;
    height: 100%;
    color: #1c2438;
}
.send-comment-inp{
    width:calc( 80% - 16px);
    max-height: 44px;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
 
 input{
    height: 44px;
    line-height: 44px; 
 }
}

.send-comment-inp-btn{
    width: 20%;
    height: 44px ;
    line-height: 44px;

}
.send-comment{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9;
    background: #fff;
}
.shareBtn{
    background-color:transparent;
    line-height: 22px;
    border:1px solid #fff;
    font-size: 12px;


}
</style>