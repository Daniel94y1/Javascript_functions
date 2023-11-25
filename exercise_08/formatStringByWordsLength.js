import getTotalWordsFromString from "../exercise_02/getTotalWordsFromString.js";

/**
 * Write JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string

 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */

/**

 * @param {string} sentence - The string to check and format.
 * @returns {string} - The formatted string.
 */

function formatStringByWordsLength(sentence) {
  const wordCount = getTotalWordsFromString(sentence);
  const shouldUpperCase = wordCount > 5;

  return shouldUpperCase ? sentence.toUpperCase() : sentence.toLowerCase();
}

export default formatStringByWordsLength;
