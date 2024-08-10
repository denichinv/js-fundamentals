function schoolRegister(arr) {
  const schoolBook = {};

  for (const row of arr) {
    const tokens = row.split(" ");

    let name = tokens[2].split(",")[0];
    let grade = Number(tokens[4].split(",")[0]);
    const score = Number(tokens.pop());

    if (score > 3) {
      grade++;
      if (!schoolBook[grade]) {
        schoolBook[grade] = { students: [], scores: [] };
      }
      schoolBook[grade].students.push(name);
      schoolBook[grade].scores.push(score);
    }
  }

  const entries = Object.entries(schoolBook).sort((a, b) => a[0] - b[0]);

  for (const [grade, data] of entries) {
    const names = data.students.join(", ");
    const averageScore = (
      data.scores.reduce((sum, score) => sum + score, 0) / data.scores.length
    ).toFixed(2);

    console.log(`${grade} Grade`);
    console.log(`List of students: ${names}`);
    console.log(`Average annual score from last year: ${averageScore}`);
    console.log("");
  }
}

schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
