
<template>
  <div class="page">
    <!-- <div style="height: 70px"></div> -->
    <div class="wrap">
      <div class="page_content">
        <div class="ltoet">
          <div class="qs_rt">
            {{ languageNav[languageName].language_text61 }}
          </div>
          <div class="wolaet">
            <el-form
              class="data_form"
              label-position="right"
              :rules="rules"
              label-width="80px"
              ref="dataForm"
              :model="dataForm"
            >
              <el-form-item :label="languageNav[languageName].language_text62">
                <el-input
                  type="text"
                  disabled
                  v-model="apply_taft_amount"
                ></el-input>
              </el-form-item>
              <el-form-item
                :label="languageNav[languageName].language_text63"
                prop="to_account"
              >
                <el-input
                  type="text"
                  :placeholder="languageNav[languageName].language_text65"
                  v-model.trim="dataForm.to_account"
                ></el-input>
              </el-form-item>
              <el-form-item
                :label="languageNav[languageName].language_text64"
                prop="taft_amount"
              >
                <el-input
                  type="number"
                  v-model.trim="dataForm.taft_amount"
                  :placeholder="languageNav[languageName].language_text66"
                ></el-input>
              </el-form-item>
            </el-form>
            <el-button class="submit_btn" @click="subFrom">{{
              languageNav[languageName].language_text48
            }}</el-button>
          </div>
        </div>

        <div>
          <div class="qs_rtet">
            {{ languageNav[languageName].language_text67 }}
          </div>
          <el-table :data="tableData" style="width: 100%" stripe>
            <el-table-column
              prop="apply_time"
              :label="languageNav[languageName].language_text3"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.time | trimet(that) }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="round"
              :label="languageNav[languageName].language_text68"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.account }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="apply_amount"
              :label="languageNav[languageName].language_text69 + '  (TAFT)'"
            >
              <template slot-scope="scope">
                <span style="color: red" v-if="scope.row.transfer_type == 0">{{
                  scope.row.taft_amount
                }}</span>
                <span style="color: #17d241" v-if="scope.row.transfer_type == 1"
                  >+{{ scope.row.taft_amount }}</span
                >
              </template>
            </el-table-column>
            <template slot="empty">
              <div class="noData">
                {{ languageNav[languageName].language_text11 }}
              </div>
            </template>
          </el-table>
          <el-pagination
            @current-change="handleCurrentChange"
            :page-size="form.page_size"
            layout="prev, pager, next"
            :total="total"
            background
          ></el-pagination>
        </div>
      </div>
    </div>
    <webFoot />
  </div>
</template>

