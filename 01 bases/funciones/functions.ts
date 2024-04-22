
(()=>{

    const hero: string = 'Flash'

    function returnName():string {
        return hero;
    }

    const activeBatisignal = ():string =>{ // tener presente que string es el tipo de dato que devolvera la funcion
        return 'Batiseñal enviada!'
    }

    console.log(typeof activeBatisignal)

    const heroName = returnName();


})()