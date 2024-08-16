const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    },
  };
};
const ghost = monsterFactory("Ghouly", 251, "ectoplasm", "BOO!");

const entries = Object.entries(ghost);
for (const [key, value] of entries) {
  if (key !== "scare") {
    console.log(`${key} => ${value}`);
  }
}
ghost.scare();
