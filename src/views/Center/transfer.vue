<template>
    <div class="page">
        <div class="page_title">
            {{ $t("message.479") }}
            <div class="page_line"></div>
        </div>
        <div class="page_container">
            <div class="amount">
                {{ myPreSale && myPreSale.user_balance_amount }}
            </div>
            <div class="current_amount">
                AECO当前额度
            </div>
            <div class="logs">
                <div class="logs_wrap" @click="toTransferLogs">
                    <div class="text">转让历史记录</div>
                    <img
                        src="../../assets/images/icon_found_more.png"
                        alt=""
                        class="arrow"
                    />
                </div>
            </div>
            <div class="bottom_wrap">
                <div class="warning_text">
                    <span>转让前请再次确认对方账户的准确性</span>
                    <span>以免您的财产受到损失</span>
                </div>
                <div class="input-wrap">
                    <el-form
                        ref="form"
                        :model="form"
                        label-width="80px"
                        :rules="rules"
                    >
                        <el-form-item label="用户">
                            <el-input
                                v-model.trim="form.to_account"
                                placeholder="请输入对方注册邮箱"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="额度">
                            <el-input
                                v-model="form.aeco_amount"
                                placeholder="请输入转让的AECO额度"
                            ></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { userInfo, myPreSale, myMarketing } from "@/request/user.js";

    export default {
        name: "",
        data() {
            return {
                myPreSale: {
                    apply_usdt_amount: "",
                    apply_taft_amount: "",
                    user_balance_amount: "",
                },
                form: {
                    to_account: '',
                    aeco_amount: ''
                },
                rules: {
                    to_account: [
                        {
                            required: true,
                            message: this.$t("message.68"),
                            trigger: "blur",
                        },
                        {
                            pattern: /^([a-z0-9A-Z_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/,
                            message: this.$t("message.79"),
                        },
                    ],
                    aeco_amount: [
                        {
                            required: true,
                            message: this.$t("message.237"),
                            trigger: "change",
                        },{
                            pattern: /^[0-9]*$/,
                            message: '请输入金额'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.getMyPreSale();
        },
        methods: {
            toTransferLogs() {

            },
            getMyPreSale() {
                let params = {
                    code: localStorage.getItem("code"),
                };
                myPreSale(this.$qs.stringify(params)).then((res) => {
                    // console.log(res);
                    if (res.code == 0) {
                        this.myPreSale = res.data;
                    } else {
                        this.$message.error(res.msg);
                    }
                });
            },
        }
    }
</script>

<style scoped lang="less">
    .page {
        // background: #f0f2f5;
        overflow: hidden;
        box-sizing: border-box;
        -moz-box-sizing: border-box; /* Firefox */
        -webkit-box-sizing: border-box; /* Safari */
        padding-top: 90/100rem;
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
    .amount {
        font-size: 66/100rem;
        color: #3660FF;
        text-align: center;
        margin-top: 94/100rem;
        font-weight: bold;
    }
    .current_amount {
        text-align: center;
        color: #A7B6CA;
        font-size: 28/100rem;
        margin-top: 20/100rem;
    }
    .logs {
        margin-top: 44/100rem;
        font-size: 28/100rem;
        color: #7D9DFB;
        text-align: center;
        .logs_wrap {
            width: 240/100rem;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .bottom_wrap {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #FFF;
        box-shadow: 1px -3px 10px 1px rgba(0, 0, 0, 0.1);
        height: 676/100rem;
        border-radius: 40/100rem 40/100rem 0 0;
        .warning_text {
            width: 448/100rem;
            height: 40/100rem;
            font-size: 28/100rem;
            margin: 0 auto;
            text-align: center;
            color: #7D9DFB;
            line-height: 40/100rem;
            margin-top: 70/100rem;
        }
        .input-wrap {
            margin-top: 204/100rem;
            padding: 0 64/100rem 0 10/100rem;
        }
    }
</style>
