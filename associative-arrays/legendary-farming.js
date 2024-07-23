function legendaryFarming(string) {
  let keyMaterials = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };

  let junkMaterials = {};
  let legendaries = {
    shards: "Shadowmourne",
    fragments: "Valanyr",
    motes: "Dragonwrath",
  };

  let arrOfMaterials = string.split(" ");

  for (let i = 0; i < arrOfMaterials.length; i += 2) {
    let quantity = Number(arrOfMaterials[i]);
    let material = arrOfMaterials[i + 1].toLowerCase();

    if (material in keyMaterials) {
      keyMaterials[material] += quantity;

      if (keyMaterials[material] >= 250) {
        keyMaterials[material] -= 250;
        console.log(`${legendaries[material]} obtained!`);
        break;
      }
    } else if (material in junkMaterials) {
      junkMaterials[material] += quantity;
    } else {
      junkMaterials[material] = quantity;
    }
  }

  let keyMaterialsEntires = Object.entries(keyMaterials).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );

  for (const material of keyMaterialsEntires) {
    console.log(`${material[0]}: ${material[1]}`);
  }

  let junkMaterialsEntries = Object.entries(junkMaterials).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const material of junkMaterialsEntries) {
    console.log(`${material[0]}: ${material[1]}`);
  }
}

legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
