"use strict";
(() => {
    const objetoPersona = {
        name: 'name1',
        activo: true,
        poder: 100,
        age: 20
    };
    const { poder, activo } = objetoPersona;
    console.log(poder, activo);
    const leerPersona = ({ name, age }) => {
        console.log(name, age);
    };
    leerPersona(objetoPersona);
    const arrayName = ['name1', 'name2', 'name3'];
    const [n1] = arrayName;
    console.log({ n1 });
})();
//# sourceMappingURL=desestructuracion.js.map