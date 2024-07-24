function buildAWall(sections) {
  sections = sections.map(Number);

  const concretePerFoot = 195;
  const costPerCubicYard = 1900;
  let dailyConcreteUsage = [];

  let unfinished = true;

  while (unfinished) {
    let dailyUsage = 0;
    unfinished = false;

    for (let i = 0; i < sections.length; i++) {
      if (sections[i] < 30) {
        sections[i]++;
        dailyUsage += concretePerFoot;
        unfinished = true;
      }
    }

    if (dailyUsage > 0) {
      dailyConcreteUsage.push(dailyUsage);
    }
  }

  const totalConcreteUsed = dailyConcreteUsage.reduce(
    (sum, usage) => sum + usage,
    0
  );
  const totalCost = totalConcreteUsed * costPerCubicYard;

  console.log(dailyConcreteUsage.join(", "));
  console.log(`${totalCost} pesos`);
}
buildAWall([21, 25, 28]);
