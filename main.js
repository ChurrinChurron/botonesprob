let opcionesPropina = document.querySelectorAll(".opciones");
let custom = document.getElementById("custom");
let resetBoton = document.getElementById("reset");
let factura = document.getElementById("bill");
let personas = document.getElementById("person");
let cuentaPersona = document.getElementById("amount-person");
let resultado = document.getElementById("total-resul");
let inputFacPer = document.querySelectorAll(".info");
let num = 0;
let resultadoPropina = 0;
let resultadoTotal = 0;

//resultado

	let result = () => {

		resultadoPropina = parseFloat((factura.value * num) / 100);
		resultadoPropina = resultadoPropina / personas.value;

		resultadoTotal = (factura.value / personas.value) + resultadoPropina;

		cuentaPersona.innerHTML = `$${resultadoPropina.toFixed(2)}`;
		resultado.innerHTML = `$${resultadoTotal.toFixed(2)}`;
	}

//función de los inputs de factura y personas

for(i=0;i<inputFacPer.length;i++) {

inputFacPer[i].addEventListener("input", () => { 

if(personas.value > 0 && bill.value > 0) {

	nunu();

		}
	})
}

//mensaje de error

personas.addEventListener("keyup", () => {

	const mensaje = document.getElementById("error");

	if(personas.value < 1 || factura.value < 1) {

		mensaje.style.display = "block";
		personas.style.border = "2px solid red";
	} else {

		mensaje.style.display = "";
		personas.style.border = "";
	}
})

//habilitar botón de reset

let enabBotonReset = () => {

	resetBoton.disabled = false;
	resetBoton.style.opacity = "1";
	resetBoton.style.cursor = "pointer";
	botonReset();
}

//resetear todo

let botonReset = () => {

resetBoton.addEventListener("click", () => {

	factura.value = "";
	personas.value = "";
	cuentaPersona.innerHTML = "$0.00";
	resultado.innerHTML = "$0.00";
	resetBoton.disabled = true;
	resetBoton.style.opacity = "";
	resetBoton.style.cursor = "";
	
	})
}

//aplicar y remover estilo en los botones

const removEst = () => {

	opcionesPropina.forEach(r => {

		r.style.background = "";
		r.style.color = "";
	})
}

const apliEst = () => {

	opcionesPropina.forEach(s => {

		s.addEventListener("click", () => {

			removEst();

			s.style.background = "hsl(172, 67%, 45%)";
			s.style.color = "hsl(183, 100%, 15%)";
			custom.style.background = "";
			custom.style.color = "";
		})
	})
}

//valor de las propinas

const nunu = () => {

	opcionesPropina.forEach(n => {

		n.addEventListener("click", e => {

			num = e.target.value;

			apliEst();
			result();
			enabBotonReset();

		})
	})
}
