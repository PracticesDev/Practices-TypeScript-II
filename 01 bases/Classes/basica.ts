
(()=>{

    // class Avenger {
    //     private name: string;
    //     public team: string
    //     public realName: string;
    //     static avgAge: number = 35;

    //     constructor( name:string, team: string, realName?:string){
    //         this.name = name;
    //         this.realName = realName;
    //         this.team = team;
    //     }


    // }

    // const atman :Avenger = new Avenger('Atman','Capitan');
    // console.log(atman);


    //PATRON 

        class Avenger {

        constructor( private name:string, public team: string,  public realName?:string){ }

        //Metodo

         public bio(){
            return `${this.name} (${this.team})`
        }


    }

    const atman :Avenger = new Avenger('Atman','Capitan','Scott Lang');
    console.log(atman);
    console.log("Llamada del metodo public",atman.bio());



    

})()