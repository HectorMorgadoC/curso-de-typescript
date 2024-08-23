"use strict";
var _a;
const batman = 'Batman';
const linternaVerde = "Linterna verde";
const volvaNegro = `Heroe: volvan negro`;
console.log(`Este es ${batman}`);
console.log(batman.toUpperCase());
// console.log(batman[10].toUpperCase) 
/* Esto da un error ya que la constante no tiene esa cantidad
de indices y devuelve un undefined y el metodo toUpperCase
no se aplica a valores indefinidos por eso se le aplica ?*/
console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No es un heroe');
