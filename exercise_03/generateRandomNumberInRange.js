/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */
/**
 * Generates a rounded random number within a given range.
 * @param {number} limit - The limit to generate the random number.
 * @returns {number} - The generated random number.
 */
function generateRandomNumberInRange(limit) {
    if (typeof limit !== 'number') {
      throw new Error('Input must be a number');
    }
  
    // Generate a random number and round it
    const randomNumber = Math.round(Math.random() * limit);
  
    return randomNumber;
  }
  
  export default generateRandomNumberInRange;
