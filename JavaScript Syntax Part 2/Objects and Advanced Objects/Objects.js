/*jshint esversion: 6 */

//How to write an object
let spaceship = {
  "Fuel type": "diesel",
  color: "blue",
};

//How to assign a propety that does not exist
spaceship.engine = "Rolls Royce";

//How to use methods
let retreatMessage = "Retreating from Earth";
const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Up we go!");
  },
};

/* How to call a method
alienShip.retreat();
*/

//How to nest an object within an object
let rocketship = {
  crew: {
    captain: {
      name: "Miraz",
      degree: "Aerospace Engineering",
      encourageTeam() {
        console.log("We can get through this team");
      },
      hobbies: ["Playing the guitar", "Jogging"],
    },

    engineer: {
      name: "Amir",
      degree: "Mechanical Engineering",
      engineReport() {
        console.log("Engine looking clear");
      },
      hobbies: ["Tinkering with Microcomputers", "Gym"],
    },
  },
};

/* How to access a nested object
console.log(rocketship.crew.captain.hobbies[0]);
*/

//Pass By Reference #1 : Functions can mutate objects property permanently
const greenEnergy = (obj) => {
  obj["Fuel type"] = "ron 97";
};
greenEnergy(spaceship);
console.log(spaceship);

//Pass By Reference #2 : Functions can't reassign the object with new/different properties
const reassignmentFunction = (obj) => {
  obj = {
    materialType: "steel",
    maxSpeed: 100000,
  };
};
reassignmentFunction(spaceship);
console.log(spaceship); //still prints the original spaceship object without materialType and maxSpeed

// How to Loop Through Objects
for (const key in rocketship.crew) {
  console.log(
    `${rocketship.crew[key].name} studied ${rocketship.crew[key].degree} and his hobbies are ${rocketship.crew[key].hobbies}`
  );
}
