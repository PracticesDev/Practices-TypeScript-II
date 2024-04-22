(() => {

    type Persona = {
        name: string;
        activo: boolean;
        poder: number;
        age: number;
    }

    const objetoPersona: Persona = {
        name: 'name1',
        activo: true,
        poder: 100,
        age: 20
    }

    const { poder, activo } = objetoPersona
    console.log(poder, activo);

    const leerPersona = ({ name, age }: Persona) => {
        console.log(name, age);
    }

    leerPersona(objetoPersona);


    //Desestructuracion Array

    const arrayName:string[] = ['name1', 'name2','name3']
    const [ n1 ]= arrayName // el valor buscado en la desestructuracion en el array puede ser cualquier nombre
    console.log({n1});
    

})()