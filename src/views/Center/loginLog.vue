
<!-- -->
<template>
  <div class="page">
    <!-- <div style="height: 70px"></div> -->
    <div class="page_apply_title" v-if="tableData.length > 0">
      <div class="page_apply_title_name">{{ $t("message.208") }}</div>
      <div class="page_apply_title_line"></div>
    </div>
    <div class="wrap">
      <div class="page_content" :class="{ marginTop: tableData.length == 0 }">
        <el-table
          :data="tableData"
          style="width: 100%"
          stripe
          v-loading="listLoading"
          :height="tableHeight"
          v-if="tableData.length > 0"
        >
          <el-table-column
            :label="$t('message.209')"
            align="center"
            width="100px"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.login_time | trimet(that) }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="name "
            :label="$t('message.210')"
            align="center"
          >
            <template slot-scope="scope">
              <span style="color: #104cff">{{ scope.row.login_ip }}</span>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('message.211')"
            align="center"
            width="150px"
          >
            <template slot-scope="scope">
              <span v-if="scope.row.device_type == 0">{{
                $t("message.212")
              }}</span>
              <span v-if="scope.row.device_type == 1">Android</span>
              <span v-if="scope.row.device_type == 2">Ios</span>
              <span v-if="scope.row.device_type == 3">Web-Mobile</span>
              <span v-if="scope.row.device_type == 4">Web-Pc</span>
            </template>
          </el-table-column>
          <template slot="empty">
            <div class="noData">
              {{ $t("message.136") }}
            </div>
          </template>
        </el-table>
      </div>
      <div
        @click="onLoad"
        class="loading_more"
        v-if="tableData.length > 0 && loading_more"
      >
        {{ $t("message.137") }}
      </div>
      <div class="loading_nomore" v-if="loadding_last">
        {{ $t("message.138") }}
      </div>
      <div class="van_loading_div" v-if="loading_status">
        <van-loading type="spinner" color="#1989fa">{{
          $t("message.139")
        }}</van-loading>
      </div>
      <div class="page_nodata" ref="page_nodata" v-if="tableData.length == 0">
        <img
          src="../../assets/images/pic_nodate.png"
          alt=""
          class="page_nodata_img"
        />
        <div class="page_nodata_tips">{{ $t("message.136") }}</div>
      </div>
    </div>

    <!-- <webFoot /> -->
  </div>
</template>


<script>
import webFoot from "@/Layout/footer";
import { loginLog } from "@/request/user.js";
import { List } from "vant";
import { Loading } from "vant";
export default {
  name: "",
  components: { webFoot, vanList: List, vanLoading: Loading },
  data() {
    return {
      that: this,
      loading_more: false,
      loading_status: false,
      loadding_last: false,
      loading: false,
      finished: false,
      listLoading: true,
      tableHeight: 700,
      form: {
        user_code: "",
        page_no: 1,
        page_size: 14,
      },
      tableData: [],
      total: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    onLoad() {
      if (this.tableData.length > 0) {
        console.log("-------");
        this.loading_more = false;
        this.loading_status = true;
        this.form.page_no++;
        setTimeout(() => {
          this.get_list();
        }, 1000);
      } else {
        // this.loading = false;
      }
    },
    get_list() {
      loginLog(this.$qs.stringify(this.form)).then((res) => {
        this.loading_more = true;
        // this.listLoading = false;
        this.loading_status = false;
        this.loading = false;
        this.total = res.data.total;
        // 数据全部加载完成
        if (this.tableData.length >= this.total) {
          this.finished = true;
          this.loadding_last = true;
          this.loading_more = false;
        }
        this.tableData = [...this.tableData, ...res.data.records];
      });
    },
    // 翻页
    handleCurrentChange(val) {
      this.form.page_no = val;
      this.getList();
    },
    getList() {
      let params = this.form;
      loginLog(this.$qs.stringify(params)).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.tableData = res.data.records;
          this.total = res.data.total;
        } else {
          this.$message.error(res.msg);
        }
        setTimeout(() => {
          this.listLoading = false;
          this.loading_more = true;
        }, 1000);
      });
    },
  },
  created() {
    this.form.user_code = localStorage.getItem("code");
  },
  mounted() {
    this.getList(); // 推广记录
    let height =
      document.documentElement.offsetHeight || document.body.offsetHeight;
    document.querySelector(".page_nodata").style.height = height + 10 + "px";
    setTimeout(() => {
      this.tableHeight =
        height - document.querySelector(".navhearder").offsetHeight * 2 - 29;
    }, 1000);
  },
  filters: {
    trimet(trime, that) {
      let parsTrme = that
        .$moment(Math.floor(trime * 1000))
        .format("YYYY-MM-DD HH:mm");
      return parsTrme;
    },
  },
};
</script>

<style lang='less' scoped>
.marginTop {
  margin-top: -70/100rem;
}
// 标题
.page_apply_title {
  width: 750/100rem;
  height: 104/100rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 36/100rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #323a43;
  border-bottom: 1/100rem solid #cad7e8;
}
.page_apply_title_line {
  width: 80/100rem;
  height: 6/100rem;
  background: #104cff;
  margin-top: 8/100rem;
}
// 暂无数据
.page_nodata {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: red;
}
.page_nodata_img {
  width: 360/100rem;
  height: 360/100rem;
}
.page_nodata_tips {
  font-size: 28/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #65728b;
}
.van_loading_div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 750/100rem;
  height: 120/100rem;
}
.loading_more {
  width: 750/100rem;
  height: 88/100rem;
  text-align: center;
  line-height: 88/100rem;
  background: linear-gradient(90deg, #2278ff 0%, #3d58ff 100%);
  border-radius: 10/100rem;
  color: #fff;
  font-size: 28/100rem;
}
.loading_nomore {
  background: #f0f2f5;
  width: 750/100rem;
  height: 88/100rem;
  text-align: center;
  line-height: 88/100rem;
  border-radius: 10/100rem;
  color: #666;
  font-size: 28/100rem;
}
.page {
  background: #f0f2f5;
  // overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding-top: 90/100rem;
  .wrap {
    // .page_indicator {
    //   margin-top: 20px;
    //   height: 60px;
    //   line-height: 60px;
    //   color: #333333;
    //   font-size: 16px;
    //   padding: 0 30px;
    //   background: #ffffff;
    // }
    .page_content {
      // margin: 20px 0 0px;
      padding: 15px;
      background: #ffffff;
      text-align: center;
    }
  }
}
/deep/ .el-table thead tr th {
  color: #fff;
  background-color: #104cff;
  //   font-weight: 500;
}
/deep/ .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #f2f2f2;
}
</style>


