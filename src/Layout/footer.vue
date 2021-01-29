
<!-- -->
<template>
  <div class="footer rtl">
    <div class="footer_container">
      <div class="footer_container_header">
        <div class="footer_container_header_title">{{ $t("message.50") }}</div>
        <div class="footer_container_header_content">
          <div
            class="footer_container_header_first footer_container_header_div"
          >
            <img
              src="../assets/images/icon_facebook.png"
              alt=""
              class="footer_container_header_img"
            />
            <span class="footer_container_header_span">facebook</span>
          </div>
          <div
            class="footer_container_header_second footer_container_header_div"
          >
            <img
              src="../assets/images/icon_twitter.png"
              alt=""
              class="footer_container_header_img"
            />
            <span class="footer_container_header_span">Twitter</span>
          </div>
          <div
            class="footer_container_header_third footer_container_header_div"
          >
            <img
              src="../assets/images/icon_telegram.png"
              alt=""
              class="footer_container_header_img"
            />
            <span class="footer_container_header_span">Telegram</span>
          </div>
        </div>
        <div class="footer_container_header_email">
          {{ $t("message.51") }}aeco@arthurex.com
        </div>
        <div class="footer_container_header_address" style="margin-bottom: 0.19rem">
          <!--{{ $t("message.52") }}{{ $t("message.53") }}-->
        </div>
      </div>
      <div class="footer_container_bottom">
        Copyright &copy; {{ yearData }} ARTHUR-EX, All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      yearData: new Date().getFullYear(),
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang='less' scoped>
.footer_container {
  width: 100%;
  height: 570/100rem;
  background: #113071;
  margin-top: -2/100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
}
.footer_container_header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80/100rem 100/100rem 0 100/100rem;
}
.footer_container_header_title {
  width: 100%;
  text-align: center;
  height: 66/100rem;
  text-align: center;
  font-size: 44/100rem;
  font-family: Helvetica;
  color: #ffffff;
  line-height: 52/100rem;
  font-weight: bold;
  letter-spacing: 2/100rem;
}
.footer_container_header_content {
  width: 100%;
  display: flex;
  flex-direction: row;
  //   align-items: center;
  justify-content: space-between;
  margin-top: 60/100rem;
}
.footer_container_header_div {
  width: 120/100rem;
  height: 120/100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7acc1;
}
.footer_container_header_img {
  width: 72/100rem;
  height: 72/100rem;
}
.footer_container_header_email {
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7acc1;
  margin-top: 70/100rem;
}
.footer_container_header_address {
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7acc1;
  margin-top: 8/100rem;
}
.footer_container_bottom {
  width: 100%;
  height: 100/100rem;
  line-height: 100/100rem;
  margin-top: 16/100rem;
  text-align: center;
  background: #0d2352;
  font-size: 20/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}
</style>

