(() => {
  // el ? en el argumento dice que esto puede ser opcional
  // los argumentos opcionales siempre deben ir de ultimo
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        
        if ( upper ) {
            return firstName + " ** " + (lastName || "-----").toUpperCase();
        } else {
            return firstName + " ** " + (lastName || "-----");
        }
        
        
    };

    const nameHero: string = fullName("tony", "stark",true);

    console.log({ nameHero });
})();
