<template>
    <div class="">

        <div class="suspend" style="overflow: hidden; display: block;text-align: center" v-if="languageName=='English'">
            <dl>
                <dt class="IE6PNG">
                    <div class="laodett">
                        <!--tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=774276297-->
                        <a target="_blank" href="https://tb.53kf.com/code/client/9b4e57f4454eda27a911267c0001f9c13/2">
                            <div><img style="width: 30px;margin-top: -7px;" src="../../assets/img/icon_kefu_1.png"/></div>
                          <!--{{languageNav[languageName].language_text1}}-->
                        </a>
                    </div>
                </dt>
            </dl>
        </div>


        <div class="suspend" style="overflow: hidden; width:37px; display: block;text-align: center" v-else>
            <dl style=" line-height: 32px;padding-top: 20px">
                <dt class="IE6PNG">
                    <div class="laodett" style="height: 100%;">
                        <a target="_blank" href="https://tb.53kf.com/code/client/9b4e57f4454eda27a911267c0001f9c13/1">
                            <div><img style="width: 30px;margin-top: -7px;" src="../../assets/img/icon_kefu_1.png"/></div>
                        <!--{{languageNav[languageName].language_text1}}-->
                        </a>
                    </div>
                </dt>
            </dl>
        </div>

    </div>
</template>

<script>
    import  languageNav from "@/language/nav"
    export default {
        name: "index",
        data(){
            return {
                loginDialogVisible:false,
                languageNav:languageNav,
                languageName:this.$languageName,
            }
        },
        methods:{
            aClick(){
            this.loginDialogVisible = true;
            }
        },
    }
</script>

<style scoped>
    .suspend{
        width:40px;
        position:fixed;
        bottom: 69px;
        right:0;
        border-radius: 9999999px;
        z-index: 90;
        overflow:hidden;

    }
    .suspend dl{
        height: 40px;
        line-height: 40px;
        border-radius:25px 0 0 25px;

        box-shadow:0 0 5px #e4e8ec;
    }
    .suspend dl dt{
        width: 100%;
        height: 100%;
        z-index: 90;
        background: #bf8d08;
        position:absolute;top:0;
        left:0;cursor:pointer;
    }
    .suspend dl dd.suspendQQ{
        width:120px;height:85px;background:#ffffff;
    }
    .suspend dl dd.suspendQQ a{
        width:120px;
        height:85px;
        display:block;
        /*background:url(images/suspend.png) -40px 0;*/
        overflow:hidden;
    }
    .suspend dl dd.suspendTel{
        width:120px;height:112px;
        background:#ffffff;border-top:
            1px solid #e4e8ec;
    }
    .suspend dl dd.suspendTel a{
        width:120px;
        height:112px;
        display:block;
        /*background:url(images/suspend.png)  -40px -86px;*/
        overflow:hidden;
    }
    .laodett a{
        border-radius: 9999999px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        font-size: 19px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
    }
  .contt-text{
      text-align: center;
  }
  .laod{


  }
    * html .suspend{position:absolute;left:expression(eval(document.documentElement.scrollRight));top:expression(eval(document.documentElement.scrollTop+200))}
</style>
