function cats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  for (const tokens of arr) {
    let [name, age] = tokens.split(" ");
    const result = new Cat(name, age);
    result.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
