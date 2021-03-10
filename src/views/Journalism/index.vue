<!-- -->
<template>
  <div>
    <div class="page">
      <!-- <div style="height: 70px"></div> -->
      <div class="soloet">
        <div class="page_apply_title">
          <div class="page_apply_title_name">{{ $t("message.258") }}</div>
          <div class="page_apply_title_line"></div>
        </div>
        <van-pull-refresh
          v-model="refreshing"
          @refresh="onRefresh"
          v-if="list.length != 0"
        >
          <div class="news-conter">
            <div>
              <van-list
                v-model="loading"
                :finished="finished"
                :finished-text="$t('message.138')"
                @load="onLoad"
              >
                <ul>
                  <li class="news-list" v-for="item in list">
                    <div class="news_list_div">
                      <div class="coat-got">
                        <router-link
                          class="linkHaef"
                          :to="{
                            path: '/journalismDetail',
                            query: { code: item.code },
                          }"
                        >
                          <img
                            :src="BaseUrl + item.pic_url"
                            :onerror="errorImg01"
                          />
                        </router-link>
                      </div>
                      <div class="dissoer rtl">
                        <div class="text-conter-container">
                          <div class="text-conter-container_div">
                            <div class="text-title">
                              <router-link
                                class="linkHaef"
                                :to="{
                                  path: '/journalismDetail',
                                  query: { code: item.code },
                                }"
                                >{{ item.title }}</router-link
                              >
                            </div>
                            <div class="trime-lk">{{ item.publish_date }}</div>
                          </div>
                          <div class="text-conter">{{ item.digest }}</div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </van-list>
              <!-- <van-empty
                description="暂无记录"
                v-model="this.list.length == 0"
              /> -->
            </div>
          </div>
        </van-pull-refresh>
      </div>
    </div>
    <div class="page_nodata" ref="page_nodata" v-if="list.length == 0">
      <img
        src="../../assets/images/pic_nodate.png"
        alt=""
        class="page_nodata_img"
      />
      <div class="page_nodata_tips">{{ $t("message.136") }}</div>
    </div>
  </div>
</template>

<script>
// import webFoot from "@/Layout/footer";
import { digest } from "@/request/news";
import { List, PullRefresh, Empty } from "vant";

export default {
  name: "",
  components: {
    vanList: List,
    vanPullRefresh: PullRefresh,
    vanEmpty: Empty,
  },
  data() {
    return {
      BaseUrl: this.$BaseUrl,
      list: [],
      loading: true,
      finished: false,
      refreshing: false,
      // requestOver: false,
      listQuery: {
        lang_type: this.$langType,
        page_no: 1,
        page_size: 5,
      },
      total: 0,
      errorImg01:
        'this.src="' + require("../../assets/images/banner_loading.png") + '"',
    };
  },
  computed: {},
  watch: {},
  created() {
    this.listQuery.lang_type = this.$langType
    this.get_list();
  },
  mounted() {
  },
  methods: {
    onLoad() {
      this.listQuery.page_no++;
      // setTimeout(() => {
        this.get_list();
      // }, 300);
    },
    onRefresh() {
      // setTimeout(() => {
        this.finished = false;
        this.refreshing = false;
        this.loading = true;
        this.listQuery = {
          lang_type: this.$langType,
          page_no: 1,
          page_size: 5,
        };
        this.list = [];
        this.get_list();
      // }, 300);
    },
    get_list() {
      digest(this.$qs.stringify(this.listQuery)).then((res) => {
        this.loading = false;
        this.total = res.data.total;
        // 数据全部加载完成
        if (this.list.length >= this.total) {
          this.finished = true;
        }
        this.list = [...this.list, ...res.data.news];
        // this.requestOver = true
      });
    },
    handleCurrentChange(val) {
      this.listQuery.page_no = val;
      this.get_list();
    },
  },
};
</script>

<style lang='less' scoped>
//暂无数据
// 暂无数据
.page_nodata {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f4f5f9;
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
// 标题
.page_apply_title {
  // position: fixed;
  // left: 0;
  // top: 262/100rem;;;
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
.news_list_div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.text-conter-container_div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50/100rem;
}
.van-pull-refresh {
  height: calc(100vh - 20px) !important;
  overflow: auto !important;
}
.van-list {
  height: auto !important;
}
.page {
  background: #ffffff;
}
.text-conter {
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /*要显示的行数*/
  -webkit-box-orient: vertical;
  margin-top: 5px;
  font-size: 14px;
  line-height: 24px;
}
.page-title {
  font-size: 20px;
  font-weight: bold;
  color: #272727;
  text-align: center;
}
.page-line-container {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 18px;
}
.page-line {
  width: 40/100rem;
  height: 5/100rem;
  background: #104cff;
}
.text-conter-container {
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  padding: 0 28/100rem 0 28/100rem;
}
.text-title {
  width: 408/100rem;
  font-size: 15px;
  color: #272727;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.soloet {
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
}
.page-sll {
  width: 100%;
  margin: 0 auto;
  color: #ffffff;
}
.laowlt {
  margin-top: 104px;
}
.page-oswt {
  font-size: 30px;
}
.wplder {
  font-size: 18px;
}
.news-conter {
  width: 100%;
  margin: 0 auto;
  padding: 20/100rem 40/100rem 40/100rem 40/100rem;
}
.news-list {
  overflow: hidden;
  border-bottom: 2/100rem solid #dadada;
  box-shadow: 1px 5px 16px 0px rgba(86, 86, 86, 0.12);
  margin-bottom: 40/100rem;
  padding-bottom: 28/100rem;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}

.coat-got linkHaef {
  display: block;
}
.news-list img {
  width: 100%;
  //   width: 320px;
  height: 260/100rem;
  margin: 0 60/100rem 0 auto;
  object-fit: cover;
}
.dissoer {
  color: #808080;
}
.dissoer h3 a {
  font-size: 24px;
  font-family: Alibaba;
  font-weight: normal;
  color: #282828;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.dissoer h3 a:hover {
  text-decoration: underline !important;
}
.trime-lk {
  width: 170/100rem;
  font-size: 24/100rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #323a43;
}
.news-conter {
  line-height: 30px;
  font-size: 16px;
}
</style>
