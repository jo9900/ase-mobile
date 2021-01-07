import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import router from "../router";

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 50000, // request timeout
});
// request interceptor
service.interceptors.request.use(
    (config) => {
        if (localStorage.getItem("QY_toke")) {
            config.headers["token"] = localStorage.getItem("QY_toke");
        }
        return config;
    },
    (error) => {
        // do something with request error
        return Promise.reject(error);
    }
);
// response interceptor
service.interceptors.response.use(
    (response) => {
        if (response.headers["refresh-token"]) {
            localStorage.setItem("QY_toke", response.headers["refresh-token"]);
        }
        return response.data;
    },
    (error) => {
        console.log("err" + error); // for debug
        let that = this;
        if (typeof error.response !== "undefined") {
            if (error.response.data.code === 401) {
                setTimeout(function() {

                    store.dispatch("user/resetToken").then(() => {
                        window.location.href = "/login?redirect=%2Fdashboard";
                    });
                }, 500);
            } else {
                let errMsg = error.response.data.msg;
                Message({
                    message: errMsg,
                    type: "error",
                    duration: 3 * 1000,
                });
            }
        }
        return Promise.reject(error);
    }
);
export default service;
