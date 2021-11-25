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

console.log(car1.basePrice + globalBasePrice);
console.log(car2.basePrice + globalBasePrice);


//RESULTADO
// car1 finalPrice = 75000;
// car2 finalPrice = 95000;