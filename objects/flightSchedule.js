function flightSchedule(arrays) {
  let flightsOnSpecificSector = arrays.shift();
  let changeStatusFlights = arrays.shift();
  let flightStatusToCheck = arrays.shift()[0];

  let flights = {};

  for (let flightInfo of flightsOnSpecificSector) {
    let [flightNumber, destination] = flightInfo.split(" ");
    flights[flightNumber] = {
      destination: destination,
      status: "Ready to fly",
    };
  }

  for (let statusInfo of changeStatusFlights) {
    let [flightNumber, status] = statusInfo.split(" ");
    if (flightNumber in flights) {
      flights[flightNumber].status = status;
    }
  }

  for (let flightNumber in flights) {
    if (flights[flightNumber].status === flightStatusToCheck) {
      let { destination, status } = flights[flightNumber];
      console.log(`{ Destination: '${destination}', Status: '${status}' }`);
    }
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
