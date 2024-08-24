(() => {

class Avenger {
    constructor(
        public name: string,
        public realName: string
    ) {
        console.log('Contructor avenger llamado')
    }

    // los protecte solo pueden ser usadas por la clase o por la case que se esta extendiendo
    protected getFullname(): string {
        return `${this.name} ${this.realName}`
    }
}

class Xmen extends Avenger {
    constructor(
        public siMutant: boolean,
        name: string,
        realName: string
        
    ){
        super(name , realName)
    }

    getFullnameXmen(): void {
        console.log(super.getFullname())
    }

    // metodo setter
    set fullName(name: string) {
        this.realName = name
    }

    // metodo getter
    get fullName() {
        return this.realName
    }

}


const wolverine = new Xmen(true,'wolverine','logan')

/*
console.log(wolverine)
wolverine.getFullnameXmen()
wolverine.fullName = 'Hector'
console.log(wolverine.fullName)
*/
})()