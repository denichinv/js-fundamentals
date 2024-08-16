const person = {
  _firstName: "John",
  _lastName: "Smith",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing a first name or a last name.";
    }
  },
};

console.log(person.fullName);
