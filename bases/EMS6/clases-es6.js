class Avengers {
    name
    power

    constructor(name = "", power = 0) {
        this.name = name,
        this.power = power
    }

}

class FlyingAvenger extends Avengers {
    flying

    constructor(name, power) {
        super(name,power)
        this.flying = true
    }
}




const hulk = new Avengers('hulk',4000)
const falcon = new FlyingAvenger('falcon',10)


console.log( hulk )
console.log( falcon )




