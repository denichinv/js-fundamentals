function theImitationGame(arr) {
  let msg = arr.shift();
  let row = arr.shift();

  while (row !== "Decode") {
    let tokens = row.split("|");
    let command = tokens[0];

    if (command === "ChangeAll") {
      let substring = tokens[1];
      let replacement = tokens[2];
      msg = msg.split(substring).join(replacement);
    }
    if (command === "Insert") {
      let i = tokens[1];
      let value = tokens[2];

      let left = msg.slice(0, i);
      let right = msg.slice(i);

      msg = left + value + right;
    }
    if (command === "Move") {
      let i = Number(tokens[1]);
      let newRight = msg.slice(0, i);
      let newLeft = msg.slice(i);
      msg = newLeft + newRight;
    }

    row = arr.shift();
  }

  console.log(`The decrypted message is: ${msg}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
