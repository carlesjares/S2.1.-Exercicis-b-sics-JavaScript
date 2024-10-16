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

// function esperarISaludar(nom, callback) {
//   setTimeout(() => {
//     callback(nom);
//   }, 2000); 
// }

// function saludar(nom) {
//   console.log(`Hola, ${nom}!`);
// }

// esperarISaludar("Anna", saludar);

// // EXERCICI 4

// function processarElements(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// }

// function mostrarElement(element) {
//   console.log(`Element: ${element}`);
// }

// const elements = [1, 2, 3, 4, 5];
// processarElements(elements, mostrarElement);

// NIVELL 3
// EXERCICI 4

// function processarCadena(cadena, callback) {
//   const cadenaTransformada = cadena.toUpperCase(); // Convertir la cadena a majúscules
//   callback(cadenaTransformada); // Invocar el callback amb la cadena transformada
// }

// function mostrarCadenaTransformada(cadena) {
//   console.log(`Cadena transformada: ${cadena}`);
// }

// // Exemple d'ús
// const cadenaOriginal = 'la classe de react ha començat';
// processarCadena(cadenaOriginal, mostrarCadenaTransformada);



// 1.4: Rest & Spread operators
// NIVELL 1 

// Exercici 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array 
// que contingui tots els elements de array1 i array2.

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// // Utilitzant l'operador spread per a combinar array1 i array2
// let array3 = [...array1, ...array2];

// console.log(array3);

// exercici 2 

// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat
//  d'arguments i retornar la seva suma.

// function suma(...numeros) {

//     return numeros.reduce((total, num) => total + num );
// }
// console.log(suma(1, 10, 22));


// Nivell 2
// Exercici 3
// Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 
// 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread.
//  Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

// const objecte1 = {
//   name: 'carles',
//   id: 1234,
//   product: 'barcelona activa',
//   exercici: 'copiant objectes'
// }
// const objecte2 = {...objecte1}
// // Modifiquem una propietat de objecte2
// objecte2.exercici = 'modicacio objecte';
// console.log(objecte1,objecte2)


// Exercici 4
// Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador 
// rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

// const numeros = [1, 2, 3, 4, 5, 6];

// const [primer, segon, ...rest] = numeros;

// console.log(primer);
// console.log(segon);
// console.log(rest);


// Nivell 3
// Exercici 5
// Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i 
// crida la funció utilitzant l'operador spread amb aquesta array.

function mostrarArguments(uno, dos, tres){
  console.log(uno, dos, tres)
}
const array = [1, 2, 3];

mostrarArguments(...array)

// Exercici 6
// Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar
//  aquests dos objectes en un de nou.

const objecte1 = {
  email: 'gfjksfsd@gmail.com',
  empresa: 'barcelona activa',
 
}

const objecte2 = {
  name: 'pepe',
  id: 7654,
  exercici: 'fusionar objectes'
}

const fullobjecte = {...objecte1, ...objecte2};
console.log(fullobjecte);