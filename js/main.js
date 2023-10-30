import Baraja from "./baraja.js";
import Carta from "./carta.js";
import Partida from "./partida.js";

var primeraPartida = new Partida();
primeraPartida.selecciona();
primeraPartida.baraja();
primeraPartida.reparte();
var fin = false;
while(!fin){
console.table(primeraPartida.getMazo);
var fila1 = prompt("Indica la fila de la primera carta que quieres voltear");
var columna1 = prompt("indica la columna de la primera carta que quieres voltear");
primeraPartida.voltea(fila1,columna1);
var fila2 = prompt("Indica la fila de la segunda carta que quieres voltear");
var columna2 = prompt("indica la columna de la segunda carta que quieres voltear");
var haAcertado = primeraPartida.compruebaAcierto(fila2,columna2);
if (haAcertado === true){
    primeraPartida.eliminarCartas(fila1,fila2,columna1,columna2);
}
primeraPartida.pintarMazo();
fin = primeraPartida.haFinalizado();
}
console.log("Partida Finalizada, has necesido " + primeraPartida._numeroIntentos + " intentos");