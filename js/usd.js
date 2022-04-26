const dolares = document.getElementById("dolares");
const USDactual = document.getElementById("USDactual");
const btnDolar = document.getElementById("btnComprarDolares");

function verPrecio() {
	USDactual.innerHTML = `<p>Actualmente tiene en su cuenta: U$D ${billetera.saldoDolar} </p>`;
	dolares.innerHTML = ` <p> El USD tiene el valor de $${billetera.precioDolar} </p> `;
}
async function actualizarPrecio() {
	billetera.precioDolar = await getDolar();
	verPrecio();
}

const modificarDolares = async () => {
	let nodo = document.getElementById("inputDolares").value;
	if (nodo != "") {
		const montoGastado = billetera.comprarDolares(parseFloat(nodo));
		if (!montoGastado) {
			toast("No tiene suficiente monto", "red");
			return;
		}
		verPrecio();
		guardarCompra(montoGastado);
		toast("Transaccion exitosa", "linear-gradient(to right, #00b09b, #96c93d)");
		guardarStorage("saldoCuenta", billetera.saldo);
	} else {
		toast("Ingrese valor de dolares", "red");
	}
};

const guardarCompra = (monto) => {
	const crearMovimiento = new Movimiento(monto, "Compra dolares");
	billetera.agregarMovimiento(crearMovimiento);
	guardarStorage("transacciones", billetera.movimientos);
	guardarStorage("saldoDolares", billetera.saldoDolar);
};

btnDolar.addEventListener("click", () => modificarDolares());

actualizarPrecio();
init();
