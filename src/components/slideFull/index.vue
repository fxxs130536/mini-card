<template>
  <div>
    <div class="img-list">
        <img @click="sildeModelShowHandle(index)"  v-for="(items,index) in imgUrls" :key="index" class="modle-img m-y-1" :src="items" alt="">

    </div>

        <transition name="fade">
            <div class="silde-model center-a" @touchmove.stop v-if="sildeModelShow" @click="sildeModelHideHandle">
                <swiper :indicator-dots="indicatorDots"
                    :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="#fff" indicator-active-color="#2d8cf0" class="silde-model-swiper oh" :current="current">
                    <block v-for="(itmes,index) in imgUrls" :key="index" >
                        <swiper-item>
                        <image  :src="itmes" class="silde-model-image" width="100%" height="100%"/>
                        </swiper-item>
                    </block>
                </swiper>
            </div>
        </transition>
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
      current: 0

    }
  },
  methods: {
    sildeModelShowHandle (index) {
      this.current = index

      this.sildeModelShow = true
    },
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
