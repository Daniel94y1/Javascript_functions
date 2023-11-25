/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */
/**
 * 
Calculates how much a number exceeds or falls behind in reaching a threshold value.
 * @param {number} value - The number to evaluate.
 * @param {number} threshold - The threshold value.
 * @returns {number} - The distance from the threshold. A positive number if it exceeds, negative if it is below.
 */
function getDistanceFromThreshold(value, threshold) {
  return value - threshold;
}

export default getDistanceFromThreshold;