<script>
import webFoot from "@/Layout/footer";
import { myPreSale, recordsList, taftBoert } from "@/request/user.js";
import languageNav from "@/language/coander";
export default {
  name: "",
  components: { webFoot },
  data() {
    var validateSurnmae = (rule, value, callback) => {
      if (parseInt(value) < 1) {
        callback(
          new Error(this.languageNav[this.$languageName].language_text75)
        );
      } else if (!/(^[1-9]\d*$)/.test(value)) {
        callback(new Error(languageNav[this.$languageName].language_text76));
        return;
      } else {
        callback();
      }
    };
    var validatePrice = (rule, value, callback) => {
      if (parseInt(value) > parseInt(this.apply_taft_amount)) {
        callback(
          new Error(this.languageNav[this.$languageName].language_text77)
        );
      } else {
        callback();
      }
    };

    var Elowert = (rule, value, callback) => {
      let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (!reg.test(value)) {
        callback(new Error(languageNav[this.$languageName].language_text53));
      } else {
        callback();
      }
    };

    return {
      that: this,
      apply_taft_amount: "0",
      dataForm: {
        user_code: localStorage.getItem("code"),
        to_account: "",
        taft_amount: "",
      },
      form: {
        user_code: localStorage.getItem("code"),
        page_no: 1,
        page_size: 50,
      },
      tableData: [],
      total: 0,
      languageNav: languageNav,
      languageName: this.$languageName,
      rules: {
        to_account: [
          {
            required: true,
            message: languageNav[this.$languageName].language_text65,
            trigger: "blur",
          },
          { required: true, validator: Elowert, trigger: "blur" },
        ],
        taft_amount: [
          {
            required: true,
            message: languageNav[this.$languageName].language_text66,
            trigger: "blur",
          },
          { required: true, validator: validateSurnmae, trigger: "blur" },
          { required: true, validator: validatePrice, trigger: "blur" },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleCurrentChange(val) {
      this.form.page_no = val;
      this.getList();
    },

    getList() {
      recordsList(this.$qs.stringify(this.form)).then((res) => {
        if (res.code == 0) {
          this.tableData = res.data.rows;
          this.total = res.data.total;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    subFrom() {
      this.$refs["dataForm"].validate((valid) => {
        if (valid) {
          let englishText =
            "Do you confirm to the account" +
            this.dataForm.to_account +
            "Transfer" +
            this.dataForm.taft_amount +
            " TAFT?";
          let chineseText =
            "您确认向账户" +
            this.dataForm.to_account +
            "转让 " +
            this.dataForm.taft_amount +
            " TAFT吗？";
          this.$confirm(
            this.$languageName == "English" ? englishText : chineseText,
            languageNav[this.$languageName].language_text55,
            {
              confirmButtonText:
                languageNav[this.$languageName].language_text58,
              cancelButtonText: languageNav[this.$languageName].language_text59,
              type: "warning",
            }
          )
            .then(() => {
              taftBoert(this.$qs.stringify(this.dataForm)).then((res) => {
                if (res.code == 0) {
                  this.$message.success(
                    languageNav[this.$languageName].language_text57
                  );
                  this.apply_taft_amount = res.data.taft_balance_amount
                    ? res.data.taft_balance_amount + " TAFT"
                    : "0 TAFT";
                  this.dataForm = {
                    user_code: localStorage.getItem("code"),
                    to_account: "",
                    taft_amount: "",
                  };
                  this.form.page_no = 1;
                  this.getList();
                } else {
                  if (res.code == "102603") {
                    this.$message.error(
                      languageNav[this.$languageName].language_text54
                    );
                  }
                  if (res.code == "102606") {
                    this.$message.error(
                      languageNav[this.$languageName].language_text56
                    );
                  }
                  if (res.code == "102607") {
                    this.$message.error(
                      languageNav[this.$languageName].language_text78
                    );
                  }
                }
              });
            })
            .catch(() => {});
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
          this.apply_taft_amount = res.data.apply_taft_amount
            ? res.data.apply_taft_amount + " TAFT"
            : "0 TAFT";
        } else {
          this.$message.error(res.msg);
        }
      });
    },
  },
  created() {
    this.form.user_code = localStorage.getItem("code");
    this.getMyPreSale();
  },
  mounted() {
    this.getList();
  },
  filters: {
    trimet(trime, that) {
      let parsTrme = that
        .$moment(Math.floor(trime * 1000))
        .format("YYYY-MM-DD HH:mm");
      return parsTrme;
    },
  },
};
</script>

<style lang='less' scoped>
.page {
  background: #f0f2f5;
  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-top: 60px;
  .wrap {
    // height: 100%;
    .page_indicator {
      margin-top: 20px;
      height: 60px;
      line-height: 60px;
      color: #333333;
      font-size: 16px;
      padding: 0 30px;
      background: #ffffff;
    }
    .page_content {
      margin: 20px 0 0px;
      padding: 15px;
      background: #ffffff;
      text-align: center;
    }
  }
}
.submit_btn {
  width: 329px;
  height: 48px;
  line-height: 24px;
  border-radius: 8px;
  margin-top: 30px;
  font-size: 16px;
  color: #fffffe;
  background: linear-gradient(to right, #efcf54, #bf8d08);
  text-align: center;
  cursor: pointer;
  margin-left: 19px;
}
.ltoet {
  margin-bottom: 63px;
}
.qs_rt {
  text-align: left;
  border-left: 5px solid #efcf54;
  padding-left: 9px;
  margin-bottom: 25px;
}
.qs_rtet {
  text-align: left;
  border-left: 5px solid #efcf54;
  padding-left: 9px;
  margin-bottom: 25px;
}
.wolaet {
  margin: 0 auto;
}
/deep/ .el-message-box {
  width: 80%;
}
/deep/ .el-form-item {
  margin-bottom: 29px;
}
/deep/ .el-form-item__error {
  text-align: left;
}
</style>


