function theHuntingGames(arr) {
    const days = Number(arr.shift());
    const players = Number(arr.shift());
    let groupEnergy = Number(arr.shift());
    const waterPerDayFor1 = Number(arr.shift());
    const foodPerDayFor1 = Number(arr.shift());
  
    let totalWaterNeeded = days * players * waterPerDayFor1;
    let totalFoodNeeded = days * players * foodPerDayFor1;
  
    for (let i = 0; i < days; i++) {
      let currDayEnergyLoss = Number(arr[i]);
      groupEnergy -= currDayEnergyLoss;
  
      if (groupEnergy <= 0) {
        console.log(`You will run out of energy. You will be left with ${totalFoodNeeded.toFixed(2)} food and ${totalWaterNeeded.toFixed(2)} water.`);
        return;
      }
  
      if ((i + 1) % 2 === 0) {
        groupEnergy += groupEnergy * 0.05;
        totalWaterNeeded -= totalWaterNeeded * 0.3;
      }
  
      if ((i + 1) % 3 === 0) {
        groupEnergy += groupEnergy * 0.1;
        totalFoodNeeded -= totalFoodNeeded / players;
      }
    }
  
    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
  }
  
  
theHuntingGames([
  "10", //     •	On the 1st line, you will receive a number N - the days of the adventure – an integer in the range [1…100].
  "7", // •	On the 2nd line – the number of players – an integer in the range [1 – 1000].
  "5035.5", // •	On the 3rd line - the group's energy – a real number in the range [1 - 50000].
  "11.3", // •	On the 4th line – water per day for one person – a real number [0.00 – 1000.00].
  "7.2", // •	On the 5th line – food per day for one person – a real number [0.00 – 1000.00].
  "942.3", // •	On the next N lines – one for each of the days – the amount of energy loss– a real number in the range [0.00 - 1000.00].
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);

// •	You will always have enough food and water.
