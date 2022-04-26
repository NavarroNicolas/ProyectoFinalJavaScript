// ------------------------------------------------------------------------------------------------- //
// ------------------------------- M O V I M I E N T O S ------------------------------------------- //
// ------------------------------------------------------------------------------------------------- //
//  getDolar();
init();

let tabla = document.getElementById("tablaMovimientos");

const contenidoFila = ({ monto, tipo, fecha }) => `
    <td> $${monto.toFixed(2)} </td>
    <td> ${tipo} </td>
    <td> ${moment(fecha).format("DD - MM - YYYY")} </td>
`;
billetera.movimientos
	.reverse()
	.slice(0, 10)
	.forEach((m) => {
		tabla.innerHTML += contenidoFila(m);
	});

/* function showMov(ind) {
	return "Monto: " + todosLosMovimientos[ind].monto + " | Fecha: " + todosLosMovimientos[ind].fecha;
}

let mov1 = showMov(0);
let mov2 = showMov(1);

let div = document.getElementById("listaMovimientos");

div.innerHTML += ` ${mov1} <br> `;
div.innerHTML += ` ${mov2} <br> `; */

// let mostrarMovimientos = (movimiento) => {
// //   const fecha = movimiento.fecha.toLocaleString();
//   return /*"Movimiento " + movimiento.tipo + */ mensaje + movimiento.monto + " | Fecha " + fecha ;
// };

// const verMovimientos = () => {

//     let totalMovimientos = billetera.movimientos;                          //obtener movimientos

//      totalMovimientos.forEach((mov) => console.log(mostrarMovimientos(mov)));   //por cada elemento dentro del array le aplico un console.log

//     console.log ("Su saldo actual es de $" + billetera.saldo);                   //mostrarlos

//     console.log(billetera.movimientos)

//   };

/* const saldoInicial = obtenerStorage("saldoCuenta") || parseInt(Math.random() * 10000);    //si hay algo en el storage con ese nombre("saldoCuenta") que lo use, sino ( || ) se le da un valor

guardarStorage("saldoCuenta", saldoInicial); //clave, valor

const primerMovimiento = new Movimiento("agregar", saldoInicial); 

const billetera = new Billetera(saldoInicial); 

billetera.agregarMovimiento(primerMovimiento);
 */

/**
 * saldoInicial = el valor obtenido del storage  | o |  sino le doy un valor random
 * guardo en el storage(clave,valor) con el nombre saldoCuenta , el valor de la plata aleatoria que le di
 * creo un movimiento (tipo, monto) tipo agregar capaz ni se use pero el valor seria saldoInicial
 * creo una nueva billetera(monto) y le doy el valor del saldo inicial
 * y a mi billetera nueva que cree le pusheo el movimiento
 *
 * ---------En sintesis :
 * 1 Obtengo el valor
 * 2 Lo guardo
 * 3 Creo el movimiento con el monto 2
 * 4 Creo la billetera
 * 5 le pusheo el movimiento a la billetera 4
 * */
