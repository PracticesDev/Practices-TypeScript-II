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
    //Desestructuracion Array
    const arrayName = ['name1', 'name2', 'name3'];
    const [n1] = arrayName; // el valor buscado en la desestructuracion en el array puede ser cualquier nombre
    console.log({ n1 });
})();
//# sourceMappingURL=desestructuracion.js.map