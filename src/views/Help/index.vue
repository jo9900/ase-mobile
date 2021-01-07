<!-- -->
<template>
  <div class="page">
    <div class="title">AECO首轮预售帮助文档</div>
    <p class="h3">一、注册登录</p>
    <p>点击官网首页注册按钮进入注册页，通过邮箱进行注册，注册成功后登录。
      注册链接： <a class="link" href="https://m.arthurex.com/signIn">https://m.arthurex.com/signIn</a> ，点击后进入 。</p>
    <img src="@/assets/images/help1.jpg" alt="help1">
    <p>官网链接：<a class="link" href="https://m.arthurex.com">https://m.arthurex.com</a></p>
    <p>点击注册/立即注册，进入该页面，为了您的财产安全请确保您信息的真实有效性。</p>
    <img src="@/assets/images/help2.jpg" alt="help2">
    <p>注册页链接：<a class="link" href="https://m.arthurex.com/signIn">https://m.arthurex.com/signIn</a>
    </p>
    <p class="h3">二、身份认证</p>
    <p>完成登录后，点击页面右上角图标弹出菜单栏后点击
      <img class="icon" src="@/assets/images/help3.png" alt="icon">
      【个人中心】可以看到【KYC 认证】，点击立即认证。填写个人信息并提交，官方人员会在收到认证申请后的1-3个工作日内完成审核。</p>
    <img  src="@/assets/images/help4.jpg" alt="help4">
    <p class="h3">三、开始申购</p>
    <p>1.KYC（身份认证）审核成功通过后（提交申请的1-3 个工作日内），进入预售页，点击【立即抢购】 。</p>
    <img  src="@/assets/images/help5.jpg" alt="help5">
    <p>申购链接：<a class="link" href="https://m.arthurex.com/presell">https://m.arthurex.com/presell</a></p>
    <p>2.在弹出的页面中填入自己所需抢购份数，系统会自动计算您所需要支付的USDT额度。确认信息无误后阅读并确认勾选 <img class="check" src="@/assets/images/help6.png" alt="help6">点击【下一步】。</p>
    <img src="@/assets/images/help7.jpg" alt="help7">
    <p>首轮预售AECO总量为1500份，AECO单价为 0.12 USDT ，1份起售，1份等于20000 AECO，即需支付 2400 USDT，依此类推。</p>
    <p class="h3">四、确认信息并完成支付</p>
    <p>申购信息提交后，系统再次弹出支付确认弹框，确认支付额。</p>
    <p>复制该收款地址（您的独立USDT账户）支持扫码支付。</p>
    <img src="@/assets/images/help8.jpg" alt="help8">
    <p>1）从您的个人数字货币钱包中进行USDT（Omni类型）转账。</p>
    <p>2）或者从数字货币交易所如币安、火币等进行USDT（Omni类型）购买后，从交易所进行转账即可。</p>
    <img src="@/assets/images/help9.jpg" alt="help9">
    <p class="h3">五、完成转账，待客服确认后即申购成功，可从【个人中心】查看</p>
    <p>个人中心我的AECO资产将会显示您已成功申购的AECO额。</p>
    <img src="@/assets/images/help10.png" alt="help10">
    <p class="h3">六、官方客服</p>
    <p>如果您对AECO的申购、交易存在疑问、对本平台发展有建设意见或者建议，</p>
    <p>欢迎联系官方客服：Email：aeco@arthurex.com</p>
    <p>周一 ~ 周五：9：30 - 22：00</p>
    <p>周六 ~ 周日：9：30 - 20：00</p>
  </div>

</template>

<script>
  export default {
    name: "",
    data() {
    return {
    };
  }
};
</script>

<style lang='less' scoped>
  .page {
    margin-top: 90/100rem;
    padding: 0 40/100rem;
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

