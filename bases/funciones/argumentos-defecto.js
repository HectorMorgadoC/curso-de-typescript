"use strict";
(() => {
    // el ? en el argumento dice que esto puede ser opcional
    // los argumentos opcionales siempre deben ir de ultimo
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
