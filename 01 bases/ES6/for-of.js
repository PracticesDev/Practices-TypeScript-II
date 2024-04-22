"use strict";
(() => {
    const ironman = {
        name: 'Ironman',
        arma: 'escudo'
    };
    const capitan = {
        name: 'Cap',
        arma: 'escudo'
    };
    const thor = {
        name: 'thor',
        arma: 'martillo'
    };
    const avengers = [ironman, thor, capitan];
    for (const avenger of avengers) {
        console.log(avenger);
        console.log(avenger.name);
    }
})();
//# sourceMappingURL=for-of.js.map