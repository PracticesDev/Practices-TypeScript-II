(() => {
    //EVITAR LO MAYOR POSIBLE EL TIPO any, dado que permite cualquier tipo de dato
    let avenger : any = 123;
    let exists; // si no se declara el tipo de dato TS lo tomara como any 
    let power;

    avenger = "Dr. Strange" 
    console.log(avenger.charAt(0));
    avenger = 150.15661 
    console.log(avenger.toFixed(2));
    
})()