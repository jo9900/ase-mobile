
<!-- -->
<template>
  <div class="page">
    <div class="wrap">
      <div class="wrap_container">
        <!--<div class="wrap_title">{{ $t("message.145") }}</div>-->
        <!--<div class="wrap_line"></div>-->
        <div class="wrap_header">
          <div class="wrap_header_title">{{ $t("message.146") }}</div>
        </div>
        <div class="wrap_content">
          <div class="wrap-wllr"><img src="@/assets/images/pic_dian@3x.png"/></div>
          <div class="wrap-wllr ter"><img src="@/assets/images/pic_dian@3x.png"/></div>
          <!--<div class="wrap-wllr tert"><img src="@/assets/images/pic_dian@3x.png"/></div>-->

          <div class="wrap_plan_first_title">{{ $t("message.132") }}</div>
          <div class="wrap_plan_first_title"  style="font-size: 0.45rem;">2021.1.5</div>
          <div :class="['wrap_plan_default', {'wrap_plan_current': preInfo1.status == 1}]">
            <div>
              <span>{{ $t("message.147") }}</span
              >2021.1.5{{ $t("message.496") }}
            </div>
            <div>
              <span>{{ $t("message.148") }}</span
              >0.12 USDT
            </div>
            <div>
              <span>{{ $t("message.149") }}</span
              >3,600,000 USDT
            </div>
          </div>
          <div class="wrap-cont-text">{{ $t("message.497") }}</div>
          <!--<div class="wrap_plan_first_title">次轮预售</div>
          <div class="wrap_plan_second_title" style="font-size: 0.45rem;">
            2021.3.1
          </div>
          <div class="wrap_plan_second" style="margin-bottom: 0.4rem;">
            <div>
              <span>{{ $t("message.147") }}</span
              >2021.3.1-2021.4.15
            </div>
            <div>
              <span>{{ $t("message.148") }}{{ $t("message.153") }}</span>
            </div>
            <div>
              <span>{{ $t("message.149") }}{{ $t("message.153") }}</span>
            </div>
          </div>-->
          <div class="wrap_plan_first_title">{{ $t("message.498") }}</div>
          <div class="wrap_plan_third_title" style="font-size: 0.45rem;">2021.5.1</div>
          <div :class="['wrap_plan_default', {'wrap_plan_current': preInfo2.status == 1}]">
            <div>
              <span>{{ $t("message.147") }}</span
              >2021.5.1
            </div>
            <div>
              <span>{{ $t("message.148") }}</span
              >{{ $t("message.153") }}
            </div>
            <div>
              <span>{{ $t("message.149") }}</span
              >{{ $t("message.153") }}
            </div>
          </div>
          <div class="wrap-cont-text" style="color: #9CB5FF;">
            {{ $t("message.499") }}
          </div>
          <div class="wrap-cont-text" style="color: #9CB5FF; margin-top: 0;">
            {{ $t("message.523") }}
          </div>
        </div>
        <div class="wrap_rule_container">
          <div class="wrap_rule">
            <div class="wrap_rule_header">{{ $t("message.155") }}</div>
            <div class="wrap_rule_name">{{ $t("message.156") }}</div>
            <!-- <div class="wrap_rule_content">
              认购规则和声明认购规则和声明认购规则和声明认购规则和声明认购规则和声明认购规则和声明认购规则和声明认购规则和声明认购规则和声明认购规则和声明
            </div> -->

            <div class="wrap_rule_detail wrap_rule_detail_first">
              {{ $t("message.157") }}
            </div>
            <div class="wrap_rule_detail">
              <span>{{ $t("message.158") }}</span>
            </div>
            <div class="wrap_rule_detail">
              {{ $t("message.159") }}
            </div>
            <div class="wrap_rule_detail">
              {{ $t("message.160") }}
            </div>
            <div class="wrap_rule_detail">
              {{ $t("message.161") }}
            </div>
            <div class="wrap_rule_detail">
              {{ $t("message.162") }}
            </div>
            <div class="wrap_rule_detail">
              {{ $t("message.163") }}
            </div>
            <div class="wrap_rule_detail">
              {{ $t("message.164") }}
            </div>
            <div class="wrap_rule_detail" style="margin-top: 30px">
              <span>{{ $t("message.522") }}</span>
            </div>
            <div class="wrap_rule_detail">
              <span>{{ $t("message.165") }}</span>
            </div>
            <div class="wrap_rule_detail">
              <span>{{ $t("message.166") }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="apply" style="margin-top: 150px">
        <div
          class="apply_btn"
          :class="{ daosk: roundstatus == '1' }"
          @click="clickBefore"
        >
          <template v-if="round == '1'">
            <template v-if="roundstatus == '0'">{{
              $t("message.167")
            }}</template>
            <template v-if="roundstatus == '1'">{{
              $t("message.168")
            }}</template>
          </template>
          <!--<template v-if="round == '2'">
            <template v-if="roundstatus == 0">{{ $t("message.169") }}</template>
            <template v-if="roundstatus == '1'">{{
              $t("message.168")
            }}</template>
            <template v-if="roundstatus == '2'">{{
              $t("message.170")
            }}</template>
          </template>-->
          <template v-if="round == '2'">
            <template v-if="roundstatus == '0'">{{ $t("message.171") }}</template>
            <template v-if="roundstatus == '1'">{{ $t("message.168") }}</template>
            <template v-if="roundstatus == '2'">{{ $t("message.170") }}</template>
          </template>
        </div>
      </div>

      <!-- 首轮抢购 弹窗-->
      <el-dialog
        :title="
          round == 1
            ? $t('message.132')
            : $t('message.498')
        "
        :visible.sync="firstDialogVisible"
        custom-class="firstDialogVisible"
        width="580px"
        center
        :before-close="firstHandleClose"
      >
        <div class="dialog_body">
          <el-form
            label-position="top"
            label-width="80px"
            :rules="rules"
            :model="presellForm"
            ref="presellForm"
          >
            <el-row>

              <el-col :span="24">
                <el-progress
                  class="progress"
                  :text-inside="true"
                  :stroke-width="14"
                  :percentage="
                    round == 3
                      ? parseInt(preInfo.progress)
                      : preInfo.progress == 0
                      ? 0
                      : parseInt(preInfo.progress)>=parseInt(preInfo.total)?100:parseFloat((preInfo.progress/preInfo.total)*100).toFixed(2)
                  "
                ></el-progress>

                <div class="progress_info">
                  <div>
                    <template v-if="round == 1">
                      <template v-if="languageName == 'English'"
                        >{{ preInfo.progress }}
                        {{ $t("message.173") }}</template
                      >
                      <template v-else
                        >{{ $t("message.173") }}
                        {{ preInfo.progress }}
                        {{ $t("message.174") }}</template
                      >
                    </template>
                    <template v-if="round == 2"
                      >{{ $t("message.175") }} {{ preInfo.progress }}%</template
                    >
                  </div>

                  <div>
                    {{ $t("message.176") }}
                    <template v-if="round == 1">
                      {{ preInfo.total }}
                      {{ $t("message.174") }}</template
                    >
                    <template v-if="round == 2"
                      >{{
                        preInfo.total
                          ? preInfo.total.replace(/\B(?=(?:\d{3})+\b)/g, ",")
                          : "0"
                      }}
                      USDT</template
                    >
                  </div>
                </div>
              </el-col>

              <el-col :span="24">
                <el-form-item :label="$t('message.148')">
                  <el-input
                    :placeholder="preInfo.price + ' USDT'"
                    disabled
                    size="medium"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item
                  :label="
                    round == 1
                      ? $t('message.177') +
                        '（1' +
                        $t('message.174') +
                        '=' +
                        preInfo.pre_amount +
                        ' AECO）'
                      : $t('message.178')
                  "
                  prop="book_amount"
                  style="position: relative"
                >
                  <el-input
                    type="number"
                    v-model.trim="presellForm.book_amount"
                    :placeholder="
                      round == 1
                        ? $t('message.179')
                        : $t('message.180')
                    "
                    size="medium"
                  >
                  </el-input>
                  <div
                    class="skert"
                    :style="{
                      width: languageName == 'English' ? '47px' : '31px',
                    }"
                    v-if="round == 1"
                  >
                    {{ $t("message.174") }}
                  </div>
                  <div class="skert" style="width: 42px" v-if="round == 2">
                    AECO
                  </div>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item :label="$t('message.181')">
                  <div class="priceValue">{{ totalPrice }} USDT</div>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <div id="elcheckbox">
                  <div class="spollt" @click="iconCheck">
                    <div class="bloet" id="spollt"></div>
                    <div class="icon_check" v-if="presellChecked">
                      <i class="el-icon-check"></i>
                    </div>
                  </div>
                  <span>
                    {{ $t("message.182") }}
                    <span class="sgStyle" @click="koserxy">{{
                      $t("message.183")
                    }}</span></span
                  >
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            :loading="loading"
            class="restBottn"
            @click="nextPay"
            >{{ $t("message.184") }}</el-button
          >
        </span>
      </el-dialog>
      <!-- 首轮抢购 弹窗 end-->

      <!-- 首轮付款 弹窗 -->
      <el-dialog
        :title="$t('message.517')"
        :visible.sync="firstPayDialogVisible"
        custom-class="firstPayDialogVisible"
        width="580px"
        center
        :before-close="firstPayHandleClose"
      >
        <div class="dialog_body">
          <div
            style="
              width: 100%;
              background-color: rgb(255, 237, 237);
              padding: 10px 14px;
              font-size: 12px;
              color: red;
              line-height: 14px;
            "
          >
            {{ $t("message.185") }}
          </div>

          <div class="pay_name">{{ $t("message.186") }}</div>
          <div class="pay_num">{{ totalPrice }} USDT</div>
          <div class="pay_omni_name">{{ $t("message.187") }}</div>
          <div class="pay_omni_row">
            <div class="omni" id="omni">{{ charge_address }}</div>
            <div class="copy" @click="copyArticle">{{ $t("message.188") }}</div>
          </div>
          <div class="pay_omni_QR">
            <div class="pay_omni_QR_title">{{ $t("message.189") }}</div>
            <div class="pay_omni_QR_div" id="qrcode" ref="qrcode"></div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            class="restBottn"
            @click="firstPayDialogVisible = false"
          >
            {{ $t("message.190") }}
          </el-button>
        </span>
      </el-dialog>
      <!-- 首轮付款 弹窗 end-->

      <!-- 申购规则 弹窗 -->
      <el-dialog
        title="申购规则"
        :visible.sync="ruleDialogVisible"
        width="580px"
        center
        :before-close="ruleHandleClose"
      >
        <span>
          ICO第一阶段募集资金的75%将用于TAFT平台的开发和拓展。15%将用于法律法规相关法务费用和公共宣传的相关费用。10%将用于社区服务。<br />
          ICO第二阶段募集资金的80%将继续投入到技术研发中，保持TAFT在业界领先的地位。10%将用于支持区块链研发团队在TAFT公链上进行二次开发。剩余10%将全部用于公共宣传的相关费用，为TAFT公链在全球正式发行做好充分准备。
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            class="rz-botton"
            @click="ruleDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <!-- 申购规则 弹窗 end-->

      <!-- 登录提示窗 弹窗 -->
      <el-dialog
        :title="$t('message.191')"
        :visible.sync="loginDialogVisible"
        width="400px"
        center
        :before-close="loginHandleClose"
      >
        <div class="contt-text">{{ $t("message.192") }}</div>
        <span slot="footer" class="dialog-footer">
          <el-button class="rz-botton" type="primary" @click="toLogin">{{
            $t("message.193")
          }}</el-button>
          <el-button class="gz-botton" @click="loginDialogVisible = false">{{
            $t("message.194")
          }}</el-button>
        </span>
      </el-dialog>
      <!-- 登录提示窗 弹窗 end-->

      <!-- KYC提示窗 弹窗 -->
      <el-dialog
        :visible.sync="KYC_DialogVisible"
        width="400px"
        center
        :before-close="KYCHandleClose"
      >
        <div class="contt-text">
          {{ $t("message.195") }}
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="rz-botton" type="primary" @click="toKYC">{{
            $t("message.196")
          }}</el-button>
          <el-button class="gz-botton" @click="KYC_DialogVisible = false">{{
            $t("message.194")
          }}</el-button>
        </span>
      </el-dialog>
      <!-- KYC提示窗 弹窗 end-->

      <!-- KYC审核中 弹窗 -->
      <el-dialog :visible.sync="KYC_loading_DialogVisible" width="400px">
        <div class="contt-text">
          {{ $t("message.195") }}
        </div>
        <div slot="footer" class="dialog-footer" style="text-align: center">
          <el-button
            class="rz-botton"
            type="primary"
            @click="KYC_loading_DialogVisible = false"
            >{{ $t("message.54") }}</el-button
          >
        </div>
      </el-dialog>
      <!-- KYC审核中 弹窗 end-->
      <!-- KYC审核中 弹窗 -->
      <el-dialog :visible.sync="KYC_error_DialogVisible" width="400px">
        <div class="contt-text">
          <div>{{ $t("message.195") }}</div>
        </div>
      </el-dialog>
      <!-- KYC审核中 弹窗 end-->
    </div>
    <web-foot />
  </div>
