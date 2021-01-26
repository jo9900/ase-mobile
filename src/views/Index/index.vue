
<!-- -->
<template>
  <div class="page">
    <div class="">
      <div class="page_container">
        <van-swipe
          class="my-swipe"
          :autoplay="5000"
          :loop="true"
          indicator-color="white"
          :height="swipeHeight"
        >
          <van-swipe-item>
            <div style="height: 100%">
              <template>
                <div :class="['page_out', $lang]" @click="toNews">
                </div>
              </template>
            </div></van-swipe-item
          >
          <van-swipe-item
            ><div style="height: 500px" @click="slkowet">
              <template>
                <div class="page_home">
                  <div class="page_home_top">
                    <div class="page_home_title">ARTHUR-EX</div>
                    <div class="page_home_item1">
                      {{ $t("message.12") }}
                    </div>
                    <div
                      class="page_home_item2"
                      :class="{ marginTop20: lang == 'en' }"
                    >
                      {{ $t("message.13") }}
                    </div>
                    <div class="page_home_detail">
                      {{ $t("message.14") }}
                    </div>
                    <router-link :to="{ path: '/signIn' }" v-if="isShow">
                      <div class="page_home_btn">{{ $t("message.15") }}</div>
                    </router-link>
                  </div>
                  <!-- <div class="page_home_bottom"></div> -->
                </div>
              </template>
            </div></van-swipe-item
          >
          <van-swipe-item
            ><div style="height: 100%">
              <template>
                <div class="page_banner">
                  <div class="page_banner_top">
                    <div class="page_banner_title">{{ $t("message.16") }}</div>
                    <div
                      class="page_banner_item1"
                      :class="{ marginTop10: lang == 'en' }"
                    >
                      {{ $t("message.17") }}
                    </div>
                    <div class="page_banner_date_wrap">
                      <div class="page_banner_item2 text_left">
                        <span class="time">{{ $t("message.18") }}</span>:&nbsp;2021-01-05
                      </div>
                      <div class="page_banner_detail text_left">
                        <span class="time">{{ $t("message.19") }}</span>:&nbsp;{{ $t("message.496") }}
                      </div>
                    </div>
                    <router-link :to="{ path: '/presell' }">
                      <div class="page_banner_btn">{{ $t("message.20") }}</div>
                    </router-link>
                  </div>
                </div>
              </template>
            </div></van-swipe-item
          >
          <van-swipe-item>
            <div style="height: 100%">
              <template>
                <div class="page_right">
                  <div class="page_right_top">
                    <div class="page_right_title"></div>
                    <div class="page_right_item1">
                      {{ $t("message.519") }}
                    </div>
                  </div>
                </div>
              </template>
            </div></van-swipe-item
          >
        </van-swipe>
        <div class="page_content">
          <!-- 关于art -->
          <div class="page_content_about">
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
          <!-- 核心技术优势 -->
          <div class="page_content_advantage">
            <div class="page_advantage_title">{{ $t("message.25") }}</div>
            <div class="page_advantage_img">
              <img src="../../assets/images/pic_gxldx.png" alt="" />
            </div>
            <div class="page_advantage_title2">{{ $t("message.26") }}</div>
            <div class="page_advantage_detail">
              <span>{{ $t("message.27") }}</span>
            </div>
            <div class="page_advantage_img1">
              <img src="../../assets/images/pic_gkl.png" alt="" />
            </div>
            <div class="page_advantage_title3">{{ $t("message.28") }}</div>
            <div class="page_advantage_detail">
              <span>{{ $t("message.29") }}</span>
            </div>
            <div class="page_advantage_img2">
              <img src="../../assets/images/pic_gkl2.png" alt="" />
            </div>
            <div class="page_advantage_title4">{{ $t("message.30") }}</div>
            <div class="page_advantage_detail">
              <span>{{ $t("message.31") }}</span>
            </div>
          </div>
          <!-- 关于ART结算中心 -->
          <div class="page_content_settlement">
            <div class="page_settlement_title">{{ $t("message.32") }}</div>
            <div class="page_settlement_img">
              <img src="../../assets/images/pic_jszx.png" alt="" />
            </div>
            <div class="page_settlement_detail">
              <span>{{ $t("message.33") }}</span>
              <div class="page_settlement_detail2">
                <span>{{ $t("message.34") }}</span>
              </div>
            </div>
          </div>
          <!-- 发行计划 -->
          <div class="page_content_plan">
            <div class="page_plan_title">{{ $t("message.35") }}</div>
            <div class="page_plan_img_div">
              <div class="page_plan_img"></div>
              <div class="page_plan_img_title">{{ $t("message.36") }}</div>
            </div>
            <div class="page_plan_item">
              <div class="page_plan_part page_plan_item_div1">
                <div class="page_plan_part_pre"></div>
                <div class="page_plan_part_after">{{ $t("message.57") }}</div>
              </div>
              <div class="page_plan_part1 page_plan_item_div1 marginR">
                <div class="page_plan_part1_pre"></div>
                <div class="page_plan_part_after">{{ $t("message.58") }}</div>
              </div>
              <div class="page_plan_part2 page_plan_item_div">
                <div class="page_plan_part2_pre"></div>
                <div class="page_plan_part_after">{{ $t("message.59") }}</div>
              </div>
              <div class="page_plan_part6 page_plan_item_div3">
                <div class="page_plan_part6_pre"></div>
                <div class="page_plan_part_after">{{ $t("message.60") }}</div>
              </div>
              <div class="page_plan_part3 page_plan_item_div1">
                <div class="page_plan_part3_pre"></div>
                <div class="page_plan_part_after">{{ $t("message.61") }}</div>
              </div>
              <div class="page_plan_part4 page_plan_item_div">
                <div class="page_plan_part2_pre"></div>
                <div class="page_plan_part_after">{{ $t("message.62") }}</div>
              </div>
              <div class="page_plan_part5 page_plan_item_div2">
                <div class="page_plan_part5_pre"></div>
                <div class="page_plan_part_after">{{ $t("message.63") }}</div>
              </div>
            </div>
            <div class="page_plan_detail">
              <div class="page_plan_detail_first page_plan_detail_div">
                <div class="page_plan_detail_title">{{ $t("message.37") }}</div>
                <div class="page_plan_detail_intro">AECO</div>
              </div>
              <div class="page_plan_detail_second page_plan_detail_div">
                <div class="page_plan_detail_title">{{ $t("message.38") }}</div>
                <div class="page_plan_detail_intro">
                  <span>{{ $t("message.39") }}</span>
                </div>
              </div>
              <div class="page_plan_detail_third page_plan_detail_div">
                <div class="page_plan_detail_title">{{ $t("message.40") }}</div>
                <div class="page_plan_detail_intro">
                  <span>{{ $t("message.41") }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 下载 -->
        <div class="page_content_download">
          <div class="page_download_title">{{ $t("message.42") }}</div>
          <div class="page_download_detail">
            <div class="page_download_app">
              <img src="../../assets/images/icon_down_app.png" alt="" />
              <div class="page_download_app_btn" @click="download">
                {{ $t("message.43") }}
              </div>
            </div>
            <div class="page_download_book">
              <img src="../../assets/images/icon_down_book.png" alt="" />
              <div class="page_download_book_btn">
                <a @click="downloadPDF">{{ $t("message.45") }}</a>
              </div>
            </div>
          </div>
        </div>
        <!-- 订阅 -->
        <div class="page_content_subscribe">
          <div class="page_subscribe_title">{{ $t("message.46") }}</div>
          <div class="page_subscribe_title1">{{ $t("message.47") }}</div>
          <div class="page_subscribe_input">
            <!-- <input type="text" class="page_subscribe_input_detail" /> -->
            <el-form
              :model="subscribe_email"
              ref="subscribe_email"
              :rules="rules"
            >
              <el-form-item prop="sub_email">
                <el-input
                  class="page_subscribe_input_detail"
                  v-model="subscribe_email.sub_email"
                  :placeholder="placeholder"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="page_subscribe_btn" @click="subEmail">
            {{ $t("message.49") }}
          </div>
        </div>
      </div>
    </div>
    <webFoot />
  </div>
</template>

<script>
import webFoot from "@/Layout/footer";
import { digest, subscription } from "@/request/news";
import { Swipe, SwipeItem } from "vant";

export default {
  name: "",
  components: {
    webFoot,
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem,
  },
  data() {
    return {
      isLogin: localStorage.getItem("code"),
      isShow: true,
      height: 0,
      pageHeight: 0,
      swipeHeight: 600,
      isBtnShow: false,
      BaseUrl: this.$BaseUrl,
      list: [],
      subscribe_email: {
        sub_email: "",
      },
      options: {
        loop: false,
        autoplay: 4000,
      },
      listQuery: {
        lang_type: this.$langType,
        page_no: 1,
        page_size: 3,
      },
      email: "",
      placeholder: this.$t("message.48"),
      lang_type: this.$langType,
      lang: this.$lang,
      rules: {
        sub_email: [
          {
            required: true,
            message: this.$t("message.68"),
            trigger: "blur",
          },
          {
            pattern: /^([a-z0-9A-Z_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/,
            message: this.$t("message.79"),
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    toNews() {
      /*let newsCode = localStorage.getItem('newsCode')
      this.$router.push({
        path: 'journalismDetail',
        query: {
          code: newsCode
        }
      })*/
    },
    downloadPDF(){
      window.open(this.$BaseUrl + "material/whitepaper.pdf")
    },
    download() {
      this.$message({
        message: this.$t("message.214"),
      });
    },
    subEmail() {
      this.$refs["subscribe_email"].validate((valid) => {
        if (valid) {
          subscription(this.$qs.stringify(this.subscribe_email)).then((res) => {
            if (res.code == 0) {
              this.$message({
                message: this.$t("message.213"),
                type: "success",
              });
            } else if (res.code == 105403) {
              this.$message.error(this.$t("message.425"));
            } else {
              this.$message.error(res.msg);
            }
          });
        }
      });
    },
    get_list() {
      digest(this.$qs.stringify(this.listQuery)).then((res) => {
        this.list = res.data.news;
      });
    },
    slkowet() {
      // this.$router.push({
      //   path: "/journalismDetail",
      //   query: { code: this.list[0].code },
      // });
    },
  },
  created() {
    this.get_list();
    if (localStorage.getItem("code") != null) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
    console.log(localStorage.getItem("code"));
  },
  mounted() {
    let height =
      document.documentElement.offsetHeight || document.body.offsetHeight;
    this.height =
      height - document.querySelector(".navhearder").offsetHeight - 15 + "px";
    document.querySelector(".my-swipe").style.height = this.height;
    if (document.querySelector(".page_home")) {
      document.querySelector(".page_home").style.height = this.height;
    }
    if (document.querySelector(".page_banner")) {
      document.querySelector(".page_banner").style.height = this.height;
    }
    if (document.querySelector(".page_right")) {
      document.querySelector(".page_right").style.height = this.height;
    }
    if (document.querySelector(".page_out")) {
      document.querySelector(".page_out").style.height = this.height;
    }
  },
};
</script>

<style lang='less' scoped>
.page {

}
.marginTop20 {
  margin-top: 60/100rem !important;
}
.marginTop10 {
  margin-top: 70/100rem !important;
}
.marginBottom20 {
  margin-bottom: 60/100rem !important;
}
.my-swipe .van-swipe-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
//内容
.page_content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 0rem 34/100rem 0rem 40/100rem;
  letter-spacing: 1/100rem;
}
//订阅
.page_content_subscribe {
  // height: 498/100rem;
  background: #ffffff;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 80/100rem 74/100rem 80/100rem 76/100rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.page_subscribe_title {
  width: 100%;
  text-align: center;
  font-size: 40/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
}
.page_subscribe_title1 {
  width: 100%;
  text-align: center;
  font-size: 40/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  margin-top: 10/100rem;
}
/deep/ .el-input__inner {
  width: 600/100rem;
  height: 80/100rem;
  line-height: 80/100rem;
  border-radius: 10/100rem;
  border: 2/100rem solid #552be4;
  padding: 20/100rem 36/100rem;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7b6ca;
  margin-top: 26/100rem;
}
.page_subscribe_btn {
  width: 320/100rem;
  height: 80/100rem;
  text-align: center;
  line-height: 80/100rem;
  background: #1867dd;
  border-radius: 10/100rem;
  border: 1/100rem solid #ffffff;
  font-size: 28/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  margin-top: 40/100rem;
}
// 下载
.page_content_download {
  width: 100%;
  height: 472/100rem;
  background: url("../../assets/images/pic_down_bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page_download_title {
  width: 100%;
  height: 58/100rem;
  font-size: 40/100rem;
  text-align: center;
  font-family: Helvetica;
  color: #ffffff;
  line-height: 48/100rem;
  margin: 80/100rem 0 50/100rem 0;
  font-weight: bold;
}
.page_download_detail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 0 76/100rem;
}
.page_download_app,
.page_download_book {
  width: 240/100rem;
  height: 200/100rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.page_download_app img {
  width: 100/100rem;
  height: 100/100rem;
}
.page_download_book img {
  width: 100/100rem;
  height: 100/100rem;
}
.page_download_app_btn,
.page_download_book_btn {
  width: 240/100rem;
  height: 76/100rem;
  text-align: center;
  background: linear-gradient(180deg, #ffffff 0%, #e9e6ff 100%);
  border-radius: 38/100rem;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #13228d;
  line-height: 76/100rem;
  >a {
    display: block;
    height: 100%;
    width: 100%;
  }
}
//发行计划
.page_content_plan {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.page_plan_img_div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page_plan_img_title {
  text-align: center;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  margin-bottom: 20/100rem;
}
.page_plan_detail {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 80/100rem;
  // align-items: center;
}
.page_plan_detail_div {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // align-items: center;
}
.page_plan_detail_title {
  width: 140/100rem;
  font-size: 26/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  text-align: left;
  color: #323a43;
  margin-top: 6/100rem;
}
.page_plan_detail_intro {
  width: 514/100rem;
  font-size: 26/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  line-height: 40/100rem;
}
.page_plan_detail_second {
  margin-top: 16/100rem;
}
.page_plan_detail_third {
  margin-top: 16/100rem;
}
.page_plan_title {
  width: 100%;
  text-align: center;
  height: 66/100rem;
  font-size: 44/100rem;
  font-family: Helvetica;
  color: #323a43;
  line-height: 52/100rem;
  margin: 80/100rem 0 94/100rem 0;
  font-weight: bold;
}
.page_plan_img {
  width: 366/100rem;
  height: 366/100rem;
  text-align: center;
  background: url("../../assets/images/pic_bzt.png") no-repeat;
  background-size: 366/100rem 366/100rem;
  margin-bottom: 26/100rem;
}
.page_plan_item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 60/100rem;
}
.page_plan_item_div {
  width: 168/100rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7b6ca;
  margin-top: 12/100rem;
  margin-right: 36/100rem;
}
.page_plan_item_div1 {
  width: 120/100rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7b6ca;
  margin-top: 12/100rem;
  margin-right: 36/100rem;
}
.page_plan_item_div2 {
  width: 140/100rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7b6ca;
  margin-top: 12/100rem;
  margin-right: 36/100rem;
}
.page_plan_item_div3 {
  width: 80/100rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7b6ca;
  margin-top: 12/100rem;
}
.marginR {
  margin-right: 85/100rem;
}
.page_plan_part_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #01befa;
  margin-right: 8/100rem;
}
.page_plan_part1_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #3164fd;
  margin-right: 8/100rem;
}
.page_plan_part2_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #1138b6;
  margin-right: 8/100rem;
}
.page_plan_part3_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #36d8f3;
  margin-right: 8/100rem;
}
.page_plan_part4_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #64b6ff;
  margin-right: 8/100rem;
}
.page_plan_part5_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #baf2fd;
  margin-right: 8/100rem;
}
.page_plan_part6_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #9cdbe7;
  margin-right: 8/100rem;
}
// .page_plan_part_after {
// }
//第三部分 关于ART结算中心
.page_content_settlement {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page_settlement_title {
  width: 100%;
  height: 66/100rem;
  text-align: center;
  font-size: 44/100rem;
  font-family: Helvetica;
  color: #323a43;
  line-height: 52/100rem;
  margin-top: 80/100rem;
  font-weight: bold;
}
.page_settlement_img {
  width: 466/100rem;
  height: 352/100rem;
  margin: 80/100rem 0 60/100rem 0;
}
.page_settlement_img img {
  width: 100%;
  height: 100%;
}
.page_settlement_detail {
  font-size: 26/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  line-height: 44/100rem;
  margin-bottom: 80/100rem;
}
.page_settlement_detail2 {
  margin-top: 20/100rem;
}
//第二部分 核心技术优势
.page_content_advantage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page_advantage_title {
  width: 100%;
  height: 58/100rem;
  text-align: center;
  font-size: 40/100rem;
  font-family: Helvetica;
  color: #323a43;
  line-height: 48/100rem;
  margin-top: 80/100rem;
  font-weight: bold;
}
.page_advantage_img {
  width: 280/100rem;
  height: 280/100rem;
  margin: 80/100rem 0 46/100rem 0;
}
.page_advantage_img img {
  width: 100%;
  height: 100%;
}
.page_advantage_img1 {
  width: 280/100rem;
  height: 280/100rem;
  margin: 0rem 0 46/100rem 0;
}
.page_advantage_img1 img {
  width: 100%;
  height: 100%;
}
.page_advantage_img2 {
  width: 280/100rem;
  height: 280/100rem;
  margin: 0rem 0 12/100rem 0;
}
.page_advantage_img2 img {
  width: 100%;
  height: 100%;
}
.page_advantage_title2 {
  width: 100%;
  height: 40/100rem;
  font-size: 28/100rem;
  text-align: center;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  line-height: 40/100rem;
  margin-bottom: 24/100rem;
}
.page_advantage_title3 {
  width: 100%;
  height: 40/100rem;
  text-align: center;
  font-size: 28/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  line-height: 40/100rem;
  margin-bottom: 24/100rem;
}
.page_advantage_title4 {
  width: 100%;
  height: 40/100rem;
  text-align: center;
  font-size: 28/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  line-height: 40/100rem;
  margin-bottom: 24/100rem;
}
.page_advantage_detail {
  // width: 750/100rem;
  font-size: 26/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  line-height: 44/100rem;
  margin-bottom: 40/100rem;
}
//第一部分
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
}
.page_content_detail_bottom {
  margin-top: 20/100rem;
}
// banner
.page_home {
  width: 100%;
  height: 1016/100rem;
  // background: linear-gradient(162deg, #15095f 0%, #0f45db 100%);
  background: url("../../assets/images/picwold2@3x.png") no-repeat center center;
  background-size: cover;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1/100rem;
  position: relative;
}
.page_banner {
  width: 100%;
  height: 1016/100rem;
  background: url("../../assets/images/banner.png") no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  letter-spacing: 1/100rem;
  position: relative;
}
.page_right {
  width: 100%;
  height: 1016/100rem;
  background: url("../../assets/images/banner3@3x.png") no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  letter-spacing: 1/100rem;
  position: relative;
}
.page_out {
  width: 100%;
  height: 1016/100rem;
  position: relative;
  &.zh {
    background: url("../../assets/images/banner4@3x.png") no-repeat center center;
    background-size: cover;
  }
  &.en {
    background: url("../../assets/images/banner4-en@3x.png") no-repeat center center;
    background-size: cover;
  }
}
.page_home_top,
.page_banner_top,
.page_right_top {
  width: 100%;
  // height: 550/100rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page_home_bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 750/100rem;
  height: 680/100rem;
  background: url("../../assets/images/pic_wold@3x.png") no-repeat;
  background-size: 100% 100%;
  // background-size: 750/100rem 680/100rem;
}
.page_home_title {
  width: 100%;
  height: 90/100rem;
  text-align: center;
  font-size: 60/100rem;
  font-family: Helvetica;
  color: #ffffff;
  line-height: 72/100rem;
  margin: 144/100rem 0 28/100rem 0;
  font-weight: bold;
}
.page_banner_title {
  width: 100%;
  text-align: center;
  height: 58/100rem;
  font-size: 60/100rem;
  font-family: PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 48/100rem;
  margin: 117/100rem 0 0 0;
}
.page_right_title {
  width: 100%;
  background: url("../../assets/images/Atomic-Swap@3x.png") no-repeat center center;
  background-size: 405/100rem 56/100rem;
  text-align: center;
  height: 56/100rem;
  font-size: 72/100rem;
  font-family: PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 48/100rem;
  margin: 206/100rem 0 54/100rem 0;
}
.page_home_item1 {
  width: 100%;
  text-align: center;
  height: 56/100rem;
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 56/100rem;
}
.page_banner_item1 {
  width: 100%;
  text-align: center;
  height: 36/100rem;
  font-size: 36/100rem;
  font-family: PingFang SC;
  font-weight: 300;
  color: #ffffff;
  line-height: 48/100rem;
  margin-top: 42/100rem;
}
.page_home_item2 {
  width: 100%;
  text-align: center;
  height: 56/100rem;
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 56/100rem;
  margin-top: 8/100rem;
}
.page_banner_date_wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .time {
    display: inline-block;
    min-width: 150/100rem;
    margin-right: 3px;
    text-align: right;
  }
}
.page_banner_date_wrap .text_left {
  text-align: left;
}
.page_banner_item2 {
  width: 100%;
  text-align: center;
  height: 37/100rem;
  font-size: 28/100rem;
  font-family: PingFang SC;
  font-weight: 300;
  color: #ffffff;
  line-height: 48/100rem;
  margin-top: 53/100rem;
}
.page_right_item1 {
  width: 575/100rem;
  padding: 0 5/100rem;
  text-align: center;
  font-size: 36/100rem;
  font-family: PingFang SC;
  font-weight: 300;
  color: #ffffff;
  line-height: 60/100rem;
}
.page_banner_detail {
  width: 100%;
  text-align: center;
  height: 37/100rem;
  font-size: 28/100rem;
  font-family: PingFang SC;
  font-weight: 300;
  color: #ffffff;
  line-height: 48/100rem;
  margin-top: 10/100rem;
}
.page_home_detail {
  width: 100%;
  padding: 0 10/100rem;
  text-align: center;
  height: 42/100rem;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 40/100rem;
  margin-top: 46/100rem;
}
.page_home_btn,
.page_banner_btn {
  width: 320/100rem;
  height: 80/100rem;
  text-align: center;
  line-height: 80/100rem;
  border-radius: 10/100rem;
  border: 2/100rem solid #ffffff;
  font-size: 28/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  margin-top: 70/100rem;
}
.page_banner_btn {
  margin-top: 66/100rem;
}
</style>
