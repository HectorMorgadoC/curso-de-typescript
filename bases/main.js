"use strict";
(() => {
    class Avengers {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avengers.avgAge = 35;
    const antman = new Avengers('antman', 'capitan');
    console.log(antman);
    console.log(Avengers.avgAge);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Contructor avenger llamado');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(siMutant, name, realName) {
            super(name, realName);
            this.siMutant = siMutant;
        }
        getFullnameXmen() {
            console.log(super.getFullname());
        }
    }
    const wolverine = new Xmen(true, 'wolverine', 'logan');
    console.log(wolverine);
    wolverine.getFullnameXmen();
})();
(() => {
    class Avengers {
        static avrAgebio() {
            return 230;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return this.name, '--', this.team;
        }
        biotec() {
            console.log(this.name);
        }
    }
    Avengers.avrAge = 30;
    const antman = new Avengers('scoot lang', 'capitan');
})();
//# sourceMappingURL=main.js.map