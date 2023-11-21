//import 'checkCollectionHasElements' and execute

import checkCollectionHasElements from "./checkCollectionHasElements.js";

const arrayWithElements = [5, 8, 9, 10, 20];
const emptyArray = [];

const result1= checkCollectionHasElements(arrayWithElements);
const result2= checkCollectionHasElements(emptyArray);

console.log('Does the array have elements? '+ result1);

console.log('Does the empty array have elements? '+ result2);