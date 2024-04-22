"use strict";
(() => {
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
    let flas = {
        name: 'nombrex',
        age: 100,
        power: ['fuerza', 'algo'],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'nombrex',
        age: 100,
        power: ['fuerza', 'algo'],
        getName() {
            return this.name;
        }
    };
    let batman = {
        name: 'nombrex',
        age: 100,
        power: ['fuerza', 'algo'],
        getName() {
            return this.name;
        }
    };
})();
//# sourceMappingURL=types.js.map