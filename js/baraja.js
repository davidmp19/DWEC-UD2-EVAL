import Carta from "./carta.js";

export default class Baraja {
  
    constructor() {
      this._baraja =  new Array(12);

      for (var i = 0; i < this._baraja.length; i++) {
        this._baraja[i] = new Array(4);
      }
      const palos = ["Corazones", "Diamantes", "Picas", "Tréboles"];
      const nombres = ["As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
        for (var i = 0; i < this._baraja.length; i++) {
            for (var j = 0; j < this._baraja[i].length; j++) {
              this._baraja[i][j] = new Carta(nombres[i],palos[j]);
            }
        }
    }
  
    generaCarta() {
      if (this._baraja.length === 0) {
        console.log("No hay mas cartas");
        return null;
      }
  
      var palo = Math.floor(Math.random()*4);
      var nombre = Math.floor(Math.random()*12);

      return this._baraja[palo][nombre];
    }
  
    quitarCarta(carta){
      for (var i = 0; i < this._baraja.length; i++) {
        for (var j = 0; j < this._baraja[i].length; j++) {
          if(this._baraja[i][j]==carta){
            this._baraja[i][j]=undefined;
          } 
        }
    }
    }
    buscarCarta(cartaBuscada){
      var encontrado=false;
      for (var i = 0; i < this._baraja.length && !encontrado ; i++) {
        for (var j = 0; j < this._baraja[i].length && !encontrado ; j++) {
          if(this._baraja[i][j]===cartaBuscada){
            console.log("Se ha encontrado la carta");
            encontrado=true;
          }
        }
      }
      return encontrado;
    }
    toString() {
      for (var i = 0; i < this._baraja.length; i++) {
        for (var j = 0; j < this._baraja[i].length; j++) {
          console.log(this._baraja[i][j].toString());
        }
      }
    }
  }