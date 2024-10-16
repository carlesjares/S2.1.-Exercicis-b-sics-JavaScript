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


