
<!-- -->
<template>
  <div class="page">
    <!-- <div style="height: 70px"></div> -->
    <div class="page_title">
      {{ $t("message.92") }}
      <div class="page_line"></div>
    </div>
    <div class="page_container">
      <div class="page_my">
        <div class="page_apply_content"  @click="toTransfer()">
          <div class="page_invite_content_pre">
            <div class="page_invite_content_name title">{{ $t("message.93") }}</div>
            <div class="page_invite_content_number transfer">{{ $t("message.478") }}</div>
          </div>
          <img
              src="../../assets/images/icon_found_more.png"
              alt=""
              class="pagez_kyc_content_arrow"
          />
        </div>
        <div class="page_my_number">
          {{ $t("message.94") }}{{ myPreSale && myPreSale.user_balance_amount }}
        </div>
      </div>
      <div class="card">
        <!-- <div class="page_hint colorD2A629">
        <img src="@/assets/img/center_hint.png" alt />
        {{languageNav[languageName].language_text0}}
      </div>-->
        <div class="user_info_box">
          <div class="user_info">
            <div class="user_info_title">{{ $t("message.95") }}</div>
            <div class="user_about">
              <div class="about_row">
                <img
                  src="../../assets/images/pic_touxinag.png"
                  alt=""
                  class="about_row_img"
                />
                <div class="about_row_p_div">
                  <p class="title">{{ $t("message.96") }}</p>
                  <p
                    class="about_row_p_name"
                    style="color: #a7acc1"
                    :class="{ taost: userInfo.kyc_status == 1 }"
                  >
                    <template v-if="languageName == 'English'">{{
                      userInfo.kyc_status == 1
                        ? userInfo.last_name + " · " + userInfo.first_name
                        : $t("message.97")
                    }}</template>
                    <template v-else>{{
                      userInfo.kyc_status == 1
                        ? userInfo.first_name + userInfo.last_name
                        : $t("message.97")
                    }}</template>
                  </p>
                </div>
              </div>

              <div class="about_row_address">
                <p class="title">{{ $t("message.98") }}</p>
                <p
                  class="about_row_p"
                  style="color: #a7acc1"
                  :class="{ taost: userInfo.kyc_status == 1 }"
                >
                  <template v-if="userInfo.kyc_status == 1">{{
                    languageName == "English"
                      ? userInfo.country_name_en
                      : userInfo.country_name
                  }}</template>
                  <template v-else>{{ $t("message.97") }}</template>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page_kyc">
        <div class="page_kyc_title">{{ $t("message.99") }}</div>
        <div
          class="pagez_kyc_content"
          v-if="userInfo.kyc_status == 0"
          @click="toApply"
        >
          <div class="pagez_kyc_content_pre">
            <div class="pagez_kyc_content_name">{{ $t("message.100") }}</div>
            <div class="pagez_kyc_content_status" style="color: #a7acc1">
              {{ $t("message.97") }}
            </div>
          </div>
          <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          />
        </div>
        <div class="pagez_kyc_content" v-if="userInfo.kyc_status == 1">
          <div class="pagez_kyc_content_pre">
            <div class="pagez_kyc_content_name">{{ $t("message.100") }}</div>
            <div class="pagez_kyc_content_status" style="color: #00e59e">
              {{ $t("message.101") }}
            </div>
          </div>
          <!-- <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          /> -->
        </div>
        <div class="pagez_kyc_content" v-if="userInfo.kyc_status == 2">
          <div class="pagez_kyc_content_pre">
            <div class="pagez_kyc_content_name">{{ $t("message.100") }}</div>
            <div class="pagez_kyc_content_status" style="color: #f0ba62">
              {{ $t("message.102") }}
            </div>
          </div>
          <!-- <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          /> -->
        </div>
        <div
          class="pagez_kyc_content"
          v-if="userInfo.kyc_status == 3"
          @click="lookUp"
        >
          <div class="pagez_kyc_content_pre">
            <div class="pagez_kyc_content_name">{{ $t("message.100") }}</div>
            <div class="pagez_kyc_content_status" style="color: #ff3c89">
              {{ $t("message.103") }}
            </div>
          </div>
          <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          />
        </div>
        <div class="pagez_kyc_content_passtips" v-if="userInfo.kyc_status == 3">
          <span>{{ $t("message.104") }}</span>
        </div>
        <div class="pagez_kyc_content_kyctips" v-if="userInfo.kyc_status == 0">
          <span style="color: #ff3c89">{{ $t("message.105") }}</span>
        </div>
        <div class="pagez_kyc_content_kyctips" v-if="userInfo.kyc_status == 2">
          <span style="color: #f0ba62">{{ $t("message.426") }}</span>
        </div>
      </div>
      <!-- 我的申购 -->
      <div class="page_apply">
        <div class="page_apply_my_title">{{ $t("message.106") }}</div>
        <div class="page_apply_content" @click="toApplyBuylog">
          <div class="page_apply_content_pre">
            <div class="page_apply_content_name">{{ $t("message.107") }}</div>
            <div class="page_apply_content_number">
              {{ myPreSale && myPreSale.apply_usdt_amount }} USDT
            </div>
          </div>
          <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          />
        </div>
        <div class="page_apply_content" @click="toApplyBuylog">
          <div class="page_apply_content_pre">
            <div class="page_apply_content_name">{{ $t("message.108") }}</div>
            <div class="page_apply_content_number">
              {{ myPreSale && myPreSale.apply_art_amount }} AECO
            </div>
          </div>
          <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          />
        </div>
      </div>
      <!-- 我的邀请 -->
      <div class="page_invite">
        <div class="page_invite_title">
          <span>{{ $t("message.109") }}</span>
          <span class="page_invite_rule"
            ><router-link class="linkHaef" :to="{ path: '/rule' }">{{
              $t("message.110")
            }}</router-link></span
          >
        </div>
        <div class="page_invite_content" @click="toRebatelog">
          <div class="page_invite_content_pre">
            <div class="page_invite_content_name">{{ $t("message.111") }}</div>
            <div class="page_invite_content_number">
              {{ marketing && marketing.rebate_amount }} USDT
            </div>
          </div>
          <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          />
        </div>
        <div class="page_invite_content" @click="toExtendLog">
          <div class="page_invite_content_pre">
            <div class="page_invite_content_name">{{ $t("message.112") }}</div>
            <div class="page_invite_content_number">
              {{ marketing && marketing.invite_count }} {{ $t("message.113") }}
            </div>
          </div>
          <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          />
        </div>
        <div class="page_invite_content">
          <div class="page_invite_content_pre">
            <div class="page_invite_content_name">{{ $t("message.298") }}</div>
            <div class="page_invite_content_number">
              <el-input
                class="text page_invite_content_input"
                v-model="marketing.invite_code"
                style="width: 200px"
                size="small"
                readonly
                id="invite_code"
                v-if="myPreSale && myPreSale.apply_usdt_amount != 0"
              />
              <div
                class="page_invite_content_tips"
                v-if="myPreSale && myPreSale.apply_usdt_amount == 0"
              >
                {{ tips }}
              </div>
            </div>
          </div>
          <img
            src="../../assets/images/icon_copy.png"
            alt=""
            class="pagez_kyc_content_arrow"
            @click="copyArticle('invite_code')"
            v-if="myPreSale && myPreSale.apply_usdt_amount != 0"
          />
        </div>
        <div class="page_invite_content">
          <div class="page_invite_content_pre">
            <div class="page_invite_content_name">{{ $t("message.299") }}</div>
            <div class="page_invite_content_number">
              <el-input
                class="text page_invite_content_input"
                v-model="marketing.invite_url"
                style="width: 200px"
                size="small"
                id="invite_url"
                readonly
                v-if="myPreSale && myPreSale.apply_usdt_amount != 0"
              />
              <div
                class="page_invite_content_tips"
                v-if="myPreSale && myPreSale.apply_usdt_amount == 0"
              >
                {{ tips1 }}
              </div>
              <!-- <el-input
                class="text page_invite_content_input"
                v-model="tips1"
                style="width: 200px"
                size="small"
                id="invite_url"
                v-if="myPreSale && myPreSale.apply_usdt_amount == 0"
              /> -->
            </div>
          </div>
          <img
            src="../../assets/images/icon_copy.png"
            alt=""
            class="pagez_kyc_content_arrow"
            @click="copyArticle('invite_url')"
            v-if="myPreSale && myPreSale.apply_usdt_amount != 0"
          />
        </div>
        <div class="page_invite_content" @click="qrclick" v-if="marketing.invite_url">
          <div class="page_invite_content_pre">
            <div class="page_invite_content_name">{{ $t("message.114") }}</div>
            <!--<div class="page_invite_content_number">-->
              <!--{{ $t("message.115") }}-->
            <!--</div>-->
          </div>
          <!--<img-->
            <!--src="../../assets/images/icon_more_off@3x.png"-->
            <!--alt=""-->
            <!--class="pagez_kyc_content_arrow"-->
            <!--v-show="!isQR"-->
          <!--/>-->
          <!--<img-->
            <!--src="../../assets/images/icon_more_on@3x.png"-->
            <!--alt=""-->
            <!--class="pagez_kyc_content_arrow"-->
            <!--v-show="isQR"-->
          <!--/>-->
        </div>
        <div class="page_invite_QRcode" v-show="marketing.invite_url">
          <div class="email">{{ user_email }}{{ $t("message.477") }}</div>
          <div class="page_invite_QRcode_div" id="qrcode" ref="qrcode" style="position: relative" v-show="!imgData">
            <img style="position: absolute;width: 40px;height: 40px;top: 60px;
                 left: 65px;" src="@/assets/images/logo.png" alt="logo">
          </div>
          <div class="page_invite_QRcode_div" style="position: relative" v-show="imgData">
            <img style="width: 170px;height: 170px" :src="imgData"/>
          </div>
          <div>{{ $t("message.476") }}</div>
        </div>
      </div>
      <div class="page_safe">
        <div class="page_safe_title">{{ $t("message.124") }}</div>
        <div class="page_safe_content">
          <div class="page_safe_content_pre">
            <div class="page_safe_content_name">{{ $t("message.123") }}</div>
            <div class="page_safe_content_account">{{ userInfo.code }}</div>
          </div>
          <!-- <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          /> -->
        </div>
        <div class="page_safe_content">
          <div class="page_safe_content_pre">
            <div class="page_safe_content_name">{{ $t("message.122") }}</div>
            <div class="page_safe_content_account">{{ userInfo.email }}</div>
          </div>
          <!-- <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          /> -->
        </div>
        <div class="page_safe_content" @click="toEditPas">
          <div class="page_safe_content_pre">
            <div class="page_safe_content_name">{{ $t("message.121") }}</div>
            <div class="page_safe_content_account">
              {{ $t("message.120") }}
            </div>
          </div>
          <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          />
        </div>
        <div class="page_safe_content" @click="toEditPas1">
          <div class="page_safe_content_pre">
            <div class="page_safe_content_name">
              {{ $t("message.125") }}
            </div>
            <div class="page_safe_content_account">{{ $t("message.126") }}</div>
          </div>
          <img
            src="../../assets/images/icon_found_more.png"
            alt=""
            class="pagez_kyc_content_arrow"
          />
        </div>
      </div>
      <!-- <van-cell-group title="身份证">
        <van-cell
          title="KYC认证"
          value="未认证"
          is-link
          v-if="userInfo.kyc_status == 0"
          @click="toApply"
          center
        />
        <van-cell
          title="KYC认证"
          value="已认证"
          is-link
          v-if="userInfo.kyc_status == 1"
          center
        />
        <van-cell
          title="KYC认证"
          value="审核中"
          is-link
          v-if="userInfo.kyc_status == 2"
          center
        />
        <van-cell
          title="KYC认证"
          value="未通过"
          is-link
          v-if="userInfo.kyc_status == 3"
          @click="lookUp"
          center
        />
      </van-cell-group> -->
      <!-- <van-cell-group :title="languageNav[languageName].language_text10">
        <van-cell
          :value="myPreSale.apply_usdt_amount + ' USDT'"
          is-link
          center
          v-show="myPreSale.apply_usdt_amount"
          :title="languageNav[languageName].language_text14"
          @click="toApplyBuylog"
        >
        </van-cell>
        <van-cell
          value="0 USDT"
          is-link
          center
          v-show="!myPreSale.apply_usdt_amount"
          :title="languageNav[languageName].language_text14"
          @click="toApplyBuylog"
        >
        </van-cell>
        <van-cell
          :value="myPreSale.apply_taft_amount + ' TAFT'"
          is-link
          center
          v-show="myPreSale.apply_taft_amount"
          :title="languageNav[languageName].language_text15"
          @click="toTransfer"
        >
        </van-cell>
        <van-cell
          value="0 TAFT"
          is-link
          center
          v-show="!myPreSale.apply_taft_amount"
          :title="languageNav[languageName].language_text15"
          @click="toTransfer"
        >
        </van-cell>
      </van-cell-group> -->
      <!-- 我的推广 -->
      <!-- <van-cell-group :title="languageNav[languageName].language_text13">
        <van-cell
          :title="languageNav[languageName].language_text16"
          :value="marketing.rebate_amount + ' USDT'"
          v-show="marketing.rebate_amount"
          is-link
          center
          @click="toRebatelog"
        />
        <van-cell
          :title="languageNav[languageName].language_text16"
          value="0 USDT"
          is-link
          center
          @click="toRebatelog"
          v-show="!marketing.rebate_amount"
        />
        <van-cell
          :title="languageNav[languageName].language_text17"
          :value="
            marketing.invite_count +
            ' ' +
            languageNav[languageName].language_text12
          "
          v-show="marketing.invite_count"
          is-link
          center
          @click="toExtendLog"
        />
        <van-cell
          :title="languageNav[languageName].language_text17"
          :value="'0 ' + languageNav[languageName].language_text12"
          is-link
          center
          @click="toExtendLog"
          v-show="!marketing.invite_count"
        />
        <van-cell
          :title="languageNav[languageName].language_text149"
          class="invite-van"
        >
          <template>
            <div class="invite-count">
              <el-input
                class="text extend_invite_input"
                v-model="languageNav[languageName].language_text151"
                style="width: 400px; max-width: 100%"
                size="small"
                id="invite_code"
                v-if="myPreSale && myPreSale.apply_usdt_amount == 0"
              />
              <el-input
                class="text extend_invite_input"
                v-model="marketing.invite_code"
                style="width: 400px; max-width: 100%"
                size="small"
                id="invite_code"
                v-if="myPreSale && myPreSale.apply_usdt_amount != 0"
              />
              <el-button
                type="primary"
                icon="el-icon-document"
                size="small"
                @click="copyArticle('invite_code')"
              >
              </el-button>
            </div>
          </template>
        </van-cell>
        <van-cell
          :title="languageNav[languageName].language_text150"
          class="invite-van"
        >
          <template>
            <div class="invite-count">
              <el-input
                class="text extend_invite_input"
                v-model="marketing.invite_url"
                style="width: 400px; max-width: 100%"
                size="small"
                id="invite_url"
                v-if="myPreSale && myPreSale.apply_usdt_amount != 0"
              />
              <el-input
                class="text extend_invite_input"
                v-model="languageNav[languageName].language_text152"
                style="width: 400px; max-width: 100%"
                size="small"
                id="invite_url"
                v-if="myPreSale && myPreSale.apply_usdt_amount == 0"
              />
              <el-button
                type="primary"
                icon="el-icon-document"
                size="small"
                @click="copyArticle('invite_url')"
              >
              </el-button>
            </div>
          </template>
        </van-cell>
      </van-cell-group> -->
      <!-- <van-cell-group :title="languageNav[languageName].language_text19">
        <van-cell
          :title="languageNav[languageName].language_text20"
          :value="userInfo.email"
        />
        <van-cell
          :title="languageNav[languageName].language_text21"
          :value="languageNav[languageName].language_text22"
          @click="toEditPas"
        />
      </van-cell-group> -->
    </div>
  </div>
