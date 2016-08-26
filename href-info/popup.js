// 国际化获取定义的文件内容
document.addEventListener('DOMContentLoaded', function(){
	var message = chrome.i18n.getMessage("ext_option_title");
	document.getElementsByTagName("title")[0].innerHTML = "hello world";
	message = chrome.i18n.getMessage("ext_option_h1");
	document.getElementsByTagName("h1")[0].innerHTML = message;
	
	var labels = document.getElementsByTagName("label");
	message = chrome.i18n.getMessage("ext_option_show_url_info");
	labels[0].innerHTML = message;
	message = chrome.i18n.getMessage("ext_option_show_all_url");
	labels[1].innerHTML = message;
	message = chrome.i18n.getMessage("ext_option_hotkeys");
	labels[2].innerHTML = message;
	
	var inputs=document.getElementsByTagName('input');
	for(var i=0; i!=inputs.length; i++){
		(function(){
			var tThis=inputs[i];
			// 使用HTML5的localstorage读取和保存复选框的选中状态
			tThis.checked=localStorage[tThis.name]=='false'?false:true;
			tThis.onchange=function(){
				localStorage[tThis.name]=tThis.checked;
			};
		})();
	}
});


// var popupDom = chrome.extension.getViews({type:"popup"}).forEach(function(win) {
// 
// });