function gladiatorInventory(arr) {
  let equipment = arr.shift().split(" ");

  for (const tokens of arr) {
    let [command, gear] = tokens.split(" ");

    switch (command) {
      case "Buy":
        equipment.push(gear);
        break;
      case "Trash":
        let deleteIndex = equipment.indexOf(gear);
        equipment.splice(deleteIndex, 1);
        break;
      case "Repair":
        if (equipment.includes(gear)) {
          let index = equipment.indexOf(gear);
          let gearForRepair = equipment.splice(index, 1);
          equipment.push(gearForRepair[0]);
        }
        break;
      case "Upgrade":
        let updatedGear = gear.split("-");
        let gearCheck = updatedGear[0];
        let finalGear = updatedGear.join(":");

        if (equipment.includes(gearCheck)) {
          let index = equipment.indexOf(gearCheck);
          equipment.splice(index + 1, 0, finalGear);
        }
        break;
    }
  }

  console.log(equipment.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