</template>
<script>
import webFoot from "@/Layout/footer";
import { preSale, preSalePrice, payAddress, round } from "@/request/presale.js";
import { userInfo, subBook } from "@/request/user.js";
import QRCode from "qrcodejs2";
export default {
  name: "",
  components: { webFoot },
  data() {
    var roundtext = (rule, value, callback) => {
      if (this.round == 1) {
        if (value == "") {
          callback(new Error(this.$t("message.197")));
        } else if (value.toString().length > 8) {
          this.$message.error(this.$t("message.423"));
        } else {
          callback();
        }
      }
      if (this.round == 2) {
        if (value == "") {
          callback(new Error(this.$t("message.198")));
        } else {
          callback();
        }
      }
    };
    var validateSurnmae = (rule, value, callback) => {
      if (this.round == 1) {
        if (value < 1) {
          callback(new Error(this.$t("message.199")));
        } else if (!/(^[1-9]\d*$)/.test(value)) {
          callback(new Error(this.$t("message.200")));
          return;
        } else {
          this.totalPrice = parseInt(
            value * this.preInfo.pre_amount * this.preInfo.price
          );
          callback();
        }
      } else {
        let reg = /^[1-9][0-9]*0{2}$/;
        if (!reg.test(value)) {
          callback(new Error(this.$t("message.201")));
          return;
        } else {
          this.totalPrice = value * this.preInfo.price;
          callback();
        }
      }
    };

    return {
      userInfo: {},
      roundtext: "",
      isLogin: false,
      roundstatus: 0,
      firstDialogVisible: false,
      firstPayDialogVisible: false,
      ruleDialogVisible: false,
      loginDialogVisible: false,
      KYC_DialogVisible: false,
      KYC_loading_DialogVisible: false,
      KYC_error_DialogVisible: false,

      presellForm: {
        book_amount: "",
      },
      presellChecked: false,
      totalPrice: 0,
      round: 1,
      loading: false,
      preInfo: {},
      preInfo1: {},
      preInfo2: {},
      charge_address: "", //收货地址
      rules: {
        book_amount: [
          { required: true, validator: roundtext, trigger: "blur" },
          { required: true, validator: validateSurnmae, trigger: "blur" },
        ],
      },
      languageName: this.$languageName,
      qrcode: null,
    };
  },
  computed: {},
  watch: {
    firstPayDialogVisible(newVal, oldVal) {
      setTimeout(() => {
        if (newVal == true) {
          document.getElementById("qrcode").innerHTML = "";
          this.qrcode = new QRCode("qrcode", {
            width: 120,
            height: 120,
            text: this.charge_address, // 生成二维码的链接
          });
        }
        if (newVal == false) {
          document.getElementById("qrcode").innerHTML = "";
          this.qrcode.clear();
        }
      }, 100);
    },
  },
  methods: {
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        width: 120,
        height: 120,
        text: this.charge_address, // 生成二维码的链接
      });
    },
    clickBefore() {
      if (this.round == 1 && (this.roundstatus == 0 || this.roundstatus == 2)) {
        return;
      }
      if (this.round == 2 && (this.roundstatus == 0 || this.roundstatus == 2)) {
        return;
      }
      if (this.isLogin) {
        this.presellForm.book_amount = "";
        this.totalPrice = 0;
        this.presellChecked = false;
        let params = {
          code: localStorage.getItem("code"),
        };

        // user/pre-sale/book
        userInfo(this.$qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.userInfo = res.data;
            if (this.userInfo.kyc_status == 0) {
              this.KYC_DialogVisible = true;
            }
            if (this.userInfo.kyc_status == 1) {
              if (this.round == 1) {
                this.preInfo = JSON.parse(JSON.stringify(this.preInfo1));
              } else {
                this.preInfo = JSON.parse(JSON.stringify(this.preInfo2));
              }
              this.firstDialogVisible = true;
            }
            if (this.userInfo.kyc_status == 2) {
              this.KYC_loading_DialogVisible = true;
            }
            if (this.userInfo.kyc_status == 3) {
              this.KYC_error_DialogVisible = true;
            }
          } else {
            this.$message.error(res.msg);
          }
        });
      } else {
        this.loginDialogVisible = true;
      }
    },
    presellCoander() {
      round().then((res) => {
        this.round = res.data.round;
        this.roundstatus = res.data.status;
      });
    },

    ruleHandleClose() {
      this.ruleDialogVisible = false;
    },

    firstHandleClose() {
      this.firstDialogVisible = false;
    },

    firstPayHandleClose() {
      this.firstPayDialogVisible = false;
    },
    koserxy() {
      this.$router.push("/purchase");
    },

    loginHandleClose() {
      this.loginDialogVisible = false;
    },
    KYCHandleClose() {
      this.KYC_DialogVisible = false;
    },

    copyArticle(event) {
      var input = document.createElement("input");
      input.value = this.charge_address;
      input.readOnly = true;
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, input.value.length);
      document.execCommand("Copy");
      document.body.removeChild(input);
      this.$message(this.$t("message.119"));
    },

    toLogin() {
      this.$router.push("/login");
    },
    toKYC() {
      this.$router.push({ name: "KYCapply", query: { type: 0 } });
    },

    getPreSale() {
      preSale(this.$qs.stringify({ round: 1, amount_type: 1 })).then((res) => {
        if (res.code == 0) {
          this.preInfo1 = res.data;
        }
      });
    },

    getPreSale2() {
      preSale(this.$qs.stringify({ round: 2, amount_type: 0 })).then((res) => {
        if (res.code == 0) {
          this.preInfo2 = res.data;
        }
      });
    },

    nextPay() {
      this.$refs["presellForm"].validate((valid) => {
        if (valid) {
          if (this.round == 1) {
            if (parseInt(this.presellForm.book_amount) > this.preInfo.total) {
              return this.$message.error(
                this.languageName == "English"
                  ? "The number of copies exceeds the maximum" +
                      " " +
                      this.preInfo.total +
                      " " +
                      "copies"
                  : this.$t("message.202") +
                      this.preInfo.total +
                      this.$t("message.174")
              );
            }
          }
          if (this.round == 2) {
            if (this.totalPrice > this.preInfo.total) {
              return this.$message.error(
                this.$t("message.203") + this.preInfo.total + " 份"
              );
            }
            if (this.preInfo.progress >= 100) {
              return this.$message.error(this.$t("message.204"));
            }
          }
          if (!this.presellChecked) {
            return (document.getElementById("elcheckbox").style["color"] =
              "red");
          }
          this.loading = true;
          subBook(
            this.$qs.stringify({
              user_code: localStorage.getItem("code"),
              amount_type: this.round == 1 ? "1" : "0",
              book_amount: this.presellForm.book_amount,
            })
          ).then((res) => {
            this.loading = false;
            if (res.code == 0) {
              this.charge_address = res.data.charge_address;
              this.firstDialogVisible = false;
              this.firstPayDialogVisible = true;
              this.presellCoander();
              this.getPreSale();
              this.getPreSale2();
              return;
            }
            if (res.code == "102002") {
              this.$message.error(
                this.$t("message.203") +
                  " " +
                  this.preInfo.total +
                  " " +
                  " 份"
              );
              return;
            }
            if (res.code == "102003") {
              this.$message.error(this.$t("message.205"));
              return;
            } else {
              this.$message.error(this.$t("message.206"));
              return;
            }
          });
        }
      });
    },
    iconCheck() {
      this.presellChecked = !this.presellChecked;
      if (this.presellChecked) {
        document.getElementById("spollt").style.borderColor = "#c0c4cc";
      }
    },
  },
  created() {
    this.isLogin = localStorage.getItem("token") ? true : false;
    this.presellCoander();
  },
  mounted() {
    this.getPreSale();
    this.getPreSale2();
  },

  filters: {
    transform(value) {
      const newValue = ["", "", ""];
      let fr = 1000;
      let num = 3;
      let text1 = "";
      let fm = 1;
      while (value / fr >= 1) {
        fr *= 10;
        num += 1;
      }
      if (num <= 4) {
        // 千
        newValue[0] = parseInt(value / 1000) + "";
        newValue[1] = "千";
      } else if (num <= 8) {
        // 万
        text1 = parseInt(num - 4) / 3 > 1 ? "千万" : "万";
        fm = text1 === "万" ? 10000 : 10000000;
        if (value % fm === 0) {
          newValue[0] = parseInt(value / fm) + "";
        } else {
          newValue[0] = parseFloat(value / fm).toFixed(2) + "";
        }
        newValue[1] = text1;
      } else if (num <= 16) {
        // 亿
        text1 = (num - 8) / 3 > 1 ? "千亿" : "亿";
        text1 = (num - 8) / 4 > 1 ? "万亿" : text1;
        text1 = (num - 8) / 7 > 1 ? "千万亿" : text1;
        // tslint:disable-next-line:no-shadowed-variable
        fm = 1;
        if (text1 === "亿") {
          fm = 100000000;
        } else if (text1 === "千亿") {
          fm = 100000000000;
        } else if (text1 === "万亿") {
          fm = 1000000000000;
        } else if (text1 === "千万亿") {
          fm = 1000000000000000;
        }
        if (value % fm === 0) {
          newValue[0] = parseInt(value / fm) + "";
        } else {
          newValue[0] = parseFloat(value / fm).toFixed(2) + "";
        }
        newValue[1] = text1;
      }
      if (value < 1000) {
        newValue[0] = value + "";
        newValue[1] = "";
      }
      return newValue.join("");
    },
  },
};
</script>

