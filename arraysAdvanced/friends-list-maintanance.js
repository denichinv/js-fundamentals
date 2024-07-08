function friendListMaintanance(arr) {
  let friendList = arr.shift().split(", ");
  let command = arr.shift();
  let blacklistedCounter = 0;
  let lostNamesCount = 0;
  while (command !== "Report") {
    let tokens = command.split(" ");
    let action = tokens.shift();
    let nameOrIndex = tokens.shift();

    switch (action) {
      case "Blacklist":
        if (!friendList.includes(nameOrIndex)) {
          console.log(`${nameOrIndex} was not found.`);
        } else {
          let i = friendList.indexOf(nameOrIndex);
          let BlacklistedName = friendList[i];
          friendList.splice(i, 1, "Blacklisted");
          blacklistedCounter++;
          console.log(`${BlacklistedName} was blacklisted.`);
        }

        break;
      case "Error":
        let index = Number(nameOrIndex);
        if (
          index >= 0 &&
          index < friendList.length &&
          friendList[index] !== "Blacklisted" &&
          friendList[index] !== "Lost"
        ) {
          lostNamesCount++;
          let name = friendList[index];
          friendList[index] = "Lost";
          console.log(`${name} was lost due to an error.`);
        }

        break;
      case "Change":
        let i = Number(nameOrIndex);
        let n = tokens.shift();

        if (i >= 0 && i < friendList.length) {
          let currName = friendList[i];
          friendList.splice(i, 1, n);
          let newName = friendList[i];
          console.log(`${currName} changed his username to ${newName}.`);
        }

        break;
    }
    command = arr.shift();
  }
  console.log(`Blacklisted names: ${blacklistedCounter}`);
  console.log(`Lost names: ${lostNamesCount}`);
  console.log(friendList.join(" "));
}

friendListMaintanance([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);

// Maya was not found.
// John was lost due to an error.
// Blacklisted names: 0
// Lost names: 1
// Mike Lost Eddie William
