// console.log("Hello World");

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi in console "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz".

// CSS creo box, box-three, box-five e box-both e "li allineo"
// HTML creo una ul e la lascio vuota
// JS creo list item singolo
// JS FOR creo 100 li con classe box (stampando i numeri da 1 a 100)
// JS dentro al ciclo FOR metto un IF in cui controllo:
//      - se il numero è multiplo sia di 3 che di 5 allora FizzBuzz
//      - se il numero è multiplo di 3 allora Fizz
//      - se il numero è multiplo di 5 allora Buzz
// else? no else!


// JS creo list item singolo
const ul = document.querySelector(".ul");
    // console.log(ul);
// Kikka, questo va giù nel FOR! const li = document.createElement("li");
// li.classList.add("box");
// ul.append(li);

// JS FOR creo 100 li con classe box (stampando i numeri da 1 a 100)
for (i = 0; i < 100; i++) {
    const li = document.createElement("li");
        console.log(li);
    li.innerHTML = i + 1;
    li.classList.add("box");
    ul.append(li);

    // JS dentro al ciclo FOR metto un IF in cui sovrascrivo i box in base al resto e poi sosituisco i numeri con le scritte
    if (!((i + 1) % 3) && !((i + 1) % 5)) {
        li.classList.add("box-both");
        li.innerHTML = ("FizzBuzz");
    } else if (!((i + 1) % 3) && ((i + 1) % 5)) {
        li.classList.add("box-three");
        li.innerHTML = ("Fizz");
    } else if (((i + 1) % 3) && !((i + 1) % 5)) {
        li.classList.add("box-five");
        li.innerHTML = ("Buzz");
    }
}

// volendo, invece che scrivere tante volte "i + 1" potevo dichiarare una costante con valore i+1 e poi usre quella!
// potevo se no partire da uno (i = 1) e poi fare (i <= 100)

// QUINDI, quel mega calcolo potevo farlo così:
// let (i = 1; 1 <= 100; i++) {
//      if ( (i % 5 == 0) && (i % 3 == 0) ) { 
//          console.log("FizzBuzz");
//      } else if (i % 3 == 0) {
//          console.log("Fizz");   
//      } else if (i % 5 == 0) {
//          console.log("Buzz");
//      } else {
//          console.log(i);    
//      }
// }