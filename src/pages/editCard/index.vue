<!-- 编辑名片 -->
<template>
  <div class='page app'>

    <div class="edit-top bgf m-x-1 m-b-1">
      <div class="edit-img p-t-2 p-b-1 center-a ">
        <img class="" :src="userInfo.strAvatarUrl" alt="" @click="modifiyHead">
      </div>

      <i-panel title="名字" >
        <input class="p-l-2 p-y-1 font-title" v-model="userInfo.strName"  placeholder="修改名字" />

      </i-panel>
      <i-panel title="电话号码">
        <input class="p-l-2 p-y-1 font-title" v-model="userInfo.strMobile" type="number"  placeholder="修改电话号码" />
      </i-panel>
    </div>
    <div class="bgf m-x-1 m-b-1">
      <i-panel title="公司名字">
        <input class="p-l-2 p-y-1 font-title" v-model="userInfo.strCompany"  placeholder="请输入公司名字" />

      </i-panel>
      <i-panel title="职位">
        <input class="p-l-2 p-y-1 font-title" v-model="userInfo.strPosition" type="text"  placeholder="请输入职位" />

      </i-panel>
      <i-panel title="邮箱">
        <input class="p-l-2 p-y-1 font-title" v-model="userInfo.strEmail" type="text"  placeholder="请输入邮箱" />
       
      </i-panel>
      <i-panel >
        <i-cell title="修改背景图" @click="modifiyBackground">
          <i-avatar slot="footer" :src="userInfo.strBackground" size="default" shape="square" @click="modifiyBackground"  ></i-avatar>
        </i-cell>

      </i-panel>

    </div>
    <div class="bgf m-x-1 m-b-1">
      <i-panel title="简介">
        <div class="desc-wrapper clearfix">
          <textarea v-model="userInfo.strIntro" class="desc-textarea" placeholder="请输入个人简介(最多200字)" maxlength="200" />
          <div class="weui-textarea-counter fr p-r-2 m-b-1">{{fontNumTotal}}/200</div>
        
        </div>
      </i-panel>

    </div>
    <uploader @onSelect="onSelect" @longtap ='longtap' @dele="dele" :file-list="files" title="文件上传" :max="max"></uploader>
    <div class="submit-btn">
      <i-button @click="saveForm" type="primary">提交保存</i-button>
    </div>
  </div>
</template>

