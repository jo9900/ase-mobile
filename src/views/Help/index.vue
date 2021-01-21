<!-- -->
<template>
  <div class="page">
    <div class="title">{{ text[1] }}</div>
    <p class="h3">{{ text[2] }}</p>
    <p>
      {{ text[3] }}
      <a class="link" href="https://m.arthurex.com/signIn">https://m.arthurex.com/signIn</a>
      {{ text[4] }}
    </p>
    <img src="@/assets/images/help1.jpg" alt="help1">
    <p>
      {{ text[5] }}
      <a class="link" href="https://m.arthurex.com">https://m.arthurex.com</a>
    </p>
    <p>{{ text[6] }}</p>
    <img src="@/assets/images/help2.jpg" alt="help2">
    <p>
      {{ text[7] }}
      <a class="link" href="https://m.arthurex.com/signIn">https://m.arthurex.com/signIn</a>
    </p>
    <p class="h3">{{ text[8] }}</p>
    <p>
      {{ text[9] }}
      <img class="icon" src="@/assets/images/help3.png" alt="icon">
      {{ text[10] }}
    </p>
    <img  src="@/assets/images/help4.jpg" alt="help4">
    <p class="h3">{{ text[11] }}</p>
    <p>{{ text[12] }}</p>
    <img  src="@/assets/images/help5.jpg" alt="help5">
    <p>
      {{ text[13] }}
      <a class="link" href="https://m.arthurex.com/presell">https://m.arthurex.com/presell</a>
    </p>
    <p>
      {{ text[14] }}
      <img class="check" src="@/assets/images/help6.jpg" alt="help6">
      {{ text[15] }}
    </p>

    <img src="@/assets/images/help7.jpg" alt="help7">
    <p>{{ text[16] }}</p>
    <p class="h3">{{ text[17] }}</p>
    <p>{{ text[18] }}</p>
    <p>{{ text[19] }}</p>
    <img src="@/assets/images/help8.jpg" alt="help8">
    <p>{{ text[20] }}</p>
    <p>{{ text[21] }}</p>
    <img src="@/assets/images/help9.jpg" alt="help9">
    <p class="h3">{{ text[22] }}</p>
    <p>{{ text[23] }}</p>
    <img src="@/assets/images/help10.png" alt="help10">
    <p class="h3">{{ text[24] }}</p>
    <p>{{ text[25] }}</p>
    <p>{{ text[26] }}</p>
    <p>{{ text[27] }}9：30 - 22：00</p>
    <p>{{ text[28] }}9：30 - 20：00</p>
  </div>

</template>

<script>
  import text from '../../language/help/index'
  export default {
    name: "",
    data() {
      return {
        text: {}
      }
    },
    created() {
      this.text = text[this.$lang]
    }

  };
</script>

<style lang='less' scoped>
  .page {
    margin-top: 90/100rem;
    padding: 0  40/100rem 120/100rem 40/100rem;
  }
  .title {
    font-size: 50/100rem;
    text-align: center;
    padding: 40/100rem 0;
    font-weight: bold;
  }
  p {
    color: #9196a9;
    font-size: 28/100rem;
    line-height: 44/100rem;
    margin-bottom: 18/100rem;
    &.h3 {
      font-size: 36/100rem;
      color: #333;
      margin: 30/100rem;
    }
  }
  .link {
    color: #102aa5;
  }
  .icon {
    display: inline-block;
    margin: 0 1px;
    height: 50/100rem;
    width: 50/100rem;
  }
  .check {
    display: inline-block;
    margin: 0 1px;
    height: 60/100rem;
  }
</style>

