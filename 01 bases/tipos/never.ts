

(() => {

    //Never es tipo never = no debe de terminar exitosa generalmente termina con error
    const error = (message: string):never =>{

        throw new Error(message);
        
    }

    error('Error');

})()