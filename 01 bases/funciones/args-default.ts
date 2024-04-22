
(()=>{

    //Argumentos por defectos firstName:string, lastName?:string , upper: boolean= false
    // se definen colocando el valor junto a la definicion del tipo de dato ejemplo  upper: boolean= false

    const fullName = ( firstName:string, lastName?:string , upper: boolean= false ):string =>{

        if( upper){
            return `${firstName} ${lastName}`.toUpperCase();
        }
        else{
            return `${firstName} ${lastName || '---'}`

        }

    }

    const name = fullName('Tony','Stark',true)


})()