<style lang='less' scoped>
.pay_omni_QR {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #606266;
  font-size: 14px;
}
.pay_omni_QR_title {
  width: 100%;
  text-align: left;
}
.pay_omni_QR_div {
  width: 240/100rem;
  height: 240/100rem;
}
.pay_omni_QR_div img {
  width: 100%;
  height: 100%;
}
.wrap_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.wrap_title {
  width: 100%;
  text-align: center;
  height: 50/100rem;
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  line-height: 50/100rem;
  margin-top: 110/100rem;
}
.wrap_line {
  width: 80/100rem;
  height: 6/100rem;
  background: #104cff;
  margin-top: 8/100rem;
}
.wrap_header {
  width: 750/100rem;
  height: 432/100rem;
  background: url("../../assets/images/pic_art_banner.png") no-repeat;
  background-size: 750/100rem 432/100rem;
  margin-top: 90/100rem;
}
.wrap_header_title {
  width: 380/100rem;
  height: 84/100rem;
  font-size: 50/100rem;
  font-family: Helvetica;
  color: #ffffff;
  line-height: 72/100rem;
  letter-spacing: 2/100rem;
  margin: 224/100rem 0 0 328/100rem;
  font-weight: bold;
}
.wrap_content {
  position: relative;
  width: 750/100rem;
  /*height: 1890/100rem;
  background: url("../../assets/images/preSale.png") no-repeat;
  background-size: 750/100rem 1890/100rem;*/
  height: 1248/100rem;
  background: url("../../assets/images/preSale2.png") no-repeat;
  background-size: 750/100rem 1248/100rem;
  margin-top: -2/100rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-left: 134/100rem;
  padding-top: 25/100rem;
}

