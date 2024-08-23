(() => {

// el ? en el argumento dice que esto puede ser opcinal
const fullName = (firstName: string, lastName?: string): string => {
    return firstName + " " + (lastName || '-----')
};

const nameHero: string = fullName("tony", "stark")

console.log({ nameHero });


})()