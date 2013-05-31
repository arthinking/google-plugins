/**
 * 注册浏览器事件 
 */
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {code: "showListInfo();", allFrames: true});
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	initialize(tabId);
});
chrome.tabs.onSelectionChanged.addListener(function(tabId, selectInfo) {
	initialize(tabId);
});
chrome.extension.onRequest.addListener(
  function() {
    chrome.tabs.executeScript(null, {code: "showListInfo();", allFrames: true});
});

function initialize(tabId){
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