function messageDecrypt(arr) {
  let n = Number(arr.shift());
  let pattern =
    /^([$%])(?<tag>[A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/;

  for (let i = 0; i < n; i++) {
    let message = arr[i];
    let match = message.match(pattern);

    if (match) {
      let tag = match.groups.tag;
      let num1 = String.fromCharCode(Number(match[3]));
      let num2 = String.fromCharCode(Number(match[4]));
      let num3 = String.fromCharCode(Number(match[5]));

      let decryptMessage = num1 + num2 + num3;
      console.log(`${tag}: ${decryptMessage}`);
    } else {
      console.log("Valid message not found!");
    }
  }
}
messageDecrypt([
  "4",
  "$Request$: [73]|[115]|[105]|",
  "%Taggy$: [73]|[73]|[73]|",
  "%Taggy%: [118]|[97]|[108]|",
  "$Request$: [73]|[115]|[105]|[32]|[75]|",
]);
