/*
# Tools
- let/const
- prompt
- if/else if
- mathematic calc
- toFixed on console.log 
*/

//Variabili Chilometri / Età
let km = prompt(`Quanti km devi percorrere ?`);
km = Number(km);
let age = prompt(`Qual'è la tua età ?`);
age = Number(age);

//Variabile Costo Biglietto
var ticketPrice = (km * 0.21);
ticketPrice = Number(ticketPrice)
//Sconto minorenni e anziani
if (age < 18) { //SE meno di 18 anni
    const minorDiscount = ((ticketPrice / 100) * 20);
    ticketPrice = (ticketPrice - minorDiscount);
} else if (age > 65) { //SE piu di 65 anni
    const oldDiscount = ((ticketPrice / 100) * 40);
    ticketPrice = (ticketPrice - oldDiscount);
}

//STAMP
console.log(`Il Prezzo del tuo biglietto è di ${ticketPrice.toFixed(2)}€`)


//If i want stamp on If and Else If
/*
console.log(`Il prezzo per un minorenne è di ${ ticketPrice }€`)

console.log(`Il prezzo per un anziano è di ${ ticketPrice }€`)
*/

// BONUS

//Variabile Costo Biglietto RANDOM

let r_km = Math.floor(Math.random() * 1000 + 1)
let r_age = Math.floor(Math.random() * 100 + 1)
var r_ticketPrice = (r_km * 0.21);
ticketPrice = Number(r_ticketPrice)

document.writeln("Random Kms " + r_km + "<hr>") //Stamp with HR tag
document.writeln("Random Age " + r_age)
//Sconto minorenni e anziani RANDOM
if (r_age < 18) { //SE meno di 18 anni
    const minorDiscount = ((r_ticketPrice / 100) * 20);
    r_ticketPrice = (r_ticketPrice - minorDiscount);
    console.log(`Il prezzo generato randomicamente ad un minorenne è di ${r_ticketPrice.toFixed(2)}€`)
} else if (r_age > 65) { //SE piu di 65 anni
    const oldDiscount = ((r_ticketPrice / 100) * 40);
    r_ticketPrice = (r_ticketPrice - oldDiscount);
    console.log(`Il prezzo generato randomicamente ad un anziano è di ${r_ticketPrice.toFixed(2)}€`)
} else { //STAMP RANDOM Price
    console.log(`Il Prezzo del tuo biglietto, generato randomicamente, è di ${r_ticketPrice.toFixed(2)}€`)
}








