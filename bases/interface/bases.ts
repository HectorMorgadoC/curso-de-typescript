(() => {


// interface
/* 
- La diferencia entre type e interface es que los type no se pueden expandir
en cambio las interfaces si se puede
- Se crea como una clase
*/
interface Hero {
    nombre: string,
    age?: number,
    powers: string[]
    getName?: () => string
}

let flash: Hero = {
    nombre: "Barry allen",
    age: 24,
    powers: ["supervelocidad", "viajar en el tiempo"],
};

console.log(flash);

let capitanAmerica: Hero = {
    nombre: "steven rogers",
    age: 120,
    powers: ["superfuerza", "supervelocidad"],
};

console.log(capitanAmerica);

})()