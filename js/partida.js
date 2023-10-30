import Baraja from "./baraja.js";
import Carta from "./carta.js";
export default class Partida {

  
  constructor(filas = 4, columnas = 4) {
 
    this._filas = prompt("Indica el numero de filas, el minimo es 4");
    this._filas *= 1;
    this._columnas = prompt("Indica el numero de columnas, el minimo es 4");
    this._columnas *= 1;
    //primero hago un if para saber si algo esta mal, y luego lo separo por si uno esta bien mantenerlo,
    //y cambiar el que esta mal.
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
      const nombres = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
      const palos = ['PICAS', 'TREBOLES', 'CORAZONES', 'DIAMANTES'];
      const cartasSeleccionadas = [];
      while(i<=cuantasVeces){
        var numeroPalo = Math.floor(Math.random()*3);
        var numeroNombre = Math.floor(Math.random()*12);
        const cartaUno = new Carta(nombres[numeroNombre],palos[numeroPalo]);
        this._cartasSeleccionadas.push(cartaUno);
        i++;
        this._cartasSeleccionadas.push(cartaUno);
        i++;
      }
    }

    compararAleatoriamente() {
      return Math.random() - 0.5;
    }
  
    baraja(){
      this._cartasSeleccionadas.sort(this.compararAleatoriamente);
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

    haFinalizado(){
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