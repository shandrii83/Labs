const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  setInterval(()=>{ 
    let segundos = printSeconds();
    let minutos =  printMinutes();
   /*  console.log(`${segundos}: ${minutos}`); */
  /*   console.log(secDecElement); */
    minDecElement.innerText= minutos[0];
    minUniElement.innerText = minutos[1];
    secUniElement.innerText = segundos[1];
  secDecElement.innerText = segundos[0];
}, 1000);
}
 

function printMinutes(){
return chronometer.computeTwoDigitNumber(
  chronometer.getMinutes()
);
};

function printSeconds() {
  
 return chronometer.computeTwoDigitNumber
  (chronometer.getSeconds());
  
};

// ==> BONUS
/* function printMilliseconds() { */
  // ... your code goes here
/* } */

const printSplit=() =>{
 let marcaDelTiempo = chronometer.split();
 console.log(marcaDelTiempo);
 let elementoLista = document.createElement("li");
elementoLista.innerText = marcaDelTiempo;
splitsElement.appendChild(elementoLista);
};

const clearSplits= () =>{
 splitsElement.innerHTML = " "
 element.remove();
};

const setStopBtn= ()=> {
  btnLeftElement.innerText = "STOP";
  btnLeftElement.className = "btn stop";
}

const setSplitBtn=() =>{

  btnRightElement.innerText = "SPLIT";
  btnRightElement.className = "btn split";
}

const setStartBtn=()=> {
  btnLeftElement.innerText = "START";
  btnLeftElement.className = "btn start";
  }

const setResetBtn=()=> {
  btnRightElement.innerText = "RESET";
  btnRightElement.className = "btn reset";

};

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === "START") {
    setStopBtn();
    chronometer.start();
    printTime();
setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === "RESET") {
    chronometer.stop();
    chronometer.reset();
    minDecElement.innerText= "0";
    minUniElement.innerText = "0";
    secUniElement.innerText ="0" ;
  secDecElement.innerText = "0";
  clearSplits();
  } else {
    printSplit();
  }
});