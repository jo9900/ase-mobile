<template>
<div class="page">
  <div :class="['dl-body', $lang]">
    <div class="mask"></div>
    <div class="main">
      <div class="text" @click="download">
        <a :href="link">{{ $t("message.256") }}</a>
      </div>
    </div>
  </div>
  <div class="doaderRower" v-if="isCloseGoander" @click="closeBower">
    <div class="slodert">
      <div class="" style="text-align: right"><img src="@/assets/images/icon_jt.png"/></div>
      <template v-if="">

      </template>
      <div class="cakeot" v-if="$lang=='zh'">

        <div class="">请点击右上角 ···</div>
        <div class="">选择“在浏览器中打开”</div>
      </div>
      <div class="cakeot" style="margin-right: 0" v-else>
        <div class=""> Please click in the upper right corner···</div>
        <div class="">Select open in browser</div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
name: "index",
  data() {
    return {
      isCloseGoander: false,
      isAndroid: false,
      link: '',
      and: 'https://www.arthurex.com/app/android/aeco.apk',
      ios: 'https://testflight.apple.com/join/2dmKPNV2',
      test_and: 'http://t.arthurex.com/app/android/aeco.apk',
      test_ios: 'https://testflight.apple.com/join/2dmKPNV2',
      NODE_ENV: process.env.NODE_ENV,
      map: {
        'zh': ['简体中文', 'Chinese'],
        'en': ['English', 'English'],
        'ja': ['日本語', 'Japanese'],
        'ar': ['عربى', 'Arabic'],
        'ko': ['한국어', 'Korean'],
        'ru': ['русский', 'Russian'],
      },
    }
  },
  watch: {
    '$route': {
      handler(cur) {
        let u = navigator.userAgent;
        this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
        this.isProd = this.NODE_ENV === 'production'
        if (this.isAndroid)
          this.link = this.isProd? this.and : this.test_and
        if (!this.isAndroid)
          this.link = this.isProd? this.ios : this.test_ios
        let newLang = cur.query.language
        let oldLang = localStorage.getItem('lang')
        if (newLang != oldLang) {
          localStorage.setItem('lang', newLang)
          localStorage.setItem("lang_type", this.map[newLang][1])

          this.$router.go(0)
        }
      },
      deep:true,
      immediate: true
    }
  },
  mounted() {
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isAndroid) {
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        this.isCloseGoander = true;
      }
    }
  },
  methods: {
    download() {
      // if (!this.isAndroid) {
      //   this.$message(this.$t('message.214'))
      //   return false
      // }

    }
  }
}
</script>

<style scoped lang="less">
.page {
  // background: #f0f2f5;
  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-bottom: 50px;
}
.dl-body {
  min-height: 100vh;
  box-sizing: border-box;
  background-size: cover;
  &.zh {
    background: url("../../assets/images/downloadapp/dl-zh.png") no-repeat;
    background-size: cover;
  }
  &.ja {
    background: url("../../assets/images/downloadapp/dl-ja.png") no-repeat;
    background-size: cover;
  }
  &.ko {
    background: url("../../assets/images/downloadapp/dl-ko.png") no-repeat;
    background-size: cover;
  }
  &.ru {
    background: url("../../assets/images/downloadapp/dl-ru.png") no-repeat;
    background-size: cover;
  }
  &.ar {
    background: url("../../assets/images/downloadapp/dl-ar.png") no-repeat;
    background-size: cover;
  }
  &.en {
    background: url("../../assets/images/downloadapp/dl-en.png") no-repeat;
    background-size: cover;
  }
}
.mask {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 180/100rem;

}
.main {
  position: fixed;
  bottom: 0;
  padding: 1em;
  width: 100%;
  box-shadow: 0 0 0 1px #010101c2 inset, 0 0.5em 1em rgba(156,156,156,.18);
  text-shadow: 0 1px 1px hsl(0deg 0% 23% / 49%);
  background: hsla(0,0%,100%,.3);
  font-size: 28/100rem;
  overflow: hidden;
  height: 180/100rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    -webkit-filter: blur(9px);
    //filter: blur(9px);
    backdrop-filter: blur(9px);
    background: url("../../assets/images/downloadapp/dl-zh.png") bottom center no-repeat;
    background-size: cover;
  }
}
.text {
  color: #fff;
  font-size: 44/100rem;
  padding: 0 10px;
  width: 580/100rem;
  height: 96/100rem;
  border-radius: 30px;
  line-height: 96/100rem;
  user-select: none;
  text-align: center;
  font-family: "PingFangSC-Regular,PingFang SC";
  background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
}
.rlm-got img{
  width: 100%;
}
.gseter{
  text-align: center;
  margin-top: -20px;

}
.boet{
  font-size: 23px;
  margin-bottom: 16px;
  font-weight: 600;
  margin-top: 11px;
}
.dowbont{
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 14px 0;
  /*height: 62px;*/
  /*padding-top: 13px;*/
  background: #FFFFFF;
  box-shadow: 0px 0px 0px 0px #D5D5D5;
}
/*.dowBoander{*/
/*width: 80%;*/
/*line-height: 44px;*/
/*height: 44px;*/
/*background: linear-gradient(270deg, #000000 0%, #694000 100%);*/
/*border-radius: 23px;*/
/*margin: 0 auto;*/
/*z-index: 99999;*/
/*text-align: center;*/
/*color: #fff*/
/*}*/

.boet_en{
  font-size: 21px;

  font-weight: 800;

}
.msoet{
  float: left;
  margin-right: 5px;
}

.appstoreLink{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;

  height: 44px;
  background: linear-gradient(270deg, #000000 0%, #694000 100%);
  border-radius: 5px;
}
.appstoreLink2{
  margin: 0 3%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 44px;
  background: #009DFF;
  border-radius: 5px;
}
.appstoreLink3{
  text-align: center;
  width: 100px;
  color: #fff;
  line-height: 44px;
  height: 44px;
  background: #081FCA;
  border-radius: 5px;
}

.appstoreLink4{
  display: block;
  width: 80%;
  line-height: 44px;
  height: 44px;
  background: linear-gradient(270deg, #000000 0%, #694000 100%);
  border-radius: 23px;
  margin: 0 auto;
  z-index: 99999;
  text-align: center;
  color: #fff
}
.doaderRower{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999;
  top: 0;
  background: rgba(0,0,0,0.8)
}
.cakeot{
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin-right: 65px;
  font-weight: 600;
  line-height: 29px;
}
.slodert{
  position: absolute;
  top: 17px;
  right: 10px;
}

</style>
