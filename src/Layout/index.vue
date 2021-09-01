<!--
 * @Author: jhy
 * @Date: 2021-03-23 14:14:43
 * @LastEditTime: 2021-09-01 10:17:31
 * @LastEditors: jhy
 * @Description: 
 * @FilePath: /taf2-front-web/Users/jhy/yongqi/arthur-m/src/Layout/index.vue
-->

<!--   -->
<template>
    <div>
        <div class="navhearder"><div id="ad_banner_con"></div><Nav/></div>
        <div id="mint">
            <router-view></router-view>
        </div>
        <!-- <el-footer><Footer/></el-footer> -->
    </div>
</template>

<script>
import Nav from './nav'
import Footer from './footer'
export default {
    name:'',
    components: {Nav,Footer},
    data(){
        return {

        }
    },
    methods:{

    },
    mounted () {
        
        let lang = localStorage.getItem('lang');
        ad('ad_banner_con',lang, 1);
        
    },
}
</script>
<style lang="less" scoped>

    .layout_box{
        /*min-height: 900px;*/
        min-width: 1200px;
        height: 100%;
        overflow: auto;
        .el-header{
            height: 90px !important;
            padding: 0;
        }
        .el-main{
            height: 100%;
            padding: 0;
        }
        .el-footer{
            height: 90px !important;
            padding: 0;
        }
    }
    .navhearder{
        position: fixed;
        width: 100%;
         z-index: 99;
        top: 0;
    }
    #mint{
        overflow: hidden;
        margin-top: 0.9rem; /* 2.42rem */
    }

    /*.kf {*/
        /*position: fixed;*/
        /*z-index: 100;*/
        /*bottom: 69px;*/
        /*right: 0;*/
        /*width: 40px;*/
        /*height: 40px;*/
        /*.kf_wrap {*/
            /*display: flex;*/
            /*justify-content: center;*/
            /*align-items: center;*/
            /*border-radius: 50%;*/
            /*background: #100746;*/
            /*height: 40px;*/
            /*width: 40px;*/
            /*img {*/
                /*width: 30px;*/
            /*}*/
        /*}*/
    /*}*/
</style>
