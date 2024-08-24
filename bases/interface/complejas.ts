(() => {

    interface Client {
        name: string
        age?: number
        address?: Address
        // manera de declara el metodo
        getFullName(id: number): string
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 3562,
            zip: ' SFHI 56',
            city: 'San juan de los morros'
        },
        // metodo
        getFullName(id: number) {
            return `${id}`
        },
    }


})