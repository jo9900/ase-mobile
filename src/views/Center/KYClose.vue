
<!-- -->
<template>
  <div class="page">
    <!-- <div style="height: 70px"></div> -->
    <div class="wrap">
      <div class="page_indicator">
        <router-link class="gobaket" to="/center">{{
          $t("message.2")
        }}</router-link>
        > {{ $t("message.100") }}
      </div>
      <div class="page_content">
        <div class="name">KYC</div>
        <img class="KYC_logo" src="@/assets/img/KYC_logo.png" alt="" />
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
      languageName: this.$languageName,
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
.page {
  background: #f0f2f5;
  overflow: hidden;
  // height: 100%;
  box-sizing: border-box;
  .wrap {
    // height: 100%;
    .page_indicator {
      color: #333333;
      font-size: 16px;
      padding: 0 30px;
    }
    .page_content {
      margin: 20px 0 0;
      padding: 38px;
      background: #ffffff;
      text-align: center;
      .name {
        color: #104cff;
        font-size: 36px;
      }
      .KYC_logo {
        width: 60px;
        height: 60px;
        margin: 20px auto 0;
      }
      .status {
        font-size: 23px;
        color: red;
        margin: 20px auto 0;
      }
      .describe {
        margin: 30px auto 0;
        color: #333333;
        font-size: 16px;
      }
      .again_btn {
        cursor: pointer;
        margin: 80px auto 0;
        width: 240px;
        height: 48px;
        color: #fffffe;
        font-size: 16px;
        line-height: 48px;
        border-radius: 6px;
        background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
      }
    }
  }
}
</style>

