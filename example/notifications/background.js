/**
 * 注册标签页更新时的事件
 * 这里调用了initialize()事件，把func.js注入当前标签页中 
 */
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	initialize(tabId);
});

/**
 * 注册切换标签页时的事件
 * 这里调用了initialize()事件，把func.js注入当前标签页中
 */
chrome.tabs.onSelectionChanged.addListener(function(tabId, selectInfo) {
	initialize(tabId);
});

/**
 * 初始化方法 ，注入func.js事件
 * @param {Object} tabId
 */
function initialize(tabId){
	chrome.tabs.executeScript(tabId, {file: "func.js", allFrames: true});
	chrome.tabs.executeScript(tabId, {file: "jquery-2.0.2.js", allFrames: true});
}

/**
 * 启动一个chrome.extension.onRequest事件监听器用来处理消息
 */
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    chrome.tabs.executeScript(null, {code: "switchLight("+ request +");", allFrames: true});
});
