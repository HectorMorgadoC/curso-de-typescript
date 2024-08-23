const batman: string = 'Batman'
const linternaVerde: string = "Linterna verde"
const volvaNegro: string = `Heroe: volvan negro`

console.log(`Este es ${batman}`)
console.log(batman.toUpperCase())
// console.log(batman[10].toUpperCase) 
/* Esto da un error ya que la constante no tiene esa cantidad
de indices y devuelve un undefined y el metodo toUpperCase
no se aplica a valores indefinidos por eso se le aplica ?*/

console.log(batman[10]?.toUpperCase() || 'No es un heroe')
