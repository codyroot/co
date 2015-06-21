export var throttle = function (func, timeToWait = 300) {
    var timeout;
    return function () {
        var that = this,
            args = arguments,
            handleThrottling = function () {
                timeout = null;
                func.apply(that, args);
            };
        clearTimeout(timeout);
        timeout = setTimeout(handleThrottling, timeToWait);
    };
};

