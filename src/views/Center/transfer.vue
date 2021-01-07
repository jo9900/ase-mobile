<template>
    <div class="page">
        <div class="page_title">
            {{ $t("message.479") }}
            <div class="page_line"></div>
        </div>
        <div class="page_container">
            <div class="amount">
                {{ myPreSale && myPreSale.user_balance_amount }}
            </div>
            <div class="current_amount">
                AECO当前额度
            </div>
            <div class="logs">
                <div class="logs_wrap" @click="toTransferLogs">
                    <div class="text">转让历史记录</div>
                    <img
                        src="../../assets/images/icon_found_more.png"
                        alt=""
                        class="arrow"
                    />
                </div>
            </div>
            <div class="bottom_wrap">
                <div class="warning_text">
                    <span>转让前请再次确认对方账户的准确性</span>
                    <span>以免您的财产受到损失</span>
                </div>
                <div class="input-wrap">
                    <el-form
                        ref="form"
                        :model="form"
                        label-width="80px"
                        :rules="rules"
                        hide-required-asterisk
                    >
                        <el-form-item label="用户" prop="to_account">
                            <el-input
                                v-model.trim="form.to_account"
                                placeholder="请输入对方注册邮箱"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="额度" prop="aeco_amount">
                            <el-input
                                v-model.trim="form.aeco_amount"
                                placeholder="请输入转让的AECO额度"
                            ></el-input>
                        </el-form-item>
                    </el-form>
                </div>
              <div class="btn-wrap">
                <el-button class="bBottn" @click="subFromData">
                  <span>提交</span>
                </el-button>
              </div>
            </div>
        </div>
      <el-dialog
          class="validate_dialog"
          :visible.sync="validateDialog"
          width="324px"
          height="496px"
          center
      >
        <div class="validateDialogWrap">
          <div class="title">支付验证</div>
          <p class="alert_amount">转出额度: <span>{{ form.aeco_amount}} AECO</span></p>
          <p class="alert_password">支付密码</p>
          <el-input type="password" v-model="verifyData.password"></el-input>
          <p v-show="error_text" class="error_text">{{ error_text }}</p>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button class="restBtn" @click="onVerifyData">支付</el-button>
        </span>
      </el-dialog>
      <el-dialog
          class="validate_dialog"
          :visible.sync="validateResultDialog"
          width="324px"
          height="496px"
          center
      >
        <div v-if="isVerifySuccess" class="verify_result_wrap">
          <img class="icon" src="../../assets/images/icon_success.png" alt="icon_success">
          <p class="text">支付成功</p>
        </div>
        <div v-else class="verify_result_wrap">
          <img class="icon" src="../../assets/images/icon_fail.png" alt="icon_success">
          <p class="text">转让失败</p>
          <p class="text_detail">{{ verifyFailedText }}</p>
        </div>
      </el-dialog>

    </div>
</template>

