import { getPokemon } from "./generics/get-pok";


getPokemon(4)
    .then( pokemon => console.log(pokemon.name))
    .catch( err => console.log(err))
    .finally (() => console.log('Final del endpoint'))