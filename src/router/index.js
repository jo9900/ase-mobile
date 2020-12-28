import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    // mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

// 页面刷新时，重新赋值token
if (
    window.localStorage.getItem("token") &&
    window.localStorage.getItem("code")
) {
    store.commit("SETTOKEN", window.localStorage.getItem("token"));
    store.commit("SETCODE", window.localStorage.getItem("code"));
}

// 路由守卫
router.beforeEach((to, from, next) => {
    // 获取token
    if (to.meta.title) {
        document.title = "TAFChain ";
        // +to.meta.title
    }

    let token = localStorage.getItem("token");
    // 判断要去的路由有没有 requiresAuth
    if (to.meta.requiresAuth) {
        if (token) {
            next();
        } else {
            // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            next({ path: "/login", query: { redirect: to.fullPath } });
        }
    } else {
        next(); // 需token
    }
});

export default router;