function piccolo(arr) {
  let parking = new Set();
  for (const car of arr) {
    let [direction, carNumber] = car.split(",");
    if (direction === "IN") {
      parking.add(carNumber);
    } else {
      parking.delete(carNumber);
    }
  }
  let parkingArr = Array.from(parking);
  if (parkingArr.length > 0) {
    parkingArr.sort((a, b) => a.localeCompare(b));
    console.log(parkingArr.join("\n"));
  } else {
    console.log("Parking Lot is Empty");
  }
}

piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
