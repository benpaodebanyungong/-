function obj2str(obj){
    obj.t = new Date().getTime();
    /* userName : 'lzh',
    userPwd : '123456' 
    t = '545484138648'*/
    var res = [];
    for(var k in obj){
        //encodeURIComponent('张三'); 将中文转换为：%E5%BC%A0%E4%B8%89
        res.push(encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]));//k 得到是 属性名  obj[k] 得到是 属性值
    }
    return res.join('&'); 
}
function ajax(url,obj,timeout,success,error){
    //0.将对象转换为字符串
    var str = obj2str(obj);//url?key=value&key=value
    var xmlhttp,timer;
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
        }
    else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    xmlhttp.open('GET',url+'?'+ str,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(ev2){
        if (xmlhttp.readyState === 4) {
            clearInterval(timer);//如果时间未超过timeout，关闭计时器
            if (xmlhttp.status >= 200 && xmlhttp.status <= 300 || xmlhttp.status === 304 ) {
                success(xmlhttp);//这里将xmlhttp的实参传递给了回调函数"success"里的形参
            }else{
                error(xmlhttp);
            }
        }
    }
    //判断外界是否传入了超时时间
    if(timeout){
        timer = setInterval(function(){
            xmlhttp.abort();//如果请求已经发送，则该方法将中止该请求
            clearInterval(timer);
        },timeout);//如果时间超过timeout，开启计时器
    }
}

