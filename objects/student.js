const student = {
  name: "John Doe",
  age: 20,
  grades: [85, 90, 78],

  addGrade: function (grade) {
    this.grades.push(grade);
  },

  getAverage: function () {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  },

  getInfo: function () {
    return `Student: ${this.name}, Age: ${
      this.age
    }, Average Grade: ${this.getAverage().toFixed(2)}`;
  },
};

console.log(student.getInfo());
student.addGrade(88);
console.log(student.getInfo());
