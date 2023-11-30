'use strict'; // agregar modo estricto
import { lighting } from '../modulos/lighting.js';
import { helloWorld } from '../modulos/helloWorld.js';
import { adivinarNumero } from '../modulos/adivinarNumero.js';
import { perfilFalso } from '../modulos/perfilFalso.js';
import { fotoPerro } from '../modulos/fotoPerro.js';

helloWorld();
lighting();
adivinarNumero();
perfilFalso();
fotoPerro();

const ejercicios = [
    {   
        id: 1,
        tema: 'condicionales',
        descripcion: 'Leer nombre y apellido, saludar por nombre y apellido. Si el usuario no ingresa ningún dato, saludar hola desconocido',
        
    },
    {   
        id: 2,
        tema: 'condicionales',
        descripcion: 'Pregunte al usuario si desea continuar, responder con hola o adiós.'
    },
    {   
        id: 3,
        tema: 'condicionales',
        descripcion: 'Leer nombre y edad, Mostrar si es o no mayor de edad.'
    },
    {   
        id: 4,
        tema: 'condicionales',
        descripcion: 'Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.'
    },
    {   
        id: 5,
        tema: 'operadores',
        descripcion: 'Leer un número, mostrar el doble de n.'
    },
    {   
        id: 6,
        tema: 'operadores',
        descripcion: 'Leer un número, mostrar la mitad de n.'
    },

]

const cards = document.getElementById('cards');

let contenidoCard = '';


ejercicios.forEach(ej => {
    const $div = document.createElement('div');
    $div.className += 'card ';
    cards.appendChild($div);

    contenidoCard = `
        <h4> ${ej.id} </h4>
        <h3> ${ej.tema} </h3>
        <p> ${ej.descripcion} </p>
        <button> Ejecutar </button>
    `
    $div.innerHTML = contenidoCard
})









//Ejercicio 1: Leer nombre y apellido, saludar por nombre y apellido.

// function saludarUsuario (nombre, apellido){
//   document.write (`Hola ${nombre} ${apellido} " Bienvenid@"` );
// }

// saludarUsuario(prompt('Escriba su nombre: '), prompt('Escriba su apellido: '));

/*Ejercicio 2: Pregunte al usuario si desea continuar, responder con hola o adiós.

// function preguntaUser (rta){
//   if (rta == true) {
//     alert('Hola');
//   } else {
//     alert('Adiós');
//   }
// } 
//   preguntaUser(confirm('¿Desea continuar?'));
    
/*Ejercicio 3: Leer nombre y edad, Mostrar si es o no mayor de edad.

// function datos (nombre,edad) {
//   if (edad>= 18){
//   document.write(`Hola ${nombre}, eres mayor de edad`);
//   } else {
//      document.write(`Hola ${nombre}, eres menor de edad`);
//   }  
// }
 
// datos(prompt('Escriba su nombre: '), prompt('Escriba su edad: '));

/*Ejercicio 4: Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.

// function acceso (rol){
//   if (rol == 'admin') {
//     alert('Bienvenido administrador(a)');
//   } 
//   else if (rol == 'ventas'){
//     alert('Bienvenido vendedor(a)');
//   }
//   else if (rol == 'cliente'){
//     alert('Bienvenido cliente');
//   }
// }
// acceso(prompt('Por favor escriba su cargo'))

/*Ejercicio 5: Leer un número, mostrar el doble de n.

//  function calcularDoble (num){
//    if (num >= 0)
//    document.write(`El doble es ${num*2}`);
//  }

//  calcularDoble(prompt('Escriba un número'))

/*Ejercicio 6: Leer un número, mostrar la mitad de n.

//  function calcularMitad (numero){
//    if (numero >=0 )
//    document.write(`La mitad es ${numero/2}`);
//  }

//  calcularMitad(prompt('Escriba un número'))

/*Ejercicio 7: Leer un número, mostrar si es positivo, negativo o cero.

// function formaNumero (nume){
//   if (nume >0) {
//     document.write('Número positivo');
//   } else if (nume <0){
//     document.write('Número negativo');
//   }
//   else {
//     document.write('Cero');
//   }
// }

// formaNumero(prompt('Escribe un número'))

/*Ejercicio 8: Leer un número, mostrar si es par o impar.

// function numeroPar (number){
//   if(number %2 ==0){
//   document.write('Número par');
//   } else{
//     document.write('Número impar');
//   }
// }

// numeroPar(prompt('Por favor escriba un número:'))*/

