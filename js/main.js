'use strict';

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
    /* Mi creo questa funzione per creare l'elemento
     <div class="cell_box"></div> */
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
    cellBox.innerHTML += [i];
    cellContainer.append(cellBox);   
}

// Creo una variabile che richiama il contenitore del bottone
const buttonContainer = document.querySelector(".btn_box");


/* Creo una variabile e aggancio "la funzioen A" per creare il tasto
bottone e aggiungere la relativa classe; aggiungo la scritta PLAY 
all'elemento e lo appendo al contenitore button box.*/
const playButton = createMyElement('button', 'play_button');
playButton.innerHTML += 'PLAY';
buttonContainer.append(playButton);








