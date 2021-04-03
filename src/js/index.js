// 导航栏筋斗云事件
const clouds = function(){
    let cloud = document.querySelector(".cloud");
    let lis = document.querySelectorAll(".slideshow-head-certen li");
    // 2. 给所有的小li绑定事件
    // 这个current 做为筋斗云的起始位置
    let current = 15;
    for (let i = 0; i < lis.length; i++) {
        // (1) 鼠标经过把当前小li 的位置做为目标值
        lis[i].addEventListener("mouseenter", function () {
          animate(cloud, this.offsetLeft + 15);
        });
        // (2) 鼠标离开就回到起始的位置
        lis[i].addEventListener("mouseleave", function () {
          animate(cloud, current);
        });
        // (3) 当我们鼠标点击，就把当前位置做为目标值
        lis[i].addEventListener("click", function () {
          current = this.offsetLeft + 15;
        });
    }
}
// 动画函数
function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // let step = Math.ceil((target - obj.offsetLeft) / 10);
        let step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + "px";
    }, 15);
}

export default {
    clouds
}