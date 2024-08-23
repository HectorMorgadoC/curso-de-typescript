(() => {

const fullName = ( firstName: string, ...restArgs: string[] ): string => {
    return `${firstName} ${restArgs.join(' ')}`
}

const superman: string = fullName("Clark", "Joseph", "Kent");

console.log({ superman })

})()

