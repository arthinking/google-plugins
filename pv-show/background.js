/**
 * 注册浏览器事件 
 */
chrome.browserAction.setBadgeText(ip);
// 单击浏览器按钮时触发，如果浏览器有弹出菜单则不触发
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {code: "showListInfo();", allFrames: true});
});
// tab做自发更新的时候触发
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	initialize(tabId);
});
// 标签页切换的时候触发
chrome.tabs.onSelectionChanged.addListener(function(tabId, selectInfo) {
	initialize(tabId);
});
// 响应 chrome.extension.sendRequest({});
chrome.extension.onRequest.addListener(
  function() {
    chrome.tabs.executeScript(null, {code: "showListInfo();", allFrames: true});
});
// 初始化方法
function initialize(tabId){
	// 
	chrome.tabs.executeScript(tabId, {file: "top.js"});
	chrome.tabs.insertCSS(tabId, {file: "style.css"});
	chrome.tabs.executeScript(tabId, {file: "frame.js", allFrames: true}, function(){
		chrome.tabs.executeScript(tabId,
							{code: "initIcon(" + string2Bool(localStorage.addIcon) + ");"});
		chrome.tabs.executeScript(tabId,
							{code: "initHotkeys(" + string2Bool(localStorage.hotkeys) + ");", allFrames: true});
	});
}

function string2Bool(string){
	return string=='false'?false:true;
}