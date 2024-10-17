//NIVELL 1 

//Exercici 1 

// let add = (a, b) => a+ b;

// console.log(add(3, 5)); // Sortida: 8

// Exercici 2

// let randomNumber = () => Math.floor(Math.random() * 101);

// console.log(randomNumber(56));

// Exercici 3 

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet = () => {
//     console.log(`Hola, ${this.name}`);
//   }
// }

// let persona = new Person('Joan');
// persona.greet();  // Sortida: Hola, Joan



// NIVELL 2

//EXERCICI 4

// let printNumbers = (numbers) => {
//   for (let i = 0; i < numbers.length; i++) {
//     (() => console.log(numbers[i]))();  // Funció de fletxa dins del bucle
//   }
// };

// let nums = [10, 20, 30, 40, 50];
// printNumbers(nums);

// NIVELL 3
//EXERCICI 5 

// setTimeout(() => {
//   console.log("Retrasado por 3 segundo.");
// }, 3000);




// Exercici 1.2: Operador ternari

// NIVELL 1

// exercici 1
// const potConduir = (edat) => edat >= 18 ? 'Pots conduir' : 'No pots conduir';

// console.log(potConduir(20)); 
// console.log(potConduir(16));

// EXERCICI 2

// const majorNombre = (num1, num2) => num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';

// console.log(majorNombre(10, 5));  // Sortida: num1 és més gran
// console.log(majorNombre(3, 8));   // Sortida: num2 és més gran





// NIVELL 2
// EXERCICI 3

// let verificarNumero = (num) => 
//   num > 0 ? 'Positiu' : num < 0 ? 'Negatiu' : 'Zero';

// console.log(verificarNumero(10));  // Sortida: Positiu
// console.log(verificarNumero(-5));  // Sortida: Negatiu
// console.log(verificarNumero(0));   // Sortida: Zero

// let trobarMaxim = (a, b, c) => 
//   a > b 
// ? (a > c ? a : c) 
//     : (b > c ? b : c);

// console.log(trobarMaxim(10, 5, 8));  // Sortida: 10
// console.log(trobarMaxim(3, 12, 9));  // Sortida: 1
// console.log(trobarMaxim(1, 4, 7));   // Sortida: 7




// NIVELL 3
// exercici 4

// const parOImpar = (numbers) => {
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] % 2 === 0 ? `${numbers[i]} és parell` : `${numbers[i]} és imparell`);
//   }
// };

// const nums = [1, 2, 3, 4, 5, 6];
// parOImpar(nums);


// EXERCICI 1.3 CALLBACKS

// NIVELL1
// exercici 1 
// function processar(nombre, callback) {
//   callback(nombre);
// }

// function mostrarDoble(num) {
//   console.log(`El doble de ${num} és ${num * 2}`);
// }

// processar(5, mostrarDoble); 

// EXERCICI2
// function calculadora (nombre1,nombre2,callback){
//   callback(nombre1,nombre2);
// }

// function sumaNombres(num1,num2) {
//   console.log(`la suma de ${num1} y ${num2} es ${num1 + num2}`);
// }

// calculadora(8,32, sumaNombres);

// NIVELL 2
// EXERCICI 3

function esperarISaludar(nom, callback) {
  setTimeout(() => {
    callback(nom);
  }, 2000); 
}

function saludar(nom) {
  console.log(`Hola, ${nom}!`);
}

esperarISaludar("Anna", saludar);

// EXERCICI 4

// Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una 
// funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.
function processarElements(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function mostrarElement(element) {
  console.log(`Element: ${element}`);
}

const elements = [1, 2, 3, 4, 5];
processarElements(elements, mostrarElement);
// Sortida:
// Element: 1
// Element: 2
// Element: 3
// Element: 4
// Element: 5



