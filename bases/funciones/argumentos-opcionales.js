"use strict";
(() => {
    // el ? en el argumento dice que esto puede ser opcinal
    const fullName = (firstName, lastName) => {
        return firstName + " " + (lastName || '-----');
    };
    const nameHero = fullName("tony", "stark");
    console.log({ nameHero });
})();
