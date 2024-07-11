function inventory(arr) {
  let heroes = [];

  for (const heroData of arr) {
    let [hero, level, items] = heroData.split(" / ");
    level = Number(level);
    let heroObj = { hero: hero, level: level, items: items };
    heroes.push(heroObj);
  }
  let sortedHeroes = heroes.sort((a, b) => a.level - b.level);
  for (const heroObj of sortedHeroes) {
    console.log(`Hero: ${heroObj.hero}`);
    console.log(`level => ${heroObj.level}`);
    console.log(`items => ${heroObj.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
