class Human {
  constructor(
    name,
    strength = 3,
    intelligence = 3,
    dexterity = 3,
    health = 100,
  ) {
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.health = health;
  }

  attack(target) {
    const damage = 5 * this.strength;
    target.takeDamage(damage);
    console.log(`${this.name} attacks ${target.name} for ${damage} damage.`);
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated!`);
    } else {
      console.log(
        `${this.name} takes ${damage} damage. ${this.name}'s health: ${this.health}`,
      );
    }
  }
}

let human1 = new Human("John");
let human2 = new Human("Alice", 5, 7, 4, 120);

human1.attack(human2); // John attacks Alice for 15 damage!
human2.attack(human1); // Alice attacks John for 25 damage!

class Ninja extends Human {
  constructor(name, strength, intelligence, dexterity = 175, health) {
    super(name, strength, intelligence, dexterity, health);
  }

  steal(obj) {
    this.health += 10;
    console.log(
      `${this.name} stole ${obj} and gained for ${10} health. Health: ${this.health}`,
    );
  }
}

class Wizard extends Human {
  constructor(name, strength, intelligence = 25, dexterity, health = 50) {
    super(name, strength, intelligence, dexterity, health);
  }

  heal() {
    this.health += 10 * this.intelligence;
    console.log(
      `${this.name} healed for ${10 * this.intelligence}. Health: ${this.health}`,
    );
  }
}

class Samurai extends Human {
  constructor(name, strength, intelligence, dexterity, health = 200) {
    super(name, strength, intelligence, dexterity, health);
  }

  death_blow(target) {
    if (this.health < 50) {
      this.health = 0;
    }
    console.log(`${this.name} attacked ${target.name}. Health: ${this.health}`);
  }

  meditate() {
    this.health += 200;
    console.log(`${this.name} healed for ${200}. Health: ${this.health}`);
  }
}

let ninja = new Ninja("Naruto", 5, 7, undefined, 120);
let wizard = new Wizard("Gandalf", 4, undefined, 6);
let samurai = new Samurai("Hattori Hanzo", 8, 6, 7);

ninja.steal("Gold");
wizard.heal();
samurai.attack(ninja);
samurai.death_blow(wizard);
samurai.meditate();
