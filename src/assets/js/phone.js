(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            //js获取当前的设备大小：document.documentElement.clientWidth;
            var clientWidth = docEl.clientWidth;//获取设备的宽度
            if (!clientWidth) return;
            if (clientWidth >= 750) {//宽度>750 平板 或者桌面 
                docEl.style.fontSize = '100px';//根元素 
            } else {//移动端的适配 
                //设置：html根元素大小   100设计稿的html大小  750设计稿（根据设计稿变化）
                //测试设计稿大小：测量的值px  px转rem  测量的px/100=?rem  直接css里面写?rem
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

//  1rem = html font-size px
//  1rem = 100px
//  那么20px = 0.2rem

// 如果当前设备宽度是375px 设计稿是750px 那么html的font-size 就是 50px
// 那么1rem = 50px
// 那么20px 就是 0.4rem

// 设计稿中20px 在750下就是 0.2rem 如果设备切换到了370 那么0.2rem就是10px

