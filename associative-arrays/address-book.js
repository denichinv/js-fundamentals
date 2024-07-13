function solve(arr) {
  let addressBook = {};

  for (const row of arr) {
    let [name, address] = row.split(":");
    addressBook[name] = address;
  }

  let entries = Object.entries(addressBook);
  sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]));
  for (const [name, address] of sortedEntries) {
    console.log(`${name} -> ${address}`);
  }
}
solve([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",

  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
