function arrayManipulation(arr) {
  const NewArr = arr.shift().split(" ").map(Number);

  for (let i = 0; i < arr.length; i++) {
    const commandParts = arr[i].split(" ");
    const command = commandParts[0];
    const num1 = Number(commandParts[1]);

    switch (command) {
      case "Add":
        NewArr.push(num1);
        break;
      case "Remove":
        for (let j = NewArr.length - 1; j >= 0; j--) {
          if (NewArr[j] === num1) {
            NewArr.splice(j, 1);
          }
        }
        break;
      case "RemoveAt":
        if (num1 >= 0 && num1 < NewArr.length) {
          NewArr.splice(num1, 1);
        }
        break;
      case "Insert":
        const num2 = Number(commandParts[2]);
        if (num2 >= 0 && num2 <= NewArr.length) {
          NewArr.splice(num2, 0, num1);
        }
        break;
    }
  }

  console.log(NewArr.join(" "));
}

// Example usage
arrayManipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
