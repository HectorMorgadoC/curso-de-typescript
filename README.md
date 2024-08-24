# TYPESCRIPT
##### Para instalarlo bien sea en un proyecto o de manera global es mejor ir a su pagina oficial
https://www.typescriptlang.org/download/

- Typescript no compila, transpila, osea convierte un codigo en otro codigo no a binario como hacen las compilaciones

#### Para transpilar un archivo .ts
> ts nombreDelArchivo.ts

Este genera un archivo .js el cual es que el se podra usar en el navegador


#### TSConfig.json
Este json es el que se encarga de realzar las configuraciones de typescript,el cual se puede poner mas estricto el uso de typescript, la version de javascript etc. Para instalarlo en el proyecto
>tsc --init

Para que todos los archivos .ts apliquen la configuracion hechas en el tsconfig.json
>tsc

#### Modo observador (Watch)
>tsc --watch

#### Tipos de datos
- Booleanos
- Numeros
- String
- Tipo any
- Arreglos
- Tuplas
- Enumeraciones
- Interfaces
- Genericos
- Retorno void
- Null
- Undefined

#### Inferir datos
En tipe script cuando se declar auna constante o una variable sin asignar el tipo , este infiere el tipo de dato asi como lo hace javascript pero entre constante y variables existe una diferencia de inferencia

```typescript
const numero = 20;  // numero: 20
let numeros = 10; // numeros: number
```
Aqui las constante no se infiere a un tipo de dato si no al dato en cambio la variable si infiere el tipo de dato por eso es recomendable asignarle el tipo de dato
>const numero: number = 10;

### Nota: Funciones anonimas autoinvocadas 
```javascript
(
() => {
// script
})()
```

### Nota: si en console.log se quiere ver las variables de manera clave valor, se colocan dentro de parentesis

### Nota: el tipo de dato 'never' usado como retorno en una funcion quiere decir que esa fucnion no se terminara de cumplir y por lo general emite un error

### Nota: en teoria y para javascript tiene 4 valores booleanos true, false, undefined, null pero typescript tienen la manera de hacer esto esplicito y restringir esto y que solo sea booleano los valores de true y false

### Nota: en la configuracion del tsconfig.json el sourceMap genera un mapa para que en el navegador se pueda ver las referencias de typescript, el removeComments sirve para remover los comentarios del archivo.js transpilado, se agraga "exclude": [nombre del directorio] para excluir archivos.ts y no transpile de manera autoamatica, "include":[nombre del directorio] para que incluya archivos .ts

### Nota para configurar que todos los archivos ts transpilen a un archivo js se configura el tsconfig con  "outFile" = "./nombre del archivo.js" y en este archivo estara todo los acrchivos ts transpilado, para que este modulo no de error el "module" debe ser "amd" y no commonJs

RECOMENDACION: usar mas constante que variables, usar variables solo si se sabe que estas van hacer mutables