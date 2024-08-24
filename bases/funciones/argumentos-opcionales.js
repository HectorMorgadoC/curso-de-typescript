"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return firstName + " " + (lastName || '-----');
    };
    const nameHero = fullName("tony", "stark");
    console.log({ nameHero });
})();
//# sourceMappingURL=argumentos-opcionales.js.map