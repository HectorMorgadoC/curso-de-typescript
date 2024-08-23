let avengers: number = 10
const villans: number = 20
if ( avengers > villans ) {
    console.log('Ganan los vengadores')
} else {
    console.log('gana ejercito de tanos')
}
avengers = Number('23a') /* esto devuelve un NaN 
para typescript NaN  es un numero*/

console.log({avengers})