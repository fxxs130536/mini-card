<!--  -->
<template>
  <div class='page app'>
    <i-tab-bar :current="current" @change="tabarChange" :fixed ="true" color="#2d8cf0">
        <i-tab-bar-item key="radar" icon="homepage" current-icon="homepage_fill" title="雷达">
        </i-tab-bar-item>
        <i-tab-bar-item key="person" icon="group" current-icon="group_fill" title="我"></i-tab-bar-item>

    </i-tab-bar>
    <!-- 雷达 -->
    <div class="tabar-wrapper" v-if="current == 'radar'">
         <i-row>
            <i-tabs :current="radar.current" @change="handleChange">
                <i-tab key="tab1" title="时间"></i-tab>
                <i-tab key="tab2" title="行为"></i-tab>
                <i-tab key="tab3" title="人"></i-tab>
            </i-tabs>
        </i-row>
        <div v-if="radar.current=='tab1'">
            <i-row i-class="tab1-content" v-for="(item , index) of radar.radarList" :key="index" >
                <i-col span="4" i-class="col-class">
                    <i-avatar i-class="radar-img" :src="item.strAvatarUrl" size="default" shape="square">

                    </i-avatar>
                </i-col>
                <i-col span="16" i-class="col-class">
                    <div class="radar-text">
                        <p class="radar-title">{{item.Details}}</p>
                    </div>
                </i-col>
                <i-col span="4" i-class="col-class">
                    <i-icon class="radar-icon" type="enter" size="28" color="#80848f"></i-icon>
                </i-col>
            </i-row>
        </div>
        <div class="action-list" v-if="radar.current == 'tab2'">
            <i-cell-group i-class="action-top  p-y-2">
                <i-cell title="仅七天被查看的行为统计" i-class="top-cell">
                    <i-icon class="radar-icon" type="createtask" size="28" color="#2d8cf0" slot="footer"></i-icon>
                </i-cell>
            </i-cell-group>
            <div class="center" >
                <Card :title="radar.formData[0].TypeName" :text='radar.formData[0].Number + "次"' image="http://yj.kiy.cn/Content/Images/App/assets/icon/充值流量.png"></Card>
                <Card :title="radar.formData[1].TypeName" :text='radar.formData[1].Number + "次"' image="http://yj.kiy.cn/Content/Images/App/assets/icon/字体样式.png"></Card>
                <Card :title="radar.formData[2].TypeName" :text='radar.formData[2].Number + "次"' image="http://yj.kiy.cn/Content/Images/App/assets/icon/文件.png"></Card>
                <Card :title="radar.formData[3].TypeName" :text='radar.formData[3].Number + "次"' image="http://yj.kiy.cn/Content/Images/App/assets/icon/统计.png"></Card>
            </div>
            <div class="bottom">
                <i-cell-group>
                    <i-cell i-class="bottom-list" :title="radar.formData[4].TypeName" :value="radar.formData[4].Number + '次'"  >
                        <i-icon type="like_fill" slot="icon" color="#FFC125"></i-icon>
                    </i-cell>
                    <i-cell i-class="bottom-list" :title="radar.formData[5].TypeName" :value="radar.formData[5].Number + '次'" >
                        <i-icon type="share_fill" slot="icon" color="#EE30A7"></i-icon>
                    </i-cell>
                    <i-cell i-class="bottom-list" :title="radar.formData[6].TypeName" :value="radar.formData[6].Number + '次'" >
                        <i-icon type="mobilephone" slot="icon" color="#B23AEE"></i-icon>
                    </i-cell>
                    <!-- <i-cell i-class="bottom-list" :title="radar.formData[7].TypeName" :value="radar.formData[7].Number + '次'" >
                        <i-icon type="send" slot="icon" color="#7FFF00"></i-icon>
                    </i-cell>
                    <i-cell i-class="bottom-list" :title="radar.formData[8].TypeName" :value="radar.formData[8].Number + '次'" >
                        <i-icon type="shop_fill" slot="icon" color="#C5C1AA"></i-icon>
                    </i-cell> -->
                    <!-- <i-cell i-class="bottom-list" title="查看商品" value="1次">
                        <i-icon type="shop_fill" slot="icon" color="#EEEE00"></i-icon>
                    </i-cell> -->
                </i-cell-group>
            </div>
        </div>
        <div class="action-detail" v-if="radar.current== 'tab3' ">
            <i-cell-group i-class="action-top p-y-2">
                <i-cell title="仅七天被查看的行为统计" i-class="top-cell ">
                    <i-icon class="radar-icon" type="createtask" size="28" color="#2d8cf0" slot="footer"></i-icon>
                </i-cell>
            </i-cell-group>
            <div class="action-detail-center">
                <div v-for="(item , index) in radar.formGroup" :key="index">
                    <manDetail :list="item" :keyGroup="radar.keyGroup"></manDetail>
                </div>
                
            </div>
            
        </div>

    </div>
    <!-- 我 -->
    <div class="tabar-wrapper" v-if="current == 'person'">
        <div class="me-header card-bg" :style="{ backgroundImage: 'url('+userInfo.strBackground+')' }">
          <div class="me-header-cont  p-y-2">
              <div>
                <i-row i-class="p-x-2">
                        <i-col i-class="" :span="4">
                            <i-avatar size="large" :src="userInfo.strAvatarUrl"></i-avatar>
                        </i-col>
                        <i-col i-class="p-x-1" :span="18">
                            <p class="me-title">{{userInfo.strName}}</p>
                            <p class="me-sub">{{userInfo.strPosition}}</p>

                        </i-col>
                        <i-col i-class="" :span="2">
                            <i-icon class="p-a-1" type="editor" size="22" @click="editor"/>
                        </i-col>
                    </i-row>
                    <i-divider lineColor="#dddee1"></i-divider>
                    <div class="me-b p-x-2">
                        <p class="me-title">{{userInfo.strCompany}}</p>
                        <p class="me-sub">电话：{{userInfo.strMobile}}</p>
                        <p class="me-sub">邮箱：{{userInfo.strEmail}}</p>
                    </div>
                </div>              
          </div>           
      </div>
        <div class="me-header-b bgf m-b-2">
            <i-row i-class="p-y-1 ranking">
                <i-col i-class="text-center font-color" span="8">
                    <p class="text-oh">{{userInfo.intHits}}</p>
                    <p class="center-a"><i-icon type="flag_fill" color="#f5222d" size="22"/>人气</p>
                

                </i-col>
                <i-col i-class="text-center font-color" span="8">
                    <p class="text-oh">{{userInfo.intLikes}}</p>
                    <p class="center-a "><i-icon type="praise_fill" color="#19be6b" size="22"/>点赞</p>

                </i-col>
                <i-col i-class="text-center font-color" span="8">
                    <p class="text-oh">{{userInfo.intCollects}}</p>
                    <p class="center-a"><i-icon type="collection_fill" color="#ff9900" size="22"/>收藏</p>
                </i-col>
            </i-row>
             <i-divider lineColor="#dddee1" height="4"></i-divider>
            <i-row i-class="p-x-2 ">
                <i-col i-class="font-color-sub p-y-2" span="3">简介</i-col>
                <i-col i-class="font-color p-y-2" span="21">{{userInfo.strIntro}}</i-col>
            </i-row>
        </div>
        <!-- <div class="bgf">
            <i-cell-group>
             <i-cell title="排行榜" is-link url="/pages/rankingList/main">
                 <i-icon slot="icon" type="barrage_fill" size="22" color="#2d8cf0" />
             </i-cell>
              <i-cell title="名片夹" is-link url="/pages/person/cardList">
                 <i-icon slot="icon"  type="businesscard_fill" size="22" color="#2d8cf0" />
             </i-cell>
             </i-cell-group>
        </div> -->
        <div class="submit-btn">
            <i-button @click="handleClick" type="primary" open-type="share">递名片</i-button>
        </div>
        <div class="submit-btn">
            <i-button @click="handleQrcode" type="primary">生成二维码</i-button>
        </div>
         <div class="submit-btn">
            <i-button @click="goCardList" type="primary">返回名片列表</i-button>
        </div>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import Card from '@/components/card-item'
