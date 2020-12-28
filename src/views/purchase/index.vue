<template>
  <div>
    <div class="page">
      <div class="page_rule_title">{{ $t("message.264") }}</div>
      <div>
        <div class="marginTop20">{{ $t("message.265") }}</div>
        <div class="marginTop20">
          {{ $t("message.266") }}
        </div>
        <div class="marginTop20">
          {{ $t("message.267") }}
        </div>
        <div class="marginTop20 fontBold">{{ $t("message.268") }}</div>
        <div class="marginTop10">
          {{ $t("message.269") }}
        </div>
        <div class="marginTop10">
          {{ $t("message.270") }}
        </div>
        <div class="marginTop10">
          {{ $t("message.271") }}
        </div>
        <div class="marginTop10">
          {{ $t("message.272") }}
        </div>
        <div class="marginTop10">
          {{ $t("message.273") }}
        </div>
        <div class="marginTop10">
          {{ $t("message.274") }}
        </div>
        <div class="marginTop10">
          {{ $t("message.275") }}
        </div>
        <div class="marginTop10">
          {{ $t("message.276") }}
        </div>
        <div class="marginTop20 fontBold">{{ $t("message.277") }}</div>
        <div class="marginTop10">
          <p class="fontBold1">1. Trust</p>
          {{ $t("message.278") }}
          <div>
            {{ $t("message.279") }}
          </div>
        </div>
        <div class="marginTop10">
          <p class="fontBold1">{{ $t("message.280") }}</p>
          {{ $t("message.281") }}
          <div>
            {{ $t("message.282") }}
          </div>
        </div>
        <div class="marginTop10">
          <p class="fontBold1">{{ $t("message.283") }}</p>
          {{ $t("message.284") }}
        </div>
        <div class="marginTop10">
          <p class="fontBold1">{{ $t("message.285") }}</p>
          {{ $t("message.286") }}
          <div>
            {{ $t("message.287") }}
          </div>
        </div>
        <div class="marginTop10">
          <p class="fontBold1">{{ $t("message.288") }}</p>
          {{ $t("message.289") }}
        </div>
        <div class="marginTop10">
          <p class="fontBold1">{{ $t("message.290") }}</p>
          {{ $t("message.291") }}
        </div>
        <div class="marginTop10">
          <p class="fontBold1">{{ $t("message.292") }}</p>
          {{ $t("message.293") }}
        </div>
        <div class="marginTop10">
          <p class="fontBold1">{{ $t("message.294") }}</p>
          {{ $t("message.295") }}
        </div>
      </div>
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
  padding: 100/100rem 40/100rem 60/100rem 40/100rem;
}
div {
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  line-height: 50/100rem;
  text-align: justify;
}
.page_rule_title {
  width: 100%;
  font-size: 45/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
  line-height: 50/100rem;
  text-align: center;
  margin: 40/100rem 0;
  font-weight: bold;
}
.marginTop20 {
  margin-top: 20/100rem;
}
.marginTop10 {
  margin-top: 10/100rem;
}
.fontBold {
  font-size: 36/100rem;
  font-weight: bold;
}
.fontBold1 {
  font-size: 30/100rem;
  font-weight: bold;
}
</style>
