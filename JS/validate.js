function checkEmail(e){
	var element=e.target;
if(/[^a-zA-Z0-9@._]/.test(element.value)){
	alert("Email is invalid! only characters a-z A-Z 0-9 @  . _are allowed.");
	element.value="";
	return false;
}
if(/[^a-zA-Z0-9@._]/.test(element.value)){
	alert("Email is invalid! only characters a-z or A-Z characters are must");
	element.value="";
	return false;

}
if(!/[@]/.test(element.value)){
	alert("Email is invalid! only are missing @");
	element.value="";
	return false;
}
if(!/[.]/.test(element.value)){
	alert("Email is invalid! .domain name is missing ");
	element.value="";
	return false;
}
function checkSubject(e){
	var element=e.target;


if(/[^a-zA-Z.]/.test(element.value)){
	alert("Invalid checkSubject");
	element.value="";
	return false;




var email=document.getElementById('user-email');
email.addEventListener('blur',checkEmail,false)






}

var email=document.getElementById('user-email');
email.addEventListener('blur',checkEmail,false) 
}