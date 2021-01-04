<template>
  <div class="page">
    <webNav></webNav>
    <div class="page_content_div">
      <div class="page_content">
        <!-- <div
      class="page_content"
      :style="{ top: signInForm.invite_code ? '78px' : '78px' }"
    > -->
        <div class="wrap">
          <!-- 登录 -->
          <div v-if="pagePath == 'login'" class="case login_case">
            <div class="case_title">{{ $t("message.10") }}</div>
            <el-form
              class="case_form"
              :model="loginForm"
              :rules="rules"
              ref="loginForm"
            >
              <el-form-item class="form_row" prop="email">
                <!-- <img
                  class="input_img"
                  src="@/assets/img/login_person.png"
                  alt=""
                /> -->
                <el-input
                  prefix-icon="el-icon-user-solid"
                  autocomplete="off"
                  type="text"
                  :placeholder="$t('message.64')"
                  v-model.trim="loginForm.email"
                />
              </el-form-item>
              <el-form-item class="form_row" prop="password">
                <!-- <img
                  class="input_img"
                  src="@/assets/img/login_password.png"
                  alt=""
                /> -->
                <el-input
                  prefix-icon="el-icon-lock"
                  autocomplete="off"
                  type="password"
                  :placeholder="$t('message.65')"
                  v-model.trim="loginForm.password"
                />
              </el-form-item>
              <div class="forget_link">
                <span @click="toReset">{{ $t("message.66") }}</span>
              </div>
            </el-form>
            <div class="btn_div">
              <el-button
                class="btnPass"
                :loading="loading2"
                @click="submitForm('loginForm')"
                >{{ $t("message.10") }}</el-button
              >
            </div>
            <div class="sign_div">
              <span>{{ $t("message.67") }} </span>
              <span class="sign_div_span"
                ><router-link to="/signIn">{{
                  $t("message.15")
                }}</router-link></span
              >
            </div>
          </div>
          <!-- 登录 end -->

          <!-- 注册 -->
          <div v-else-if="pagePath == 'signIn'" class="case signIn_case">
            <div class="case_title">{{ $t("message.11") }}</div>
            <el-form
              class="case_form"
              :model="signInForm"
              :rules="rules"
              ref="signInForm"
            >
              <el-form-item prop="email">
                <!-- <img
                  class="input_img"
                  src="@/assets/img/login_person.png"
                  alt=""
                /> -->
                <el-input
                  class="row_input"
                  autocomplete="off"
                  prefix-icon="el-icon-user-solid"
                  type="text"
                  :placeholder="$t('message.68')"
                  v-model.trim="signInForm.email"
                />
              </el-form-item>
              <el-form-item class="form_row" prop="verify_code">
                <!-- <img
                  class="input_img"
                  src="@/assets/img/login_password.png"
                  alt=""
                /> -->
                <el-input
                  prefix-icon="el-icon-lock"
                  autocomplete="off"
                  type="text"
                  :placeholder="$t('message.69')"
                  v-model.trim="signInForm.verify_code"
                />
                <div :class="['get_code',{'disabledBtn': disabled}]"
                     @click="sendcode()"
                >
                  {{ $t("message.70") }}
                </div>
                <!--<div v-else class="get_code" >-->
                  <!--{{ btntxt }}-->
                <!--</div>-->
              </el-form-item>
              <el-form-item class="form_row" prop="password">
                <!-- <img
                  class="input_img"
                  src="@/assets/img/login_password.png"
                  alt=""
                /> -->
                <el-input
                  type="password"
                  prefix-icon="el-icon-lock"
                  autocomplete="off"
                  :placeholder="$t('message.65')"
                  v-model.trim="signInForm.password"
                />
              </el-form-item>
              <el-form-item class="form_row" prop="againPassword">
                <!-- <img
                  class="input_img"
                  src="@/assets/img/login_password.png"
                  alt=""
                /> -->
                <el-input
                  prefix-icon="el-icon-lock"
                  type="password"
                  autocomplete="off"
                  :placeholder="$t('message.71')"
                  v-model.trim="signInForm.againPassword"
                />
              </el-form-item>
              <el-form-item class="form_row form_row1">
                <!-- <img
                  class="input_img input_img1"
                  src="@/assets/img/rewer.png"
                  alt=""
                /> -->
                <template v-if="inviteCode">
                  <el-input
                    prefix-icon="el-icon-collection-tag"
                    disabled
                    v-model="signInForm.invite_code"
                  />
                </template>
                <template v-else>
                  <el-input
                    prefix-icon="el-icon-collection-tag"
                    autocomplete="off"
                    :placeholder="$t('message.72')"
                    v-model="signInForm.invite_code"
                /></template>
              </el-form-item>
              <!-- <div class="form_row codeText">

              </div> -->
              <div class="protocol_row" style="margin-top: 15px">
                <div class="spollt" @click="iconCheck">
                  <div class="bloet" id="spollt"></div>
                  <div class="icon_check" v-if="checked">
                    <i class="el-icon-check"></i>
                  </div>
                </div>
                {{ $t("message.73") }}
                <span
                  >《<span class="usertext" @click="userText">{{
                    $t("message.74")
                  }}</span
                  >》
                </span>
              </div>
            </el-form>
            <div class="btnPass_div">
              <el-button
                class="btnPass"
                :loading="loading1"
                @click="submitForm1('signInForm')"
                >{{ $t("message.15") }}</el-button
              >
            </div>
            <div class="sign_div">
              <span>{{ $t("message.75") }} </span>
              <span class="sign_div_span"
                ><router-link to="/login">{{
                  $t("message.76")
                }}</router-link></span
              >
            </div>
          </div>
          <!-- 注册 end -->

          <!-- 忘记密码 -->

          <div v-else class="case forget_case">
            <div class="case_title">{{ $t("message.77") }}</div>
            <el-form
              class="case_form"
              :model="resetData"
              :rules="rules"
              ref="resetForm"
            >
              <el-form-item class="form_row" prop="email">
                <!-- <img
                  class="input_img"
                  src="@/assets/img/login_person.png"
                  alt=""
                /> -->
                <el-input
                  prefix-icon="el-icon-user-solid"
                  type="text"
                  :placeholder="$t('message.68')"
                  v-model.trim="resetData.email"
                />
              </el-form-item>
              <el-form-item class="form_row" prop="verify_code">
                <!-- <img
                  class="input_img"
                  src="@/assets/img/login_password.png"
                  alt=""
                /> -->
                <el-input
                  type="text"
                  prefix-icon="el-icon-lock"
                  autocomplete="off"
                  :placeholder="$t('message.69')"
                  v-model.trim="resetData.verify_code"
                />
                <div :class="['get_code',{'disabledBtn': disabled1}]"
                     @click="sendcode1()"
                >
                  {{ $t("message.70") }}
                </div>
              </el-form-item>
              <el-form-item class="form_row" prop="password">
                <!-- <img
                  class="input_img"
                  src="@/assets/img/login_password.png"
                  alt=""
                /> -->
                <el-input
                  prefix-icon="el-icon-lock"
                  type="password"
                  :placeholder="$t('message.65')"
                  v-model.trim="resetData.password"
                />
              </el-form-item>
              <el-form-item class="form_row" prop="againPassword">
                <!-- <img
                  class="input_img"
                  src="@/assets/img/login_password.png"
                  alt=""
                /> -->
                <el-input
                  prefix-icon="el-icon-lock"
                  type="password"
                  autocomplete="off"
                  :placeholder="$t('message.71')"
                  v-model.trim="resetData.againPassword"
                />
              </el-form-item>
            </el-form>
            <div class="btnPass_div">
              <el-button
                class="btnPass"
                :loading="loading"
                @click="resetDataForm"
                >{{ $t("message.78") }}</el-button
              >
            </div>
            <div class="sign_div">
              <span>{{ $t("message.75") }}</span>
              <span class="sign_div_span"
                ><router-link to="/login">{{
                  $t("message.76")
                }}</router-link></span
              >
            </div>
          </div>
          <!-- 忘记密码 end -->
        </div>
      </div>
    </div>
    <!--<webFoot class="kaofooter"></webFoot>-->
  </div>
