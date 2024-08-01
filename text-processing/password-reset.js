function passwordReset(arr) {
  let password = arr.shift();
  let row = arr.shift();

  while (row !== "Done") {
    if (row === "TakeOdd") {
      let newPassword = "";
      for (let i = 1; i < password.length; i += 2) {
        newPassword += password[i];
      }
      password = newPassword;
      console.log(password);
    } else {
      let tokens = row.split(" ");
      let command = tokens[0];

      if (command === "Cut") {
        let index = Number(tokens[1]);
        let length = Number(tokens[2]);
        let part1 = password.substring(0, index);
        let part2 = password.substring(index + length);
        password = part1 + part2;
        console.log(password);
      } else if (command === "Substitute") {
        let substring = tokens[1];
        let substitute = tokens[2];

        if (password.includes(substring)) {
          password = password.split(substring).join(substitute);
          console.log(password);
        } else {
          console.log("Nothing to replace!");
        }
      }
    }

    row = arr.shift();
  }

  console.log(`Your password is: ${password}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
