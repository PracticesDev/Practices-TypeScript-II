

(()=>{

    const fullName = (firstName:string, ...restArg: string[]):string =>{
        return `${firstName} ${restArg.join(' ')}`

    }

    const superman = fullName('nombre','de','ejemplo')
    console.log(superman);
    

})()