(() => {
// NOTA : ESTO NO ES COMUN ES MUY RARO USARLO PERO SI SE PUEDE USAR
interface addTwoNumbers {
    (a: number, b: number): number
}

let addNumbersFunctions: addTwoNumbers;

addNumbersFunctions = (a: number, b: number) => {
    return a + b
}

})()