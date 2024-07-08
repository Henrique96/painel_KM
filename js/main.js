function store_log(){
	let location = window.location;
	let navegador = window.navigator;
	let geo = window.geolocation;
	//console.log(navegador);

	//console.log("Body carregado");
	localStorage.setItem("local", location);
	let pega_local = localStorage.getItem("local");

	/* if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		console.log("s/geolocalização")
	} */

	function showPosition(position) {
		var local_da_pessoa = " Latitude: " + position.coords.latitude +
		" Longitude: " + position.coords.longitude;
		localStorage.setItem("localização", local_da_pessoa);
	}

	// localStorage.clear();
}
