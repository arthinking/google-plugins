function initIcon(addIcon){
	ext_btt_addIcon=addIcon;
	// changeUi();
}

function changeUi(){
	var a=document.getElementById('ext_btt');
	if(a!=null)
		a.parentNode.removeChild(a);
		
	if(ext_btt_addIcon){
		var a=document.createElement('a');
		a.id='ext_btt';
		a.style.zIndex=19881211;
		a.href='#';
		var img=document.createElement('img');
		var imgURL = chrome.extension.getURL('images/icon.png');
		img.src=imgURL;
		img.width=32;
		img.height=32;
		img.style.border='none';
		a.appendChild(img);
		a.onclick=function(){
			chrome.extension.sendRequest({});
			return false;
		};
		document.body.appendChild(a);
	}
}