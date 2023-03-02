'use strict';
/* <div class="cell_box"></div> */

/* 
*************************
FUNZIONI
************************* 
*/
// FUNZIONE A
// Funzione per creare un elemento HTML e agganciarci una classe css
function createMyElement(element, className) {
    const element = document.createElement(element);  
    element.classList.add(className);
}

/* 
*************************
ALTRE ISTRUZIONI
************************* 
*/

// Creo una variabile che richiama il contenitore delle celle
const cellContainer = document.querySelector(".cell_container");

// Sfrutto la funzione A per creare un div che richiama la classe della cella
createMyElement('div', 'cell_box');







