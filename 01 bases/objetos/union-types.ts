

(()=>{

    type Heroe = {
        name:string,
        age?: number,
        power:string[], 
        getName?: ()=> string
    }

    let myCustomVariable: (string | number | Heroe) = 'UnString'
    console.log(myCustomVariable);
    
    myCustomVariable=20
    console.log(myCustomVariable);
    
    myCustomVariable={
        name:'nameX',
        age: 45,
        power:['poder1']
    }
    console.log( typeof myCustomVariable);
    console.log( myCustomVariable);

    //TAMBIEN SE PUEDE LLEGAR A TENER DIFERENTES TIPOS COMO SE OBSERVA EN ESTE CASO
    // DE TIPO STRING , NUMBER Y TYPE(HEROE)


})()