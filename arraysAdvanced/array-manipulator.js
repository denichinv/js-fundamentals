function arrayManipulator(arrOfInt, arrOfCommands) {
  for (const row of arrOfCommands) {
    let tokens = row.split(" ");
    let command = tokens.shift();
    let index = Number(tokens.shift());

    if (command === "add") {
      let element = Number(tokens.shift());
      arrOfInt.splice(index, 0, element);
    } else if (command === "addMany") {
      let elements = tokens.map(Number);
      arrOfInt.splice(index, 0, ...elements);
    } else if (command === "contains") {
      let element = Number(index);
      console.log(arrOfInt.indexOf(element));
    } else if (command === "remove") {
      arrOfInt.splice(index, 1);
    } else if (command === "shift") {
      index = index % arrOfInt.length;
      arrOfInt = arrOfInt.slice(index).concat(arrOfInt.slice(0, index));
    } else if (command === "sumPairs") {
      let modifiedArr = [];
      for (let i = 0; i < arrOfInt.length; i += 2) {
        let num1 = arrOfInt[i];
        let num2 = arrOfInt[i + 1] || 0;
        modifiedArr.push(num1 + num2);
      }
      arrOfInt = modifiedArr;
    } else if (command === "print") {
      console.log(`[ ${arrOfInt.join(", ")} ]`);
      return;
    }
  }
}
arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);

// arrayManipulator(
//   [1, 2, 3, 4, 5],
//   ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
// );
