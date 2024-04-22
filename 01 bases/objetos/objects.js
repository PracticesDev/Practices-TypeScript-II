"use strict";
(() => {
    //Objetos literales se deben definir y al momento de usarlos o cambiarlos como en este ejemplo
    //se debe utilizar los mismos tipos de datos 
    let flash = {
        name: 'nombrex',
        age: 100,
        power: ['fuerza', 'algo']
    };
    // flash = {
    //     name:'nobrey',
    //     age: 60,
    //     power:['poder1']
    // }
    //Objetos con tipos especificos
    let tony = {
        name: 'nombrex',
        //age: 100, // en caso de querer que un tipo de dato del objeto sea opcional se debe poner  ? 
        age: 100,
        power: ['fuerza', 'algo']
    };
    //Metodos dentro de objetos
    let brus = {
        name: 'nombrex',
        age: 100,
        power: ['fuerza', 'algo'],
        getName() {
            return this.name;
        }
    };
})();
//# sourceMappingURL=objects.js.map