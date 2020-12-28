<template>
  <div class="page">
    <div class="page_apply_title">
      <div class="page_apply_title_name">{{ $t("message.257") }}</div>
      <div class="page_apply_title_line"></div>
    </div>
    <div class="page_content_about page_content">
      <div class="page_content_title">{{ $t("message.22") }}</div>
      <div class="page_content_img">
        <img src="../../assets/images/pic_about.png" alt="" />
      </div>
      <div class="page_content_detail">
        <span>{{ $t("message.23") }}</span>
        <div class="page_content_detail_bottom">
          <span>{{ $t("message.24") }}</span>
        </div>
      </div>
    </div>
    <div class="page_line"></div>
    <div class="page_content_download">
      <div class="page_content_title">{{ $t("message.250") }}</div>
      <div class="page_content_title1">{{ $t("message.251") }}</div>
      <div class="page_content_title1">{{ $t("message.252") }}</div>
      <div class="page_content_title1">{{ $t("message.253") }}</div>
      <div class="page_content_title1">
        {{ $t("message.254") }}
      </div>
      <img
        src="../../assets/images/pic_art_logo.png"
        alt=""
        class="page_content_img"
      />
      <div class="page_content_title2">{{ $t("message.255") }}</div>
      <div class="page_content_btn_download" @click="download">
        {{ $t("message.256") }}
      </div>
    </div>
    <webFoot />
  </div>
</template>

<script>
import webFoot from "@/Layout/footer";

export default {
  components: {
    webFoot,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    download() {
      window.open(this.$BaseUrl + "material/arthur-ex.zip");
    },
  },
};
</script>
<style scoped lang="less" >
.page_line {
  width: 750/100rem;
  height: 10/100rem;
  background: #cad7e8;
}
.page_content_download {
  width: 750/100rem;
  // height: 922/100rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.page_content_title {
  width: 100%;
  text-align: center;
  height: 58/100rem;
  font-size: 40/100rem;
  font-family: Helvetica;
  color: #323a43;
  line-height: 48/100rem;
  margin: 80/100rem 0 30/100rem 0;
}
.page_content_title1 {
  font-size: 26/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  margin-top: 10/100rem;
}
.page_content_img {
  width: 400/100rem;
  height: 246/100rem;
  margin: 40/100rem 0 20/100rem 0;
}
.page_content_title2 {
  width: 100%;
  text-align: center;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #323a43;
  line-height: 34/100rem;
}
.page_content_btn_download {
  width: 360/100rem;
  height: 88/100rem;
  text-align: center;
  background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
  border-radius: 10/100rem;
  font-size: 28/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 88/100rem;
  margin-top: 60/100rem;
  margin-bottom: 80/100rem;
}
// 标题
.page_apply_title {
  width: 750/100rem;
  height: 104/100rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  border-bottom: 1/100rem solid #cad7e8;
}
.page_apply_title_line {
  width: 80/100rem;
  height: 6/100rem;
  background: #104cff;
  margin-top: 8/100rem;
}
.page {
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 100/100rem 0/100rem 0 0;
}
.page_content {
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 0/100rem 40/100rem;
}
.page_content_about {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.page_content_title {
  width: 100%;
  text-align: center;
  height: 58/100rem;
  font-size: 40/100rem;
  font-family: Helvetica;
  color: #323a43;
  line-height: 48/100rem;
  margin-top: 80/100rem;
  font-weight: bold;
}
.page_content_img {
  width: 438/100rem;
  height: 362/100rem;
  margin-top: 80/100rem;
}
.page_content_img img {
  width: 100%;
  height: 100%;
}
.page_content_detail {
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 60/100rem 0rem 80/100rem 0rem;
  font-size: 26/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  line-height: 44/100rem;
  text-align: justify;
}
.page_content_detail_bottom {
  margin-top: 20/100rem;
}
</style>
