function heroesOfCodeAndLogic(arr) {
  class Hero {
    constructor(name, hp, mp) {
      this.name = name;
      this.hp = Number(hp);
      this.mp = Number(mp);
    }

    CastSpell(tokens) {
      let mpNeeded = Number(tokens[2]);
      let spellName = tokens[3];

      if (mpNeeded <= this.mp) {
        this.mp -= mpNeeded;
        console.log(
          `${this.name} has successfully cast ${spellName} and now has ${this.mp} MP!`
        );
      } else {
        console.log(
          `${this.name} does not have enough MP to cast ${spellName}!`
        );
      }
    }
    TakeDamage(tokens) {
      let dmg = Number(tokens[2]);
      let attacker = tokens[3];
      if (this.hp - dmg > 0) {
        this.hp -= dmg;
        console.log(
          `${this.name} was hit for ${dmg} HP by ${attacker} and now has ${this.hp} HP left!`
        );
      } else {
        console.log(`${this.name} has been killed by ${attacker}!`);
        delete party[this.name];
      }
    }
    Recharge(tokens) {
      let mpToAdd = Number(tokens[2]);
      if (this.mp + mpToAdd > 200) {
        mpToAdd = 200 - this.mp;
        this.mp = 200;
      } else {
        this.mp += mpToAdd;
      }
      console.log(`${this.name} recharged for ${mpToAdd} MP!`);
    }
    Heal(tokens) {
      let hpToAdd = Number(tokens[2]);
      if (hpToAdd + this.hp > 100) {
        hpToAdd = 100 - this.hp;
        this.hp = 100;
      } else {
        this.hp += hpToAdd;
      }
      console.log(`${this.name} healed for ${hpToAdd} HP!`);
    }
  }
  let party = {};
  let n = Number(arr.shift());
  for (let i = 0; i < n; i++) {
    const [name, hp, mp] = arr.shift().split(" ");
    party[name] = new Hero(name, hp, mp);
  }

  let row = arr.shift();

  while (row !== "End") {
    let tokens = row.split(" - ");
    let command = tokens[0];
    let name = tokens[1];

    let hero = party[name];
    hero[command](tokens);

    row = arr.shift();
  }

  for (const name in party) {
    let hero = party[name];
    console.log(hero.name);
    console.log(`  HP: ${hero.hp}`);
    console.log(`  MP: ${hero.mp}`);
  }
}
heroesOfCodeAndLogic([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
