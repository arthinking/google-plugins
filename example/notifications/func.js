// 一个简单的方法直接设置document.body的背景颜色，即开关灯效果
// 由于这个content script是注入到web页面中的，所以这里的document也就是代表web页面中的文档
function switchLight(lightAction){
	console.log(lightAction);
	if(lightAction == 'off'){
		document.body.style.backgroundColor='#000';
	} else {
		document.body.style.backgroundColor='#fff';
	}
}