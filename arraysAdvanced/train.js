function train(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());

  for (let index = 0; index < arr.length; index++) {
    let currRow = arr[index].split(" ");

    if (currRow.includes("Add")) {
      wagons.push(Number(currRow[1]));
    } else {
      let passengersToAdd = Number(currRow[0]);

      for (let i = 0; i < wagons.length; i++) {
       

        if (wagons[i] + passengersToAdd <= maxCapacity) {
          wagons[i] += passengersToAdd;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
