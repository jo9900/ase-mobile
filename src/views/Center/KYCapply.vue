
<!-- -->
<template>
  <div class="page"  id="scrollBody" ref="scrollBody">
    <div class="wrap" ref="pageKYC">
      <div class="wrap_kyc">
        <div class="wrap_kyc_title">{{$t('message.100')}}</div>
        <div class="wrap_kyc_line"></div>
      </div>
      <div class="page_content" >
        <el-form
          label-position="top"
          ref="formLabelAlign"
          :rules="rules"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-row>
            <el-col :span="24">
              <!--label="Country / Region"-->
              <el-form-item class="el-form-item-country" prop="country_code">
                <span>{{$t('message.216')}}</span>
                <!-- <el-select
                  v-model="formLabelAlign.country_code"
                  :placeholder="languageNav[languageName].language_text30"
                  style="width: 100%;"
                >
                  <el-option
                    :label="languageName=='English'?item.name_en:item.name_cn"
                    :value="item.code"
                    v-for="item in areaList"
                    :key="item.code"
                  ></el-option>
                </el-select> -->
                <div @click="chooseCountry">
                  <el-input
                    v-model.trim="name_cn"
                    :placeholder="$t('message.217')"
                    readonly
                  ></el-input>
                </div>
                 <input
                  type="hidden"
                  v-model.trim="formLabelAlign.country_code"
                ></input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item class="el-form-item-country item_border_top" prop="first_name">
                <span>{{$t('message.218')}}</span>
                <el-input
                  v-model.trim="formLabelAlign.first_name"
                  :placeholder="$t('message.218')"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <!--label="First  Name"-->
              <el-form-item class="el-form-item-country item_border_top" prop="last_name">
                <span>{{$t('message.219')}}</span>
                <el-input
                  v-model.trim="formLabelAlign.last_name"
                  :placeholder="$t('message.219')"
                ></el-input>
              </el-form-item>
            </el-col>
            <!--label="Last  Name"-->
          </el-row>
          <el-row>
            <el-col>
              <!--label="ID Type"-->
              <el-form-item class="el-form-item-country item_border_top" prop="id_type">
                <span>{{$t('message.220')}}</span>
                <!-- <el-select
                  v-model="formLabelAlign.id_type"
                  :placeholder="languageNav[languageName].language_text34"
                  style="width: 100%;"
                >
                  <el-option :label="languageNav[languageName].language_text35" value="1"></el-option>
                  <el-option :label="languageNav[languageName].language_text36" value="2"></el-option>
                  <el-option :label="languageNav[languageName].language_text37" value="3"></el-option>
                </el-select> -->
                <div @click="chooseIDtype">
              <el-input
                  v-model.trim="name"
                  :placeholder="$t('message.221')"
                  readonly
                ></el-input>
                </div>
                <input type="hidden" v-model="formLabelAlign.id_type">
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item class=" item_border_top" prop="id_number">
                <span>
                  {{formLabelAlign.id_type==''?$t('message.222'):formLabelAlign.id_type==1?$t('message.223') :formLabelAlign.id_type==2?$t('message.224'):$t('message.225')}}
                </span>
                <div>
                  <el-input
                    v-model.trim="formLabelAlign.id_number"
                    :placeholder="formLabelAlign.id_type==''?$t('message.222'):formLabelAlign.id_type==1?$t('message.223') :formLabelAlign.id_type==2?$t('message.224'):$t('message.225')"
                  ></el-input>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div
                class="el-form-item-country item_border_top el-form-div" style="padding-top:10px;"
              >{{$t('message.226')}}</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item prop="isImg">
                <div class="IDcard_box_div">
                  <div class="IDcard_box">
                  <div class="card-uploader" >
                    <img v-if="id_front" :src="id_front" class="card card-img" />
                    <i
                      v-else
                      class="el-icon-plus card-uploader-icon"
                    >{{$t('message.227')}}</i>
                    <input type="file" class="uplodinput" @change="fileChange"></input>
                  </div>
                </div>
                <div class="IDcard_box">
                  <div  class="card-uploader card-uploader-back">
                    <img v-if="id_back" :src="id_back" class="card" />
                    <i
                      v-else
                      class="el-icon-plus card-uploader-icon"
                    >{{$t('message.228')}}</i>
                    <input type="file" class="uplodinput" @change="fileChange1"></input>
                  </div>
                </div>
                </div>
                <div class="IDcard_box_info">
                  <div class="IDcard_box_info_pre">{{$t('message.229')}}</div>
                  <div class="IDcard_box_info_div" :class="{'IDcard_box_info_div1':lang=='en'}">{{$t('message.230')}}</div>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                class="el-form-item-country item_border_top"
                prop="birth_date"
                style="margin-top:10px;"
              >
                <span>{{$t('message.231')}}</span>
                <input
                  @click="setData"
                  onfocus="this.blur();"
                  class="user-input"
                  ref="userInput"
                  :placeholder="$t('message.232')"
                  v-model="formLabelAlign.birth_date"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item class="el-form-item-country item_border_top" prop="mobile_no">
                <span>{{$t('message.233')}}</span>
                <div>
                    <el-input
                      v-model.trim="formLabelAlign.mobile_no"
                      :placeholder="$t('message.234')"
                    ></el-input>
                </div>
              </el-form-item>
               <van-number-keyboard
                        :show="phoneISshow"
                        theme="custom"
                        extra-key="."
                        :close-button-text="$t('message.235')"
                        @blur="phoneISshow = false"
                        @input="onInput1"
                        @delete="onDelete1"
                        ref="phoneKeyboard"
                        key="phoneKeyboard"
                      />
            </el-col>
          </el-row>
          <div class="bBottn_div">
            <el-button class="bBottn" :loading="loading" @click="subFromData">
              <span>{{$t('message.236')}}</span>
            </el-button>
          </div>

        </el-form>
      </div>
    </div>
    <div class="pickerVan" v-show="pickerIsshow">
      <van-picker
        :title="$t('message.216')"
        show-toolbar
        :columns="columnsCountry"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
        class="vanpicker"
        value-key="name_en"
        v-if="lang=='en'"
      />
       <van-picker
        :title="$t('message.216')"
        show-toolbar
        :columns="columnsCountry"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
        class="vanpicker"
        value-key="name_cn"
        v-if="lang=='zh'"
      />
    </div>
    <div class="pickerID" v-show="pickerIDISshow">
      <van-picker
        :title="$t('message.220')"
        show-toolbar
        :columns="idtype"
        @confirm="onConfirm1"
        @cancel="onCancel1"
        @change="onChange1"
        class="vanpicker"
        value-key="name"
      />
    </div>
    <!-- <webFoot/  > -->
     <!--<van-number-keyboard
                :show="numberISshow"
                extra-key="X"
                :close-button-text="$t('message.235')"
                @blur="numberISshow = false"
                @input="onInput"
                @delete="onDelete"
                ref="numberKeyboard"
                key="numberKeyboard"
              />-->
  </div>