.wrap-wllr img{
  position: absolute;
  left: 74/100rem;
  width: 45/100rem;
  top: 50/100rem;
}
.ter img{
  top: 640/100rem;
}
.tert img{
  top: 1110/100rem;
}
.wrap_plan_first_title,
.wrap_plan_second_title,
.wrap_plan_third_title {
  // width: 308/100rem;
  height: 84/100rem;
  font-size: 60/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 84/100rem;
}
.wrap_plan_default {
  width: 540/100rem;
  height: 220/100rem;
  background: url("../../assets/images/pic_yushou_bg.png") no-repeat; // deep
  background-size: 540/100rem 220/100rem;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #cad7e8;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-top: 50/100rem;
  margin-top: 28/100rem;
  padding-left: 36/100rem;
}
.wrap_plan_current {
  width: 540/100rem;
  height: 220/100rem;
  background: url("../../assets/images/pic_yushou_bg_ing@3x.png") no-repeat;// light
  background-size: 540/100rem 220/100rem;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #fff;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-top: 50/100rem;
  margin-top: 28/100rem;
  padding-left: 36/100rem;
}
.wrap_plan_second_title {
  margin-top: 10/100rem;
}
/*.wrap_plan_third_title {*/
  /*margin-top: 30/100rem;*/
/*}*/
.wrap_plan_default div {
  height: 50/100rem;
  line-height: 50/100rem;
  letter-spacing: 1/100rem;
}
.wrap_plan_span_art {
  width: 160/100rem;
  height: 56/100rem;
  font-size: 40/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 56/100rem;
  margin-left: 18/100rem;
}
.wrap_rule {
  width: 660/100rem;
  // height: 902/100rem;
  background: #163db5;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 68/100rem 38/100rem 70/100rem 40/100rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #e5edf9;
}
.wrap_rule_header {
  text-align: center;
  font-size: 28/100rem;
}
.wrap_rule_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 750/100rem;
  // height: 1142/100rem;
  background: #042588;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 130/100rem 44/100rem 110/100rem 46/100rem;
  margin-top: -102/100rem;
}
.wrap_rule_name {
  margin-top: 38/100rem;
}
.wrap_rule_content {
  margin-top: 20/100rem;
  line-height: 35/100rem;
}
.wrap_rule_detail {
  line-height: 35/100rem;
  margin-top: 10/100rem;
}
.wrap_rule_detail_first {
  margin-top: 20/100rem;
}
.wrap-cont-text{
  font-size: 0.24rem;
  width: 5.4rem;
  line-height: 0.37rem;
  color: #fff;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
}
.page {
  overflow: hidden;
  padding-bottom: 100/100rem;
  .wrap {
    .apply {
      margin: 0 auto;
      text-align: center;
      position: fixed;
      bottom: 0;
      width: 100%;
      .apply_btn {
        padding: 0 31px;
        height: 100/100rem;
        width: 100%;
        display: inline-block;
        line-height: 100/100rem;
        font-size: 34/100rem;
        color: rgba(255,255,255, .5);
        text-align: center;
        background: #0B32A8;
        cursor: pointer;
      }
      .daosk {
        width: 100%;
        color: #fff;
        background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
        // background: linear-gradient(to right, #efcf54, #bf8d08) !important;
      }
      .apply_rule {
        width: 198px;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        color: #ffffff;
        cursor: pointer;
        text-align: center;
      }

      .apply_rule:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .firstDialogVisible {
      .progress_info {
        display: flex;
        color: #333333;
        font-size: 12px;
        line-height: 28px;
        margin-bottom: 10px;
        justify-content: space-between;
      }
    }
    .firstPayDialogVisible {
      .dialog_body {
        color: #333333;
        line-height: 30px;
        min-height: 200px;
        .pay_name {
          font-size: 14px;
          margin-bottom: 10px;
        }
        .pay_num {
          color: #104cff;
          font-size: 20px;
          margin-bottom: 20px;
        }
        .pay_omni_name {
          font-size: 14px;
        }
        .pay_omni_row {
          position: relative;

          padding: 0 10px;
          box-sizing: border-box;
          background: #ffffff;
          border: 1px solid #e7e7e7;
          .copy {
            position: absolute;
            right: 10px;
            height: 27px;
            background-color: #fff;
            top: 0;
            cursor: pointer;
            color: #104cff;
          }
        }
      }
    }
  }
}
@keyframes localShine {
  from {
    box-shadow: 0 0 0 0 rgba(214, 196, 72, 0.8);
  }
  to {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
}
.tet-lk {
  width: 3px;
  height: 100%;
  background: #ffffff;
}
.amwt {
  height: 99%;
  margin-right: 22px;
}
.qalot {
  width: 22px;
  margin-left: -10px;
  margin-top: -14px;
}
.qalot img {
  width: 22px;
}
.contt-text {
  font-size: 19px;
  text-align: center;
  line-height: 36px;
  color: #2c2c2c;
}
.restBottn {
  width: 240px;
  height: 48px;
  background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
  border-radius: 6px;
  border: none;
}
.rz-botton {
  width: 130px;
  height: 42px;
  text-align: center;

  background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
  border-radius: 6px;
  border: none;
}
.gz-botton {
  width: 130px;
  height: 42px;
  background: #1d2c46;
  border-radius: 6px;
  border: none;
}
.aleamowt {
  padding-left: 73px;
}
.icaOma {
  color: red;
  font-size: 53px;
  margin-bottom: 21px;
}
.priceValue {
  height: 36px;
  padding-left: 10px;
  line-height: 36px;
  border-radius: 3px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
}

.skert {
  position: absolute;
  top: 6px;
  right: 5px;
  background-color: #fff;
  line-height: 30px;
  height: 30px;
  width: 31px;
  text-align: center;
}
.sgStyle {
  color: #104cff;
}
.sgStyle:hover {
  cursor: pointer;
  text-decoration: underline;
}
/deep/ .el-form--label-top .el-form-item__label {
  padding: 0 0 1px;
}
/deep/ .el-dialog__title {
  font-size: 16px;
  color: #141413;
}
/deep/ .el-dialog {
  display: flex;
  flex-direction: column;
  margin: 0 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*height:600px;*/
  max-height: calc(100% - 30px);
  max-width: calc(100% - 30px);
}
/deep/ .el-dialog .el-dialog__body {
  flex: 1;
  overflow: auto;
  padding: 5px 24px 1px;
}
/deep/ .el-progress-bar__innerText {
  margin: 1px 1px;
  display: inherit;
}
/deep/ .el-form-item {
  margin-bottom: 16px;
}
.omni {
  padding-right: 67px;
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



