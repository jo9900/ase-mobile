<!-- -->
<template>
    <div class="page" :style="{'height':height}">
        <div class="no_data">
            <img class="no_data_img" src="@/assets/img/no_data.png" alt="">
            <p class="no_data_hint">{{languageNav[languageName].language_text19}}</p>
        </div>

    </div>
</template>

<script>
import webFoot from '@/Layout/footer';
import  languageNav from "@/language/index"
export default {
    name: '',
    components: {webFoot},
    data() {
       return {
           height:0,
           languageNav:languageNav,
           languageName:this.$languageName
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
        let height = document.documentElement.offsetHeight || document.body.offsetHeight
        this.height = height+"px"
    }
}
</script>

<style lang='less' scoped>
    .page{
        height: 100%;
        background: rgb(242, 242, 242);
        overflow: hidden;
        .no_data{

            text-align: center;
            margin: 200px auto 0px;
            .no_data_img{
                width: 55px;
                height: 47px;

            }
            .no_data_hint{
                color: #999999;
                font-size: 24px;
            }
        }
    }
</style>
