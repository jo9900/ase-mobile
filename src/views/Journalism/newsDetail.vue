<!-- -->
<template>
  <div class="page">
    <!-- <div style="height: 70px"></div> -->
    <div class="soloet">
      <!-- <div class="page-gl">
        <div class="page-sll">
          <div class="laowlt">
            <h2 class="page-oswt">{{languageNav[languageName].language_text27}}</h2>
            <p class="wplder">{{languageNav[languageName].language_text28}}</p>
          </div>
        </div>
      </div>-->
      <div class="news-conter">
        <div class="title-gosk">{{ dataInfo.title }}</div>
        <div class="trime-Conder">
          {{ $t("message.141") }}：{{ dataInfo.publish_date }}
        </div>
        <div class="hrw"></div>
        <div class="textCoant" v-html="dataInfo.detail"></div>
      </div>
    </div>

    <webFoot />
  </div>
</template>


<script>
import webFoot from "@/Layout/footer";
import { detail } from "@/request/news";
export default {
  name: "",
  components: { webFoot },
  data() {
    return {
      dataInfo: {},
      lang_type: "",
    };
  },
  computed: {},
  watch: {},
  created() {
    if (this.$lang == "en") {
      this.lang_type = "English";
    }
    if (this.$lang == "zh") {
      this.lang_type = "Chinese";
    }
    this.get_data();
  },
  mounted() {},
  methods: {
    get_data() {
      detail(
        this.$qs.stringify({
          lang_type: this.lang_type,
          code: this.$route.query.code,
        })
      ).then((res) => {
        this.dataInfo = res.data;
      });
    },
  },
};
</script>

<style lang='less' scoped>
.page {
  background: #ffffff;
}
.page-gl {
  width: 100%;
  height: 280px;
  overflow: hidden;
  margin-bottom: 58px;
  background: url("/img/new-bg1.jpg") no-repeat center;
}
.soloet {
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-top: 90px;
  background: #f6f6f6;
}
.page-sll {
  width: 100%;
  margin: 0 auto;
  color: #ffffff;
}
.laowlt {
  margin-top: 104px;
}
.page-oswt {
  font-size: 30px;
}
.wplder {
  font-size: 18px;
}
.news-conter {
  width: 100%;
  margin: 0 auto;
  text-align: left;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 0 25px 25px 25px;
}
.title-gosk {
  color: #282828;
  font-size: 20px;
}
.trime-Conder {
  color: #808080;
  font-size: 14px;
  margin: 15px 0;
}
.hrw {
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #dadada;
  margin-bottom: 50px;
}
.textCoant {
  text-align: left;
  color: #808080;
  font-size: 16px;
  line-height: 35px;
}
</style>
