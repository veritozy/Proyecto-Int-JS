// DECLARAR VARIABLES
let nombre;
nombre="Pedro";

// IMPRIMIR UN MENSAJE EN CONSOLA 
console.log(nombre);

let apellido="Picapiedra";
console.log(apellido);

// CONCATENAR CADENAS EN JS
console.log("Mi nombre es " +nombre + " y mi appellido " +apellido);
// TEMPLATE DE CADENAS O INTERPOLACIÓN DE CADENAS
console.log(`Mi nombre es ${nombre} y mi apellido ${apellido}`);

// TIPO DE DATO NAN
let numero=9;
let letra="a";

let suma=numero*letra;
console.log(suma);

// IMPRIMIR CON DOCUMENT.WRITE
// document.writeln(`Mi nombre es ${nombre} y mi apellido ${apellido}`);
// IMPRIMIR CON UN ALERT
// window.alert(`Mi nombre es ${nombre} y mi apellido ${apellido}`);

// TIPO DE DATO OBJETO
const persona={
    nombre: "Pablo",
    apellido:"Marmol",
    edad: 30,
    contacto:{
        telefono: "0999999",
        email: "pablo@gmail.com",
        instagram: "@pablito"
    },
    pasatiempos: ["Leer", "Correr", "Cocinar"],
    saludar:function(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

console.log(persona.nombre);
persona.saludar();
console.log(persona.contacto.email);

// IMPRIMIR LAS PROPIEDADES DE UN OBJETO
console.log(Object.keys(persona));
// IMPRIMIR LOS VALORES DE UN OBJETO
console.log(Object.values(persona));

// TIPO DE DATO ARREGLO
const array=[2, "Tatiana", 34, "Lola", true, [1,2,3,4,5]];
console.log(array);
console.log(array[3]);
console.log(array[5][2]);
array.push("Rosa");
console.log(array);
array.pop();
console.log(array);

const array2=Array(50).fill("Verónica");
console.log(array2);

// DESTRUCTURACIÓN DE ARREGLOS
const b=[1,2,3];
const[one, two, three]=b;
console.log(one);

console.log(b[0]);

console.log(three, one, two);

// DESTRUCTURACIÓN DE OBJETOS
const empleado={
    nombre1: "Benjamín",
    apellido1: "Ponce",
    estudios:{
        primaria: "VL",
        secundaria: "Mejía",
        superior: "ITSQMET",
    }
}

let{nombre1, apellido1, estudios:{primaria, secundaria, superior}}=empleado;
console.log(nombre1);
console.log(primaria);
console.log(superior);

console.log(empleado.nombre1);
console.log(empleado.estudios.superior);



