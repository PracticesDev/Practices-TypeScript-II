

(()=>{
    
    type Hero = {
        name:string,
        arma:string

    }

    const ironman: Hero={
        name:'Ironman',
        arma: 'escudo'
    }
    const capitan: Hero={
        name:'Cap',
        arma: 'escudo'
    }
    const thor: Hero={
        name:'thor',
        arma: 'martillo'
    }

    const avengers = [ ironman,thor,capitan]

    for (const avenger of avengers) { // recorre todo el array of nombre del array y el averger en singular sera la posicion recorrida
        console.log(avenger);
        console.log(avenger.name);
        
    }

})()