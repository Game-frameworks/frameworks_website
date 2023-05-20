
function isMobile() {

    var w = document.documentElement.clientWidth || document.body.clientWidth;
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    return w < h;
}

window.onload = function () {
    var logoElement = document.getElementsByClassName("_logo")[0];
    if(isMobile()){
        // set 高度
        var h = document.documentElement.clientHeight || document.body.clientHeight;

        for (let i = 100; i < (h / 3); i++) {
            logoElement.style.paddingTop = i + 'px';
        }

    }
}



