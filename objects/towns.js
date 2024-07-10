function solve(townInfo) {
  for (const curTown of townInfo) {
    let [town, latitude, longitude] = curTown.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    const towns = {
      town: town,
      latitude: latitude,
      longitude: longitude,
    };
    console.log(towns);
  }
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
