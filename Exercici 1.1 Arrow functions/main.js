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
    console.log(`Hola, ${this.name}`);
  }
}

const persona = new Person('Joan');
persona.greet();  // Sortida: Hola, Joan




