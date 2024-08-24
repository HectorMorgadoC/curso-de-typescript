(() => {
    type Hero = {
        nombre: string,
        age?: number,
        powers: string[]
        getName?: () => string
    }
   
    let myCustomVariable: (string | number | Hero) = 'Fernando' 
    console.log(typeof myCustomVariable) // string

    myCustomVariable = 30
    console.log(typeof myCustomVariable) // number

    myCustomVariable = {
        nombre: 'Hector Morgado',
        powers: ['tecnico electricista','tecnico electronico']
    }
    console.log(typeof myCustomVariable) //object

})()