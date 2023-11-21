/**
 * #7 :: Exprot JS function "isTypeOf" to check if type of value matches type received as argument
 * hint :: array should be treated in a different way. Use Array.isArray() to check it
 * doc :: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * input: 'string' | 'number' | 'boolean' | 'array' (value)
 * input: boolean (type)
 * output:
 */

/**
 * Checks if the type of value matches the type received as an argument.
 * Note: Arrays are treated differently using Array.isArray().
 * @param {string | number | boolean | array} value - The value to check.
 * @param {boolean} type - The expected type (true for array, false for other types).
 * @returns {boolean} - `true` if the type matches, `false` if it doesn't match.
 */
function isTypeOf(value, type) {
    if (type && Array.isArray(value)) {
      // If the expected type is an array, use Array.isArray()
      return true;
    }
  
    if (!type && (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean')) {
      // If the expected type is not an array, compare types directly
      return true;
    }
  
    // If none of the conditions are met, return false
    return false;
  }

export default isTypeOf;
