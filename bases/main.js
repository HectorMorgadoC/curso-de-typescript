"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() {
        console.log(' est es typescript ');
    }
}
(() => {
    let flash = {
        nombre: "Barry allen",
        age: 24,
        powers: ["supervelocidad", "viajar en el tiempo"],
    };
    console.log(flash);
    let capitanAmerica = {
        nombre: "steven rogers",
        age: 120,
        powers: ["superfuerza", "supervelocidad"],
    };
    console.log(capitanAmerica);
})();
(() => {
    class Mutant {
        mutanPower(id) {
            console.log(`${id}`);
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 3562,
            zip: ' SFHI 56',
            city: 'San juan de los morros'
        },
        getFullName(id) {
            return `${id}`;
        },
    };
});
(() => {
    let addNumbersFunctions;
    addNumbersFunctions = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map