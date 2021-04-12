
<!-- -->
<template>
  <div class="page">
    <!-- <div style="height: 70px"></div> -->
    <div class="wrap">

      <div class="page_content">
        <el-form
          label-position="top"
          :rules="rules"
          label-width="80px"
          ref="dataForm"
          :model="dataForm"
        >
          <el-form-item prop="verify_code">
            <el-input
              prefix-icon="el-icon-user-solid"
              type="text"
              :placeholder="$t('message.69')"
              v-model.trim="dataForm.verify_code"
            />
            <div v-if="disabled" :class="['get_code', $lang]">{{ btntxt }}</div>
            <div v-else :class="['get_code', $lang]" @click="sendcode('forget')">
              {{ btntxt }}
            </div>
          </el-form-item>
          <el-form-item prop="password" style="margin-top: 25px">
            <el-input
              prefix-icon="el-icon-lock"
              type="password"
              show-password="true"
              :placeholder="$t('message.65')"
              v-model.trim="dataForm.password"
            />
          </el-form-item>
          <el-form-item prop="againPassword" style="margin-top: 25px">
            <el-input
              prefix-icon="el-icon-lock"
              type="password"
              show-password="true"
              :placeholder="$t('message.71')"
              v-model.trim="dataForm.againPassword"
            />
          </el-form-item>
        </el-form>
        <el-button
          style="width: 100%"
          class="submit_btn"
          :loading="loading"
          @click="passwordUpdata"
          >{{ $t("message.120") }}</el-button
        >
      </div>
    </div>
    <!-- <webFoot /> -->
  </div>
</template>

<script>
import webFoot from "@/Layout/footer";
import {
  mailVcode,
  resetPassword,
  pubKey,
  findPassword,
} from "@/request/login.js";
const sha256 = require("js-sha256").sha256;
import { JSEncrypt } from "jsencrypt";
export default {
  name: "",
  components: { webFoot },
  data() {
    var passwordValidator = (rule, value, callback) => {
      if (this.dataForm.password != this.dataForm.againPassword) {
        callback(new Error(this.$t("message.90")));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      let codeReg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,30}$/;
      if (!codeReg.test(value)) {
        callback(new Error(this.$t("message.80")));
      } else {
        callback();
      }
    };
    return {
      disabled: false,
      time: 60,
      timerNull: null,
      btntxt: this.$t("message.70"),
      loading: false,
      dataForm: {
        password: "", // 密码
        againPassword: "", // 确认密码
        verify_code: "", // 验证码
      },
      pk: "",
      rules: {
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
            { required: true, trigger: "blur", validator: passwordValidator },
        ],
        verify_code: [
          {
            required: true,
            message: this.$t("message.244"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    passwordUpdata() {
      this.$refs["dataForm"].validate(async (valid) => {
        if (valid) {
          let params = {
            user_code: localStorage.getItem("code"),
            email_verify_code: this.dataForm.verify_code,
            new_password: this.dataForm.againPassword,
          };
          this.loading = true;
          // this.getPubKey();
          let resData = await pubKey();
          if (resData.code == 0) {
            this.pk = resData.data.pub_key;
            // localStorage.setItem("pk", res.data.pub_key);
          }
          // 密码加密 sha256 => rsaData
          params.new_password = this.rsaData(sha256(this.dataForm.password));
          resetPassword(this.$qs.stringify(params)).then((res) => {
            this.loading = false;
            if (res.code == 0) {
              this.$message({
                message: this.$t("message.91"),
                type: "success",
              });
              this.$store.commit("SETTOKEN", res.data.refresh_token);
              this.$router.push("center");
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

    sendcode(e) {
      this.timer();
      let data = {
        lang_type: this.$langType,
        user_code: localStorage.getItem("code"),
      };
      findPassword(this.$qs.stringify(data)).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.$message({
            message: this.$t("message.81"),
            type: "success",
          });
        } else {
          if (res.code == "101703") {
            return this.$message.error(this.$t("message.83"));
          }
        }
      });
    },
    timer() {
      if (this.time > 0) {
        this.disabled = true;
        this.time--;
        this.btntxt = " " + this.time + " s";
        this.timerNull = setTimeout(this.timer, 1000);
      } else {
        clearTimeout(this.timerNull);
        this.time = 60;
        this.btntxt = this.$t("message.70");
        this.disabled = false;
      }
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
  },
  created() {},
  mounted() {},
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
  right: 0rem;
  width: 160/100rem;
  height: 84/100rem;
  text-align: center;
  padding: 0 8/100rem;
  top: 2/100rem;
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #104cff;
  // background: #f5f6f7;
  &.ru {
    width: auto;
  }
  &.ar {
    width: auto;
  }
}
.input_img {
  position: absolute;
  left: 36/100rem;
  top: 28/100rem;
  width: 28/100rem;
}
.form_row {
  position: relative;
  margin-bottom: 21/100rem;
}
.page {
  // overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  // height: 700/100rem;
  .wrap {
    height: 100%;
    .page_content {
      // margin: 20px 0 0px;
      padding: 20px;
      background: #ffffff;

      .data_form {
        width: 100%;
      }
      .submit_btn {
        width: 600/100rem;
        height: 88/100rem;
        background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
        border-radius: 10/100rem;
        color: #fff;
        font-size: 28/100rem;
        letter-spacing: 2/100rem;
      }
    }
  }
}
.zcoder {
  position: relative;
}
/deep/ .zcoder .el-input__inner {
  padding-right: 73px;
}
.roket_code {
  position: absolute;
  top: -10px;
  right: 0;
}
.text-code:hover {
  cursor: pointer;
  color: #efcf54;
  text-decoration: underline;
}
</style>


