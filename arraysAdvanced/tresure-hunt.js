function tresureHunt(arr) {
    let tresureChest = arr.shift().split("|");
    let command = arr.shift();
  
    while (command !== "Yohoho!") {
      let actions = command.split(" ");
      let action = actions.shift();
  
      if (action === "Loot") {
        for (const item of actions) {
          if (!tresureChest.includes(item)) {
            tresureChest.unshift(item);
          }
        }
      } else if (action === "Drop") {
        let index = Number(actions.shift());
        if (index >= 0 && index < tresureChest.length) {
          let droppedItem = tresureChest.splice(index, 1);
          tresureChest.push(droppedItem);
        }
      } else if (action === "Steal") {
        let count = Number(actions.shift());
        let stolenItems;
        if (count >= tresureChest.length) {
          stolenItems = tresureChest.splice(0, tresureChest.length);
        } else {
          stolenItems = tresureChest.splice(-count);
        }
        console.log(stolenItems.join(", "));
      }
  
      command = arr.shift();
    }
  
    if (tresureChest.length > 0) {
      let totalLength = tresureChest.reduce((acc, item) => acc + item.length, 0);
      let averageGain = (totalLength / tresureChest.length).toFixed(2);
      console.log(`Average treasure gain: ${averageGain} pirate credits.`);
    } else {
      console.log("Failed treasure hunt.");
    }
  }
tresureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
