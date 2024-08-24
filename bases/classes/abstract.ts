(() => {

// LAS CLASES ABSTRACTAS SIRVEN PARA CREAR OTRAS CLASES NO PARA INSTANCIAR OBJETOS
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante {

        salvarMundo(): string {
            return 'Salvar el mundo'
        }

    }

    class Villan extends Mutante {
        dominarMundo(): string {
            return 'Dominar el mundo'
        }
    }

    const wolverine: Xmen = new Xmen('wolverine','logan')
    const magneto: Villan = new Villan('magneto','erick')
/*
    console.log( {wolverine} )
    console.log( {magneto} )

    console.log( wolverine.salvarMundo )
    console.log( magneto.dominarMundo )

    const printName = ( character: Mutante ) => {
        console.log(character.name)
    }

    printName( magneto )
*/
})()