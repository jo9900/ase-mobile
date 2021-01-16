import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import qs from "qs";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "@/theme/index.css";
import "@/assets/css/default.css";
import "@/assets/css/global.css";
import moment from "moment";
// --------------
import _ from "lodash";
import throttle from "lodash/throttle";
import { version } from "./util/throttle";
document.onclick = _.throttle(
    function() {

        version(axios, Vue);
    },
    1000 * 60 * 3, { trailing: false }
);
import fastclick from "fastclick";
// ---------------
import Calendar from "vue2-datepick";
Vue.use(Calendar);

// ---------------
import VueI18n from "vue-i18n";
import messages from "./lang";
Vue.use(VueI18n);
import { Locals } from "./lang/vantLocal.js";
Vue.prototype.$Local = Locals;
let i18n;
let f = localStorage.getItem("lang") || 'zh';
i18n = new VueI18n({locale: f, messages});
Locals(f);
fastclick.prototype.focus = function(targetElement) {

    "use strict";
    targetElement.focus();
};
fastclick.attach(document.body);
let getQueryVariable = (name, url) => {
    return (
        decodeURIComponent(
            (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(url) || [,
                "",
            ])[1].replace(/\+/g, "%20")
        ) || null
    );
};
// ---------------
Vue.prototype.$moment = moment;
Vue.prototype.$qs = qs;

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
// ---------------
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    let ua = navigator.userAgent
    if (
        ua.match(/(iPhone|Android.*Mobile)/) ||
        ua.match(/MSIE [6,7,8,9]/) ||
        ua.toLowerCase().match(/MicroMessenger/i ) == 'micromessenger' // wx
    ) {
        next()
    }
    else {
        if (getQueryVariable("ref", window.location.href)) {
            window.location.href =
                process.env.VUE_APP_BASE_APILink +
                "signIn?ref=" +
                getQueryVariable("ref", window.location.href);
        }
        else
            window.location.href = process.env.VUE_APP_BASE_APILink;

        next();
    }
});




// --------------
Vue.use(ElementUI);

Vue.prototype.$languageName = localStorage.getItem("languageName") ?
    localStorage.getItem("languageName") :
    "Chinese";

Vue.prototype.$lang = localStorage.getItem("lang") ?
    localStorage.getItem("lang") :
    "zh";
if (process.env.NODE_ENV === "development") {
    Vue.prototype.$BaseUrl =  process.env.VUE_APP_BASE_API;
} else {
    Vue.prototype.$BaseUrl = process.env.VUE_APP_BASE_API;
}

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
