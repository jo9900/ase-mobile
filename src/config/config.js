export default function () {
    var deviceWidth = document.documentElement.clientWidth;
    // var deviceWidth = window.screen.availWidth
    // console.log(navigator.userAgent)
    // console.log(deviceWidth)
    // console.log(navigator.userAgent)
    if (deviceWidth > 750) {
        // deviceWidth = 750;
        deviceWidth = 7.5 * 100;
    }
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    // 禁止双击放大
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}