</template>


<script>
import webNav from "@/Layout/nav";
import webFoot from "@/Layout/footer";
import {
  pubKey,
  login,
  signIn,
  mailVcode,
  findPassword,
  resetPassword,
} from "@/request/login.js";
const sha256 = require("js-sha256").sha256;
import { JSEncrypt } from "jsencrypt";
import languageNav from "@/language/login";
import Vue from "vue";
let that;
export default {
  name: "",
  components: { webNav, webFoot },
  data() {
    var Elowert = (rule, value, callback) => {
      let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (!reg.test(value)) {
        callback(new Error($t("message.79")));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      let codeReg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,30}$/;
      if (!codeReg.test(value)) {
        callback(new Error($t("message.80")));
      } else {
        callback();
      }
    };

    return {
      languageNav: languageNav,
      languageName: this.$languageName,
      fromPath: "",
      flag: true,
      loading: false,
      loading1: false,
      loading2: false,
      pagePath: "login",
      checked: false,
      disabled: false,
      disabled1: false,
      inviteCode: false,
      time: 60,
      time1: 60,
      btntxt: this.$t("message.70"),
      btntxt1: this.$t("message.70"),
      loginForm: {
        email: "",
        password: "",
        device_type: 3,
      },
      signInForm: {
        email: "",
        password: "",
        againPassword: "",
        verify_code: "",
        invite_code: "",
      },
      //重置密码
      resetData: {
        email: "",
        password: "",
        againPassword: "",
        verify_code: "",
      },
      pk: "",
      timerID: null,
      rules: {
        email: [
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
        password: [
          {
            required: true,
            message: this.$t("message.65"),
            trigger: "blur",
          },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,30}$/,
            message: this.$t("message.80"),
          },
        ],
        againPassword: [
          {
            required: true,
            message: this.$t("message.422"),
            trigger: "blur",
          },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,30}$/,
            message: this.$t("message.80"),
          },
        ],
        verify_code: [
          {
            required: true,
            message: this.$t("message.69"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {
    $route: function (to, from) {
      this.pagePath = this.$route.name;
      this.loginForm = {
        email: "",
        password: "",
      };
      this.signInForm = {
        email: "",
        password: "",
        againPassword: "",
        verify_code: "",
        invite_code: "",
      };
      this.resetData = {
        email: "",
        password: "",
        againPassword: "",
        verify_code: "",
      };
      this.$nextTick(() => {
        if (this.$refs.signInForm != undefined) {
          this.$refs.signInForm.resetFields();
        }
        if (this.$refs.loginForm != undefined) {
          this.$refs.loginForm.resetFields();
        }
        if (this.$refs.resetForm != undefined) {
          this.$refs.resetForm.resetFields();
        }
      });
    },
  },

  methods: {
    judgePage(name) {
      if (name == "signIn") {
        this.pagePath = "signIn";
        this.signInForm.password = "";
        this.signInForm.againPassword = "";
      } else if (name == "login") {
        this.pagePath = "login";
      } else {
        this.pagePath = "forget";
        this.resetData.password = "";
        this.resetData.againPassword = "";
      }
    },

    toReset() {
      this.$router.push("forget");
    },

    getPubKey() {
      pubKey().then((res) => {
        if (res.code == 0) {
          this.pk = res.data.pub_key;
          // localStorage.setItem("pk", res.data.pub_key);
        }
      });
    },

    rsaData(data) {
      const PUBLIC_KEY = this.pk;
      // const PUBLIC_KEY = localStorage.getItem("pk");
      let jsencrypt = new JSEncrypt();
      jsencrypt.setPublicKey(PUBLIC_KEY);
      let result = jsencrypt.encrypt(data);
      return result;
    },

    sendcode() {
      if (this.disabled) return
      this.$refs["signInForm"].validateField("email", (errMsg) => {
        if (!errMsg) {
          let data = {
            lang_type: this.$languageName,
            email: this.signInForm.email,
          };
          mailVcode(this.$qs.stringify(data)).then((res) => {
            this.disabled = false
            if (res.code == 0) {
              // this.timer();
              this.$message({
                message: this.$t("message.81"),
                type: "success",
              });
            } else {
              if (res.code == "101702") {
                return this.$message.error(this.$t("message.82"));
              }
              if (res.code == "101703") {
                return this.$message.error(this.$t("message.83"));
              }
              if (res.code == "101704") {
                return this.$message.error(this.$t("message.427"));
              }
            }
          });
        }
      });
    },
    sendcode1() {
      if (this.disabled1) return
      this.$refs["resetForm"].validateField("email", (errMsg) => {
        if (!errMsg) {
          let data = {
            lang_type: this.$languageName,
            email: this.resetData.email,
          };
          findPassword(this.$qs.stringify(data)).then((res) => {
            this.disabled1 = false
            if (res.code == 0) {
              // this.timer1();
              this.$message({
                message: this.$t("message.81"),
                type: "success",
              });
            } else {
              if (res.code == "101702") {
                return this.$message.error(this.$t("message.82"));
              }
              if (res.code == "101703") {
                return this.$message.error(this.$t("message.83"));
              }
              if (res.code == "101704") {
                return this.$message.error(this.$t("message.427"));
              }
            }
          });
        }
      });
    },
    timer() {
      if (this.time > 0) {
        this.disabled = true;
        this.time--;
        this.btntxt = " " + this.time + " s";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 60;
        this.btntxt = this.$t("message.70");
        this.disabled = false;
      }
    },
    timer1() {
      if (this.time1 > 0) {
        this.disabled1 = true;
        this.time1--;
        this.btntxt1 = " " + this.time1 + " s";
        setTimeout(this.timer1, 1000);
      } else {
        this.time1 = 60;
        this.btntxt1 = this.$t("message.70");
        this.disabled1 = false;
      }
    },
    userText() {
      this.$router.push({ path: "/userText" });
      this.$store.state.signInForm = this.signInForm;
    },

    submitForm1(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // console.log(this.flag);
          if (!this.checked) {
            document.getElementById("spollt").style.borderColor = "red";
            return;
          }
          let params = JSON.parse(JSON.stringify(this.signInForm));
          // this.getPubKey();
          this.loading1 = true;
          let resData = await pubKey();
          if (resData.code == 0) {
            this.pk = resData.data.pub_key;
            // localStorage.setItem("pk", res.data.pub_key);
          }
          if (params.password != params.againPassword) {
            this.$message.error(this.$t("message.90"));
            return;
          }
          params.password = this.rsaData(sha256(params.password));
          signIn(this.$qs.stringify(params)).then((res) => {
            this.loading1 = false;
            if (res.code == 0) {
              this.$message({
                message: this.$t("message.84"),
                type: "success",
              });
              this.$router.push("login");
              this.$store.state.signInForm = {};
            } else {
              if (res.code == "100111") {
                this.$message.error(this.$t("message.85"));
              }
              if (res.code == "100113") {
                this.$message.error(this.$t("message.86"));
              }
              if (res.code == "100116") {
                this.$message.error(this.$t("message.87"));
              }
              if (res.code == "100115") {
                this.$message.error(this.$t("message.424"));
              }
            }
          });
          // this.flag = false;
          // this.timerID = setTimeout(function () {
          //   that.flag = true;
          // }, 1000 * 60);
        } else {
          return false;
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // console.log(this.flag);
          let params = {};
          Object.assign(params, this.loginForm);
          // 密码加密 sha256 => rsaData
          // this.getPubKey();
          this.loading2 = true;
          let resData = await pubKey();
          if (resData.code == 0) {
            this.pk = resData.data.pub_key;
            // localStorage.setItem("pk", res.data.pub_key);
          }
          params.password = this.rsaData(sha256(this.loginForm.password));
          login(this.$qs.stringify(params)).then((res) => {
            this.loading2 = false;
            if (res.code == 0) {
              this.$message({
                message: this.$t("message.88"),
                type: "success",
              });
              let code = res.data.code;
              let email = res.data.email;
              let token = res.data.token;
              localStorage.setItem("code", code);
              localStorage.setItem("token", token);
              localStorage.setItem("email", email);
              this.$store.commit("SETTOKEN", token);
              this.$store.commit("SETCODE", code);
              if (this.fromPath == "/presell") {
                this.$router.back(-1);
              } else {
                this.$router.push("/center");
              }
            } else {
              this.$message.error(this.$t("message.89"));
            }
          });
          // this.flag = false;
          // this.timerID = setTimeout(function () {
          //   that.flag = true;
          // }, 1000 * 60);
        } else {
          return false;
        }
      });
    },
    resetDataForm() {
      this.$refs["resetForm"].validate(async (valid) => {
        if (valid) {
          if (this.resetData.password != this.resetData.againPassword) {
            return this.$message.error(this.$t("message.90"));
          }
          let params = {
            email: this.resetData.email,
            email_verify_code: this.resetData.verify_code,
            new_password: this.resetData.againPassword,
          };
          this.loading = true;
          // this.getPubKey();
          let resData = await pubKey();
          if (resData.code == 0) {
            this.pk = resData.data.pub_key;
            // localStorage.setItem("pk", res.data.pub_key);
          }

          params.new_password = this.rsaData(sha256(this.resetData.password));
          resetPassword(this.$qs.stringify(params)).then((res) => {
            this.loading = false;
            if (res.code == 0) {
              this.$message({
                message: this.$t("message.91"),
                type: "success",
              });
              this.$router.push("login");
            } else if (res.code == 101503) {
              this.$message.error(this.$t("message.302"));
            } else if (res.code == 101504) {
              this.$message.error(this.$t("message.303"));
            } else if (res.code == 101505) {
              this.$message.error(this.$t("message.304"));
            } else if (res.code == 101506) {
              this.$message.error(this.$t("message.305"));
            } else {
              this.$message.error(this.$t("message.297"));
            }
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getQueryVariable(name, url) {
      return (
        decodeURIComponent(
          (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
            url
          ) || [, ""])[1].replace(/\+/g, "%20")
        ) || null
      );
    },
    iconCheck() {
      this.checked = !this.checked;
      if (this.checked) {
        document.getElementById("spollt").style.borderColor = "#c0c4cc";
      }
    },
  },
  created() {
    this.judgePage(this.$route.name);
    this.getPubKey();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (from.name == "usertext") {
        if (vm.$store.state.signInForm) {
          vm.signInForm = vm.$store.state.signInForm;
        }
      }
      vm.fromPath = from.path;
    });
  },
  beforeCreate() {
    that = this;
  },
  mounted() {
    this.signInForm.invite_code = "";
    if (
      this.getQueryVariable("ref", window.location.href) &&
      this.pagePath == "signIn"
    ) {
      this.inviteCode = true;
      this.signInForm.invite_code = this.getQueryVariable(
        "ref",
        window.location.href
      );
    }

    let height =
      document.documentElement.offsetHeight || document.body.offsetHeight;
    document.querySelector(".page_content_div").style.height = height + "px";
  },
  destroyed() {
    clearTimeout(this.timerID);
  },
};
</script>

<style lang='less' scoped>
/deep/ .el-input__inner {
  height: 84/100rem;
  // background: #f5f6f7;
  border-radius: 0/100rem;
  border-top: none;
  border-left: none;
  border-right: none;
  padding-top: 6/100rem;
}
.page_content_div {
  width: 100%;
  // height: 100%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #0d59dd 0%, #455bfd 100%);
  // position: absolute;
  // left: 0;
  // top: 0;
}
.sign_div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 24/100rem;
  color: #65728b;
  margin-top: 40/100rem;
}
.btnPass_div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40/100rem;
}
.sign_div_span {
  color: #104cff;
  margin-left: 16/100rem;
}
.btn_div {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.page {
  height: 100%;
  .page_content {
    background-size: cover;
    // position: absolute;
    // top: 92px;
    background-size: cover;
    width: 100%;
    .wrap {
      position: relative;
      z-index: 10;
      height: 100%;
      justify-content: center;
      display: flex;
      align-items: center;
      .case {
        width: 648/100rem;
        border-radius: 16/100rem;
        background: #ffffff;
        padding: 40/100rem;
        box-sizing: border-box;
        box-shadow: 4px 4px 16px 0px rgba(18, 44, 168, 1);
        .case_title {
          font-size: 38/100rem;
          color: #262626;
          text-align: center;
        }
        .case_form {
          padding: 32/100rem 0 0;

          .form_row {
            position: relative;
            width: 100%;
            margin-bottom: 42/100rem;

            &:last-child {
              margin-bottom: 0;
            }
            .input_img {
              position: absolute;
              left: 36/100rem;
              top: 24/100rem;
              width: 28/100rem;
            }
            .input_img1 {
              position: absolute;
              left: 36/100rem;
              top: 30/100rem;
              width: 28/100rem;
            }
            .row_input {
              padding-left: 82/100rem;
              font-size: 28/100rem;
              width: 100%;
              -webkit-appearance: none;
              appearance: none;
              height: 84/100rem;
              line-height: 84/100rem;
              // border: 1px solid #c7c7c7;
              border-radius: 10/100rem;
              background: #f5f6f7 !important;
              border: none;
              color: #323a43;
              font-family: PingFangSC-Regular, PingFang SC;
            }
            .get_code {
              cursor: pointer;
              position: absolute;
              right: 0/100rem;
              width: 160/100rem;
              height: 84/100rem;
              text-align: center;
              padding: 0 8/100rem;
              top: 0/100rem;
              font-size: 28/100rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #104cff;
              // background: #f5f6f7;
            }
            .get_code:hover {
              color: #efcf54;
            }
            .disabledBtn {
              color: gray;
            }
          }
          .forget_link {
            margin: 24px 0px 15px;
            text-align: right;
            font-size: 24/100rem;
            color: #104cff;
            cursor: pointer;
          }
        }

        &.signIn_case {
          .form_row {
            margin-bottom: 26px;
          }
          .protocol_row {
            font-size: 13px;
            margin-bottom: 10px;
            margin-top: 37px;
            display: flex;
            flex-direction: row;
            align-items: center;
            span {
              color: #104cff;
            }
          }
        }
        .btn {
          width: 360/100rem;
          height: 88/100rem;
          background: #bfcfff;
          border-radius: 10/100rem;
          font-size: 28/100rem;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
          text-align: center;
        }
        .btnPass {
          width: 360/100rem;
          height: 88/100rem;
          text-align: center;
          background: #104cff;
          border-radius: 10/100rem;
          font-size: 28/100rem;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
        }
      }
    }
  }
}
.page .page_content .wrap .case .btn {
  line-height: 18px;
}
.page .page_content .wrap .case .singBon {
  line-height: 38px;
}
.usertext:hover {
  cursor: pointer;
  text-decoration: underline;
}
.codeText /deep/ .el-input__inner {
  background-color: #fff !important;
  border-color: #ffff !important;
  width: 92%;
  color: #303133;
}
.kaofooter {
  z-index: 9;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.spollt {
  float: left;
  position: relative;
}
.bloet {
  width: 19px;
  height: 19px;
  margin-right: 10px;
  border: 1px solid #c0c4cc;
}
.icon_check {
  position: absolute;
  font-size: 31px;
  top: -10px;
  left: -4px;
  color: #104cff;
  font-weight: 600;
}
</style>
