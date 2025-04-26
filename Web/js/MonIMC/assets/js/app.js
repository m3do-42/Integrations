"use strict"

function calculDeLimc(){
	let masse = inputMasse.value;
	let taille = inputTaille.value;
	let imc = Math.round( masse/(taille*taille) );

	resultats.innerHTML = "Votre IMC est de "+imc+" kg/m²";

	if(imc>30){
		interpretation.innerHTML = "D'après l'OMS vous êtes en obésité.";
	} else if(imc>25){
		interpretation.innerHTML = "D'après l'OMS vous êtes en surpoids.";
	} else{
		interpretation.innerHTML = "";
	}

}