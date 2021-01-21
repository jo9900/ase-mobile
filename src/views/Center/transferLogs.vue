<template>
    <div class="page">
        <div class="page_title">
            {{ $t("message.488") }}
            <div class="page_line"></div>
        </div>
        <div class="page_container">
            <van-pull-refresh
                style="min-height: 100vh"
                v-model="refreshing"
                @refresh="onRefresh"
            >
                <van-list
                    v-if="list.length != 0"
                    class="list_wrap"
                    v-model="loading"
                    :finished="finished"
                    :finished-text="$t('message.138')"
                    @load="onLoad"
                    :loading-text="$t('message.139')"
                >
                    <div class="list_title flex">
                        <div class="time">{{ $t('message.141') }}</div>
                        <div class="account">{{ $t('message.508') }}</div>
                        <div class="amount">{{ $t('message.509') }}</div>
                    </div>
                    <ul class="list_ul">
                        <li class="list_row flex" v-for="item in list">
                            <div class="time">
                                <div>{{ item.time | trimet(that, 0) }}</div>
                                <div>{{ item.time | trimet(that, 1) }}</div>
                            </div>
                            <div class="account">{{ item.account }}</div>
                            <div class="amount">{{ item.aeco_amount }}</div>
                        </li>
                        <li class="van-list__finished-text" v-if="load_more">{{ $t("message.137") }}</li>
                    </ul>
                </van-list>
                <van-empty v-else :description="$t('message.136')" />
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
    import { recordsList } from "@/request/user.js"
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
                that: this,
                list: [],
                loading: true,
                load_more :false,
                finished: false,
                refreshing: false,
                listQuery: {
                    user_code: localStorage.getItem("code"),
                    page_no: 1,
                    page_size: 10,
                },
                total: 0,
            }
        },
        created() {
            this.get_list();

        },
        methods: {
            onLoad() {
                this.listQuery.page_no++;
                this.load_more = false
                setTimeout(() => {
                    this.get_list();
                }, 1000);
            },
            onRefresh() {
                setTimeout(() => {
                    this.finished = false;
                    this.refreshing = false;
                    this.loading = true;
                    this.listQuery = {
                        page_no: 1,
                        page_size: 10,
                        user_code: localStorage.getItem("code"),
                    };
                    this.list = [];
                    this.get_list();
                }, 1200);
            },
            get_list() {
                recordsList(this.$qs.stringify(this.listQuery)).then((res) => {
                    this.loading = false;
                    this.total = res.data.total;
                    // 数据全部加载完成
                    if (this.list.length >= this.total) {
                        this.finished = true;
                        this.load_more = false;
                    }
                    if (this.list.length < this.total) {
                        this.load_more = true;
                    }
                    this.list = [...this.list, ...res.data.rows];
                });
            },
        },
        filters: {
            trimet(trime, that ,type) {
                let parsTrme = that
                    .$moment(Math.floor(trime * 1000))
                    .format("YYYY-MM-DD HH:mm");
                let arr = parsTrme.split(' ')
                return arr[type];
            },
        }
    }
</script>

<style scoped lang="less">
    .page {
        overflow: hidden;
        box-sizing: border-box;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .page_line {
        width: 80/100rem;
        height: 6/100rem;
        background: #104cff;
        margin-top: 8/100rem;
    }
    .page_container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        box-sizing: border-box;
        -moz-box-sizing: border-box; /* Firefox */
        -webkit-box-sizing: border-box; /* Safari */
        background: #fff;
    }
    .page_title {
        flex-shrink: 0;
        width: 7.5rem;
        height: 1.04rem;
        background: #ffffff;
        border-bottom: 0.01rem solid #cad7e8;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.36rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #323a43;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding-top: 0.26rem;
    }
    .list_wrap {
        .flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .list_title {
            height: 80/100rem;
            background-color: #7D9DFB;
            text-align: center;
            font-size: 28/100rem;
            color: #FFFFFF;
        }
        .list_ul {
            font-size: 24/100rem;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: 34/100rem;
            color: #65728B;
            .list_row {
                height: 102/100rem;
                border-bottom: 1px solid #CAD7E8;
            }
        }
        .account{
            padding: 0 10/100rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
        }
        .time {
            text-align: center;
            width: 25%;
            flex-shrink: 0;
            white-space:nowrap;
        }
        .account {
            text-align: center;
            width: 35%;
        }
        .amount {
            text-align: center;
            flex-shrink: 0;
            width: 40%;
            white-space:nowrap;
        }
    }
    .van-pull-refresh {
        overflow: auto !important;
    }
</style>
