function minorTask(arr) {
  let resource = {};

  for (let i = 0; i < arr.length; i += 2) {
    let material = arr[i];
    let qty = Number(arr[i + 1]);

    if (resource.hasOwnProperty(material)) {
      resource[material] += qty;
    } else {
      resource[material] = qty;
    }
  }

  let entries = Object.entries(resource);

  for (const [material, qty] of entries) {
    console.log(`${material} -> ${qty}`);
  }
}

minorTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
