

(() => {

    //las funciones void no regresan nada (undefined)
    function callBatman(): void {
        return;
    }
    const callSuperman=():void=>{
        return
    }

    const a = callBatman();
    console.log(a);

})()