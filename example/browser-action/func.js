function switchLight(lightAction){
	console.log(lightAction);
	if(lightAction == 'off'){
		document.body.style.backgroundColor='#000';
	} else {
		document.body.style.backgroundColor='#fff';
	}
}