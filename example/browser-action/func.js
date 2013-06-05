function switchLight(lightAction){
	console.log(jQuery.parseJSON(lightAction));
	if(lightAction == 'off'){
		document.body.style.backgroundColor='#000';
	} else {
		document.body.style.backgroundColor='#fff';
	}
}