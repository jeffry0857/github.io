window.onload = function () {
	document.querySelector("#size").addEventListener("click", findIPhone);
	document.querySelector("#storage").addEventListener("click", findIPhone);
	document.querySelector("#color").addEventListener("click", findIPhone);
	document.querySelector("#btnQuery").addEventListener("click", ListIpads);
}

let iPhoneArray = [];

function getIpadJson(url) {
	let xhr = new XMLHttpRequest();

	xhr.onload = function(){
		iPhoneArray = JSON.parse(this.responseText);
		console.log(iPhoneArray);
	}

	xhr.open("GET", url);
	xhr.send();
	url="Nothing";
}

let _color, _storage, _size;
let showPrice = document.querySelector("#show-price");

function findIPhone() {
	_size = document.querySelector("#size").selectedOptions[0].value;
	_storage = document.querySelector("#storage").selectedOptions[0].value;
	_color = document.querySelector("#color").selectedOptions[0].value;

	if (_color == "-1" || _storage == "-1" || _size == "-1") {
		document.querySelector("#btnQuery").disabled = true;
		showPrice.innerHTML = "";
		return;
	}

	document.querySelector("#btnQuery").disabled = false;
	showPrice.innerHTML = `color : ${_color}, storage : ${_storage}, network : ${_network}`;
}

let specList = document.querySelector("#specList");
let br = document.createElement("br");