import manDetail from '@/components/man-detail.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      background: 'https://wx.qlogo.cn/mmopen/vi_32/ateb2NiaL4qEb0icXBSeOfCFAicqylicQOzTTeejUJ0oNoWP2Hib1tkAdr6gcD85Y6v7yynKuZ4YZmUol1fc3zaVusw/132',
      qrImg: '',
      current: 'radar',
      radar: {
        current: 'tab1',
        radarList: [],
        formData: [{'Number': 0, 'TypeCode': 100, 'TypeName': '点赞名片'}, {'Number': 1, 'TypeCode': 103, 'TypeName': '复制邮箱'}, {'Number': 1, 'TypeCode': 104, 'TypeName': '复制微信'}, {'Number': 4, 'TypeCode': 106, 'TypeName': '点击商城'}, {'Number': 9, 'TypeCode': 108, 'TypeName': '公司动态'}, {'Number': 4, 'TypeCode': 109, 'TypeName': '公司某动态'}, {'Number': 1, 'TypeCode': 112, 'TypeName': '复制公司'}, {'Number': 1, 'TypeCode': 113, 'TypeName': '查看官网'}, {'Number': 1, 'TypeCode': 114, 'TypeName': '保存电话'}],
        formGroup: [],
        keyGroup: {},
        manDetailList: new Array(33)
      }
    }
  },
  onShareAppMessage () {
    // var url = this.$route.path
    return {
      title: '您好！我是' + this.userInfo.strName + '这是我的名片请惠存！',
      imageUrl: this.userInfo.strAvatarUrl,
      path: '/pages/transfer/main?shareOpenId=' + this.userInfo.strOpenId + '&target=' + '/pages/home/main' + '&type=tab',
      success: async res => {
        // console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    }
  },
  components: {
    Card,
    manDetail
  },

  computed: {
    ...mapGetters({
      userInfo: 'userInfo'
    })
  },

  mounted () {
    this.Get_OperationLogsTime()
    this.Get_OperationLogsBehavior()
    this.Get_OperationLogsPeople()
  },

  methods: {
    tabarChange ({ target }) {
      this.current = target.key
    },
    handleChange ({target}) {
      this.radar.current = target.key
    },
    async Get_OperationLogsTime () {
      try {
        var par = {
          $OperatedUserId: this.userInfo.strOpenId
        }
        const res = await api.Get_OperationLogsTime(par)

        this.radar.radarList = res.dgData
      } catch (error) {
        console.log(error)
      }
    },
    async Get_OperationLogsBehavior () {
      try {
        var par = {
        //   $Type: '100',
          //   $StartDate: '2018-09-03',
          $OperUserId: this.userInfo.strOpenId
        }
        const res = await api.Get_OperationLogsBehavior(par)
        this.radar.formData = res.dgData
        // console.log('行为：')
        // console.log(this.radar.formData)
      } catch (err) {

      }
    },
    async Get_OperationLogsPeople () {
      try {
        var par = {
          $UserId: '',
          $OperUserId: this.userInfo.strOpenId
        }
        const res = await api.Get_OperationLogsPeople(par)

        for (const key in res.dgData[0]) {
          if (key === 'strName' || key === 'CreateBy' || key === 'operName' || key === 'OperatedUserId' || key === 'strAvatarUrl') {
          } else {
            this.radar.keyGroup[key] = key
          }
        }
        this.radar.formGroup = res.dgData
      } catch (err) {

      }
    },
    editor () {
      this.$router.push({path: '/pages/editCard/main'})
    },
    async handleQrcode () {
      this.$router.push({ path: '/pages/qrCode/main' })
    },
    goCardList () {
      this.$router.push({path: '/pages/cardlist/main', reLaunch: true})
    }
  }
}
</script>
<style lang='scss'>
.page {
        background-color: rgb(241, 240, 245);
        padding-bottom: 55px;
    }
    .page-list {
    }
    .tab1-content{
        width: 340px;
        height: 60px;
        margin: 5px auto;
        background-color: #fff;
        overflow: hidden;
        border: 1px solid #e9eaec;
        border-radius: 4px;
    }
    .col-class {
        overflow: hidden;
        text-align: center;
        justify-content: center;
    }
    .radar-img {
        width: 50px;
        height: 50px;
        margin-top: 15px;
    }
    .radar-text {
        flex: 1;
        height: 50px;
        padding:5px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .radar-title {
        font-size: 15px;
        vertical-align: middle;
    }
    .radar-icon {
        height: 60px;
        line-height: 60px;
        margin-left: 15px;
    }
    .action-top {
        height: 25px;
        margin-top: 4px;
    }
    .top-cell {
        height: 10px;
        overflow: hidden;
    }
    .center {
        width: 750rpx;
        height: 450rpx;
        background-color: #fff;
        padding-top: 25rpx;
        padding-bottom: 25rpx;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
    }
    .bottom-list {

    }
    .bottom-icon {
        color: 'red';
    }
    
    .caption-wrap{
    margin-bottom: 30px;
    }

    .caption-title{
    font-weight: bold;
    padding:20px 10px;
    }

    .collapse-item-title{
    font-size: 12px;
    color: #737373;
    font-weight: bold;
    }

    .collapse-item-content{
    font-size: 14px;
    color: #444444;
    }
    .action-detail-center {
        background: #fff;
    }
    .collapse-item-title {
        height:40px;
        padding: 5px;
        color: #737373;
        font-size: 16px;
        
    }
    .card-bg {
    width: 100%;
    height: 190px;
    position: relative;
    background-size: cover;

  }
  .me-header-cont{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
       height: 190px;
      background:rgba(0,0,0,0.22);
  }
.me-header{
    color: #fff;
}
.me-title{
    font-size: 16px;
}
.me-sub{
    font-size: 12px;
    line-height: 22px;
}
.ranking{
    .center-a{
        margin-top: 3px;
    }
}
</style>