
(()=>{

    //Argumentos opcionales firstName:string, lastName?:string
    // el simbolo de ? permite a TS que el argumento sea opcional 

    const fullName = ( firstName:string, lastName?:string ):string =>{

        return `${firstName} ${lastName}`

    }

    const name = fullName('Tony')


})()