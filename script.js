/* Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente,
 prima con un ciclo for, poi con un ciclo while. Quando le stampe in console sono corrette, stampare gli elementi in un elenco 
 puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente.*/

let lista_spesa = ["Prosciutto", "Acqua", "Coca-cola", "Yogurt", "Fiocchi d'avena"];
let i = 0;
let collezione = document.getElementsByClassName("demo");



   while (i < lista_spesa.length) { 
      collezione[i].innerHTML = lista_spesa[i];
      console.log(lista_spesa[i]);
      i++;
   }


for (let j = i; j < lista_spesa.length + i; j ++) {
    collezione[j].innerHTML = lista_spesa[j-i];
    console.log(lista_spesa[j]);
 }


