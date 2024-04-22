

(()=>{

    //LA CREACION DE TYPES SE GENERA APARTIR DE LA SIGUIENTE NECESIDAD
    // let brus: {name:string, age?:number,power:string[], getName?: ()=> string} = { 
    //     name: 'nombrex',
    //     age: 100,
    //     power:['fuerza','algo'],
    //     getName(){
    //         return this.name
    //     }
    // }
    // CREAR MAS OBJETOS CON LOS MISMOS TIPOS DE DATOS

    //Creacion de tipos para obligar a TS el tipo de datos a usar en un objetos 

    type Heroe = {
        name:string,
        age?: number,
        power:string[], 
        getName?: ()=> string

    }

    let flas:Heroe = { 
        name: 'nombrex',
        age: 100,
        power:['fuerza','algo'],
        getName(){
            return this.name
        }
    }
    let superman:Heroe = { 
        name: 'nombrex',
        age: 100,
        power:['fuerza','algo'],
        getName(){
            return this.name
        }
    }
    let batman:Heroe = { 
        name: 'nombrex',
        age: 100,
        power:['fuerza','algo'],
        getName(){
            return this.name
        }
    }





})()