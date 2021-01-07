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

if (
    window.localStorage.getItem("token") &&
    window.localStorage.getItem("code")
) {
    store.commit("SETTOKEN", window.localStorage.getItem("token"));
    store.commit("SETCODE", window.localStorage.getItem("code"));
}


router.beforeEach((to, from, next) => {

    if (to.meta.title) {
        document.title = "TAFChain ";
        // +to.meta.title
    }

    let token = localStorage.getItem("token");

    if (to.meta.requiresAuth) {
        if (token) {
            next();
        } else {
            next({ path: "/login", query: { redirect: to.fullPath } });
        }
    } else {
        next(); // 需token
    }
});

export default router;
