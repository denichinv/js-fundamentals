function printFirstAndLastKElements(arr) {
  const k = arr[0];

  const elements = arr.slice(1);

  const firstK = elements.slice(0, k);

  const lastK = elements.slice(-k);

  console.log(firstK.join(" "));

  console.log(lastK.join(" "));
}

printFirstAndLastKElements([2, 7, 8, 9]);

