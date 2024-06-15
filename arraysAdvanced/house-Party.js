function houseParty(arr) {
    let peopleGoing = [];
  
    for (let i = 0; i < arr.length; i++) {
      let currRow = arr[i].split(" ");
      let name = currRow[0];
  
      if (currRow.includes("not")) {
      
        if (peopleGoing.includes(name)) {
          peopleGoing = peopleGoing.filter(person => person !== name);
        } else {
          console.log(`${name} is not in the list!`);
        }
      } else {
    
        if (!peopleGoing.includes(name)) {
          peopleGoing.push(name);
        } else {
          console.log(`${name} is already in the list!`);
        }
      }
    }
  
    console.log(peopleGoing.join("\n"));
  }
  
  houseParty([
    "Allie is going!",
    "George is going!",
    "John is not going!",
    "George is not going!",
  ]);
  