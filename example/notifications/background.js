/**
 * 显示一个时间 notification
 */
function show() {
	var time = new Date().format('yyyy-MM-dd hh:mm:ss');
  	// 创建一个notification
 	var notification = window.webkitNotifications.createNotification(
    	'48.png',	// 图片，在web_accessible_resources 中添加了
    	'现在的时间是：',	// title
    	time	// body.
  	);
  	// 显示notification
  	notification.show();
}

// 格式化时间函数
Date.prototype.format = function(format){
    var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
    RegExp.$1.length==1 ? o[k] :
    ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}

// 测试浏览器是否支持 webkitNotifications
if(window.webkitNotifications) {
	// 显示通知
  	show();
  	var interval = 0;
	// 弹出10次
	var times = 10;
	// 创建定时器
  	var timer = setInterval(function() {
    	interval++;
		// 10秒钟弹出一次
    	if (10 <= interval) {
      		show();
      		interval = 0;
      		times--;
      		if(times <- 0) clearInterval(timer);
    	}
  	}, 1000);
}