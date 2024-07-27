function race(arr) {
  let listOfParticipants = arr.shift().split(", ");
  let participantInfo = arr.shift();
  const patternName = /[A-Za-z]+/g;
  const patternDistance = /\d/g;
  const participantsObj = {};

  listOfParticipants.forEach((name) => {
    participantsObj[name] = 0;
  });

  while (participantInfo !== "end of race") {
    const nameMatch = participantInfo.match(patternName);
    const name = nameMatch.join("");

    const distanceMatch = participantInfo.match(patternDistance).map(Number);
    const num = distanceMatch.reduce((acc, value) => acc + value, 0);

    if (name in participantsObj) {
      participantsObj[name] += num;
    }

    participantInfo = arr.shift();
  }

  let entries = Object.entries(participantsObj).sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${entries[0][0]}`);
  console.log(`2nd place: ${entries[1][0]}`);
  console.log(`3rd place: ${entries[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
