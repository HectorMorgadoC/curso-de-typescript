(() => {

// el tipo es la firma pra cualquier objeto
type Hero = {
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


