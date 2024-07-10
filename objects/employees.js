function employees(arrWithNames) {
  for (const employeeName of arrWithNames) {
    let nameLength = employeeName.length;
    const employee = {
      name: employeeName,
      personalNum: nameLength,
    };
    console.log(
      `Name: ${employee.name} -- Personal Number: ${employee.personalNum}`
    );
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
