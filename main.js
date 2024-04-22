"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.realName = realName;
            this.team = team;
        }
    }
    Avenger.avgAge = 35;
    const atman = new Avenger('Atman', 'Capitan');
    console.log(atman);
})();
(() => {
    const objetoPersona = {
        name: 'name1',
        activo: true,
        poder: 100,
        age: 20
    };
    const { poder, activo } = objetoPersona;
    console.log(poder, activo);
    const leerPersona = ({ name, age }) => {
        console.log(name, age);
    };
    leerPersona(objetoPersona);
    const arrayName = ['name1', 'name2', 'name3'];
    const [n1] = arrayName;
    console.log({ n1 });
})();
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
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '---'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony');
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
})();
(() => {
    const fullName = (firstName, ...restArg) => {
        return `${firstName} ${restArg.join(' ')}`;
    };
    const superman = fullName('nombre', 'de', 'ejemplo');
    console.log(superman);
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activeBatisignal = () => {
        return 'Batiseñal enviada!';
    };
    console.log(typeof activeBatisignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'nombrex',
        age: 100,
        power: ['fuerza', 'algo']
    };
    let tony = {
        name: 'nombrex',
        age: 100,
        power: ['fuerza', 'algo']
    };
    let brus = {
        name: 'nombrex',
        age: 100,
        power: ['fuerza', 'algo'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let flas = {
        name: 'nombrex',
        age: 100,
        power: ['fuerza', 'algo'],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'nombrex',
        age: 100,
        power: ['fuerza', 'algo'],
        getName() {
            return this.name;
        }
    };
    let batman = {
        name: 'nombrex',
        age: 100,
        power: ['fuerza', 'algo'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVariable = 'UnString';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'nameX',
        age: 45,
        power: ['poder1']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr. Strange";
    console.log(avenger.charAt(0));
    avenger = 150.15661;
    console.log(avenger.toFixed(2));
})();
const msg = 'Hola mundo!';
const hero = {
    name: 'IronMan',
    age: 45
};
hero.age = 50;
console.log(hero.age + 1);
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.push(11);
    console.log(numbers);
    const villans = ['Omega Rojo', 'Duende Verde', 'Dormammu'];
    villans.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.max;
    console.log(currentAudio);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Error');
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("Problems");
    }
    else {
        console.log("Salvo");
    }
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    console.log(batman);
    const existe = false;
    console.log(existe);
    const parejaHeroes = [batman, superman];
    console.log(parejaHeroes);
    const villano = ['Lex', 5, true];
    console.log(villano);
    const aliados = ['MujerM', 'Aqueman', 'San'];
    console.log(aliados);
})();
(() => {
    var _a;
    const batman = 'Batman';
    const LinternaVerde = 'LinternaVerde';
    const volcanNegro = `Heroe: Volcan Negro`;
    console.log(`Yo soy ${batman}`);
    console.log((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase());
})();
(() => {
    const hero = ['Dr Strange', 100];
    hero[0] = 'Vengador';
    hero[1] = 50;
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map