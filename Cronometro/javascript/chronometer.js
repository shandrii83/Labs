class Chronometer {
  constructor() {
    // definimos os tipos de dstos, que usaremos dentro chronometro
//usamos el syntax this. "nombreDeDato" par habilitar el uso de este dato fuera del acanze de donde vive.
// si queremos usuar elementos de un objeto fuera del alcanze del mismo la parabla esencial e "this."
  this.currentTime = 0;

  this.intervalId = null;
  }

  start() {
    //puntamos itervalID y dpendemos setInterval para cque cada 1 swgumdo le agregemos el valor de 1 a la propirdad de currentTimwe


    this.intervalId = setInterval(() => {
      // apuntamos propiedad currenTime y usando el operado de asignacion += le asignamos el valor de 1 cada 1 segundo
      this.currentTime++;
      //imprimimos en consola
      console.log(this.currentTime);
    }, 1000);
    
  }

  getMinutes() {
  //recibimos el varol del numero mediante propiedfad currentTime, dividimos ese valor por 60 y usamos el metodo math.florr() para redondear 
 return Math.floor( this.currentTime / 60);
 
  }

  getSeconds() {
    return Math.floor( this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value
     //extra layer of seguridad
    } else {
      return "" + value
    }
  }

  stop() {
   clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    //guardamos los minutos que recibimos de la funcion getMunute+s y mesckarla  con la funcion compute computeTwoDigitNumber
    let minutos = this.computeTwoDigitNumber(this.getMinutes());
    let segundos = this.computeTwoDigitNumber(this.getSeconds());
    return`${minutos}:${segundos}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
