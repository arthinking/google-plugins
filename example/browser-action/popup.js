/*
 * http://jingyan.baidu.com/article/215817f73ebe901eda142320.html
 * http://wenku.baidu.com/view/c3c6fdbafd0a79563c1e7203.html
 * 
 * 这个JS文件表示对popup.html文档的操作
 * 比如直接在这里写的document也是代表了popup.html的文档流
 */

// 这里的document代表了popup.html的文档流，所以也是注册这个页面中的dom事件
document.addEventListener('DOMContentLoaded', function(){
	var divs = document.querySelectorAll('div');
	var obj = {"name":"root", "password":"123"};
	for(var i=0; i<divs.length; i++){
		divs[i].addEventListener('click', function(e){
			// var jsonText = JSON.stringify(e);  // 转换报错
			// console.log(jsonText);
			// chrome.tabs.executeScript(null,
			// 	{code:"switchLight('"+ obj +"');", allFrames: true}); // 这里如果传递一个e事件对象的话，会自动转换为字符串字面值，导致对象变成了字符串
			// 向页面注入JavaScript 脚本执行，由于这里调用的是一个JS方法switchLight()，该方法在func.js文件中，所以可以在background.js中把该JS（content script）注入到web页面中。
			chrome.tabs.executeScript(null,
			 	{code:"switchLight('"+ e.target.id +"');", allFrames: true});
			// console.log("send");
			// chrome.extension.sendRequest(e);   // 发送请求方法可以传递JSON对象，但是这里chrome把e事件对象转换为JSON字符串时会报错：Uncaught TypeError: Converting circular structure to JSON
		});		
	}
});