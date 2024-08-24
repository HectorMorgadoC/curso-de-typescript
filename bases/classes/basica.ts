(() => {

    class Avengers {
        private name: string
        public team: string
        public realName: string | undefined
        static avgAge: number = 35

        constructor( name: string, team: string, realName?: string ) {
            this.name = name
            this.team = team
            this.realName = realName
        }

    }

    const antman: Avengers = new Avengers('antman','capitan')
/*
    console.log( antman )
    console.log( Avengers.avgAge ) // los static en clases son globales
*/

})()