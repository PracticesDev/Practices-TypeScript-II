


(()=>{

    interface Xmen {
        name:string;
        realName:string;
        mutant( id:string ):string
    }

    interface Human{
        age:number
    }

    class Mutant implements Xmen,Human {

        public age:number;
        public name:string;
        public realName: string;
        mutant(id: string): string {
            return this.name + '' + this.realName
        }
    }
    

})()