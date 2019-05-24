// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'
              // 4
function pyramid(n, row = 0, str = '') {
  if (row === n) {
    return;
  }

  let col = 2 * n - 1

  if (str.length === col) {
    console.log(str)
    return pyramid(n, row + 1)
  }

  let pos = Math.floor(col / 2)
  let [pos0, pos1] = [pos - row, pos + row]

  if ((str.length < pos0) || (str.length > pos1)) {
    return pyramid(n, row, str + ' ')
  } else {
    return pyramid(n, row, str + '#')
  }
}

module.exports = pyramid;
