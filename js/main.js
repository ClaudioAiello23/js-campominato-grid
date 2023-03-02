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

/* Creo una nuova variabile che riguarda l'elemento creato, cui associo
 la "funzione A" (vedi FUNZIONI) per creare un div che richiama la classe della cella*/
const cellBox = createMyElement('div', 'cell_box');


// Aggancio la cellBox al cellContainer
cellContainer.append(cellBox);







