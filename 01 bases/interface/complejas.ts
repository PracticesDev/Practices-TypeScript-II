

(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress ( id:string):string; 
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    interface Tipo extends Client{
        tipo:string;
    }


    const client: Client = {
        name: 'Jorge',
        age: 25,
        address: {
            id: 123,
            zip: 'HGA 000',
            city: 'City'
        },
        getFullAddress(id:string){
            return this.address.city
        }
    }
    const client2: Tipo = {
        name: 'Alberto',
        age: 27,
        address: {
            id: 124,
            zip: 'HGA100',
            city: 'city'
        },
        getFullAddress(id:string){
            return this.address.city
        },
        tipo:'Persona Natural'
    }



})()