</template>

<script>
import { userInfo, myPreSale, myMarketing } from "@/request/user.js";
// import webFoot from "@/components/footer";
import html2canvas from 'html2canvas'
import { Cell, CellGroup } from "vant";
import QRCode from "qrcodejs2";
export default {
  name: "",
  components: { vanCellGroup: CellGroup, vanCell: Cell, html2canvas},
  data() {
    return {
      tips: this.$t("message.117"),
      tips1: this.$t("message.118"),
      isQR: false,
        imgData:"",
      userInfo: {
        area: "",
        code: "",
        email: "",
        first_name: "",
        kyc_status: 0, // 0-未认证,1-已认证,2-审核中,3-已拒绝
        last_name: "",
        name: "",
      },
      myPreSale: {
        apply_usdt_amount: "",
        apply_taft_amount: "",
        user_balance_amount: "",
      },
      marketing: {
        code: "",
        rebate_amount: 0,
        invite_count: 0,
        invite_code: "",
        invite_url: "",
      },
      languageName: this.$languageName,
      user_email: localStorage.getItem("email")
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getUserInfo();
    this.getMyPreSale();
    this.getMyMarketing();
    setTimeout(() => {
      this.qrcode();
    }, 300);
  },
  methods: {
    // http://192.168.0.84/#/signIn?ref=5CBy

    qrcode() {

      // document.getElementById("qrcode").innerHTML = "";
      let qrcode = new QRCode("qrcode", {
        width: 170,
        height: 170,
        // text: "http://192.168.0.84:9009/signIn?ref=5CBy", // 生成二维码的链接
        text: this.marketing.invite_url, // 生成二维码的链接
      });

      setTimeout(()=>{this.createPicture();},0)

    },

    createPicture () {
        let _this = this;
        window.pageYoffset = 0
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        html2canvas(this.$refs.qrcode, {
            width:185,
            height:170,
            scale: 1
        }).then((canvas) => {
            this.imgData = canvas.toDataURL('image/png');
        })
    },
    qrclick() {
      console.log(this.isQR);
      if (this.marketing.invite_url == "") {
        this.$message.error(this.$t("message.207"));
        return;
      }
       this.isQR = !this.isQR;

    },
    copyArticle(event) {
      if (this.myPreSale.apply_usdt_amount == 0) {
        return;
      }
      let id = event;
      const range = document.createRange();
      range.selectNode(document.getElementById(id));
      const selection = window.getSelection();
      if (selection.rangeCount > 0) selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      this.$message(this.$t("message.119"));
    },
    getUserInfo() {
      let params = {
        code: localStorage.getItem("code"),
      };
      userInfo(this.$qs.stringify(params)).then((res) => {
        if (res.code == 0 && res.data) {
          this.userInfo = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },

    getMyPreSale() {
      let params = {
        code: localStorage.getItem("code"),
      };
      myPreSale(this.$qs.stringify(params)).then((res) => {
        // console.log(res);
        if (res.code == 0) {
          this.myPreSale = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },

    getMyMarketing() {
      let params = {
        code: localStorage.getItem("code"),
      };
      myMarketing(this.$qs.stringify(params)).then((res) => {
        // console.log(res);
        if (res.code == 0) {
          this.marketing = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },

    toApply() {
      this.$router.push({ name: "KYCapply", query: { type: 0 } });
    },
    toApply1() {
      this.$router.push({ name: "KYCapply", query: { type: 1 } });
    },
    toApplyBuylog() {
      this.$router.push({
        name: "applyBuylog",
        query: {
          usdt: this.myPreSale.apply_usdt_amount,
          art: this.myPreSale.apply_art_amount,
        },
      });
    },

    toRebatelog() {
      this.$router.push("/rebatelog");
    },

    toExtendLog() {
      this.$router.push("/extendLog");
    },

    toEditPas() {
      this.$router.push("/password");
    },
    toEditPas1() {
      this.$router.push("/loginlog");
    },
    lookUp() {
      this.$router.push({ path: "/KYClose" });
    },
    toTransfer() {
      this.$router.push({ path: "/transfer" });
    },
  },
};
</script>

<style lang='less' scoped>
//安全设置
.page_safe {
  display: flex;
  flex-direction: column;
  padding: 40/100rem 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
}
.page_safe_title {
  width: 618/100rem;
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.page_safe_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24/100rem;
}
.page_safe_content_pre {
  width: 618/100rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #323a43;
}
.page_safe_content_name {
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #323a43;
}
.page_safe_content_account {
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7acc1;
}
// 我的邀请
/deep/ .el-input__inner {
  border: none;
  text-align: right;
  padding: 0;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7acc1;
}
.page_invite_QRcode {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7acc1;
  position: relative;
  margin-top: 20px;
}
.page_invite_QRcode_div {
  width: 170px;
  height: 170px;
  margin: 12px 0;
  box-shadow: 0 0 13px 4px rgba(0,0,0, .1);
  border: 8px solid #FFF;
  box-sizing: content-box;
  position: relative;
}
.page_invite_QRcode_div img {
  width: 100%;
  height: 100%;
}
.page_invite_content_tips {
  color: #f0ba62;
  text-align: right;
}
.page_invite {
  display: flex;
  flex-direction: column;
  padding: 40/100rem 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  border-bottom: 1/100rem solid #cad7e8;
}
.page_invite_title {
  width: 618/100rem;
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.page_invite_rule {
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #104cff;
}
.page_invite_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24/100rem;
}
.page_invite_content_pre {
  width: 618/100rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #323a43;
}
.page_invite_content_number {
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7acc1;
}
//我的申购
.page_apply {
  display: flex;
  flex-direction: column;
  padding: 40/100rem 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  border-bottom: 1/100rem solid #cad7e8;
}
.page_apply_my_title {
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
}
.page_apply_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24/100rem;
}
.page_apply_content_pre {
  width: 625/100rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #323a43;
}
.page_apply_content_number {
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7acc1;
}
//KYC
.page_kyc {
  display: flex;
  flex-direction: column;
  padding: 40/100rem 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  border-bottom: 1/100rem solid #cad7e8;
}
.page_kyc_title {
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
}
.pagez_kyc_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24/100rem;
}
.pagez_kyc_content_pre {
  width: 625/100rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #323a43;
}
.pagez_kyc_content_arrow {
  width: 40/100rem;
  height: 40/100rem;
  margin-left: 12/100rem;
}
.pagez_kyc_content_passtips {
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ff3c89;
  margin-top: 20/100rem;
}
.pagez_kyc_content_kyctips {
  width: 630/100rem;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7acc1;
  margin-top: 20/100rem;
  line-height: 35/100rem;
}
// 个人资料
.user_info {
  display: flex;
  flex-direction: column;
  padding: 40/100rem 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  border-bottom: 1/100rem solid #cad7e8;
}
.user_info_title {
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
}
.user_about {
  // width: 618/100rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #323a43;
}
.about_row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 628/100rem;
  margin-top: 24/100rem;
}
.about_row_p_div {
  display: flex;
  flex-direction: row;
  width: 600/100rem;
  justify-content: space-between;
  align-items: center;
}
.about_row_address {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 527/100rem;
  margin-top: 24/100rem;
  margin-left: 103/100rem;
}
.about_row_img {
  width: 80/100rem;
  height: 80/100rem;
  margin-right: 24/100rem;
}
.about_row_p_name {
  // margin-right: 20/100rem;
}
.page_title {
  flex-shrink: 0;
  width: 750/100rem;
  height: 104/100rem;
  background: #ffffff;
  border-bottom: 1/100rem solid #cad7e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-around;
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-top: 26/100rem;
}
.page_line {
  width: 80/100rem;
  height: 6/100rem;
  background: #104cff;
  margin-top: 8/100rem;
}
.page_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 0 40/100rem;
  background: #fff;
}
.page_my {
  width: 100%;
  height: 192/100rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-top: 50/100rem;
  border-bottom: 1/100rem solid #cad7e8;
}
.page_my {
  .title {
    font-size: 36/100rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #323a43;
  }
  .transfer {
    font-size: 28/100rem;
    color: #4F7BFF;
  }
}
.page_my_number {
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #323a43;
  margin-top: 30/100rem;
}
.van-cell__value {
  color: #104cff;
}

.invite-count {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .van-cell__value {
    min-width: 70% !important;
    span {
      display: inline-block;
      text-align: left;
      word-break: break-all;
    }
  }
  .van-cell__title {
    max-width: 30% !important;
    span {
      display: inline-block;
      text-align: left;
      word-break: break-all;
    }
  }
}
.page {
  // background: #f0f2f5;
  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-top: 90/100rem;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .card {
    width: 100%;
    margin: 10px auto;
    background: #ffffff;
    box-sizing: border-box;
    // padding: 30px;
  }
}
  .code_logo {
    position: absolute;
    z-index: 80;
    height: 40px;
    width: 40px;
    left: 50%;
    margin-left: -20px;
    top:50%;
    margin-top: -20px;
    border: 2px solid #fff;
    img {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  }
</style>
