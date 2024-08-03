function registration(arr) {
  let text = arr.shift();
  let row = arr.shift();

  while (row !== "Registration") {
    let tokens = row.split(" ");
    let command = tokens.shift();

    if (command === "Letters") {
      let action = tokens.shift();

      if (action === "Lower") {
        text = text.toLowerCase();
        console.log(text);
      } else if (action === "Upper") {
        text = text.toUpperCase();
        console.log(text);
      }
    } else if (command === "Reverse") {
      let startIndex = Number(tokens.shift());
      let endIndex = Number(tokens.shift());

      if (
        startIndex >= 0 &&
        startIndex < text.length &&
        endIndex >= 0 &&
        endIndex < text.length &&
        startIndex <= endIndex
      ) {
        let reversedSubstring = text
          .slice(startIndex, endIndex + 1)
          .split("")
          .reverse()
          .join("");
        console.log(reversedSubstring);
      }
    } else if (command === "Substring") {
      let substring = tokens.shift();

      if (text.includes(substring)) {
        text = text.split(substring).join("");
        console.log(text);
      } else {
        console.log(`The username ${text} doesn't contain ${substring}.`);
      }
    } else if (command === "Replace") {
      let char = tokens.shift();
      text = text.split(char).join("-");
      console.log(text);
    } else if (command === "IsValid") {
      let char = tokens.shift();
      if (text.includes(char)) {
        console.log("Valid username");
      } else {
        console.log(`${char} must be contained in your username.`);
      }
    }

    row = arr.shift();
  }
}
registration([
  "ThisIsSoftUni",
  "Reverse 1 3",
  "Replace S",
  "Substring hi",
  "Registration",
]);
