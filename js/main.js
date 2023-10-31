import Baraja from "./baraja.js";
import Carta from "./carta.js";
import Partida from "./partida.js";

var partida = new Partida();
partida.selecciona();
partida.baraja();
partida.reparte();
var fin = false;
while(!fin){
//partida.mostrarTabla();
console.table(partida.getMazo);
var fila1 = prompt("Indica la fila de la primera carta que quieres voltear");
var columna1 = prompt("indica la columna de la primera carta que quieres voltear");
partida.voltea(fila1,columna1);
var fila2 = prompt("Indica la fila de la segunda carta que quieres voltear");
var columna2 = prompt("indica la columna de la segunda carta que quieres voltear");

var sonIguales = partida.compruebaAcierto(fila2,columna2);
if (sonIguales === true){
    partida.eliminarCartas(fila1,fila2,columna1,columna2);
}
partida.pintarMazo();
fin = partida.finPartida();
}
console.log("" + partida._numeroIntentos + " intentos");

