// ================================================== //
// ================== CLASES ======================== //
// ================================================== //
class Billetera {
	constructor(saldo, saldoDolar) {
		this.saldo = saldo;
		this.saldoDolar = saldoDolar || 0;
		this.movimientos = [];
		this.precioDolar = 0;
	}

	//====== METODOS =======//

	agregarSaldo(cantidad) {
		this.saldo = this.saldo + cantidad;
		return true;
	}
	restarSaldo(cantidad) {
		if (this.saldo - cantidad < 0) {
			toast("No es posible retirar ese monto", "red");
			return false;
		}
		this.saldo = this.saldo - cantidad;
		return true;
	}
	agregarMovimiento(movimiento) {
		this.movimientos.push(movimiento);
	}
	comprarDolares(cantidad) {
		const montoGastado = cantidad * this.precioDolar;
		if (montoGastado > this.saldo) return;

		this.restarSaldo(montoGastado);
		this.saldoDolar = this.saldoDolar + cantidad;
		return montoGastado;
	}
}

class Movimiento {
	constructor(monto, tipo) {
		this.monto = monto;
		this.tipo = tipo;
		this.fecha = new Date();
	}
}

function init() {
	if (!saldoGuardado) {
		guardarStorage("saldoCuenta", saldoInicial);
		const primerMovimiento = new Movimiento(saldoInicial, "Ingreso");
		billetera.agregarMovimiento(primerMovimiento);

		guardarStorage("transacciones", [primerMovimiento]);
	} else {
		movimientosGuardados.forEach((m) => billetera.agregarMovimiento(m));
	}
}

async function getDolar() {
	const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=ars");
	const DOLAR_OFICIAL = await res.json();
	return parseFloat(DOLAR_OFICIAL.tether.ars);
}
// ================================================= //
// ====================STORAGE====================== //
// ================================================= //

function guardarStorage(clave, valor) {
	const parseado = JSON.stringify(valor);
	localStorage.setItem(clave, parseado);
}
function obtenerStorage(clave) {
	const data = localStorage.getItem(clave);
	return JSON.parse(data);
}

// ================================================== //
// =====================Toastify===================== //
// ================================================== //

const toast = (mensaje, color) => {
	Toastify({
		text: mensaje,
		duration: 2000,
		gravity: "bottom",
		position: "center",
		style: {
			background: color,
		},
	}).showToast();
};

const saldoGuardado = obtenerStorage("saldoCuenta");
const movimientosGuardados = obtenerStorage("transacciones");
const saldoGuardadoUSD = obtenerStorage("saldoDolares");

const saldoInicial = saldoGuardado || parseInt(Math.random() * 10000);
const billetera = new Billetera(saldoInicial);

billetera.saldoDolar = saldoGuardadoUSD || 0;
