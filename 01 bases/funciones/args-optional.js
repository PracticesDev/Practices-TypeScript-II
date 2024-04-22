"use strict";
(() => {
    //Argumentos opcionales firstName:string, lastName?:string
    // el simbolo de ? permite a TS que el argumento sea opcional 
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony');
})();
//# sourceMappingURL=args-optional.js.map