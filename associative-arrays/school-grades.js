function schoolGrades(arr) {
  let students = {};

  for (const row of arr) {
    let parts = row.split(" ");
    let name = parts.shift();
    let grades = parts.map(Number);

    if (!students[name]) {
      students[name] = [];
    }

    students[name] = students[name].concat(grades);
  }

  const sortedNames = Object.keys(students).sort();

  for (const name of sortedNames) {
    let total = students[name].reduce((acc, grade) => acc + grade, 0);
    let average = (total / students[name].length).toFixed(2);
    console.log(`${name}: ${average}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
