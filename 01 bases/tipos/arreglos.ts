
(()=>{

    //const numbers:(string | number | boolean )[] = [ 1,2,3,4,5,6,7,8,9]; //muy pocas veces se ve este caso

    const numbers:number[] = [ 1,2,3,4,5,6,7,8,9];

    numbers.push(11);
    console.log(numbers);
    
    const villans = ['Omega Rojo','Duende Verde','Dormammu'];

    villans.forEach( v => console.log( v.toUpperCase() ) )

    



})()