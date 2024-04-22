

(()=>{
    //equivale a un control de enumeracion de menor a mayor 
    //Forma de manejar numeros, se puede dar valor a min.medium, max
     
    enum AudioLevel {
      min,
      medium,
      max  
    }

    const currentAudio = AudioLevel.max;

    console.log(currentAudio);
    
})()