
<!-- -->
<template>
  <div class="page">
    <div class="wrap">
      <div class="wrap_kyc">
        <div class="wrap_kyc_title">{{$t('message.100')}}</div>
        <div class="wrap_kyc_line"></div>
      </div>
      <div class="page_content">
        <img class="KYC_logo" src="@/assets/images/icon_shenhe_no@3x.png" alt="" />
        <div class="status">
          {{ $t("message.242") }}
        </div>
        <div class="describe">{{ userInfo.kyc_remark }}</div>
        <div class="again_btn" @click="againApply">
          {{ $t("message.243") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import webFoot from "@/Layout/footer";
import { userInfo } from "@/request/user.js";
export default {
  name: "",
  components: { webFoot },
  data() {
    return {
      userInfo: {},
    };
  },
  computed: {},
  watch: {},
  methods: {
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
    // 重新申请
    againApply() {
      this.$router.push({ name: "KYCapply", query: { type: 1 } });
    },
  },
  created() {
    this.getUserInfo();
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
  // 标题
  .wrap_kyc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #fff;
    height: 104/100rem;
  }
  .wrap_kyc_title {
    width: 100%;
    text-align: center;
    height: 50/100rem;
    font-size: 36/100rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #323a43;
    line-height: 50/100rem;
  }
  .wrap_kyc_line {
    width: 80/100rem;
    height: 6/100rem;
    background: #104cff;
    margin-top: 8/100rem;
  }
.page {
  background: #f0f2f5;
  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-top: 90/100rem;
  .wrap {
    // height: 100%;
    .page_indicator {
      color: #333333;
      font-size: 16px;
      padding: 0 30px;
    }
    .page_content {
      padding: 30/100rem;
      background: #ffffff;
      margin: 20/100rem auto 0px;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      .KYC_logo {
       margin-top: 100/100rem;
        width: 110/100rem;
        height: 110/100rem;
      }
      .status {
        font-size: 36/100rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #323A43;
        line-height: 50/100rem;
        margin: 40/100rem auto 0;
      }
      .describe {
        font-size: 28/100rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A7B6CA;
        line-height: 40/100rem;
        margin-top: 8/100rem;
      }
      .again_btn {
        position: fixed;
        bottom: 56/100rem;
        text-align: center;
        cursor: pointer;
        width: 600/100rem;
        height: 88/100rem;
        color: #fff;
        font-size: 32/100rem;
        line-height: 88/100rem;
        border-radius: 5px;
        background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
      }
    }
  }
}
</style>