<script>
  import api from '@/utils/api'
  import store from '@/store/store'
  import uploader from '@/components/uploader'
  import {
    validatPhone,
    validatEmail
  } from '@/utils/validate'
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    data () {
      return {
        files: [],
        max: 8,
        fontNum: 0,
        userInfo: {},
        saveInfo: {},
        off: {
          background: false,
          avatar: false
        },
        deleArray: [],
        addImg: []
      }
    },

    components: {
      uploader
    },
    computed: {
      fontNumTotal () {
        if (this.userInfo.strIntro) {
          this.fontNum = this.userInfo.strIntro.toString().length
  
          return this.fontNum
        }
      },
      ...mapGetters({
        shareCardInfo: 'shareCardInfo',
        openId: 'openId',
        shareOpenId: 'shareOpenId'
        // userInfo: 'userInfo'
      })
    },

    mounted () {
      this.addImg = []
      this.deleArray = []
      this.getUserInfo()
      console.log(this.userInfo)
    },

    methods: {
  
      async getUserInfo () {
        var _this = this
        var par = {
          '@strOpenId': this.openId
        }
        try {
          var data = await api.Get_UserInfo(par)
          console.log(data)
          _this.userInfo = data
          this.strIntro = data.strIntro
          _this.files = []
          data.images.map(item => {
            item.path = item.imgUrl
            _this.files.push(item)
          })
          console.log(_this.files)
        } catch (error) {}
      },

      async saveForm () {
        wx.showLoading({ title: '正在保存' })
        // console.log(this.deleArray)
        // console.log(this.addImg)
        var _this = this
        if (this.off.avatar) {
          _this.upDateHead(_this.userInfo.strAvatarUrl, 1)
        }
        if (this.off.background) {
          _this.upDateHead(_this.userInfo.strBackground, 3)
        }
        // 删除图片
        if (this.deleArray.length > 0) {
          this.deleArray.map((id) => {
            console.log(id)
            this.uploaderFiles(undefined, id, true)
          })
        }
  
        // 新增图片
        if (this.addImg.length > 0) {
          this.addImg.map(item => {
            console.log(item)
            _this.uploaderFiles(item[0])
          })
        }
        var par = (this.saveInfo = {})
        if (
          this.userInfo.strMobile != '' &&
        !api.isPoneAvailable(this.userInfo.strMobile)
        ) {
          api.wxToast({ title: '手机号不正确' })
          return
        }
        for (const key in this.userInfo) {
          if (this.userInfo[key] != '' && key != 'images') {
            this.saveInfo[key] = this.userInfo[key]
          }
        }
        // console.log(this.saveInfo)
  
        try {
          var res = await api.post_login(par)
          wx.hideLoading()
          api.wxToast({ title: '保存成功', icon: 'success' })
          this.$store.commit('inUserInfo', res)
          this.$router.push({path: '/pages/admin/main', reLaunch: true})
        } catch (error) {
        }
      },
      onSelect () {
        var count = this.max - this.files.length
        this.$wxapi.chooseImage({
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          count: count

        }).then(res => {
          console.log(res.tempFiles)
          this.files = this.files.concat(res.tempFiles)
          this.addImg.push(res.tempFilePaths)
        }).catch(err => {
          console.log(err)
        })
      },
      upDateHead (localImage, type) {
        const _this = this
        var par = {
          strOpenId: this.userInfo.strOpenId,
          intType: type
        }
  
        api.wxUploadFile({
          filePath: localImage,
          formData: par
        })
          .then(res => {
            if (type == 1) {
              _this.userInfo.strAvatarUrl = res.imgUrl
            } else {
              _this.userInfo.strBackground = res.imgUrl
            }
          })
      },
      modifiyHead () {
        var _this = this
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            _this.userInfo.strAvatarUrl = res.tempFilePaths[0]
            _this.off.avatar = true
          // _this.upDateHead(res.tempFilePaths[0], 1);
          },
          fail: function () {},
          complete: function () {}
        })
      },
      modifiyBackground () {
        var _this = this
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            _this.userInfo.strBackground = res.tempFilePaths[0]
            _this.off.background = true
            // _this.upDateHead(res.tempFilePaths[0], 3)
          },
          fail: function () {},
          complete: function () {}
        })
      },
      dele (data) {
        console.log(data.target)
        this.files.splice(data.i, 1)
  
        try {
          this.deleArray.push(data.target.id)
        } catch (error) {
        }
      },
      async delImage (par) {
        var res = await api.del_Image(par)
        console.log(res)
      },
      uploaderFiles (tempFilePaths, strId, del) {
        const _this = this
        var par = {
          strOpenId: this.userInfo.strOpenId,
          intType: 2
        }
        if (strId != undefined && typeof strId !== 'object') {
          par = Object.assign(par, { strId: strId })
        }
        if (del) {
          par = Object.assign(par, { rowState: 'D' })
          console.log(par)
          this.delImage(par)
          return
        }
        api.wxUploadFile({
          filePath: tempFilePaths,
          formData: par
        }).then(res => {
  
        })
      }
    }
  }
</script>
<style lang='scss' scoped>
  .edit-img {
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    } // border-bottom: 1px solid #dddee1;
  }


  .desc-textarea {
    padding: 7px 15px;
    font-size: 13px;
    height: 88px;
    line-height: 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .edit-bg {
    width: 45px;
    height: 45px;
  }

</style>
