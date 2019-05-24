// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, str = '') {
  if (n === row) {
    return;
  }

  if (n === str.length) {
    console.log(str)
    return steps(n, row + 1)
  }

  if (str.length <= row) {
    str += '#'
  } else {
    str += ' '
  }

  return steps(n, row, strocal)
}

module.exports = steps;
