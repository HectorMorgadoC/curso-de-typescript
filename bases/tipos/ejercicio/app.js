"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    let Heroe;
    (function (Heroe) {
        Heroe[Heroe["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        Heroe[Heroe["fuerzaBatman"] = 1] = "fuerzaBatman";
        Heroe[Heroe["fuerzaFlash"] = 2] = "fuerzaFlash";
        Heroe[Heroe["fuerzaSuperman"] = 3] = "fuerzaSuperman";
    })(Heroe || (Heroe = {}));
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
