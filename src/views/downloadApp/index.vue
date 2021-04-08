<template>
<div :class="['body', $lang]">
  <div class="main">
    <div class="text">{{ $t("message.256") }}</div>
  </div>
</div>
</template>

<script>
export default {
name: "index",
  data() {
    return {
      bt: ''
    }
  },
  mounted() {
    this.bt = require('../../assets/images/downloadapp/bt-' + this.$lang + '.png')
  },
  methods: {
    download() {

    }
  }
}
</script>

<style scoped lang="less">
.body {

  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding-top: calc(50vh - 6em);
  font: 150%/1.6 serif;
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

.main {
  position: fixed;
  bottom: 0;
  padding: 1em;
  width: 100%;
  box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
  0 .5em 1em rgba(0, 0, 0, 0.6);
  text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
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
    -webkit-filter: blur(20px);
    filter: blur(20px);
    background: #1D223B;
    margin: -10px;
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
