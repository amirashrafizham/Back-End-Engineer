/*jshint esversion: 6 */

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this.appetizers;
  },
  set appetizers(appIn) {
    this.appetizers.push(appIn);
  },
  get mains() {
    return this.mains;
  },
  set mains(mainIn) {
    this.appetizers.push(mainIn);
  },
  get desserts() {
    return this.desserts;
  },
  set desserts(dessertsIn) {
    this.appetizers.push(dessertsIn);
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    if (courseName === "appetizers") {
      this._courses.appetizers.push(dish);
    } else if (courseName === "mains") {
      this._courses.mains.push(dish);
    } else if (courseName === "desserts") {
      this._courses.desserts.push(dish);
    } else {
      console.log("That was not a course. Try again");
    }
  },

  getRandomDishFromCourse(courseName) {
    let dishes;

    switch (courseName) {
      case "appetizers":
        dishes = this._courses.appetizers;
        break;
      case "mains":
        dishes = this._courses.mains;
        break;
      case "desserts":
        dishes = this._courses.desserts;
        break;
      default:
        console.log("That was not a course. Try again");
        break;
    }

    let indexDishes = Math.floor(Math.random() * dishes.length);
    return dishes[indexDishes];
  },

  getRandomMeal() {
    let appetizer = this.getRandomDishFromCourse("appetizers");
    let main = this.getRandomDishFromCourse("mains");
    let dessert = this.getRandomDishFromCourse("desserts");

    let totalPrice = appetizer.price + main.price + dessert.price;

    console.log(
      `The total price ${appetizer.name}, ${main.name}, ${dessert.name} is RM ${totalPrice}`
    );
  },
};

menu.addDishToCourse("appetizers", "nacho's", 2.0);
menu.addDishToCourse("appetizers", "cheesy fries", 5.0);
menu.addDishToCourse("appetizers", "naan bread", 4.0);

menu.addDishToCourse("mains", "burger", 20.0);
menu.addDishToCourse("mains", "steak", 50.0);
menu.addDishToCourse("mains", "tandoori", 14.0);

menu.addDishToCourse("desserts", "ice cream", 8.0);
menu.addDishToCourse("desserts", "pancake", 7.0);
menu.addDishToCourse("desserts", "waffles", 6.0);

console.log(menu._courses.mains);
console.log(menu._courses.appetizers);
console.log(menu._courses.desserts);

menu.getRandomMeal();
