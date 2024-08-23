"use strict";
let avenger = 123;
let exits;
let power;
avenger = 'Capitan America';
// console.log( avenger.charAt(0) )
/*
    casting de any
    1er metodo
    se usa la palabra reservada 'as' junto al tipo de dato
    as string
    typescript trata como string el any
*/
console.log(avenger.charAt(0));
avenger = 159.23234534252;
/*
    casting de any
    2er metodo
    se usa <tipo de dato>variable
    <number>avenger
    typescript trata como number el any
*/
console.log(avenger.toFixed(2));
console.log(exits);
console.log(power);
