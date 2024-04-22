"use strict";
(() => {
    //equivale a un control de enumeracion de menor a mayor 
    //Forma de manejar numeros, se puede dar valor a min.medium, max
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.max;
    console.log(currentAudio);
})();
//# sourceMappingURL=enums.js.map