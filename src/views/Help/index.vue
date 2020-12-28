<!-- -->
<template>
  <div class="page">
    <!-- <div style="height: 70px"></div> -->
    <div class="wrap">
      <div class="page_content">
        <div class="name">{{ languageNav[languageName].language_text1 }}</div>
        <div class="text-coaneret">
          <div style="font-size: 18px; margin-bottom: 10px">
            {{ languageNav[languageName].language_text2 }}
          </div>
          <div class="" style="margin-bottom: 15px; font-size: 14px">
            <div>{{ languageNav[languageName].language_text3 }}</div>
            <div style="color: #006ddd">https://tafchain.com/#/signIn</div>
          </div>
          <div style="margin-bottom: 20px">
            <template v-if="languageName == 'Chinese'">
              <img src="@/assets/img/help_ch1.png" />
            </template>
            <template v-if="languageName == 'English'">
              <img src="@/assets/img/help_en1.png" />
            </template>
          </div>
          <div style="margin-bottom: 50px">
            <template v-if="languageName == 'Chinese'">
              <img src="@/assets/img/help_ch2.png" />
            </template>
            <template v-if="languageName == 'English'">
              <img src="@/assets/img/help_en2.png" />
            </template>
          </div>

          <div style="font-size: 18px; margin-bottom: 13px">
            {{ languageNav[languageName].language_text4 }}
          </div>
          <div class="" style="margin-bottom: 15px; font-size: 14px">
            <div>
              {{ languageNav[languageName].language_text5 }}
            </div>
          </div>
          <div style="margin-bottom: 20px">
            <template v-if="languageName == 'Chinese'">
              <img src="@/assets/img/help_ch3.png" />
            </template>
            <template v-if="languageName == 'English'">
              <img src="@/assets/img/help_en3.png" />
            </template>
          </div>

          <div style="font-size: 18px; margin-bottom: 13px">
            {{ languageNav[languageName].language_text6 }}
          </div>
          <div class="" style="margin-bottom: 44px; font-size: 14px">
            <div>{{ languageNav[languageName].language_text7 }}</div>
          </div>
          <div style="margin-bottom: 20px">
            <template v-if="languageName == 'Chinese'">
              <img src="@/assets/img/help_ch4.png" />
            </template>
            <template v-if="languageName == 'English'">
              <img src="@/assets/img/help_en4.png" />
            </template>
          </div>
          <div style="font-size: 14px">
            {{ languageNav[languageName].language_text8 }}
          </div>
          <div style="margin-bottom: 40px">
            <template v-if="languageName == 'Chinese'">
              <img src="@/assets/img/help_ch5.png" />
            </template>
            <template v-if="languageName == 'English'">
              <img src="@/assets/img/help_en5.png" />
            </template>
          </div>

          <div style="font-size: 18px; margin-bottom: 13px">
            {{ languageNav[languageName].language_text9 }}
          </div>
          <div class="" style="margin-bottom: 20px; font-size: 14px">
            <div>{{ languageNav[languageName].language_text10 }}</div>
          </div>
          <div style="margin-bottom: 20px">
            <template v-if="languageName == 'Chinese'">
              <img src="@/assets/img/help_ch6.png" />
            </template>
            <template v-if="languageName == 'English'">
              <img src="@/assets/img/help_en6.png" />
            </template>
          </div>

          <div style="font-size: 18px; margin-bottom: 13px">
            {{ languageNav[languageName].language_text11 }}
          </div>
          <div class="" style="margin-bottom: 20px; font-size: 14px">
            <div>{{ languageNav[languageName].language_text12 }}</div>
          </div>
          <div style="margin-bottom: 20px">
            <template v-if="languageName == 'Chinese'">
              <img src="@/assets/img/help_ch7.png" />
            </template>
            <template v-if="languageName == 'English'">
              <img src="@/assets/img/help_en7.png" />
            </template>
          </div>
        </div>
      </div>
      <webFoot />
    </div>
  </div>
</template>




<script>
import webFoot from "@/Layout/footer";
import languageNav from "@/language/help";
export default {
  name: "",
  components: { webFoot },
  data() {
    return {
      languageNav: languageNav,
      languageName: this.$languageName,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang='less' scoped>
.page {
  background: #f0f2f5;
  overflow: hidden;
  // height: 100%;
  padding-top: 60px;
  box-sizing: border-box;
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
      margin: 20px 0 100px;
      padding: 38px;
      min-height: 800px;
      background: #ffffff;
      .name {
        color: #104cff;
        font-size: 20px;
        text-align: center;
        margin-bottom: 38px;
      }
      .KYC_logo {
        width: 82px;
        height: 84px;
        margin: 20px auto 0;
      }
      .status {
        font-size: 28px;
        color: #0e0e0e;
        margin: 20px auto 0;
      }
      .describe {
        width: 800px;
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
        background: linear-gradient(to right, #efcf54, #bf8d08);
      }
    }
  }
}
.text-coaneret {
  line-height: 30px;
  color: #545151;
}
</style>

