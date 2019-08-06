
	function myf(form) {
	if(form.username.value == "kabundege" && form.password.value == "123"){
		window.open('./adminHome.html');
	}
	if(form.username.value == "guest" && form.password.value == "123"){
		window.open('./usertrips.html')
	}

	else{
		alert('access denied')
	}
	}
