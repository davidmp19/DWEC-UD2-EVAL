import Baraja from "./baraja.js";
import Carta from "./carta.js";
export default class Partida {

  
  constructor(filas = 4, columnas = 4) {
 
    this._filas = prompt("Indica el numero de filas, el minimo es 4");
    this._filas *= 1;
    this._columnas = prompt("Indica el numero de columnas, el minimo es 4");
    this._columnas *= 1;
    if (filas < 4||columnas < 4) {
      if(filas < 4){
        this._filas = 4;
      }
      if(columnas < 4){
        this._columnas = 4;
      }
    }
    this._baraja = new Baraja();
    this._cartasSeleccionadas = [];
    this._mazo = new Array();
    this._cartaVolteada = null;
    this._aciertos = 0;
    this._numeroIntentos = 0;
  }
    selecciona() {
      var i = 0;
      const cuantasVeces = (this._columnas * this._filas)-1;
      const nombres = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q","K"];
      const palos = ["Picas", "Treboles", "Corazones", "Diamantes"];
      const cartasSeleccionadas = [];
      while(i<=cuantasVeces){
        var numeroPalo = Math.floor(Math.random()*3);
        var numeroNombre = Math.floor(Math.random()*12);
        const carta1 = new Carta(nombres[numeroNombre],palos[numeroPalo]);
        this._cartasSeleccionadas.push(carta1);
        i++;
        this._cartasSeleccionadas.push(carta1);
        i++;
      }
    }

    comparacionAleatoria() {
      return Math.random() - 0.5;
    }
  
    baraja(){
      this._cartasSeleccionadas.sort(this.comparacionAleatoria);
    }
    reparte(){
      this._mazo = new Array(this._filas);

      for (var i = 0; i < this._mazo.length; i++) {
        this._mazo[i] = new Array(this._columnas);
      }
      var numero = 0;
      for (var i = 0; i < this._mazo.length; i++) {
        for (var j = 0; j < this._mazo[i].length; j++) {
            this._mazo[i][j] = this._cartasSeleccionadas[numero];
            numero++;
        }
      }
    }
    voltea(fila,columna){
      var ayuda = this._mazo[fila][columna];
      this._cartaVolteada = ayuda;
      console.log(ayuda.toString());
      this._numeroIntentos++;
    }

    eliminarCartas(fila1,fila2,columna1,columna2){
      if(fila1 === fila2 && columna1 === columna2){
        console.log("Estas eligiendo la misma carta");
      }else{
        this._mazo[fila1][columna1] = null;
        this._mazo[fila2][columna2] = null;
      }
      
    }

    compruebaAcierto(fila,columna){
      var devolver = false;
      if(this._mazo[fila][columna] === this._cartaVolteada){
        devolver = true;
        this._aciertos++;
      }
      return devolver;
    }

    finPartida(){
      var devolver = false;
      if(this._aciertos == this._cartasSeleccionadas.length/2){
        devolver = true;
      }
      return devolver;
    }

    pintarMazo(){
      var numero = 0;
      for (var i = 0; i < this._mazo.length; i++) {
        for (var j = 0; j < this._mazo[i].length; j++) {
          console.log(this._mazo[i][j]);
          numero++;
          if(numero === 4) {
            console.log("\n");
          }
        }
      }
    }
    
    get getMazo(){
      return this._mazo;
    }
  }
  /** 
  function mostrarTabla() {
    var codigoHTML = "<table border=1>";
    for (var i = 0; i < partida.getFilas(); i++) {
      codigoHTML += "<tr>";
      for (var j = 0; j < partida.getColumnas(); j++) {
        if (partida.getMazo()[i][j] === null) {
          codigoHTML += "<td></td>";
        } else {
          codigoHTML += "<td><br>" + partida.getMazo()[i][j] + "<br></td>";
        }
      }
      codigoHTML += "</tr>";
    }
    codigoHTML += "</table>";
    document.getElementById("mazo").innerHTML = codigoHTML;
  }
  */