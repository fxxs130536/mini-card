<template>
  <div>
    <div class="img-list">
        <img @click="sildeModelShowHandle(items.imgUrl)"  v-for="(items,index) in imgUrls" :key="index" class="modle-img m-y-1" :src="items.imgUrl" alt="">

    </div>

        <!-- <transition name="fade">
            <div class="silde-model center-a" @touchmove.stop v-if="sildeModelShow" @click="sildeModelHideHandle">
                <swiper :indicator-dots="indicatorDots"
                    :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="#fff" indicator-active-color="#2d8cf0" class="silde-model-swiper oh" :current="current">
                    <block v-for="(itmes,index) in imgUrls" :key="index" >
                        <swiper-item>
                          <image  :src="itmes.imgUrl" class="silde-model-image" width="100%" />
                        </swiper-item>
                    </block>
                </swiper>
            </div>
        </transition> -->
  </div>
</template>

<script>
export default {
  props: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    sildeModelShow: false
  },
  data () {
    return {
      current: 0,
      imgArray: []
    }
  },
  mounted () {
  },
  methods: {
    imgList () {
      this.imgArray = []
      this.imgUrls.map(item => {
        this.imgArray.push(item.imgUrl)
      })
    },
    sildeModelShowHandle (index) {
      this.imgList()
      var _this = this
      this.current = index

      this.sildeModelShow = true
      this.$wxapi.previewImage({
        urls: _this.imgArray,
        current: index
      }).then(res => {

      }).catch(res => {
        console.log(res)
      })
    },
    // sildeModelShowHandle (index) {
    //   this.current = index

    //   this.sildeModelShow = true
    // },
    sildeModelHideHandle () {
      this.sildeModelShow = false
    }

  }
}
</script>

<style lang='scss' scoped>
.img-list{
  width: 100%;
}
.silde-model{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: rgba(0, 0, 0,1);
    .silde-model-swiper,.silde-model-image{
        width: 100%;
        // max-height: 100%;
    }
}
.modle-img {
  width: 100%;

}
</style>