/*Ejercicio 9: Leer dos números, mostrar el mayor.*/

// function numberMayor (uno,dos){
//   if (Number(uno) > Number(dos)){
//     document.write(`${uno} es mayor`);
//   } else{
//     document.write(`${dos} es mayor`);
//   }
// }

// numberMayor(prompt('Escriba un número:'), prompt ('Escriba un número diferente'))

//Ejercicio 10: Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).

// function operacionesBasicas (valor1, valor2){
//     const suma = Number(valor1) + Number(valor2);
//     const resta = valor1 - valor2;
//     const mult = valor1 * valor2;
//     const dividir = valor1 / valor2;
//     const resto = valor1 % valor2;
//     const expo = valor1 ** valor2;

//     console.log(suma);
//     console.log(resta);
//     console.log(mult);
//     console.log(dividir);
//     console.log(resto);
//     console.log(expo);
// }

// operacionesBasicas(prompt('Escribe el primer número:'), prompt('Escribe el segundo número'))

//Ejercicio 11: Leer dos números, mostrar la suma dividido en la resta.




// 1 Pedir un número y mostrar los números pares desde 1 hasta n.
// function obtenerPares(num){
//   for(let i=1; i<=num; i++){
//       if(i%2 === 0){
//         document.write(`${i},`);
//       }
//   }
// }
// obtenerPares(prompt('Escriba un número: '));


// 2 Pedir un número, mostrar la suma total desde 1 hasta n.
// function sumar (num){
// 	let total = 0;
// 	for(let i = 0; i <= num ; i++){
// 		total += i;
// 	}
// 	document.write(`El total es: ${total}`);
// }
// sumar(prompt('Escriba un número: '));


//3 Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
// function sumarPares (num){
// 	let total = 0;
// 	for(let i = 0; i <= num ; i++){
// 		if(i%2===0){
// 			total += i;
// 		}
// 	}
// 	document.write(`El total de la suma de los pares: ${total}`);
// }
// sumarPares(prompt('Escriba un número: '));


// 4 Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
// function sumarImpares (num){
// 	let total = 0;
// 	for(let i = 0; i <= num ; i++){
// 		if(i%2 !==0){
// 			total += i;
// 		}
// 	}
// 	document.write(`El total de la suma de los impares es: ${total}`);
// }
// sumarImpares(prompt('Escriba un número: '));



// 5 Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
// function mostrarMultiplosDeTres(num){
// 	for (let i = 1; i<=num; i++){
// 		if(i%3 === 0){
// 			document.write(`${i},`)
// 		}
// 	}
// }
// mostrarMultiplosDeTres(prompt('Escriba un número: '));



// 6 Pedir un número, mostrar los números desde n hasta 0.
// function countDown (num){
// 	for(let i = num; num>=0; num--){
// 		document.write(`${num},`);
// 	}
// }
// countDown(prompt('Escriba un número: '));


// 7 Pedir un número, mostrar los números desde 0 hasta n.
// function countUp (num) {
// 	for(let i = 0; i <= num ; i++){
// 		document.write(`${i}\n`);
// 	}
// }
// countUp(prompt('Escriba un número: '));


// 8 Pedir un número, mostrar su tabla de multiplicar d
// function tablaDeMultiplicar(num){
// 	for(let i = 1; i <= 10; i++){
// 		document.write(`${num} x ${i} = ${num*i} | `);
// 	}
// }
// tablaDeMultiplicar(prompt('Escriba un número: '))

