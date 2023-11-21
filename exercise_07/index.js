//import isTypeOf' and execute

import isTypeOf from "./isTypeOf.js";

const stringValue = 'Hello cats';
const numberValue = 50;
const booleanValue = true;
const arrayValue = [6, 1, 10, 5, 7];

const isArrayType = isTypeOf(arrayValue, true);
const isStringType = isTypeOf(stringValue, false);

console.log('Is the value of array type? '+isArrayType)
console.log('Is the value of string, number, or boolean type? '+isStringType)

