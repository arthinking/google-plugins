document.onkeydown=function(){
	if(!ext_btt_hotkeys) return;
	var a=window.event.keyCode; 
	if((a==38)&&(event.altKey)) {
		chrome.extension.sendRequest({});
	}
};

function initHotkeys(hotkeys){
	ext_btt_hotkeys=hotkeys;
}

function goTop(animation, acceleration, time) {
	if(!animation){
		window.scrollTo(0, 0);
		return;
	}
	acceleration = acceleration || 0.3;
	time = time || 20;
 
	var x1 = 0;
	var y1 = 0;
	var x2 = 0;
	var y2 = 0;
	var x3 = 0;
	var y3 = 0;
 
	if (document.documentElement) {
		x1 = document.documentElement.scrollLeft || 0;
		y1 = document.documentElement.scrollTop || 0;
	}
	if (document.body) {
		x2 = document.body.scrollLeft || 0;
		y2 = document.body.scrollTop || 0;
	}
	var x3 = window.scrollX || 0;
	var y3 = window.scrollY || 0;
 
	var x = Math.max(x1, Math.max(x2, x3));
	var y = Math.max(y1, Math.max(y2, y3));
 
	var speed = 1 + acceleration;
	window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
 
	if(x > 0 || y > 0) {
		var invokeFunction = "goTop('" + animation + "', " + acceleration + ", " + time + ")";
		window.setTimeout(invokeFunction, time);
	}
}

function showListInfo(){
	var hrefs = document.getElementsByTagName("a");
	alert(hrefs.length);
}