<script>
    import { userInfo, myPreSale, authVerify, taftBoert } from "@/request/user.js";
    const sha256 = require("js-sha256").sha256;
    import { JSEncrypt } from "jsencrypt";
    import { pubKey } from "@/request/login.js";
    export default {
        name: "",
        data() {
            return {
                pk: "",
                verifyFailedText: '',
                error_text: '',
                verifyData: {
                  password: '',
                  user_code: ''
                },
                isVerifySuccess: true,
                validateDialog: false,
                validateResultDialog: false,
                myPreSale: {
                    apply_usdt_amount: "",
                    apply_taft_amount: "",
                    user_balance_amount: "",
                },
                form: {
                    to_account: '',
                    aeco_amount: ''
                },
                rules: {
                    to_account: [
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
                    aeco_amount: [
                        {
                            required: true,
                            message: this.$t("message.237"),
                            trigger: "change",
                        },{
                            pattern: /^[0-9]*$/,
                            message: '请输入整数'
                        }
                    ]
                }
            }
        },
        created() {
          this.verifyData.user_code = localStorage.getItem("code");
        },
        mounted() {
            this.getMyPreSale();
        },
       watch:{
         validateDialog(cur){
           if (!cur) {
             this.error_text = ''
             this.verifyData.password = ''
           }
         },
         validateResultDialog(cur){
           if (!cur) {
             this.verifyFailedText = ''
           }
         },
       },
        methods: {
            getPubKey() {
              pubKey().then((res) => {
                if (res.code == 0) {
                  this.pk = res.data.pub_key;
                  // localStorage.setItem("pk", res.data.pub_key);
                }
              });
            },
            _taftBoert(){
              let params = Object.assign({},this.form, {
                user_code: this.verifyData.user_code,
                auth_code: this.auth_code
              } )
              taftBoert(this.$qs.stringify(params)).then(res=> {
                this.validateResultDialog = true
                if (res.code == 0) {
                  this.isVerifySuccess = true
                  this.myPreSale.user_balance_amount = res.data.aeco_balance_amount
                } else {
                  this.isVerifySuccess = false
                  if (res.code == "102601") {
                    this.verifyFailedText = this.$t("message.480");
                    return
                  }
                  if (res.code == "102602") {
                    this.verifyFailedText = this.$t("message.481");
                    return
                  }
                  if (res.code == "102603") {
                    this.verifyFailedText = this.$t("message.482");
                    return
                  }
                  if (res.code == "102604") {
                    this.verifyFailedText = this.$t("message.484");
                    return
                  }
                  if (res.code == "102605") {
                    this.verifyFailedText = this.$t("message.485");
                    return
                  }
                  if (res.code == "102606") {
                    this.verifyFailedText = this.$t("message.486");
                    return
                  }
                  if (res.code == "102607") {
                    this.verifyFailedText = this.$t("message.487");
                    return
                  }
                }
              })
            },
            rsaData(data) {
              const PUBLIC_KEY = this.pk;
              // const PUBLIC_KEY = localStorage.getItem("pk");
              let jsencrypt = new JSEncrypt();
              jsencrypt.setPublicKey(PUBLIC_KEY);
              let result = jsencrypt.encrypt(data);
              return result;
            },
            async onVerifyData() {
              let resData = await pubKey();
              if (resData.code == 0) {
                this.pk = resData.data.pub_key;
                // localStorage.setItem("pk", res.data.pub_key);
              }
              let params = {};
              Object.assign(params, this.verifyData);
              params.password = this.rsaData(sha256(this.verifyData.password));
              authVerify(this.$qs.stringify(params)).then(res=> {
                if (res.code == 0) {
                  this.auth_code = res.data.auth_code
                  this._taftBoert()
                  this.validateDialog = false
                } else {
                  this.error_text = this.$t("message.483")
                }
              })
            },
            subFromData() {
              this.$refs["form"].validate((valid) => {
                if (valid) {
                  this.validateDialog = true
                }
              })
            },
            toTransferLogs() {
              this.$router.push('/transferLogs')
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
        }
    }
</script>

<style scoped lang="less">
    .page {
        overflow: hidden;
        box-sizing: border-box;
        padding-top: 90/100rem;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
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
        background: #fff;
    }
    .page_title {
        width: 7.5rem;
        height: 1.04rem;
        background: #ffffff;
        border-bottom: 0.01rem solid #cad7e8;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.36rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #323a43;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding-top: 0.26rem;
    }
    .amount {
        font-size: 66/100rem;
        color: #3660FF;
        text-align: center;
        margin-top: 94/100rem;
        font-weight: bold;
    }
    .current_amount {
        text-align: center;
        color: #A7B6CA;
        font-size: 28/100rem;
        margin-top: 20/100rem;
    }
    .logs {
        margin-top: 44/100rem;
        font-size: 28/100rem;
        color: #7D9DFB;
        text-align: center;
        .logs_wrap {
            width: 240/100rem;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .bottom_wrap {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #FFF;
        box-shadow: 0px -3px 10px rgba(46, 72, 110, 0.2);
        height: 676/100rem;
        border-radius: 40/100rem 40/100rem 0 0;
        .warning_text {
            width: 448/100rem;
            height: 80/100rem;
            font-size: 28/100rem;
            margin: 0 auto;
            text-align: center;
            color: #7D9DFB;
            line-height: 40/100rem;
            margin-top: 70/100rem;
        }
        .input-wrap {
            margin-top: 54/100rem;
            padding: 0 64/100rem 0 10/100rem;
        }
        .btn-wrap {
          height: 248/100rem;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .bBottn {
            width: 600/100rem;
            height: 88/100rem;
            background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
            border-radius: 10/100rem;
            font-size: 28/100rem;
            color: #fff;
            font-family: PingFangSC-Semibold, PingFang SC;
          }
        }
    }

    /deep/ .el-input .el-input__inner {
      background-color: #F5F6F7;
      border: 1px solid #A7B6CA;
    }
    /deep/ .el-dialog__headerbtn {
      left: 20px;
    }
    .validateDialogWrap {
      padding: 0 54/100rem;
      .title {
        font-size: 36/100rem;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 25px;
        color: #323A43;
        text-align: center;
        position: relative;
        margin-bottom: 44/100rem ;
      }
      .alert_amount, .alert_password {
        font-size: 28/100rem;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 40/100rem;
        color: #3660FF;
      }
      .alert_amount {
        margin-bottom: 32/100rem;
      }
      .alert_password {
        margin-bottom: 20/100rem;
      }
      .error_text {
        text-align: center;
        font-size: 24/100rem;
        font-family: PingFang SC;
        color: #F44242;
        margin-top: 34/100rem;
      }
    }
  /deep/ .el-dialog__body {
    padding: 0;
  }
  .validate_dialog {
    .dialog-footer {
      height: auto;
    }
    .restBtn {
      width: 240/100rem;
      height: 78/100rem;
      background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
      border-radius: 10/100rem;
      font-size: 28/100rem;
      color: #fff;
      padding: 0;
      font-family: PingFangSC-Semibold, PingFang SC;
    }
  }
  .verify_result_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      margin-bottom: 52/100rem;
      margin-top: 70/100rem;
    }
    .text, .text_detail {
      font-size: 36/100rem;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 60/100rem;
      color: #323A43;
    }
    .text {
      margin-bottom: 10/100rem;
    }
  }
    .verify_result_wrap {
      height: 496/100rem;
    }
</style>
