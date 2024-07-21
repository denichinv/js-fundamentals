function travelTime(arr) {
  let travelDestinations = {};

  for (const destination of arr) {
    let [country, town, price] = destination.split(" > ");
    price = Number(price);

    if (country in travelDestinations) {
      if (town in travelDestinations[country]) {
        if (price < travelDestinations[country][town]) {
          travelDestinations[country][town] = price;
        }
      } else {
        travelDestinations[country][town] = price;
      }
    } else {
      travelDestinations[country] = { [town]: price };
    }
  }

  let entries = Object.entries(travelDestinations).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [country, towns] of entries) {
    let townEntries = Object.entries(towns).sort((a, b) => a[1] - b[1]);

    let result = `${country} -> `;

    for (const [town, price] of townEntries) {
      result += `${town} -> ${price} `;
    }
    console.log(result.trim());
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
