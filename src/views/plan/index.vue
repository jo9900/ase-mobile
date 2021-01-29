<template>
  <div class="page">
    <!--<div class="page_apply_title">
      <div class="page_apply_title_name">{{ $t("message.296") }}</div>
      <div class="page_apply_title_line"></div>
    </div>-->
    <div class="page_content">
      <div class="page_content_plan rtl">
        <div class="page_plan_title">{{ $t("message.35") }}</div>
        <div class="page_plan_img_div">
          <div class="page_plan_img"></div>
          <div class="page_plan_img_title">{{ $t("message.36") }}</div>

        </div>
        <div class="page_plan_item">
          <div class="page_plan_part page_plan_item_div1">
            <div class="page_plan_part_pre"></div>
            <div class="page_plan_part_after">{{ $t("message.57") }}</div>
          </div>
          <div class="page_plan_part1 page_plan_item_div1 marginR">
            <div class="page_plan_part1_pre"></div>
            <div class="page_plan_part_after">{{ $t("message.58") }}</div>
          </div>
          <div class="page_plan_part2 page_plan_item_div">
            <div class="page_plan_part2_pre"></div>
            <div class="page_plan_part_after">{{ $t("message.59") }}</div>
          </div>
          <div class="page_plan_part6 page_plan_item_div3">
            <div class="page_plan_part6_pre"></div>
            <div class="page_plan_part_after">{{ $t("message.60") }}</div>
          </div>
          <div class="page_plan_part3 page_plan_item_div1">
            <div class="page_plan_part3_pre"></div>
            <div class="page_plan_part_after">{{ $t("message.61") }}</div>
          </div>
          <div class="page_plan_part4 page_plan_item_div">
            <div class="page_plan_part2_pre"></div>
            <div class="page_plan_part_after">{{ $t("message.62") }}</div>
          </div>
          <div class="page_plan_part5 page_plan_item_div2">
            <div class="page_plan_part5_pre"></div>
            <div class="page_plan_part_after">{{ $t("message.63") }}</div>
          </div>
        </div>
        <div class="page_plan_detail">
          <div class="page_plan_detail_first page_plan_detail_div">
            <div class="page_plan_detail_title">{{ $t("message.37") }}</div>
            <div class="page_plan_detail_intro">AECO</div>
          </div>
          <div class="page_plan_detail_second page_plan_detail_div">
            <div class="page_plan_detail_title">{{ $t("message.38") }}</div>
            <div class="page_plan_detail_intro">
              <span>{{ $t("message.39") }}</span>
            </div>
          </div>
          <div class="page_plan_detail_third page_plan_detail_div">
            <div class="page_plan_detail_title">{{ $t("message.40") }}</div>
            <div class="page_plan_detail_intro">
              <span>{{ $t("message.41") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <webFoot />
  </div>
</template>

<script>
import webFoot from "@/Layout/footer";
export default {
  components: {
    webFoot,
  },
  data() {
    return {
      lang: this.$lang,
    };
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="less" >
.page {
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
}
// 标题
.page_apply_title {
  width: 750/100rem;
  height: 104/100rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  border-bottom: 1/100rem solid #cad7e8;
}
.page_apply_title_line {
  width: 80/100rem;
  height: 6/100rem;
  background: #104cff;
  margin-top: 8/100rem;
}
.page_content {
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 0/100rem 40/100rem;
}
//发行计划
.page_content_plan {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.page_plan_img_div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page_plan_img_title {
  text-align: center;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  margin-bottom: 20/100rem;
}

.page_plan_detail {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 80/100rem;
  // align-items: center;
}
.page_plan_detail_div {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // align-items: center;
}
.page_plan_detail_title {
  width: 140/100rem;
  font-size: 26/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  text-align: left;
  color: #323a43;
  margin-top: 6/100rem;
}
.page_plan_detail_intro {
  width: 514/100rem;
  font-size: 26/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  line-height: 40/100rem;
}
.page_plan_detail_second {
  margin-top: 16/100rem;
}
.page_plan_detail_third {
  margin-top: 16/100rem;
}
.page_plan_title {
  width: 100%;
  text-align: center;
  height: 66/100rem;
  font-size: 44/100rem;
  font-family: Helvetica;
  color: #323a43;
  line-height: 52/100rem;
  margin: 80/100rem 0 94/100rem 0;
  font-weight: bold;
}
.page_plan_img {
  width: 366/100rem;
  height: 366/100rem;
  text-align: center;
  line-height: 366/100rem;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  background: url("../../assets/images/pic_bzt.png") no-repeat;
  background-size: 366/100rem 366/100rem;
  margin-bottom: 46/100rem;
}
.page_plan_item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 60/100rem;
}
.page_plan_item_div {
  width: 168/100rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7b6ca;
  margin-top: 12/100rem;
  margin-right: 36/100rem;
}
.page_plan_item_div1 {
  width: 120/100rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7b6ca;
  margin-top: 12/100rem;
  margin-right: 36/100rem;
}
.page_plan_item_div2 {
  width: 140/100rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7b6ca;
  margin-top: 12/100rem;
  margin-right: 36/100rem;
}
.page_plan_item_div3 {
  width: 80/100rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7b6ca;
  margin-top: 12/100rem;
}
.marginR {
  margin-right: 85/100rem;
}
.page_plan_part_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #00befa;
  margin-right: 8/100rem;
}
.page_plan_part1_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #3064fd;
  margin-right: 8/100rem;
}
.page_plan_part2_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #1039b6;
  margin-right: 8/100rem;
}
.page_plan_part3_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #36d8f3;
  margin-right: 8/100rem;
}
.page_plan_part4_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #64b6ff;
  margin-right: 8/100rem;
}
.page_plan_part5_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #baf2fe;
  margin-right: 8/100rem;
}
.page_plan_part6_pre {
  min-width: 16/100rem;
  min-height: 16/100rem;
  background: #9cdbe7;
  margin-right: 8/100rem;
}
</style>
