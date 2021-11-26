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







