/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log("ESERCIZIO 1");
const num1 = 10;
const num2 = 25;
if (num1 > num2) {
  console.log("num1 è maggiore di num2");
  document.getElementById("verificaNumUnoDue").innerText = "num1 è maggiore";
} else {
  console.log("num2 è maggiore di 4");
  document.getElementById("verificaNumUnoDue").innerText = "num2 è maggiore";
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("ESERCIZIO 2");

if (num1 !== 5) {
  console.log("not equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

console.log("ESERCIZIO 3");
if (num2 % 5 === 0) {
  console.log("il num2 è divisibile per 5");
} else {
  console.log("il num2 non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("ESERCIZIO 4");

const numero1 = 7;
const numero2 = 1;

if (
  numero1 === 8 ||
  numero2 === 8 ||
  numero1 - numero2 === 8 ||
  numero1 + numero2 === 8
) {
  console.log(
    "almeno uno dei due è uguale a 8 oppure la loro somma/sottrazione è uguale a 8"
  );
} else {
  console.log(
    "neanche uno è uguale a 8 e la loro somma/sottrazione non è uguale a 8"
  );
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log("ESERCIZIO 5");
let totalShoppingCart = 40;
let Shipping = 10;
if (totalShoppingCart > 50) {
  console.log("complimenti hai la spedizione gratuita");
  console.log("il valore del tuo carrello è ", totalShoppingCart + "€");
} else {
  console.log(
    "il valore del tuo carrello è ",
    totalShoppingCart + Shipping + "€"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
console.log("ESERCIZIO 6");

let scontoBlackFriday = totalShoppingCart * 0.8;

if (totalShoppingCart > 50) {
  console.log("complimenti hai la spedizione gratuita");
  console.log("il valore del tuo carrello è ", scontoBlackFriday + "€");
} else {
  console.log(
    "il valore del tuo carrello è ",
    scontoBlackFriday + Shipping + "€"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
console.log("ESERCIZIO 7");
let x = 1;
let y = 3;
let w = 2;

if (x <= y && y <= w) {
  console.log("eccolo1", x, y, w);
} else if (y <= w && w <= x) {
  console.log("eccolo2", x, w, y);
} else if (w <= x && x <= y) {
  console.log("eccolo3", y, x, w);
} else if (x <= w && w <= y) {
  console.log("eccolo4", y, w, x);
} else if (x >= y && y <= w) {
  console.log("eccolo5", w, y, x);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("ESERCIZIO 8");
const mela = " frutto";
if (typeof mela === "number") {
  console.log("mela è un numero");
} else {
  console.log("mela  non è un numero");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("ESERCIZIO 9");
const numero = 10;
if (numero % 2 === 0) {
  console.log("il numero è divisibile per 2");
} else {
  console.log("questo numero non è divisibile per 2");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log("ESERCIZIO 10");
let val = 9;
if (val <= 5) {
  console.log("il valore è meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

console.log("ESERCIZIO 11");
me.city = "Roma";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

console.log("ESERCIZIO 12");
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log("prima di pop le skill di me erano:", me.skills);
console.log("ESERCIZIO 13");
me.skills.pop();
console.log("dopo pop le skill sono:", me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log("ESERCIZIO 14");
const arr = [];

arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
console.log("ESERCIZIO 15");
arr.pop(10);
console.log(arr);
arr.push(100);
console.log(arr);
