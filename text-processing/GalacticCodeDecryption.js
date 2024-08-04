function galacticCodeDecryption(arr) {
  let text = arr.shift();
  let row = arr.shift();

  while (row !== "Finalize") {
    let tokens = row.split(" ");
    let command = tokens.shift();

    if (command === "Encrypt") {
      text = text.split("").reverse().join("");
      console.log(text);
    } else if (command === "Decrypt") {
      text = text
        .split("")
        .map((char) =>
          char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
        )
        .join("");
      console.log(text);
    } else if (command === "Substitute") {
      let oldChar = tokens.shift();
      let newChar = tokens.shift();

      if (text.includes(oldChar)) {
        text = text.split(oldChar).join(newChar);
        console.log(text);
      } else {
        console.log("Character not found.");
      }
    } else if (command === "Remove") {
      let removeLetter = tokens.shift();

      text = text
        .split("")
        .filter((x) => x !== removeLetter)
        .join("");
      console.log(text);
    } else if (command === "Scramble") {
      let index = Number(tokens.shift());
      let char = tokens.shift();

      if (index >= 0 && index < text.length) {
        text = text.split("");
        text[index] = char;
        text = text.join("");
        console.log(text);
      } else {
        console.log("Index out of bounds.");
      }
    } else {
      console.log("Invalid command detected!");
    }

    row = arr.shift();
  }
}

galacticCodeDecryption([
  "helloWorld",
  "Encrypt",
  "Decrypt",
  "Substitute L z",
  "Remove O",
  "Scramble 0 H",
  "Invalid command detected!",
  "Finalize",
]);
