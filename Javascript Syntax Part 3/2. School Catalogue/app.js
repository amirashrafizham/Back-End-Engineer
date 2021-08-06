/*jshint esversion: 6 */
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number");
    }
  }
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let maxLength = substituteTeachers.length;
    let numberGenerator = Math.floor(Math.random() * maxLength);
    console.log(substituteTeachers[numberGenerator]);
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickUpPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickUpPolicy;
  }
  get pickUpPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeam) {
    super(name, "high", numberOfStudents);
    this._sportsTeam = sportsTeam;
  }
  get sportsTeam() {
    console.log(this._sportsTeam);
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

lorraineHansbury.quickFacts();
School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Low Williams",
  "J.R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

alSmith.sportsTeam;
