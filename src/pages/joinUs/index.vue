<!--  -->
<template>
  <div class='page app p-a-2'>
      <div class="artical-t font-color-title">
          电商玩法升级，哥哥教你如何斩妖除魔，替天行道，拔刀不平，萍水相逢，知音难寻
      </div>
      <div class="artical-company font-color-main m-y-2">
          印生活
      </div>
      <div class="artical-cont">
        关关雎鸠，在河之洲。窈窕淑女，君子好逑。
        参差荇菜，左右流之。窈窕淑女，寤寐求之。
        求之不得，寤寐思服。悠哉悠哉，辗转反侧。
        参差荇菜，左右采之。窈窕淑女，琴瑟友之。
        参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。
      </div>
      <div class="call-btn">
      <i-button i-class="" @click="callHr('1353699106')" type="primary">联系HR</i-button>

      </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    callHr (str) {
      wx.makePhoneCall({
        phoneNumber: str // 仅为示例，并非真实的电话号码
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.page{
    padding-bottom: 80px !important;
}
.font-color-title{
    font-size: 16px;
    font-weight: bold;
}
.call-btn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

}
</style>