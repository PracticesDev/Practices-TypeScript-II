

(()=>{

    //Interface restringir como lucen los objetos
    //

    interface Heroe  {
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