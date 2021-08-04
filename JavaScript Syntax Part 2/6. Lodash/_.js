/*jshint esversion: 6 */

_ = {
  clamp(num, lowerBound, upperBound) {
    let lowerClampedValue = Math.max(num, lowerBound);
    let clampedValue = Math.min(lowerClampedValue, upperBound);
    return clampedValue;
  },

  inRange(num, startValue, endValue) {
    if (isNaN(endValue)) {
      let replaceValue1 = 0;
      let replaceValue2 = startValue;
      startValue = replaceValue1;
      endValue = replaceValue2;
    }

    if (startValue > endValue) {
      let replaceValue1 = startValue;
      let replaceValue2 = endValue;
      endValue = replaceValue1;
      startValue = replaceValue2;
    }
    if (num < startValue) {
      return false;
    } else if (num >= startValue && num < endValue) {
      return true;
    } else if (num >= endValue) {
      return false;
    }
  },

  words(argString) {
    let words = argString.split(" ");
    return words;
  },

  pad(stringArg, finalLength) {
    let totalPadding = finalLength - stringArg.length;
    if (totalPadding > stringArg.length) {
      let beginPadding = Math.floor(totalPadding / 2);
      let endPadding = Math.ceil(totalPadding / 2);
      let finalString = [];
      for (let index = 0; index < beginPadding; index++) {
        finalString.push(" ");
      }
      for (let index = 0; index < stringArg.length; index++) {
        finalString.push(stringArg[index]);
      }
      for (let index = 0; index < endPadding; index++) {
        finalString.push(" ");
      }

      return finalString.join("");
    } else {
      return stringArg;
    }
  },
  has(objectArg, keyArg) {
    const keys = Object.keys(objectArg);
    return keys.includes(keyArg);
  },
  invert(objectArg) {
    const newObj = {};
    for (const key in objectArg) {
      newObj[`${objectArg[key]}`] = key;
    }
    return newObj;
  },

  findKey(object, predicate) {
    for (const key in object) {
      let predicateReturnValue = predicate(object[key]);
      if (predicateReturnValue) {
        return key;
      } else {
        return undefined;
      }
    }
  },

  drop(arrayArg, numItems) {
    if (isNaN(numItems)) {
      arrayArg.shift();
      return arrayArg;
    } else {
      arrayArg.splice(0, numItems);
      return arrayArg;
    }
  },

  dropWhile(arrayArg, predicate) {
    let dropNumber = arrayArg.findIndex(
      (element, index) => !predicate(element, index)
    );
    let droppedArray = this.drop(arrayArg, dropNumber);
    return droppedArray;
  },

  chunk(arrayArg, elementPerChunk) {
    if (arrayArg.length % elementPerChunk === 0) {
      let numberOfArrays = arrayArg.length / elementPerChunk;
      let finalArray = new Array(numberOfArrays);
      for (let i = 0; i <= numberOfArrays.length; i++) {
        for (let j = 0; j < elementPerChunk; j++) {
          let index = (i + 1) * j;
          let tempArray = [];
          tempArray.push(arrayArg[index]);
          finalArray[i].push(tempArray);
        }
      }
      return finalArray;
    } else {
      let numberOfArrays = Math.ceil(arrayArg.length / elementPerChunk);
      let finalArray = new Array(numberOfArrays);
      for (let i = 0; i <= numberOfArrays.length; i++) {
        for (let j = 0; j < elementPerChunk; j++) {
          let index = (i + 1) * j;
          let tempArray = [];
          tempArray.push(arrayArg[index]);
          finalArray[i].push(tempArray);
        }
      }
      return finalArray;
    }
  },
};

// Do not write or modify code below this line.
module.exports = _;
