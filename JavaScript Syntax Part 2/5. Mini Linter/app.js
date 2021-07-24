/*jshint esversion: 6 */
let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

//Splits the story into individual string elements separated by a <space>
let storyWords = story.split(" ");
// Counts number of words
let numOfWords = storyWords.length;

//Filters how many unnecessary words from story and creates a new array
let betterWords = storyWords.filter(
  (x) =>
    x !== unnecessaryWords[0] &&
    x !== unnecessaryWords[1] &&
    x !== unnecessaryWords[2]
);
//Counts how many unnecessary words used in story
let betterWordsCount = betterWords.length;

//Filters how many overused words are in the story and creates a new array
let overusedArrays = betterWords.filter(
  (x) =>
    x === overusedWords[0] || x === overusedWords[1] || x === overusedWords[2]
);
//Counts how many unnecessary words used in story
let overusedWordsCount = overusedArrays.length;

//Splits the story into individual sentences are in the betterWords
let individualSentences = story.split("." || "!");
let countSentences = individualSentences.length;

console.log(`Number of words in story: ${numOfWords}`); //Word count
console.log(`Number of sentences in story: ${countSentences}`); //Number of sentences
console.log(`Number of overused words in story: ${overusedWordsCount}`); //Overused Words

console.log(betterWords.join(" "));
