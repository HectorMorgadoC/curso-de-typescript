const addNumber = ( a: number, b: number): number => a + b
const greet = ( name: string ): string => `Hola ${ name }`
const saveTheWorld = () => `El mundo esta salvado`


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

let myFunction: (x: number, y: number) => number 
myFunction = addNumber
console.log(myFunction(2,4))

// let myFunction: (x: string) => string
// myFunction = greet
// console.log( myFunction('juan perez') );

// let myFunction: () => string
// myFunction = saveTheWorld
// console.log({ myFunction });

