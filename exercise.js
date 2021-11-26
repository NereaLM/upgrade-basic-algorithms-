// ITERACIÓN#1: VARIABLES
//Iteracion#1 fix: Corregido error en el fichero 
var myFavoriteHero = "Hulk";
var X = 50;
var h = 5;
var y = 10;
var z = h + y;


//ITERATION#2: Variables Avanzadas
const character = {name: 'Jack Sparrow', age: 25};

let firstName = "Jon";
let lastName = "Snow";
let age = 24;
//'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
console.log('Soy ' + firstName + ' ' + lastName + ', tengo ' + age + ' años y me gustan los lobos.');

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);


// let globalBasePrice = 10000;
// const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
// const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log(car1.finalPrice);
console.log(car2.finalPrice);


//RESULTADO
// car1 finalPrice = 75000;
// car2 finalPrice = 95000;



//ITERACION#3: OPERADORES

 let a = 10;
 let b = 5;
 let total = a * b;
 console.log(total);
//  alert(total);

 let c = 10;
 let d = 2;
 let total2 = c / d;
  console.log(total2);
//   alert(total2);


let e = 15;
let f = 9;
let total3 = e % f;
console.log(total3);
//alert(total3);

let y1 = 10;
let z1 = 5;
let x1 = y1 + z1;
console.log(x1);


let y2 = 10;
let z2 = 5;
let x2 = y2 * z2;
console.log(x2);



//ITERACION#4: ARRAYS

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let positionHulk = avengers.indexOf("HULK"); 
console.log(positionHulk);

const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1.unshift("IRONMAN");
console.log(avengers1);

const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log("Avengers2 length: " + avengers2.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
console.log(rickAndMortyCharacters);
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);
console.log("Ultimo personaje del array: " + rickAndMortyCharacters[rickAndMortyCharacters.length-1]);


const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters1.pop();
console.log(rickAndMortyCharacters1);
console.log("Primer personaje del array: " + rickAndMortyCharacters1[0]);
console.log("Ultimo personaje del array: " + rickAndMortyCharacters1[rickAndMortyCharacters1.length-1]);

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
console.log(rickAndMortyCharacters2);
rickAndMortyCharacters2.splice(1,1);
console.log(rickAndMortyCharacters2);




//ITERACION#5: CONDICIONALES

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 === 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if ((number3 * 5 == number1) && (number1 * 2 == number2)) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if ((number2 / 2 == number1) || (number1 / 5 == number3)) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}



//ITERACION#6: BUCLES

for (let i = 0; i <= 9; i++){
    console.log("imprimiendo del 0 al 9: " + i);
};



for (let i = 0; i <= 9; i++){
    if (i % 2 == 0){
        console.log("imprimiendo pares: " + i);
    } 
};

for (let i = 0; i <= 10; i++){
    if (i <= 9){
        console.log("Intentando dormir");
    } else {
        console.log("Dormido!");
    }
};
