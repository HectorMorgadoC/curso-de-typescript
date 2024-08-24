(() => {

    class  Avengers {
        static avrAge: number = 30
        // metodos estaticos
        static avrAgebio() :number {
            return 230
        }
        
        constructor ( 
            private name: string,
            private team: string,
            public realName?: string
            
        ){}

        // metodos publicos pueden ser instanciados por el objeto
        public bio(): string {
            return this.name, '--' ,this.team
        }

        // metodos privados no pueden ser instanciados por el objeto solo por la clase
        private biotec(): void {
            console.log(this.name)
        }
    }

    const antman: Avengers = new Avengers('scoot lang','capitan')
/*
    console.log( antman )
    console.log( Avengers.avrAge )
    console.log( antman.bio())
    console.log( Avengers.avrAgebio())
*/
    })()