// api接口统一管理

// login

import {get, post } from "./http";

const baseUrl = "api/v1/";

// 获取公钥
export const pubKey = (params) => {
    return post(baseUrl + "user/pk", params);
};

// 注册
export const signIn = (data) => {
    return post(baseUrl + "user/register", data);
};

// 邮箱验证码
export const mailVcode = (data) => {
    return post(baseUrl + "user/register/verify-code", data);
};

// 登录
export const login = (params) => {
    return post(baseUrl + "user/login", params);
};

// // 找回密码
// export const findPassword = params => {
//     return post( baseUrl + 'password/forgot' , params )
// }

// 找回密码
export const findPassword = (params) => {
    return post(baseUrl + "password/verify-code", params);
};
// 重置密码
export const resetPassword = (params) => {
    return post(baseUrl + "password/reset", params);
};