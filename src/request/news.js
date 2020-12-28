import {get, post } from "./http";

const baseUrl = "api/v1/";

// 新闻列表
export const digest = (params) => {
    return post(baseUrl + "news/digest", params);
};
// 新闻详情
export const detail = (params) => {
    return post(baseUrl + "news/detail", params);
};
// 邮件订阅
export const subscription = (params) => {
    return post(baseUrl + "news/subscription", params);
};