function validateLength(search){

	var text = document.getElementById(search).value;
	var length = text.length;
	if(length == 255){
		alert("Limite de caracteres alcançado!");
	}
	
}