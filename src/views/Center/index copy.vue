
<!-- -->
<template>
  <div class="page">
    <!-- <div style="height: 70px"></div> -->
    <div class="card">
      <!-- <div class="page_hint colorD2A629">
        <img src="@/assets/img/center_hint.png" alt />
        {{languageNav[languageName].language_text0}}
      </div>-->
      <div class="user_info_box">
        <div class="user_info">
          <div class="user_photo">
            <img src="@/assets/img/center_photo.png" alt />
          </div>
          <div class="user_about">
            <div class="about_row">
              <p class="title">
                {{ languageNav[languageName].language_text1 }}
              </p>
              <p
                class="colorD2A629"
                :class="{ taost: userInfo.kyc_status == 1 }"
              >
                <template v-if="languageName == 'English'">{{
                  userInfo.kyc_status == 1
                    ? userInfo.last_name + " · " + userInfo.first_name
                    : languageNav[languageName].language_text4
                }}</template>
                <template v-else>{{
                  userInfo.kyc_status == 1
                    ? userInfo.first_name + userInfo.last_name
                    : languageNav[languageName].language_text4
                }}</template>
              </p>
            </div>
            <div class="about_row" style="margin-top: 15px">
              <p class="title">
                {{ languageNav[languageName].language_text2 }}
              </p>

              <p
                class="colorD2A629"
                :class="{ taost: userInfo.kyc_status == 1 }"
              >
                <template v-if="userInfo.kyc_status == 1">{{
                  languageName == "English"
                    ? userInfo.country_name_en
                    : userInfo.country_name
                }}</template>
                <template v-else>{{
                  languageNav[languageName].language_text4
                }}</template>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="kyc-title">{{ languageNav[languageName].language_text29 }}</div> -->
    <van-cell-group :title="languageNav[languageName].language_text29">
      <van-cell
        title="单元格"
        value="内容"
        is-link
        v-if="userInfo.kyc_status == 0"
      />
      <van-cell
        title="单元格"
        value="内容"
        is-link
        v-if="userInfo.kyc_status == 1"
      />
      <van-cell
        title="单元格"
        value="内容"
        is-link
        v-if="userInfo.kyc_status == 2"
      />
    </van-cell-group>
    <div class="card">
      <div class="attest">
        <template v-if="userInfo.kyc_status == 0">
          <div class="title attest-title" @click="toApply">
            {{ languageNav[languageName].language_text3 }}
            <div class="center_targe status0">
              {{ languageNav[languageName].language_text4 }}
            </div>
            <span class="colorD2A629 arrow-img-span" style="cursor: pointer">
              <img src="@/assets/img/person_arrow.png" alt class="arrow-img" />
            </span>
          </div>
        </template>
        <template v-if="userInfo.kyc_status == 1">
          <div class="title attest-title">
            {{ languageNav[languageName].language_text3 }}
            <div class="center_targe status1">
              {{ languageNav[languageName].language_text6 }}
            </div>
          </div>
        </template>
        <template v-if="userInfo.kyc_status == 2">
          <div class="title attest-title">
            {{ languageNav[languageName].language_text3 }}
            <div class="center_targe status2">
              {{ languageNav[languageName].language_text7 }}
            </div>
          </div>
        </template>
        <template v-if="userInfo.kyc_status == 3">
          <div class="title attest-title" @click="lookUp">
            {{ languageNav[languageName].language_text3 }}
            <div class="center_targe status3">
              {{ languageNav[languageName].language_text8 }}
            </div>
            <span class="colorD2A629 arrow-img-span">
              <img src="@/assets/img/person_arrow.png" alt class="arrow-img" />
            </span>
          </div>
        </template>
      </div>
    </div>
    <div class="kyc-title">{{ languageNav[languageName].language_text10 }}</div>
    <div class="card">
      <div class="cart_box" @click="toApplyBuylog">
        <div class="cart_box_item">
          <div class="item_title arrow_img_div arrow-padding-right">
            <span class="item-title">{{
              languageNav[languageName].language_text14
            }}</span>
            <span class="colorD2A629"
              >{{
                myPreSale.apply_usdt_amount ? myPreSale.apply_usdt_amount : 0
              }}
              USDT</span
            >
            <span class="colorD2A629 arrow-img-span" style="cursor: pointer">
              <img src="@/assets/img/person_arrow.png" alt class="arrow-img" />
            </span>
          </div>
        </div>
      </div>
      <div class="cart_box" @click="toTransfer">
        <div class="cart_box_item item_border_top">
          <div class="item_title arrow_img_div arrow-padding-right">
            <span class="item-title">{{
              languageNav[languageName].language_text15
            }}</span>
            <span class="colorD2A629"
              >{{
                myPreSale.apply_taft_amount ? myPreSale.apply_taft_amount : 0
              }}
              TAFT</span
            >
            <div class="arrow-img-span">
              <img src="@/assets/img/person_arrow.png" alt class="arrow-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kyc-title">{{ languageNav[languageName].language_text13 }}</div>
    <div class="card">
      <div class="cart_box" @click="toRebatelog">
        <div class="cart_box_item">
          <div class="item_title arrow_img_div arrow-padding-right">
            <span class="item-title">{{
              languageNav[languageName].language_text16
            }}</span>
            <span class="colorD2A629"
              >{{
                marketing.rebate_amount ? marketing.rebate_amount : 0
              }}
              USDT</span
            >
            <span class="colorD2A629 arrow-img-span" style="cursor: pointer">
              <img src="@/assets/img/person_arrow.png" alt class="arrow-img" />
            </span>
          </div>
        </div>
      </div>
      <div class="cart_box" @click="toExtendLog">
        <div class="cart_box_item item_border_top">
          <div class="item_title arrow_img_div arrow-padding-right">
            <span class="item-title">{{
              languageNav[languageName].language_text17
            }}</span>
            <span class="colorD2A629"
              >{{ marketing.invite_count }}
              {{ languageNav[languageName].language_text12 }}</span
            >
            <span class="colorD2A629 arrow-img-span" style="cursor: pointer">
              <img src="@/assets/img/person_arrow.png" alt class="arrow-img" />
            </span>
          </div>
        </div>
      </div>
      <div class="cart_box">
        <div class="cart_box_item card_invite_code item_border_top">
          <div class="item_title">
            <span class="item-title">{{
              languageNav[languageName].language_text149
            }}</span>
          </div>
          <div class>
            <div class="extend" style="border: none">
              <!-- <div
                class="text extend_invite_code"
                id="invite_code"
                v-if="myPreSale && myPreSale.apply_usdt_amount==0"
              >{{languageNav[languageName].language_text151}}</div>-->
              <!-- <div
                class="text extend_invite_code"
                id="invite_code"
                v-if="myPreSale && myPreSale.apply_usdt_amount!=0"
              >{{marketing.invite_code}}</div>-->
              <el-input
                class="text extend_invite_input"
                v-model="languageNav[languageName].language_text151"
                id="invite_code"
                v-if="myPreSale && myPreSale.apply_usdt_amount == 0"
              ></el-input>
              <el-input
                class="text extend_invite_input"
                v-model="marketing.invite_code"
                id="invite_code"
                v-if="myPreSale && myPreSale.apply_usdt_amount != 0"
              ></el-input>
              <div
                class="tag"
                @click="copyArticle('invite_code')"
                :style="{
                  background: myPreSale.apply_usdt_amount == 0 ? '#848381' : '',
                }"
              >
                <img src="@/assets/img/center_file.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart_box">
        <div class="cart_box_item card_invite_code item_border_top">
          <div class="item_title">
            <span class="item-title">{{
              languageNav[languageName].language_text150
            }}</span>
          </div>
          <div class>
            <div class="extend extend_invite_url" style="border: none">
              <el-input
                class="text extend_invite_input"
                v-model="marketing.invite_url"
                id="invite_url"
                v-if="myPreSale && myPreSale.apply_usdt_amount != 0"
              ></el-input>
              <el-input
                class="text extend_invite_input"
                v-model="languageNav[languageName].language_text152"
                id="invite_url"
                v-if="myPreSale && myPreSale.apply_usdt_amount == 0"
              ></el-input>
              <div
                class="tag"
                @click="copyArticle('invite_url')"
                :style="{
                  background: myPreSale.apply_usdt_amount == 0 ? '#848381' : '',
                }"
              >
                <img src="@/assets/img/center_file.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kyc-title">{{ languageNav[languageName].language_text19 }}</div>
    <div class="card">
      <div class="card_row">
        <span class="row_name item-title">{{
          languageNav[languageName].language_text20
        }}</span>
        <span style="color: #666">{{ userInfo.email }}</span>
      </div>
      <div class="card_row item_border_top">
        <span class="row_name item-title">{{
          languageNav[languageName].language_text21
        }}</span>
        <span class="colorD2A629" style="cursor: pointer" @click="toEditPas">{{
          languageNav[languageName].language_text22
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { userInfo, myPreSale, myMarketing } from "@/request/user.js";
// import webFoot from "@/components/footer";
import languageNav from "@/language/user";
import { Cell, CellGroup } from "vant";
export default {
  name: "",
  components: { vanCellGroup: CellGroup, vanCell: Cell },
  data() {
    return {
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
      },
      marketing: {
        code: "",
        rebate_amount: 0,
        invite_count: 0,
        invite_code: "",
        invite_url: "",
      },
      languageNav: languageNav,
      languageName: this.$languageName,
    };
  },
  computed: {},
  watch: {},
  methods: {
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
      this.$message(this.languageNav[this.$languageName].language_text23);
    },

    getUserInfo() {
      let params = {
        code: localStorage.getItem("code"),
      };
      userInfo(this.$qs.stringify(params)).then((res) => {
        if (res.code == 0) {
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
        console.log(res);
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
        console.log(res);
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

    toApplyBuylog() {
      this.$router.push("/applyBuylog");
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
    lookUp() {
      this.$router.push({ path: "/KYClose" });
    },
    toTransfer() {
      this.$router.push({ path: "/transfer" });
    },
  },
  created() {},
  mounted() {
    this.getUserInfo();
    this.getMyPreSale();
    this.getMyMarketing();
  },
};
</script>

<style lang='less' scoped>
.van-cell__value {
  color: #104cff;
}
.page {
  background: #f0f2f5;
  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-top: 55px;
  padding-bottom: 50px;
  .kyc-title {
    color: #666;
    font-size: 15px;
    text-indent: 15px;
  }
  .arrow-img {
    width: 20px;
    height: 20px;
    margin-top: -2px;
  }
  .arrow-img-span {
    position: absolute;
    right: 0;
    top: 0;
  }
  .arrow-padding-right {
    box-sizing: border-box;
    -moz-box-sizing: border-box; /* Firefox */
    -webkit-box-sizing: border-box; /* Safari */
    padding-right: 24px;
  }
  .arrow_img_div {
    position: relative;
  }
  .item-title {
    color: #999;
  }
  .card_invite_code {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .extend_invite_code {
    max-width: 157px;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 20px;
    -moz-box-sizing: border-box; /* Firefox */
    -webkit-box-sizing: border-box; /* Safari */
    padding: 4px 10px 2px 10px;
    color: #b2b2b2;
    border: 1px solid #dcdfe6;
    border-right: none;
    border-radius: 5px 0 0 5px;
    white-space: nowrap;
  }
  .extend_invite_url {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .extend_invite_input {
    border: none !important;
    font-size: 12px;
  }
  .item_border_top {
    border-top: 1px solid #eeeeee;
  }
  .card {
    width: 100%;
    margin: 10px auto;
    background: #ffffff;
    box-sizing: border-box;
    // padding: 30px;
    .page_hint {
      /*display: flex;*/
      /*align-items: center;*/
      background: #fff8e4;
      line-height: 30px;
      padding: 4px 10px;
      img {
        width: 18px;
        height: 18px;
        margin-right: 10px;
      }
    }
    .user_info_box {
      margin-top: 16px;
      //   border: 1px solid #ebebeb;
      display: flex;
      width: 100%;
      box-sizing: border-box;
      -moz-box-sizing: border-box; /* Firefox */
      -webkit-box-sizing: border-box; /* Safari */
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      .user_info {
        width: 100%;
        display: flex;
        .user_photo {
          padding: 0 20px 0 0px;
          border-right: 1px solid #ebebeb;
          img {
            width: 55px;
            height: 55px;
          }
        }
      }
      .user_about {
        padding-left: 20px;
        box-sizing: border-box;
        -moz-box-sizing: border-box; /* Firefox */
        -webkit-box-sizing: border-box; /* Safari */
        width: 75%;
        .about_row {
          width: 100%;
          display: flex;
          color: #999999;
          font-size: 14px;
          justify-content: space-between;
          .title {
            margin-right: 23px;
            // margin-top: 15px;
          }
        }
      }
    }

    .attest {
      background: #fff;
      padding: 15px;
      width: 100%;
      box-sizing: border-box;
      -moz-box-sizing: border-box; /* Firefox */
      -webkit-box-sizing: border-box; /* Safari */
      .title {
        position: relative;
        font-size: 18px;
        // margin-bottom: 10px;
        .center_targe {
          padding: 0 10px;
          height: 24px;
          line-height: 24px;
          position: absolute;
          top: -4px;
          border-radius: 90px;
          //   border-bottom-left-radius: 90px;
          right: 17px;
          color: #666;
          font-size: 14px;
          text-align: center;
          &.status0 {
            color: #104cff;
            // background-color: #104CFF;
            // background-size: cover;
          }
          &.status1 {
            color: #17d241;
            // background-color: #17d241;
            // background-size: cover;
          }
          &.status2 {
            color: rgb(228, 151, 9);
            // background-color: rgb(228, 151, 9);
            // background-size: cover;
          }
          &.status3 {
            color: #e45b5b;
            // background: #e45b5b;
            // background-size: cover;
          }
        }
      }
      .attest-title {
        color: #999;
        font-size: 14px;
      }
      .info {
        font-size: 14px;
        line-height: 28px;
        span {
          margin-left: 20px;
          cursor: pointer;
        }
      }
    }

    .card_title {
      color: #333333;
      font-size: 18px;
      .hint {
        color: #ff4343;
        margin-left: 30px;
        font-size: 18px;
      }
    }
    .cart_box {
      //   margin-top: 20px;
      display: flex;
      //   justify-content: space-between;
      //   border: 1px solid #d8d8d8;
      .cart_box_item {
        padding: 15px;
        flex: 1;
        border-right: 1px solid #d8d8d8;
        &:last-child {
          border-right: none;
        }
        .item_title {
          display: flex;
          font-size: 14px;
          flex-direction: row;
          justify-content: space-between;
        }
        .extend {
          box-sizing: border-box;
          -moz-box-sizing: border-box; /* Firefox */
          -webkit-box-sizing: border-box; /* Safari */
          padding-left: 8px;
          display: flex;
          justify-content: space-between;
          border: 1px solid #d8d8d8;
          border-radius: 5px;
          .tag {
            width: 32px;
            height: 30px;
            background: #104cff;
            text-align: center;
            padding-top: 3px;
            cursor: pointer;
            border-radius: 0 5px 5px 0;
            img {
              width: 14px;
              height: 18px;
            }
          }
        }
      }
    }
    .card_row {
      display: flex;
      font-size: 14px;
      justify-content: space-between;
      box-sizing: border-box;
      -moz-box-sizing: border-box; /* Firefox */
      -webkit-box-sizing: border-box; /* Safari */
      padding: 15px;
      //   margin-top: 20px;
      .row_name {
        color: #999;
        font-size: 14px;
      }
    }
  }
}
.rkot:hover {
  cursor: pointer;
  text-decoration: underline;
}
.taost {
  color: #666 !important;
}
/deep/ .extend .el-input__inner {
  height: 30px;
  line-height: 30px;
  border-radius: 5px 0 0 5px;
  color: #b2b2b2;
  text-align: right;
  border-right: none;
}
/deep/ .el-input {
  width: 85%;
}
</style>
