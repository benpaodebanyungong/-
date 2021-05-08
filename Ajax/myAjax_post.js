function obj2str(obj){
    obj.t = new Date().getTime();
    var res = [];
    for(var k in obj){
        res.push(encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]));//k 得到是 属性名  obj[k] 得到是 属性值
    }
    return res.join('&'); 
}
function ajax(type,url,obj,timeout,success,error){
    var str = obj2str(obj);
    var xmlhttp,timer;
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
        }
    else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    if (type === 'GET') {
        xmlhttp.open(type,url+'?'+ str,true);
        xmlhttp.send();
    }else{
        xmlhttp.open(type,url,true);
        //注意点：以下代码必须放在open和send之间
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(str);
    }
    
    xmlhttp.onreadystatechange = function(ev2){
        if (xmlhttp.readyState === 4) {
            clearInterval(timer);
            if (xmlhttp.status >= 200 && xmlhttp.status <= 300 || xmlhttp.status === 304 ) {
                success(xmlhttp);
            }else{
                error(xmlhttp);
            }
        }
    }
    if(timeout){
        timer = setInterval(function(){
            xmlhttp.abort();
            clearInterval(timer);
        },timeout);
    }
}