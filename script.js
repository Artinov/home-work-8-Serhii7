function setText(selector, text){
	var str = document.querySelector(selector);
	//console.log(str);
	try{
	if(str ==true){
		str.innerHTML = text;
	}else{
		alert('A tag didn`t find');
	}}catch(e){
		alert('Error' + e);
	}
}
function setTextAll(selector, text){
	var str = document.querySelectorAll(selector);
	//console.log(str);
	try{
	if(str.length != 0){
		str.forEach(function(element,i){
			element.innerHTML = text + ' Its a ' + (i+1) + ' element';
		});
	}else{
		alert('A tag didn`t find');
	}}catch(e){
		alert('Error' + e);
	}
}


document.getElementById("set").onclick = main;

function main(){
	var selector = document.getElementById("selector").value;

	if(selector =='div'){
		selector = '.wrapper '+selector+'.true';
	}else {
		selector = '.wrapper ' + selector;
	}

	var text = document.getElementById("text").value;
	//setTextAll(selector,text);

	var fun = document.getElementById("funct").value;

		switch(fun){
		case '1':
			setText(selector,text);
		break;
		case '2':
			setTextAll(selector,text);
		break;
	}

}
