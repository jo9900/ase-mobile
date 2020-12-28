
<!--  -->
<template>
    <div>
        <div class="navhearder"><Nav/></div>
        <div id="mint"><router-view></router-view></div>
        <!-- <el-footer><Footer/></el-footer> -->

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
</style>
