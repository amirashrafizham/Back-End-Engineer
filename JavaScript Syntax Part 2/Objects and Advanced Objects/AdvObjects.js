/*jshint esversion: 6 */

//HOW TO USE 'this'
const robot = {
  model: "x70",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
  },
};

//DO NOT USE ARROW FUNCTIONS WITH THIS, IT WON'T WORK
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baa");
  },
  withThis: () => {
    console.log(this.dietType); //will get undefined
  },
};

//GETTER AND SETTER
//#1 In JavaScript the underscore '_' value means that the property should not be manipulated
const bankAccount = {
  _amount: 100000,
};

//#2  Get is used to return the properties of an object and can combine with a conditional statement
const robot2 = {
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return `System malfunction`;
    }
  },
};
console.log(robot2.energyLevel);

//#3 Setter is used to reassign values to an existing property
const robot3 = {
  _numOfSensors: 15,

  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors in service";
    }
  },

  set numOfSensors(num) {
    if (typeof num === "number") {
      this._numOfSensors = num;
    } else {
      console.log("Pass in an actual number");
    }
  },
};

console.log(robot3.numOfSensors);
robot3.numOfSensors = "kepala bapak kau";
console.log(robot3.numOfSensors);

//FACTORY FUNCTIONS (QUITE SIMILAR TO CONSTRUCTORS)
function robotFactory(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log("Hello human");
    },
  };
}

const newRobot = robotFactory("Dyson", false);
newRobot.beep();

//DESTRUCTURED ASSIGNMENT
//Rather than writing like this
const robotModel = robot.model;
//We can write like this
const { model } = robot;

//BUILT-IN OBJECT METHODS
const robotKeys = Object.keys(robot);
const robotEntries = Object.entries(robot);
const robotAssign = Object.assign(
  { laserBlaster: true },
  { voiceRecognition: false },
  robot
);
