function partyTime(arr) {
  const partyIndex = arr.indexOf("PARTY");

  const reservationList = arr.slice(0, partyIndex);
  const attendeesList = arr.slice(partyIndex + 1);

  const vipGuests = [];
  const regularGuests = [];

  for (const guest of reservationList) {
    if (!isNaN(guest[0])) {
      vipGuests.push(guest);
    } else {
      regularGuests.push(guest);
    }
  }

  for (const guest of attendeesList) {
    const vipIndex = vipGuests.indexOf(guest);
    if (vipIndex !== -1) {
      vipGuests.splice(vipIndex, 1);
    } else {
      const regularIndex = regularGuests.indexOf(guest);
      if (regularIndex !== -1) {
        regularGuests.splice(regularIndex, 1);
      }
    }
  }

  const absentCount = vipGuests.length + regularGuests.length;

  const absentGuests = vipGuests.concat(regularGuests);

  console.log(absentCount);
  for (const guest of absentGuests) {
    console.log(guest);
  }
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
