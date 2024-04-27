class Hero {
    constructor(type, age, name, weapon) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.weapon = weapon;
    }
  
    attack() {
        console.log(`The ${this.type} called ${this.name} attacked using ${this.weapon}`);
    }
  }
  
  // Vetor para armazenar os heróis
  let heroes = [];
  
  // Função para criar e adicionar um herói ao vetor
  function addHero(type, age, name, weapon) {
    heroes.push(new Hero(type, age, name, weapon));
  }
  
  // Adicionando heróis ao vetor
  addHero("Wizard", 500, "Supreme Wizard", "Magic");
  addHero("Warrior", 17, "Kirito", "Sword");
  addHero("Monk", 51, "Chiriku", "Martial Arts");
  addHero("Ninja", 21, "Itachi", "Shurikens");
  
  // Loop para chamar o método de ataque de cada herói
  for (let hero of heroes) {
    hero.attack();
  }