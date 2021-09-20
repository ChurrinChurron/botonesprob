let opcionesPropina = document.querySelectorAll("opciones");
let custom = document.getElementById("custom");
let resetBoton = document.getElementById("reset");
let factura = document.getElementById("bill");
let personas = document.getElementById("person");
let cuentaPersona = document.getElementById("amount-person");
let resultado = document.getElementById("total-resul");
let inputFacPer = document.querySelectorAll(".info");
let numeroOpcionesPropina = 0;


//función de los inputs de factura y personas
for(i=0;i<inputFacPer.length;i++) {

inputFacPer[i].addEventListener("input", () => { 

if(personas.value > 0 && bill.value > 0) {


	const f = parseInt(factura.value);
	const p = parseInt(personas.value);
	cuentaPersona.innerHTML = `$${f}`;
	//la suma de ellos no va, solo es un ejemplo para ver si mostraba.
	const resul = f+p;
	resultado.innerHTML = `$${resul}`;
	enabBotonReset();
}

})

}

// lo de los botones :/
const nunu = () => {

	for(i=0;i<opcionesPropina.length;i++) {

		opcionesPropina[i].addEventListener("click", () => {

			switch(opcionesPropina[i]) {

				case opcionesPropina[0]:

				numeroOpcionesPropina = 5;
				//mas codigo 
			}
		})
	}
}


//mensaje de error
personas.addEventListener("keyup", () => {

	const mensaje = document.getElementById("error");

	if(personas.value < 1) {

		mensaje.style.display = "block";
		personas.style.border = "2px solid red";		
	} else {

		mensaje.style.display = "";
		personas.style.border = "";
	}
})



//un intento de estilo en los botones

/*
	opcionesPropina.forEach((op, i) => {

		op.addEventListener("click", () => {

			var ratNum = Number(op.value);
			var index = 0;
			var pre = 0;
			index = i;
			opcionesPropina[pre].style.background = "hsl(172, 67%, 45%)";
			opcionesPropina[pre].style.color = "hsl(183, 100%, 15%)";
			opcionesPropina[index].style.background = "";
			opcionesPropina[index].style.color = "";
			resul();
			pre=i;

		})
		
	})

//intento de resultado

let resul = () => {

	factura.addEventListener("input", () => {

			if(personas.value > 0 && factura.value > 0) {

		var resultadoPropina = parseFloat(factura*(ratNum/100)/Math.round(personas.value));
		var resultadoTotal = parseFloat(Math.round(cuentaPersona+factura));

		cuentaPersona.innerHTML = `$${resultadoPropina.toFixed(2)}`;
		resultado.innerHTML = `$${resultadoTotal.toFixed(2)}`;
		enabBotonReset();
	}

	})


//activar el boton de RESET

} */

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
	resultado.textContent = "$0.00";
	resetBoton.disabled = true;
	resetBoton.style.opacity = "";
	resetBoton.style.cursor = "";
	
	})

}
