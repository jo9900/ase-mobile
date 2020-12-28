

<!-- -->
<template>
    <div class="footer">
        <div class="wrap">
            <div class="foot_logo">
                <div class="flext-all1"><img src="@/assets/logo.png"/></div>
                <div class="taf-kot">TAF Chain</div>
            </div>
            <!--<div class="foot_link">-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon1.png" alt=""></a>-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon2.png" alt=""></a>-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon3.png" alt=""></a>-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon4.png" alt=""></a>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
       return {

       }
    },
    computed:{

    },
    watch:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>

<style lang='less' scoped>
    .footer{
        background: #C38B0B;
        height: 66px;
        padding-left: 10px;
        .wrap{
            height: 66px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .foot_logo{
                width: 200px;
            }
            .foot_link{
                width: 230px;
                display: flex;
                justify-content: space-between;
                .lin_img{
                    width: 35px;
                    height: 35px;
                }
            }
        }
    }
    .logo-stl{

        font-size: 24px;
        font-family: AlibabaPuHuiTi;
        font-weight: bold;
        color: #ffffff;

    }
    .taf-kot{
        font-size: 21px;
        font-family: zcoolwenyiti;
        font-weight: 400;
        color: #ffffff;
        line-height: 41px;
    }
    .flext-all1{
        float: left;
        width: 40px;
        margin-right: 8px;
    }
    .flext-all2{
        width: 200px;
        font-size: 24px;
        margin-top: 18px;
    }
</style>

