/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * Gets the total number of words contained in a string.
 * @param {string} sentence - The string to count words from.
 * @returns {number} - The total number of words in the string.
 */
function getTotalWordsFromString(sentence) {
  // Split the string into words using space as a delimiter
  const words = sentence.split(" ");

  // Filter to remove possible empty elements and count the length of the resulting array
  const wordCount = words.filter((word) => word !== "").length;

  return wordCount;
}
export default getTotalWordsFromString;
