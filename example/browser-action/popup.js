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
			chrome.tabs.executeScript(null,
			 	{code:"switchLight('"+ obj +"');", allFrames: true}); // 这里如果传递一个e事件对象的话，由于跨页面了，导致对象变成了字符串
			// chrome.tabs.executeScript(null,
			// 	{code:"switchLight('"+ e.target.id +"');", allFrames: true}); // 这里如果传递一个e事件对象的话，由于跨页面了，导致对象变成了字符串
			// console.log("send");
			// chrome.extension.sendRequest(jQuery.parseJSON(e));  
		});		
	}
});