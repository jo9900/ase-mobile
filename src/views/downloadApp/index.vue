<template>
<div class="page">
  <div :class="['dl-body', lang]">
    <div class="mask"></div>
    <div class="main">
      <div class="text" @click="download">
              <a v-if="isAndroid" href="#">{{ $t("message.256") }}</a>
              <a v-else href="#">{{ $t("message.256") }}</a>
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
      isAndroid: false,
      lang: undefined
    }
  },
  watch: {
    '$route': {
      handler(cur) {
        this.lang = this.getQueryVariable(
            "language",
            cur.fullPath
        )
        this.lang = this.lang || this.$lang
      },
      deep:true,
      immediate: true
    }
  },
  mounted() {
    let u = navigator.userAgent;
    this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  },
  methods: {
    getQueryVariable(name, url) {
      return (
          decodeURIComponent(
              (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
                  url
              ) || [, ""])[1].replace(/\+/g, "%20")
          ) || null
      );
    },
    download() {
      this.$message(this.$t('message.214'))
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
</style>
