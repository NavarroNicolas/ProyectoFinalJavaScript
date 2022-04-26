const form = document.getElementById("formulario");
const CApesos = document.getElementById("CApesos");
const btnAdd = document.getElementById("btnAdd");
const btnRemove = document.getElementById("btnRemove");

CApesos.append(saldoInicial.toFixed(2));

form.addEventListener("submit", (e) => e.preventDefault());
btnAdd.addEventListener("click", () => modificarSaldo("Ingreso"));
btnRemove.addEventListener("click", () => modificarSaldo("Egreso"));

let transacciones = obtenerStorage("transacciones");

const modificarSaldo = (metodo) => {
	let nodo = document.getElementById("input").value;

	if (nodo !== "") {
		nodo = parseFloat(nodo);
		const verificacion = metodo == "Ingreso" ? billetera.agregarSaldo(nodo) : billetera.restarSaldo(nodo); // operador ternario
		if (verificacion) {
			toast("Transaccion exitosa", "linear-gradient(to right, #00b09b, #96c93d)");
			const crearMovimiento = new Movimiento(nodo, metodo); //creo un nuevo movimiento
			billetera.agregarMovimiento(crearMovimiento); //lo pusheo a la billetera
			guardarStorage("transacciones", billetera.movimientos);
		} // pasar a string y volver a subirlo
	} else {
		toast("Ingrese un monto valido", "red");
	}

	const { saldo } = billetera; //desestructuracion
	guardarStorage("saldoCuenta", saldo);
	CApesos.innerHTML = "Caja de ahorro en $" + saldo;
};

init();
