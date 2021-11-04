import axios from "axios";
import store from "@/store";
import { Message } from "element-ui";

axios.defaults.withCredentials = true;

let baseUrl = "";
if (process.env.NODE_ENV == "development") {
    baseUrl = window.location.origin + '/'
} else {
    baseUrl = window.location.origin + '/'
}

axios.defaults.baseURL = baseUrl;

axios.defaults.timeout = 10000;

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

axios.interceptors.request.use(
    (config) => {
        const token = store.state.token;
        token && (config.headers.token = token);
        if (localStorage.getItem("token")) {
            config.headers["token"] = localStorage.getItem("token");
        }
        return config;
    },
    (error) => {
        return Promise.error(error);
    }
);

axios.interceptors.response.use(
    function(response) {
        if (response.headers["refresh-token"]) {
            localStorage.setItem("token", response.headers["refresh-token"]);
        }
        return response;
    },
    function(error) {
        if (typeof error.response !== "undefined") {
            if (error.response.data.code === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("email");
                window.location.href = "/login?redirect=%2Fdashboard";
            } else {
                const errMsg = error.response.data.msg;
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

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                throw err;
            });
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}
