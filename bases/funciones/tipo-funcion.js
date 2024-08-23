"use strict";
const addNumber = (a, b) => a + b;
const greet = (name) => `Hola ${name}`;
const saveTheWorld = () => `El mundo esta salvado`;
/*
esta es la manera de hacerlo con any
let myFunction;

myFunction = 10;
console.log({myFunction})
*/
/*
let myFunction: Function
de esta manera generaliza que su tipo es funcion
*/
let myFunction;
myFunction = addNumber;
console.log(myFunction(2, 4));
// let myFunction: (x: string) => string
// myFunction = greet
// console.log( myFunction('juan perez') );
// let myFunction: () => string
// myFunction = saveTheWorld
// console.log({ myFunction });
