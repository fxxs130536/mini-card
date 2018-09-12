<!--  -->
<template>
  <div class='page app'>
      <div class="center-a m-t-3">
          <img :src="qrImg" alt="" style="width:306px;height:306px;">
      </div>
  </div>
</template>

<script>
import api from '@/utils/api'

import { mapGetters, mapActions } from 'vuex'
function decode (input) {
  var output = ''
  var chr1, chr2, chr3 = ''
  var enc1, enc2, enc3, enc4 = ''
  var i = 0
  var keyStr = 'ABCDEFGHIJKLMNOP' +
			'QRSTUVWXYZabcdef' +
			'ghijklmnopqrstuv' +
			'wxyz0123456789+/' +
			'='
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  var base64test = /[^A-Za-z0-9\+\/\=]/g
  if (base64test.exec(input)) {
    alert('There were invalid base64 characters in the input text.\n' +
				"Valid base64 characters are A-Z, a-z, 0-9, '+', '/', and '='\n" +
				'Expect errors in decoding.')
  }
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')

  do {
    enc1 = keyStr.indexOf(input.charAt(i++))
    enc2 = keyStr.indexOf(input.charAt(i++))
    enc3 = keyStr.indexOf(input.charAt(i++))
    enc4 = keyStr.indexOf(input.charAt(i++))

    chr1 = (enc1 << 2) | (enc2 >> 4)
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
    chr3 = ((enc3 & 3) << 6) | enc4

    output = output + String.fromCharCode(chr1)

    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2)
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3)
    }

    chr1 = chr2 = chr3 = ''
    enc1 = enc2 = enc3 = enc4 = ''
  } while (i < input.length)

  return output
}
export default {
  data () {
    return {
      qrImg: ''
    }
  },

  components: {},

  computed: {
    ...mapGetters({
      userInfo: 'userInfo'
    })
  },

  mounted () {
    this.handleQrcode()
  },

  methods: {
    async handleQrcode () {
    //   console.log(this.userInfo)
      var userInfo = this.userInfo
      var data = { strOpenId: userInfo.strOpenId, CompanyId: userInfo.CompanyId } //
      //   console.log(data)
      var res = await api.Get_CompanyCode(data)
      this.qrImg = 'data:image/png/;base64,' + res
    }
  }
}
</script>
<style lang='scss' scoped>
</style>