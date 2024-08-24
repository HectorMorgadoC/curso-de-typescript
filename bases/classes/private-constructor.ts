(() => {

    class Apocalipsis {

        static intance: Apocalipsis
    
        private constructor( public name: string ) {
    
        }
    
        static callApocalipsis(): Apocalipsis {
            if ( !Apocalipsis.intance ) {
                Apocalipsis.intance = new Apocalipsis('Curso de apocalipsis')
            }

            return Apocalipsis.intance
        }

        set newName ( name: string) {
            this.name = name
        }
    
    }
    
    /*
    const apocalipsis1: Apocalipsis = Apocalipsis.callApocalipsis()
    console.log( apocalipsis1 )

    apocalipsis1.newName = 'refenhauser'
    console.log( apocalipsis1 )
*/
})()