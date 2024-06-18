function store_log(){
	let location = window.location;
	let navegador = window.navigator;
	let geo = window.geolocation;
	console.log(navegador);

	console.log("Body carregado");
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

function calcular_producao(){
	// AGROVALE GNA GILBARCO UNIVERSAL BOPAPER ORIZON LHOIST

	var valor_do_projeto_1 = document.getElementById("AGROVALE").value;
	var valor_do_projeto_2 = document.getElementById("GNA").value;
	var valor_do_projeto_3 = document.getElementById("GILBARCO").value;
	var valor_do_projeto_4 = document.getElementById("UNIVERSAL").value;
	var valor_do_projeto_5 = document.getElementById("BOPAPER").value;
	var valor_do_projeto_6 = document.getElementById("ORIZON").value;
	var valor_do_projeto_7 = document.getElementById("LHOIST").value;

	var int_valor_do_projeto_1 = Number(valor_do_projeto_1);
	var int_valor_do_projeto_2 = Number(valor_do_projeto_2);
	var int_valor_do_projeto_3 = Number(valor_do_projeto_3);
	var int_valor_do_projeto_4 = Number(valor_do_projeto_4);
	var int_valor_do_projeto_5 = Number(valor_do_projeto_5);
	var int_valor_do_projeto_6 = Number(valor_do_projeto_6);
	var int_valor_do_projeto_7 = Number(valor_do_projeto_7);

	var resultado = int_valor_do_projeto_1 + int_valor_do_projeto_2 + int_valor_do_projeto_3 + int_valor_do_projeto_4 + int_valor_do_projeto_5 + int_valor_do_projeto_6 + int_valor_do_projeto_7;


	var resultado_prod = document.getElementById("resultado");

	resultado_prod.style.display = "block";
	resultado_prod.append(resultado);
}