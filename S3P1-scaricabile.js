function printResult(id, result) {
  console.log(result)
  document.getElementById(id).innerHTML = result
}

/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3
  }
  return num1 + num2
}

function es1() {
  let num1 = parseInt(document.getElementById("es1Num1").value)
  let num2 = parseInt(document.getElementById("es1Num2").value)
  printResult("es1Result", crazySum(num1, num2))
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num) {
  return (num > 20 && num <= 100) || num === 400
}

function es2() {
  let num = parseInt(document.getElementById("es2Num").value)
  printResult("es2Result", boundary(num))
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(string) {
  let reverse = ""
  for (let i = string.length - 1; i >= 0; i--) {
    reverse = reverse.concat(string[i])
  }

  return reverse
}

function es3() {
  let string = document.getElementById("es3String").value
  printResult("es3Result", reverseString(string))
}

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(string) {
  let camelized = ""
  string.toLowerCase()
  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === " " || !string[i - 1]) {
      camelized = camelized.concat(string[i].toUpperCase())
    } else {
      camelized = camelized.concat(string[i])
    }
  }
  return camelized
}

function es4() {
  let string = document.getElementById("es4String").value
  printResult("es4Result", upperFirst(string))
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
  let array = []
  for (i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 9) + 1)
  }
  return array
}

function es5() {
  let num = parseInt(document.getElementById("es5Num").value)
  printResult("es5Result", giveMeRandom(num).join(", "))
}

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2
}

function extra1() {
  let num1 = parseInt(document.getElementById("extra1Num1").value)
  let num2 = parseInt(document.getElementById("extra1Num2").value)
  printResult("extra1Result", area(num1, num2))
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num) {
  let diff = num - 19
  if (diff < 0) {
    diff = diff * -1
  }
  return diff > 19 ? diff * 3 : diff
}

function extra2() {
  let num = parseInt(document.getElementById("extra2Num").value)
  printResult("extra2Result", crazyDiff(num))
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(string) {
  if (string.startsWith("code")) {
    return string
  } else {
    return String("code").concat(string)
  }
}

function extra3() {
  let string = document.getElementById("extra3String").value
  printResult("extra3Result", codify(string))
}

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(num) {
  return num % 3 === 0 || num % 7 === 0
}

function extra4() {
  let num = parseInt(document.getElementById("extra4Num").value)
  printResult("extra4Result", check3and7(num))
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(string) {
  let cutted = ""
  for (let i = 1; i < string.length - 1; i++) {
    cutted = cutted.concat(string[i])
  }
  return cutted
}

function extra5() {
  let string = document.getElementById("extra5String").value
  printResult("extra5Result", cutString(string))
}
