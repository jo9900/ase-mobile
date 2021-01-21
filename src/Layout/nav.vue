<!-- -->
<template>
  <div class="web_nav">
    <div :class="['top', $lang]" @click="toNews"></div>
    <div class="wrap">
      <div class="username_span_div">
        <img src="@/assets/images/logo_art.png" class="logoImg" />
        <span class="username_span" v-if="email != null" @click="selecMun">{{
          email
        }}</span>
        <span class="username_span" v-if="email == null"
          ><div :class="pagePath == '/login' ? 'active' : ''">
            <router-link to="/login">{{ $t("message.10") }}</router-link>
          </div>
          <div style="margin: 0 10px">|</div>
          <div :class="pagePath == '/signIn' ? 'active' : ''">
            <router-link to="/signIn">{{ $t("message.11") }}</router-link>
          </div></span
        >
        <img
          src="@/assets/images/icon_home@3x.png"
          class="iconSelect"
          @click="selecMun"
        />
      </div>
    </div>
    <div class="optc_bwer" v-if="makes" @click="selecMun"></div>
    <van-popup
      v-model="makes"
      position="right"
      :style="{ height: '100%', width: '70%', background: '#100746' }"
      round
      closeable
    >
      <div class="drowMun">
        <div class="" style="position: relative">
          <ul class="mllert">
            <li :class="pagePath == '/center' ? 'active' : ''" v-if="isLogin">
              <img src="../assets/images/icon_my.png" alt="" class="iconImg" />
              <router-link to="/center">{{ $t("message.2") }}</router-link>
            </li>
            <!-- <li v-else>
              <div class="dlaiet">
                <img
                  src="../assets/images/icon_my.png"
                  alt=""
                  class="iconImg"
                />
                <div :class="pagePath == '/login' ? 'active' : ''">
                  <router-link to="/login">登录</router-link>
                </div>
                <div style="margin: 0 10px">|</div>
                <div :class="pagePath == '/signIn' ? 'active' : ''">
                  <router-link to="/signIn">注册</router-link>
                </div>
              </div>
            </li> -->
            <li :class="pagePath == '/' ? 'active' : ''">
              <img
                src="../assets/images/icon_home.png"
                alt=""
                class="iconImg"
              />
              <router-link to="/">{{ $t("message.1") }}</router-link>
            </li>
            <li :class="pagePath == '/journalism' ? 'active' : ''">
              <img
                src="../assets/images/icon_news.png"
                alt=""
                class="iconImg"
              />
              <router-link to="/journalism">{{ $t("message.3") }}</router-link>
            </li>
            <li :class="pagePath == '/books' ? 'active' : ''">
              <img
                src="../assets/images/icon_book.png"
                alt=""
                class="iconImg"
              />
              <a @click="downloadPDF">{{ $t("message.4") }}</a>

            </li>
            <li :class="pagePath == '/plan' ? 'active' : ''">
              <img
                src="../assets/images/icon_faxin.png"
                alt=""
                class="iconImg"
              />
              <router-link to="/plan">{{ $t("message.5") }}</router-link>
            </li>
            <li :class="pagePath == '/presell' ? 'active' : ''">
              <img
                src="../assets/images/icon_yushou.png"
                alt=""
                class="iconImg"
              />
              <router-link to="/presell">{{ $t("message.6") }}</router-link>
            </li>
            <li :class="pagePath == '/help' ? 'active' : ''">
              <img
                  src="../assets/images/icon_bz.png"
                  alt=""
                  class="iconImg"
              />
              <router-link to="/help">{{ $t("message.475") }}</router-link>
            </li>
            <li :class="pagePath == '/about' ? 'active' : ''">
              <img src="../assets/images/icon_we.png" alt="" class="iconImg" />
              <router-link to="/about">{{ $t("message.7") }}</router-link>
            </li>
            <!-- <li @click="loginClose" v-if="isLogin">退出</li> -->
            <li @click="language">
              <img src="../assets/images/icon_zw.png" alt="" class="iconImg" />
              <span v-if="lang == 'en'">choose language/English</span>
              <span v-if="lang == 'zh'">选择语言/中文</span>
              <span v-if="lang == 'ja'">日本語</span>
              <span v-if="lang == 'ar'"> اختر اللغة العربية</span>
              <span v-if="lang == 'ko'">한국어</span>
              <span v-if="lang == 'ru'">русский</span>
            </li>
          </ul>
          <div class="loginout" @click="loginClose" v-if="isLogin">
            {{ $t("message.9") }}
          </div>
        </div>
      </div>
    </van-popup>
    <van-popup
      v-model="changeISlanguage"
      style="z-index: 2090"
      :style="{ height: '50%', width: '100%' }"
      position="bottom"
    >
      <van-picker
        :title="$t('message.56')"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
        value-key="name"
      />
    </van-popup>

    <el-dialog :visible.sync="loginOut" width="400px" center>
      <div class="contt-text">
        {{ $t("message.9") }}
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="rz-botton" type="primary" @click="loginClose">{{
          $t("message.54")
        }}</el-button>
        <el-button class="rz-botton" type="primary" @click="loginOut = false">{{
          $t("message.55")
        }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { Popup, Picker } from "vant";
import { digest } from "@/request/news";

export default {
  components: { vanPopup: Popup, vanPicker: Picker },
  name: "",
  data() {
    return {
      columns: [
          { name: "中文", value: "zh" },
          { name: "English", value: "en" },
          // { name: "日本語", value: "ja" },
          // { name: "عربى", value: "ar" },
          // { name: "한국어", value: "ko" },
          // { name: "русский", value: "ru" },
      ],
      changeISlanguage: false,
      makes: false,
      pagePath: "",
      userCode: "",
      loginOut: false,
      isLogin: false,
      lang: this.$lang,
      name: "中文",
      bosket: true,
      code: localStorage.getItem("code"),
      email: localStorage.getItem("email"),
      map: {
        'zh': ['简体中文', 'Chinese'],
        'en': ['English', 'English'],
        'ja': ['日本語', 'Japanese'],
        'ar': ['عربى', 'Arabic'],
        'ko': ['한국어', 'Korean'],
        'ru': ['русский', 'Russian'],
      },
      newsCode: ''
    };
  },
  computed: {},
  watch: {
    $route: function (to, from) {
      this.pagePath = this.$route.path;
      this.makes = false;
    },
  },
  methods: {
    getNews() {
      let params = {
        lang_type: this.$langType,
        page_no: 1,
        page_size: 3,
      }
      digest(this.$qs.stringify(params)).then((res) => {
        if (res.code == 0) {
          try {
            this.newsCode = res.data.news[0].code // 取第一条
          } catch {
            this.newsCode = ''
          }
        }
      });
    },
    toNews() {
      this.$router.push({
        path: 'journalismDetail',
        query: {
          code: this.newsCode
        }
      })
    },
    downloadPDF(){
      window.open(this.$BaseUrl + "material/whitepaper.pdf", "_self")
    },
    messageTips() {
      this.$message({
        message: this.$t("message.215"),
      });
    },
    language() {
      this.changeISlanguage = true;
    },
    onConfirm(value, index) {
      this.changeISlanguage = false;
      this.makes = false;
      setTimeout(() => {
        this.handleCommandLang(value);
      }, 500);
      // this.name = value.name;
      // Toast(`当前值：${value.name}, 当前索引：${index}`);
    },
    onChange(picker, value, index) {
      // Toast(`当前值：${value.name}, 当前索引：${index}`);
    },
    onCancel() {
      // Toast("取消");
      this.changeISlanguage = false;
    },
    handleClick(command) {
      if (command == "center") {
        this.$router.push("/center");
      } else {
        this.loginOut = true;
      }
    },

    loginClose() {
      localStorage.clear("token");
      localStorage.clear("code");
      this.$router.push("/login");
    },
    handleCommandLang(command){
      localStorage.setItem("lang", command.value)
      localStorage.setItem("lang_type", this.map[command.value][1])
      this.languageChangeType(command)
    },
    languageChangeType(val) {
      this.$i18n.locale = val; // 切换vue国际化
      this.$Local(val); // 切换vant
      this.$router.go(0)
    },
    selecMun() {
      this.makes = !this.makes;
    },
    colseCoander() {
      this.bosket = false;
    },
  },
  created() {
    console.log(this.$lang, this.$langType);
    this.getNews()
    this.userCode = localStorage.getItem("code");
    this.isLogin = localStorage.getItem("token") ? true : false;
  },

  mounted() {
    this.pagePath = this.$route.path;
  },
};
</script>

<style lang='less' scoped>
.username_span_div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.iconSelect {
  margin-left: 21/100rem;
  width: 40/100rem;
  height: 40/100rem;
}
.username_span {
  width: 272/100rem;
  height: 40/100rem;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 40/100rem;
  margin-left: 96/100rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.logoImg {
  width: 240/100rem;
  height: 40/100rem;
}
.loginout {
  width: 262/100rem;
  height: 64/100rem;
  text-align: center;
  margin-left: 80/100rem;
  margin-top: 100/100rem;
  line-height: 64/100rem;
  border-radius: 32/100rem;
  opacity: 0.69;
  border: 2/100rem solid #ffffff;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}
.iconImg {
  margin-right: 5px;
  width: 40/100rem;
  height: 40/100rem;
}
/deep/ .van-overlay {
  // opacity: 0.5;
  // background: linear-gradient(162deg, #15095f 0%, #0f45db 100%);
  background-color: rgba(0, 0, 0, 0.5);
}
.web_nav {
  height: 242/100rem;
  background: #ffffff;
  // border-bottom: 1px solid #dcd8d8;
  position: relative;
  z-index: 99;
  .top {
    height: 152/100rem;
    width: 100%;
    background-size: contain;
    &.zh {
      background: url("../assets/images/top_zh.png") center center no-repeat;
    }
    &.en {
      background: url("../assets/images/top_en.png") center center no-repeat;
    }
  }
  .wrap {
    padding: 0 13px;
    height: 90/100rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #272727;
    background: #100746;
    .nav_logo {
      width: 360/100rem;
      // font-size: 24px;
    }
  }
}
.drowMun {
  width: 100%;
  // height: 667px;
  background-color: #100746;
  // position: absolute;
  // top: 74px;
  // min-height: 392px;
  padding: 80/100rem 40/100rem 40/100rem 40/100rem;
  z-index: 999;
  // padding-bottom: 23px;
}

.drowMun li {
  color: #fff;
  text-align: left;
  padding-left: 40/100rem;
  line-height: 100/100rem;
  font-size: 28/100rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // border-bottom: 1px solid #d4d4d4;
}
.dron-sj {
  position: absolute;
  top: -15px;
  right: -25px;
}
.dron-sj img {
  width: 21px;
  height: 8px;
}
.roae-loet img {
  width: 40/100rem;
}
.contt-text {
  font-size: 19px;
  text-align: center;
  line-height: 36px;
  color: #2c2c2c;
}
.rz-botton {
  width: 260/100rem;
  height: 84/100rem;
  text-align: center;
  background: linear-gradient(90deg, #efcf54 0%, #bf8d08 100%);
  border-radius: 12/100rem;
  border: none;
}
.gz-botton {
  width: 260/100rem;
  height: 84/100rem;
  background: #1d2c46;
  border-radius: 12/100rem;
  border: none;
}
.flext {
  display: inline-block;
}
.flext-all1 {
  float: left;
  width: 32px;
  margin-right: 8px;
}
.flext-all2 {
  width: 200px;
  font-size: 19px;
  margin-top: 5px;
  color: #4e4a4a;
}
.el-popper {
  width: 100%;
}
.el-dropdown-menu {
  width: 100%;
}
.active {
  color: #104cff !important;
}
.optc_bwer {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  top: 0;
}
.ruelat {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 26px;
}
.pullbot {
  width: 91px;
  height: 37px;
  line-height: 37px;
  border: 1px solid #104cff;
  border-radius: 6px;
  margin-right: 20px;
  color: #104cff;
}
.butonColor {
  color: #ffffff;
  background-color: #104cff;
}
.dlaiet {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.raplwt {
  position: relative;
  height: 77px;
}
.zllet {
  cursor: pointer;
  right: 4px;
  top: 5%;
  position: absolute;
  font-size: 26px;
  color: #f5f5f5;
}
.mllert a {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
