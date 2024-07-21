function companyUsers(arr) {
  let companyEmployees = {};

  for (const row of arr) {
    let [company, userId] = row.split(" -> ");

    if (!companyEmployees.hasOwnProperty(company)) {
      companyEmployees[company] = new Set();
    }
    companyEmployees[company].add(userId);
  }

  let entries = Object.entries(companyEmployees);

  entries.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [company, userIds] of entries) {
    console.log(company);
    for (const userId of userIds) {
      console.log(`-- ${userId}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
