function arenaTier(arr) {
  let gladiatorPool = {};

  let command = arr.shift();

  while (command !== "Ave Cesar") {
    if (command.includes("->")) {
      let [gladiatorName, technique, skillPoints] = command.split(" -> ");
      skillPoints = Number(skillPoints);

      if (!gladiatorPool[gladiatorName]) {
        gladiatorPool[gladiatorName] = {};
      }

      if (
        !gladiatorPool[gladiatorName][technique] ||
        gladiatorPool[gladiatorName][technique] < skillPoints
      ) {
        gladiatorPool[gladiatorName][technique] = skillPoints;
      }
    } else if (command.includes("vs")) {
      let [gladiator1, gladiator2] = command.split(" vs ");

      if (gladiatorPool[gladiator1] && gladiatorPool[gladiator2]) {
        let commonTechniques = Object.keys(gladiatorPool[gladiator1]).filter(
          (technique) => gladiatorPool[gladiator2].hasOwnProperty(technique)
        );

        if (commonTechniques.length > 0) {
          let totalSkill1 = Object.values(gladiatorPool[gladiator1]).reduce(
            (sum, skill) => sum + skill,
            0
          );
          let totalSkill2 = Object.values(gladiatorPool[gladiator2]).reduce(
            (sum, skill) => sum + skill,
            0
          );

          if (totalSkill1 > totalSkill2) {
            delete gladiatorPool[gladiator2];
          } else if (totalSkill2 > totalSkill1) {
            delete gladiatorPool[gladiator1];
          }
        }
      }
    }

    command = arr.shift();
  }

  let gladiators = Object.entries(gladiatorPool).map(([name, skills]) => {
    let totalSkill = Object.values(skills).reduce(
      (sum, skill) => sum + skill,
      0
    );
    return { name, skills, totalSkill };
  });

  gladiators.sort(
    (a, b) => b.totalSkill - a.totalSkill || a.name.localeCompare(b.name)
  );

  for (const gladiator of gladiators) {
    console.log(`${gladiator.name}: ${gladiator.totalSkill} skill`);
    let sortedSkills = Object.entries(gladiator.skills).sort(
      (a, b) => b[1] - a[1]
    );
    for (const [technique, skillPoints] of sortedSkills) {
      console.log(`- ${technique} <!> ${skillPoints}`);
    }
  }
}
arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
