// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const stringify = (str) => str.replace(/[^\w]/g, "").toLowerCase();

const objectify = (str) => {
  let obj = {}
  for (let chr of stringify(str)) {
    obj[chr] = obj[chr] + 1 || 1;
  }
  return obj
}

function anagrams(stringA, stringB) {
  let solution = true
  let [objA, objB] = [objectify(stringA), objectify(stringB)]
  if (Object.keys(objA).length !== Object.keys(objB).length) { return false }
  for (let key in objA) {
    objA[key] === objB[key] ? null : solution = false
  }
  return solution
}

module.exports = anagrams;
