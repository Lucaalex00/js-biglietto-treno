# Descrizione:
- Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
- Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65 
- L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca - come quelle fatte in classe

# Consigli:
- scrivete lo pseudo code
- preparate lista strumenti
- pensate prima al caso base e poi vi complicate la vita
- zero grafica solo js.

# SOLUZIONE

- Crea un prompt in modo che l'utente possa definire un numero di chilometri e inseriscilo in una variabile "km"
- Crea un prompt in modo che l'utente possa definire l'eta e inseriscila in una variabile "age"

- Moltiplica il valore di "km" per 0.21 e inseriscilo nella variabile "ticketPrice"
- Se "age" inferiore a 18, applica uno sconto del 20% (ticketPrice-20%)
- Se "age" superiore a 65, applica uno sconto del 40% (ticketPrice-40%)

- Stampa il valore di "ticketPrice" con un toFixed(2)

# Tools
- let/const
- prompt
- if/else if
- mathematic calc
- toFixed on console.log



