export function throttle(func, wait) {
    console.log(func);
    let canRun = true;
    return function() {
        if (!canRun) {
            return; // 如果开关关闭了，那就直接不执行下边的代码
        }
        canRun = false; // 持续触发的话，run一直是false，就会停在上边的判断那里
        setTimeout(() => {
            func.apply(this, arguments);
            canRun = true; // 定时器到时间之后，会把开关打开，我们的函数就会被执行
        }, wait);
    };
}

export function version(axios, Vue) {
    var verion = "";
    axios
        .get("./static/version.json?_=" + Math.random())
        .then((response) => {
            verion = response.data[0].version;
            if (
                process.env.VUE_APP_BASE_VERSION == undefined ||
                process.env.VUE_APP_BASE_VERSION == null
            ) {
                return;
            }
            if (process.env.VUE_APP_BASE_VERSION != verion) {
                // var message = "系统版本有更新，点击确认加载最新，或按【CTRL + F5】!";
                // Vue.prototype.$alert(message, "系统提示", {
                //     confirmButtonText: "确定",
                //     callback: function() {
                //         window.location.reload(true);
                //     }
                // });
                window.location.reload(true);
                return;
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

export function debounce(fn, delay) {
    // 定时器，用来 setTimeout
    var timer;

    // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
    return function() {
        // 保存函数调用时的上下文和参数，传递给 fn
        var context = this;
        var args = arguments;

        // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
        clearTimeout(timer);

        // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
        // 再过 delay 毫秒就执行 fn
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    };
}
