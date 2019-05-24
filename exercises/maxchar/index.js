// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let dict = {}
  let solution = ''
  let maxValue = 0

  for (let chr of str) {
    if (dict[chr]) {
      dict[chr]++
      } else {
      dict[chr] = 1
    }
  }

  for (let chr in dict) {
    dict[chr] > maxValue ? (maxValue = dict[chr], solution = chr) : null
  }

  return solution
}

module.exports = maxChar;
