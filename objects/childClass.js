class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

let kitty = new Cat("Lisa", true);
kitty.incrementBehavior();
kitty.incrementBehavior();
kitty.incrementBehavior();
console.log(kitty.name);

console.log(kitty.behavior);
