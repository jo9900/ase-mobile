(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-474a8eae"],{"2fa3":function(t,a,e){},"481f":function(t,a,e){"use strict";var n=e("2fa3"),o=e.n(n);o.a},"6c94":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"page_indicator"},[e("router-link",{staticClass:"gobaket",attrs:{to:"/center"}},[t._v("个人中心")]),t._v(" > 利息记录 ")],1),e("div",{staticClass:"page_content"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[e("el-table-column",{attrs:{prop:"date",label:"时间"}}),e("el-table-column",{attrs:{prop:"date",label:"利息"}})],1),e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)]),e("webFoot")],1)},o=[],s=e("f284"),i={name:"",components:{webFoot:s["a"]},data:function(){return{form:{code:"",page_no:1,page_size:10},tableData:[],total:0}},computed:{},watch:{},methods:{handleCurrentChange:function(t){this.listQuery.page_no=t,this.get_list()}},created:function(){},mounted:function(){}},l=i,c=(e("481f"),e("2877")),r=Object(c["a"])(l,n,o,!1,null,"75e42981",null);a["default"]=r.exports}}]);