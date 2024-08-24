(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    };


    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.3455
    }

    const { ironman, poder } = avengers

    console.log( ironman.toUpperCase(), poder.toFixed(0) )

    const litt = ( { ironman,...rest }: Avengers ): void => {
        console.log(ironman.toUpperCase(), poder.toFixed(0));
    }

    litt( avengers )


    const avengersArr: string[] = ["ironman","capitan america","deadpool","tres triste tigres"]

    const arrAvengers: [ string, boolean, number ] = ['Cap america', true, 123.567]

    const [ ,capitan, deadpool, ] = avengersArr
    const [ heroe, estado, valor ] = arrAvengers 

    console.log( capitan, " --- " , deadpool)
    console.log(heroe,estado,valor)

})()