const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
const isProduction = process.env.NODE_ENV === "production";
module.exports = {
    publicPath: "./",
    productionSourceMap: false,

    outputDir: "dist-web-phone",
    assetsDir: "assets",

    lintOnSave: true,
    // webpack配置
    pwa: {},

    devServer: {
        port: 3002,
        https: false,
        hot: true,
        disableHostCheck: true,
        hotOnly: true, // https:{type:Boolean}
        proxy: {
            "/api": {
                target: "http://m.t.arthurex.com/",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": "/api",
                },
            },
        },
        before: (app) => {},
    },

    pluginOptions: {},
    configureWebpack: (config) => {
        if (isProduction) {
            config.plugins.push(
                new CompressionWebpackPlugin({
                    algorithm: "gzip",
                    test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
                    threshold: 10240,
                    minRatio: 0.8,
                })
            );
        }
        if (process.env.NODE_ENV === "production") {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
        }
    },

    chainWebpack: (config) => {
        config.resolve.symlinks(true);
    },
    configureWebpack: {
        externals: {
            vue: "Vue",
            "element-ui": "ELEMENT",
        },
    },
};
