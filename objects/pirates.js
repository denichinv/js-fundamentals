function pirates(arr) {
  let cities = {};
  let row = arr.shift();
  while (row !== "Sail") {
    let [cityName, cityPopulation, cityGold] = row.split("||");
    cityPopulation = Number(cityPopulation);
    cityGold = Number(cityGold);

    if (cityName in cities) {
      cities[cityName].population += cityPopulation;
      cities[cityName].gold += cityGold;
    } else {
      cities[cityName] = { population: cityPopulation, gold: cityGold };
    }

    row = arr.shift();
  }

  row = arr.shift();

  while (row !== "End") {
    let tokens = row.split("=>");
    let command = tokens.shift();
    let cityName = tokens.shift();

    if (command === "Plunder") {
      let peopleKilled = Number(tokens.shift());
      let cityGold = Number(tokens.shift());

      cities[cityName].population -= peopleKilled;
      cities[cityName].gold -= cityGold;

      if (cities[cityName].population <= 0 || cities[cityName].gold <= 0) {
        console.log(
          `${cityName} plundered! ${cityGold} gold stolen, ${peopleKilled} citizens killed.`
        );
        console.log(`${cityName} has been wiped off the map!`);

        delete cities[cityName];
      } else {
        console.log(
          `${cityName} plundered! ${cityGold} gold stolen, ${peopleKilled} citizens killed.`
        );
      }
    } else if (command === "Prosper") {
      let goldAcquired = Number(tokens.shift());
      if (goldAcquired < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        cities[cityName].gold += goldAcquired;
        console.log(
          `${goldAcquired} gold added to the city treasury. ${cityName} now has ${cities[cityName].gold} gold.`
        );
      }
    }

    row = arr.shift();
  }

  let entries = Object.entries(cities);
  let count = entries.length;

  if (count > 0) {
    console.log(
      `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
    );
    for (const city of entries) {
      console.log(
        `${city[0]} -> Population: ${city[1].population} citizens, Gold: ${city[1].gold} kg`
      );
    }
  } else {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  }
}
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
