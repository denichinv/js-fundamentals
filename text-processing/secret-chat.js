function secretChat(arr) {
  let msg = arr.shift();
  let row = arr.shift();

  while (row !== "Reveal") {
    let tokens = row.split(":|:");
    let command = tokens[0];

    switch (command) {
      case "InsertSpace":
        let index = Number(tokens[1]);

        msg = msg.slice(0, index) + " " + msg.slice(index);
        console.log(msg);
        break;

      case "Reverse":
        let substring = tokens[1];

        let firstIndex = msg.indexOf(substring);
        if (firstIndex === -1) {
          console.log("error");
        } else {
          msg =
            msg.slice(0, firstIndex) + msg.slice(firstIndex + substring.length);
          let reversedWord = substring.split("").reverse().join("");

          msg += reversedWord;
          console.log(msg);
        }
        break;

      case "ChangeAll":
        let subs = tokens[1];
        let replacement = tokens[2];

        msg = msg.split(subs).join(replacement);
        console.log(msg);
        break;
    }

    row = arr.shift();
  }

  console.log(`You have a new text message: ${msg}`);
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
