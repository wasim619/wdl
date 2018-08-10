function checkEmail(e){
var element=e.target;
if(/[^a-zA-Z0-9@._]/.test(element.value)){
	alert("Email is invalid! only characters  a-zA-Z0-9 @ . _are allowed.");
	element.value="";
	return false;

}
if(!/[a=zA-Z]/.test(element.value)){
		alert("Email is invalid!  a-z orA-Z characters are must");
	element.value="";
	return false;
}

if(!/[@]/.test(element.value)){
		alert("Email is invalid! you are missing @");
	element.value="";
	return false;
}
if(!/[.]/.test(element.value)){
		alert("Email is invalid!  .domain name is missing");
	element.value="";
	return false;
}



}

var email=document.getElementById('user-email');
email.addEventListener('blur',checkEmail,false)

function checkMessage(e){
var element=e.target;
if(/[^a-zA-Z. ]/.test(element.value)){
	alert("invalid subject use only a-z or A-Z");
	element.value="";
	return false;

}
return true;
}

var email=document.getElementById('user-email');
email.addEventListener('blur',checkSubject,false)


function