</template>

<script>
import { EXIF } from "@/util/exif";
import { compress, dataURLtoFile } from "../../util/uploadImage";
import webFoot from "@/Layout/footer";
import { areaList, addkyc, kycInfo } from "@/request/user";
import { Picker } from "vant";
import { Toast } from "vant";
import { NumberKeyboard } from "vant";
export default {
  name: "",
  components: { webFoot, vanPicker: Picker, vanNumberKeyboard: NumberKeyboard },
  data() {
    var passwordValidator = (rule, value, callback) => {
      if (this.id_front == "" && this.id_back == "") {
        callback(new Error(this.$t("message.237")));
      } else {
        callback();
      }
    };
    return {
      BaseUrl: this.$BaseUrl,
      areaList: [],
      id_front: "",
      id_back: "",
      loading: false,
      languageName: this.$languageName,
      pickerIsshow: false,
      pickerIDISshow: false,
      numberISshow: false,
      phoneISshow: false,
      columnsCountry: [],
      columnsType: [],
      idtype: [
        {
          value: 1,
          name: this.$t("message.99"),
        },
        {
          value: 2,
          name: this.$t("message.238"),
        },
        {
          value: 3,
          name: this.$t("message.239"),
        },
      ],
      name_cn: "",
      name: "",
      lang: this.$lang,
      lang_type: this.$languageName,
      formLabelAlign: {
        user_code: localStorage.getItem("code"),
        country_code: "",
        first_name: "",
        last_name: "",
        id_type: "",
        id_number: "",
        id_front: "",
        id_back: "",
        birth_date: "",
        mobile_no: "",
        isImg: "",
      },
      rules: {
        country_code: [
          {
            required: true,
            message: this.$t("message.217"),
            trigger: "change",
          },
        ],
        first_name: [
          {
            required: true,
            message: this.$t("message.237"),
            trigger: "blur",
          },
        ],
        last_name: [
          {
            required: true,
            message: this.$t("message.237"),
            trigger: "blur",
          },
        ],
        id_type: [
          {
            required: true,
            message: this.$t("message.237"),
            trigger: "change",
          },
        ],
        id_number: [
          {
            required: true,
            message: this.$t("message.237"),
            trigger: "blur",
          },
        ],
        isImg: [
          {
            required: true,
            message: this.$t("message.237"),
            trigger: "blur",
            validator: passwordValidator,
          },
        ],
        birth_date: [
          {
            required: true,
            message: this.$t("message.237"),
            trigger: "change",
          },
        ],
        mobile_no: [
          {
            required: true,
            message: this.$t("message.237"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {
    phoneISshow(newVal, oldVal) {
      if (!this.phoneISshow) {
        this.getTransform("pageKYC", "0px", 1);
      }
    },
    numberISshow(newVal, oldVal) {},
  },
  mounted() {
    // window.addEventListener("scroll", () => {
    //   let top =
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop ||
    //     window.pageYOffset;
    //   // console.log(top);
    // });
  },
  methods: {
    /*phoneClick() {
      this.phoneISshow = true;
      this.getTransform("pageKYC", "-245px", 1);
      this.getTransform("phoneKeyboard", "245px", 2);
    },*/
    getTransform(className, numberPx, type) {
      let refs;
      if (type == 1) {
        refs = this.$refs[className];
      } else {
        refs = this.$refs[className].$el;
      }
      refs.style.transform = "translateY(" + numberPx + ")";
      refs.style.webkitTransform = "translateY(" + numberPx + ")";
      refs.style.msTransform = "translateY(" + numberPx + ")";
      refs.style.mozTransform = "translateY(" + numberPx + ")";
      refs.style.oTransform = "translateY(" + numberPx + ")";

      refs.style.transition = "all 500ms";
      refs.style.webkitTransition = "all 500ms";
      refs.style.msTransition = "all 500ms";
      refs.style.mozTransition = "all 500ms";
      refs.style.oTransition = "all 500ms";
    },
    onInput1(value) {
      this.formLabelAlign.mobile_no += value;
    },
    onDelete1() {
      let f = this.formLabelAlign.mobile_no;
      f = f.substring(0, f.length - 1);
      this.formLabelAlign.mobile_no = f;
    },
    numberFocus() {
      this.numberISshow = true;
      // this.getTransform("numberKeyboard", "0px", 2);
    },
    onInput(value) {
      this.formLabelAlign.id_number += value;
    },
    onDelete() {
      let f = this.formLabelAlign.id_number;
      f = f.substring(0, f.length - 1);
      this.formLabelAlign.id_number = f;
    },
    chooseCountry() {
      this.pickerIsshow = true;
    },
    chooseIDtype() {
      this.pickerIDISshow = true;
    },
    onConfirm(value, index) {
      console.log(value, index);
      if (this.$lang == "en") {
        this.name_cn = value.name_en;
      } else {
        this.name_cn = value.name_cn;
      }
      this.formLabelAlign.country_code = value.code;
      // Toast(`当前值：${value.name_cn}, 当前索引：${index}`);
      this.pickerIsshow = false;
    },
    onChange(value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      // Toast("取消");
      this.pickerIsshow = false;
    },
    onConfirm1(data, index) {
      console.log(data, index);
      this.name = data.name;
      this.formLabelAlign.id_type = data.value;
      // Toast(`当前值：${data.name}, 当前索引：${index}`);
      this.pickerIDISshow = false;
    },
    onChange1(value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel1() {
      // Toast("取消");
      this.pickerIDISshow = false;
    },
    setData() {
      let self = this;
      setTimeout(() => {
        let yearData = document.getElementsByClassName("m-scroller-item");
        yearData.forEach((item, index, data) => {
          let textData = JSON.stringify(item.innerHTML);
          item.innerHTML = textData.replace(/[^0-9]/g, "");
        });
      }, 30);
      self.$picker.show({
        type: "datePicker",
        endTime: "2199-12-31",
        startTime: "1900-01-01",
        onOk: (res) => {
          self.formLabelAlign.birth_date = res;
        },
      });
    },
    subFromData() {
      this.$refs["formLabelAlign"].validate((valid) => {
        if (valid) {
          this.loading = true;
          let formData = new FormData();
          formData.append("modify", this.$route.query.type);
          formData.append("user_code", localStorage.getItem("code"));
          formData.append("country_code", this.formLabelAlign.country_code);
          formData.append("first_name", this.formLabelAlign.first_name);
          formData.append("last_name", this.formLabelAlign.last_name);
          formData.append("id_type", this.formLabelAlign.id_type);
          formData.append("id_number", this.formLabelAlign.id_number);
          formData.append("id_front", this.formLabelAlign.id_front);
          formData.append("id_back", this.formLabelAlign.id_back);
          formData.append("birth_date", this.formLabelAlign.birth_date);
          formData.append("mobile_no", this.formLabelAlign.mobile_no);
          addkyc(formData).then((res) => {
            this.loading = false;
            if (res.code == 0) {
              (this.id_front = ""),
                (this.id_back = ""),
                (this.formLabelAlign = {
                  user_code: localStorage.getItem("code"),
                  country_code: "",
                  first_name: "",
                  last_name: "",
                  id_type: "",
                  id_number: "",
                  id_front: "",
                  id_back: "",
                  birth_date: "",
                  mobile_no: "",
                  isImg: "",
                }),
                this.$message.success({
                  message: this.$t("message.240"),
                  type: "success",
                  duration: 4000,
                });
              this.$router.push({ path: "/center" });
            } else {
              this.$message.error(this.$t("message.241"));
            }
          });
        }
      });
    },
    get_kycInfo() {
      kycInfo(
        this.$qs.stringify({ user_code: localStorage.getItem("code") })
      ).then((res) => {
        if (res.code == 0) {
          this.formLabelAlign = res.data;
          this.areaList.forEach((item, index, data) => {
            if (item.code == res.data.country_code) {
              this.name_cn = item.name_cn;
            }
          });
          this.idtype.forEach((item, index, data) => {
            if (item.value == res.data.id_type) {
              this.name = item.name;
            }
          });
          console.log(this.BaseUrl + "#" + res.data.id_back_url);
          this.formLabelAlign.isImg = "#";
          let url1 = res.data.id_front_url.substr(1);
          let url2 = res.data.id_back_url.substr(1);
          this.id_front = this.BaseUrl + url1;
          this.id_back = this.BaseUrl + url2;
          this.formLabelAlign.id_front = "";
          this.formLabelAlign.id_back = "";
          this.formLabelAlign.id_type = this.formLabelAlign.id_type.toString();
        }
      });
    },

    get_areaList() {
      // console.log(this.$qs.stringify());
      areaList({ lang_type: this.lang_type }).then((res) => {
        if (res.code == 0) {
          this.areaList = res.data.list;
          this.columnsCountry = res.data.list;
        }
      });
    },
    fileChange(e) {
      console.log(this.isImg(e.target.files[0].type));
      var that = this;
      var fr = new FileReader();
      let Orientation;
      let flile = e.target.files[0];
      let size = flile.size;
      let size1 = (size / 1024) * 1024;
      if (size == 0) {
        this.$message.error(this.$t("message.300"));
      }
      let imgType = e.target.files[0].type;
      if (!this.isImg(imgType)) {
        this.$message.error(this.$t("message.301"));
        return;
      }
      EXIF.getData(e.target.files[0], function () {
        Orientation = EXIF.getTag(this, "Orientation");
      });
      fr.readAsDataURL(e.target.files[0]);
      fr.onloadend = function (e) {
        let result = this.result;
        let img = new Image();
        img.src = result;
        if (this.result.length <= 500 * 1024) {
          that.id_front = this.result;
          that.formLabelAlign.id_front = flile;
        } else {
          img.onload = function () {
            let data = compress(img, Orientation);
            that.id_front = data;
            that.formLabelAlign.id_front = dataURLtoFile(that.id_front, flile);
          };
        }
      };

      if (this.id_front != "" && this.id_back != "") {
        this.formLabelAlign.isImg = "#";
      }
    },
    isImg(str) {
      if (str.search("(jpg|jpeg|swf|gif|png|JPG|JPEG|SWF|GIF|PNG)$") == -1) {
        return false;
      }
      return true;
    },
    fileChange1(e) {
      var that = this;
      var fr = new FileReader();
      let Orientation;
      let flile = e.target.files[0];
      let size = flile.size;
      let size1 = size / (1024 * 1024);
      if (size == 0) {
        this.$message.error(this.$t("message.300"));
      }
      let imgType = e.target.files[0].type;
      if (!this.isImg(imgType)) {
        this.$message.error(this.$t("message.301"));
        return;
      }
      EXIF.getData(e.target.files[0], function () {
        Orientation = EXIF.getTag(this, "Orientation");
      });
      fr.readAsDataURL(e.target.files[0]);
      fr.onloadend = function (e) {
        let result = this.result;
        let img = new Image();
        img.src = result;
        if (this.result.length <= 500 * 1024) {
          that.id_back = this.result;
          that.formLabelAlign.id_back = flile;
        } else {
          img.onload = function () {
            let data = compress(img, Orientation);
            that.id_back = data;
            that.formLabelAlign.id_back = dataURLtoFile(that.id_back, flile);
          };
        }
      };
      if (this.id_front != "" && this.id_back != "") {
        this.formLabelAlign.isImg = "#";
      }
    },
    handleAvatarSuccess1(res, file) {},
  },

  created() {
    if (this.$lang == "en") {
      this.lang_type = "English";
    }
    if (this.$lang == "zh") {
      this.lang_type = "Chinese";
    }

    setTimeout(() => {
      this.get_areaList();
      if (this.$route.query.type == 1) {
        this.get_kycInfo();
      }
    }, 300);
  },
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
.IDcard_box_div {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.IDcard_box_info {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7acc1;
  margin-top: 20/100rem;
}
.IDcard_box_info div {
  height: 34/100rem;
  line-height: 34/100rem;
}
.IDcard_box_info_div {
  margin-top: 12/100rem;
}
.IDcard_box_info_div1 {
  margin-top: 36/100rem;
}
.el-icon-plus {
  color: #fff;
}
.bBottn_div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.pickerVan {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
.pickerID {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
.vanpicker {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.page {
  // position: relative;
  background: #f0f2f5;
  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-top: 90/100rem;
  .wrap {
    .page_content {
      padding: 30/100rem;
      background: #ffffff;
      margin: 20/100rem auto 0px;
      .name {
        text-align: center;
        color: #104cff;
        font-size: 36/100rem;
      }
      .IDcard_box {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: flex-start;
        .card-uploader {
          width: 256/100rem;
          height: 160/100rem;
          line-height: 160/100rem;
          text-align: center;
          background: url("../../assets/images/pic_bg_add.png") no-repeat;
          background-size: 256/100rem 160/100rem;
          // border: 1/100rem solid #d8d8d8;
          border-radius: 6/100rem;
        }
        .card-uploader-back {
          margin-left: 60/100rem;
        }
      }
    }
  }
}
// .card-img {
//   width: 256/100rem;
//   height: 160/100rem;
//   border-radius: 6/100rem;
// }
.bBottn {
  width: 600/100rem;
  height: 88/100rem;
  background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
  border-radius: 10/100rem;
  font-size: 28/100rem;
  color: #fff;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
}
.bBottn span:hover {
  text-decoration: underline;
}
.gobaket:hover {
  color: #104cff;
}
.card {
  // max-width: 132px;
  // max-height: 150px;
  width: 256/100rem;
  height: 160/100rem;
  border-radius: 6/100rem;
}
.item_border_top {
  border-top: 1px solid #eeeeee;
}
.el-form-div {
  width: 100%;
  color: #606266;
  font-size: 30/100rem;
  height: 73/100rem;
  line-height: 40/100rem;
}
/deep/ .el-form-item-country div {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
/deep/ .el-input__inner {
  border: none;
  text-align: right;
  font-size: 30/100rem;
}
/deep/
  .el-form-item.is-required:not(.is-no-asterisk)
  > .el-form-item__label:before {
  content: "";
  color: #fff;
  margin-right: 0px;
}
/deep/ .el-form-item {
  margin-bottom: 20px;
}
/deep/ .el-form-item__content {
  //   display: flex;
  //   width: 100%;
  //   flex-direction: row;
  //   align-items: center;
  //   justify-content: space-between;
}
/deep/ .el-form-item__content span {
  width: 170/100rem;
  color: #606266;
  font-size: 30/100rem;
}
/deep/ .el-select .el-input .el-select__caret {
  opacity: 0;
}
/deep/ .el-input__prefix {
  display: none;
}
/deep/ .picker-items {
  width: 100%;
}
.user-input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: 30/100rem;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 2px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  border: none;
  text-align: right;
}
.user-input::-webkit-input-placeholder {
  color: #aab2bd;
  font-size: 30/100rem;
  text-align: right;
}
/deep/ .el-input--suffix .el-input__inner {
  padding-right: 2px;
}
/deep/ .el-input__inner {
  padding: 0 2px;
}
/deep/ .el-select-dropdown .el-popper {
  width: 100px !important;
}
/deep/ .el-upload {
  width: 100%;
  height: 100%;
}
.IDcard_box .uplodinput {
  width: 100%;
  height: 100%;
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>

