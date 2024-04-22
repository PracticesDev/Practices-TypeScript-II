"use strict";
(() => {
    //Argumentos por defectos firstName:string, lastName?:string , upper: boolean= false
    // se definen colocando el valor junto a la definicion del tipo de dato ejemplo  upper: boolean= false
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '---'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
})();
//# sourceMappingURL=args-default.js.map