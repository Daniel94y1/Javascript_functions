/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 * Checks if the sum of two numbers is greater than or equal to 50.
 * @param {number} summand1 - The first number to add.
 * @param {number} summand2 - The second number to add.
 * @returns {boolean} - `true` if the sum is greater than or equal to 50, `false` otherwise.
 */
function isAdditionGreaterThanFifty(summand1, summand2) {
  const sum = summand1 + summand2;

  return sum >= 50;
}

export default isAdditionGreaterThanFifty;
