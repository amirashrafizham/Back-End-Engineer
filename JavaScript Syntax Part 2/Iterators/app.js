/*jshint esversion: 6 */

//1. How to use forEach() - [iterates through an array]
const fruits = ["mango", "papaya", "pineapple", "apple"];
//fruits.forEach((x) => console.log(x));

//2. How to use map() - [iterates and creates a new array]
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];
const secretMessage = animals.map((x) => x[0]);

//3. How to use Filter() - [filters and creats a new array]
const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];
const longWords = favoriteWords.filter((x) => x.length > 7);

//4. How to use findIndex() - [finding the index of an element in an array]
const animals2 = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];
const foundAnimal = animals2.findIndex((x) => x === "monkey");

//5. How to use reduce() - [returns a single value after iterating]
const newNumbers = [1, 3, 5, 7];
const sumNumbers = newNumbers.reduce((accumulator, value) => {
  return accumulator + value;
});

//6. How to use some() - [checks whether at least an element returns true for once]
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];
const checkWordLessThanSix = words.some((x) => x.length < 6);

//7. How to use every() - [checks whether all elements return true]
const checkWordsLessThanSix = words.every((x) => x.length < 6);
