"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    const atman = new Avenger('Atman', 'Capitan', 'Scott Lang');
    console.log(atman);
    console.log("Llamada del metodo public", atman.bio());
})();
//# sourceMappingURL=basica.js.map