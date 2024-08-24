"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return firstName + " ** " + (lastName || "-----").toUpperCase();
        }
        else {
            return firstName + " ** " + (lastName || "-----");
        }
    };
    const nameHero = fullName("tony", "stark", true);
    console.log({ nameHero });
})();
//# sourceMappingURL=argumentos-defecto.js.map