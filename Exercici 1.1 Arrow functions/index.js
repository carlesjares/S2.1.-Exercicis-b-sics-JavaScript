//NIVELL 1 

//Exercici 1 

const add = (a, b) => a+ b;

// Exercici 2

const randomNumber = () => Math.random() * 100;

document.getElementById('number').textContent = randomNumber().toFixed(2);

// Exercici 3 

class Person {
    constructor(name) {
      this.name = name;
    }

    greet = () => {
      (`Hola, ${this.name}`);
    }
  }

  // Crear una instància de la classe Person
  const persona = new Person('Anna');

  // Afegeix un esdeveniment al botó per trucar a la funció greet
  document.getElementById('salutacio').addEventListener('click', () => {
    persona.greet(); // Quan es fa clic, imprimirà: Hola, Anna
  });