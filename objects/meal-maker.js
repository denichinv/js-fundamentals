const menu = {
  _meal: "",
  _price: 0,

  set meal(mealCheck) {
    if (typeof mealCheck === "string") {
      this._meal = mealCheck;
    }
  },

  set price(priceCheck) {
    if (typeof priceCheck === "number") {
      this._price = priceCheck;
    }
  },

  get meal() {
    return this._meal;
  },

  get price() {
    return this._price;
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.meal = "Mousaka";
menu.price = 20;

console.log(menu.todaysSpecial);
