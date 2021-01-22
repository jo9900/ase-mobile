import Login from "@/views/Login";
import Layout from "@/Layout";
import Home from "@/views/Index";

let language = localStorage.getItem("lang");
let name;
if (language == null || language == "zh") {
    name = "zh";
} else {
    name = language;
}
console.log(`${"@/lang/" + name + ".js"}`);

const routes = [{
        path: "/login",
        name: "login",
        label: "登录",
        meta: { requiresAuth: false },
        component: Login,
    },

    {
        path: "/signIn",
        name: "signIn",
        label: "注册",
        meta: { requiresAuth: false },
        component: Login,
    },
    {
        path: "/forget",
        name: "resetPas",
        label: "忘记密码",
        meta: { requiresAuth: false },
        component: Login,
    },

    {
        path: "/",
        component: Layout,
        label: "首页",
        children: [{
            path: "/",
            name: "/",
            label: "首页",
            meta: { requiresAuth: false },
            component: Home,
        }, ],
    },
    {
        path: "/",
        component: Layout,
        label: "新闻",
        children: [{
                path: "/journalism",
                name: "Journalism",
                label: "新闻",
                meta: { requiresAuth: false },
                component: (resolve) =>
                    require(["@/views/Journalism/index.vue"], resolve),
            },
            {
                path: "/journalismDetail",
                name: "journalism",
                label: "新闻详情",
                meta: { requiresAuth: false },
                component: (resolve) =>
                    require(["@/views/Journalism/journalismDetail.vue"], resolve),
            },
        ],
    },
    {
        path: "/",
        component: Layout,
        label: "用户协议",
        children: [{
            path: "/usertext",
            name: "usertext",
            label: "用户协议",
            meta: { requiresAuth: false },
            component: (resolve) =>
                require(["@/views/usertext/index.vue"], resolve),
        }, ],
    },
    {
        path: "/",
        component: Layout,
        label: "申购协议",
        children: [{
            path: "/purchase",
            name: "purchase",
            label: "申购协议",
            meta: { requiresAuth: false },
            component: (resolve) =>
                require(["@/views/purchase/index.vue"], resolve),
        }, ],
    },

    {
        path: "/",
        component: Layout,
        label: "白皮书",
        children: [{
            path: "/books",
            name: "books",
            label: "白皮书",
            meta: { requiresAuth: false },
            component: (resolve) => require(["@/views/Books/index.vue"], resolve),
        }, ],
    },
    {
        path: "/",
        component: Layout,
        label: "预售",
        children: [{
            path: "/presell",
            name: "presell",
            label: "预售",
            meta: { requiresAuth: false },

            component: (resolve) => require(["@/views/Presell/index.vue"], resolve),
        }, ],
    },
    {
        path: "/",
        component: Layout,
        label: "帮助手册",
        children: [{
            path: "/help",
            name: "help",
            label: "帮助手册",
            meta: { requiresAuth: false },

            component: (resolve) => require(["@/views/Help/index.vue"], resolve),
        }, ],
    },
    {
        path: "/",
        component: Layout,
        label: "发行计划",
        children: [{
            path: "/plan",
            name: "plan",
            label: "发行计划",
            meta: { requiresAuth: false },

            component: (resolve) => require(["@/views/plan/index.vue"], resolve),
        }, ],
    },
    {
        path: "/",
        component: Layout,
        label: "邀请规则",
        children: [{
            path: "/rule",
            name: "rule",
            label: "邀请规则",
            meta: { requiresAuth: false },

            component: (resolve) => require(["@/views/rule/index.vue"], resolve),
        }, ],
    },
    {
        path: "/",
        component: Layout,
        label: "关于我们",
        children: [{
            path: "/about",
            name: "about",
            label: "关于我们",
            meta: { requiresAuth: false },

            component: (resolve) => require(["@/views/about/index.vue"], resolve),
        }, ],
    },
    {
        path: "/",
        component: Layout,
        label: "个人中心",
        children: [{
                path: "/center",
                name: "center",
                label: "个人中心",
                meta: { requiresAuth: true },
                component: (resolve) => require(["@/views/Center"], resolve),
            },
            {
                path: "/KYCapply",
                name: "KYCapply",
                label: "KYC认证",
                meta: { requiresAuth: true },
                component: (resolve) =>
                    require(["@/views/Center/KYCapply.vue"], resolve),
            },
            {
                path: "/KYClose",
                name: "KYClose",
                label: "认证失败",
                meta: { requiresAuth: true },
                component: (resolve) =>
                    require(["@/views/Center/KYClose.vue"], resolve),
            },
            {
                path: "/applyBuylog",
                name: "applyBuylog",
                label: "申购记录",
                meta: { requiresAuth: true },
                component: (resolve) =>
                    require(["@/views/Center/applyBuylog.vue"], resolve),
            },
            {
                path: "/interestLog",
                name: "interestLog",
                label: "利息记录",
                meta: { requiresAuth: true },
                component: (resolve) =>
                    require(["@/views/Center/interestLog.vue"], resolve),
            },
            {
                path: "/extendLog",
                name: "extendLog",
                label: "推广记录",
                meta: { requiresAuth: true },
                component: (resolve) =>
                    require(["@/views/Center/extendLog.vue"], resolve),
            },
            {
                path: "/password",
                name: "password",
                label: "修改密码",
                meta: { requiresAuth: true },
                component: (resolve) =>
                    require(["@/views/Center/password.vue"], resolve),
            },
            {
                path: "/rebatelog",
                name: "rebatelog",
                label: "返利记录",
                meta: { requiresAuth: true },
                component: (resolve) =>
                    require(["@/views/Center/rebatelog.vue"], resolve),
            },
            {
                path: "/transfer",
                name: "transfer",
                label: "转让",
                meta: { requiresAuth: true },
                component: (resolve) =>
                    require(["@/views/Center/transfer.vue"], resolve),
            },
            {
                path: "/transferLogs",
                name: "transferLogs",
                label: "转让记录",
                meta: { requiresAuth: true },
                component: (resolve) =>
                    require(["@/views/Center/transferLogs.vue"], resolve),
            },
            {
                path: "/loginlog",
                name: "loginlog",
                label: "登录记录",
                meta: { requiresAuth: true },
                component: (resolve) =>
                    require(["@/views/Center/loginLog.vue"], resolve),
            },
        ],
    },
    {
        path: "/404",
        name: "404",
        label: "404",
        component: () =>
            import ("@/views/Notfind"),
    },
    { path: "*", redirect: "/404" },
];

export default routes;
