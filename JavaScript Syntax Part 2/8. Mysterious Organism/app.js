/*jshint esversion: 6 */
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate(base) {
      let arg = base.toUpperCase();
      for (let index = 0; index < this.dna.length; index++) {
        if (this.dna[index] === arg) {
          let newBase = arg;
          do {
            newBase = returnRandBase();
          } while (newBase === arg);
          this.dna[index] = newBase;
        }
      }
      return this.dna;
    },
    compareDNA(pAequorObj) {
      let counter = 0;
      let location = [];
      for (let i = 0; i < this.dna.length; i++) {
        let dna1 = this.dna[i];
        let dna2 = pAequorObj.dna[i];
        if (dna1 === dna2) {
          counter++;
          location.push(i + 1);
        }
      }
      return `Specimen #${this.specimenNum} and Specimen #${
        pAequorObj.specimenNum
      } have ${Math.round(
        (counter / 15) * 100,
        2
      )}% DNA in common. The locations of similarity are at [${location}]`;
    },
    willLikelySurvive() {
      let filteredArray = [];
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          filteredArray.push(this.dna[i]);
        }
      }
      let percentageSurvive = (filteredArray.length / this.dna.length) * 100;
      if (percentageSurvive >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const generateThirtySurvivingSpecimens = () => {
  let organismArray = [];
  for (let index = 0; index < 30; index++) {
    let aequor = pAequorFactory(index, mockUpStrand());
    if (aequor.willLikelySurvive()) {
      organismArray[index] = aequor;
    }
  }
  organismArray = organismArray.filter((x) => x);
  return organismArray;
};

console.log(generateThirtySurvivingSpecimens());
