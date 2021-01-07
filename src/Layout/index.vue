
<!--  -->
<template>
    <div>
        <div class="navhearder"><Nav/></div>
        <div id="mint"><router-view></router-view></div>
        <!-- <el-footer><Footer/></el-footer> -->

        <div class="kf">
            <a class="kf_wrap" target="_blank" href="https://tb.53kf.com/code/client/9b4e57f4454eda27a911267c0001f9c13/5">
                <img src="../assets/images/kf.png" alt="">
            </a>
        </div>
    </div>
</template>

<script>
// import Left from './left'
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
    }
    #mint{
    overflow: hidden;
    }

    .kf {
        position: fixed;
        z-index: 100;
        bottom: 69px;
        right: 0;
        width: 40px;
        height: 40px;
        .kf_wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: #100746;
            height: 40px;
            width: 40px;
            img {
                width: 30px;
            }
        }
    }
</style>
