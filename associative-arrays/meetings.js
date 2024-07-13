function solve(arr) {
  let meetings = {};

  for (const row of arr) {
    let [day, name] = row.split(" ");

    if (day in meetings) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetings[day] = name;

      console.log(`Scheduled for ${day}`);
    }
  }

  for (const day in meetings) {
    console.log(`${day} -> ${meetings[day]} `);
  }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
