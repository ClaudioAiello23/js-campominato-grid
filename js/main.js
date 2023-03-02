'use strict';
/* <div class="cell_box"></div> */

/* 
*************************
FUNZIONI
************************* 
*/

// FUNZIONE A
// Funzione per creare un elemento HTML e agganciarci una classe css
function createMyElement(htmlElement, className) {
    const element = document.createElement(htmlElement);  
    element.classList.add(className);
    
    return element;
}


/* 
*************************
ALTRE ISTRUZIONI
************************* 
*/

// Creo una variabile che richiama il contenitore delle celle
const cellContainer = document.querySelector(".cell_container");


/* Creo una nuova variabile cellBox che riguarda l'elemento creato, 
cui associo la "funzione A" (vedi FUNZIONI) per creare un div che
richiama la classe della cella; appendo la nuova variabile al 
cellContainer; il tutto lo inserisco in un ciclo FOR per replicare
100 volte l'operazione e creare la griglia di partenza*/
for (let i = 1; i <= 100; i++) {
    let cellBox = createMyElement('div', 'cell_box');
    cellContainer.append(cellBox);   
}











