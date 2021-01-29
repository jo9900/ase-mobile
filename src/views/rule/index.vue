<template>
  <div>
    <div class="page rtl">
      <div class="page_title">{{ $t("message.259") }}</div>
      <div class="page_detail">
        {{ $t("message.260") }}
      </div>
      <div class="page_detail">
        {{ $t("message.261") }}
      </div>
      <div class="page_detail">
        {{ $t("message.262") }}
      </div>
      <div class="page_detail">
        {{ $t("message.263") }}
      </div>
      <img src="../../assets/images/rule.png" alt="" class="page_image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  padding: 100/100rem 40/100rem 40/100rem 40/100rem;
}
.page_title {
  width: 100%;
  text-align: center;
  font-size: 28/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  margin: 112/100rem 0 40/100rem 0;
}
.page_detail {
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  line-height: 40/100rem;
  margin-top: 10/100rem;
  text-align: justify;
}
.page_image {
  width: 100%;
  height: 450/100rem;
  margin-top: 170/100rem;
}
</style>
