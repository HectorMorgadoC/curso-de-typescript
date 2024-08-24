(() => {

type Avenger = {
    name: string,
    weapon: string
}


const capitanAmerica: Avenger = {
    name: 'Capitan amenrica',
    weapon: 'Escudo'
}

const hulk: Avenger = {
    name: "hulk",
    weapon: "droga verde",
}

const thor: Avenger = {
    name: "thor",
    weapon: "martillo",
}

const avengers: Avenger[] = [ capitanAmerica, hulk, thor ]

for (const element of avengers) {
    console.log(element)
}


})()