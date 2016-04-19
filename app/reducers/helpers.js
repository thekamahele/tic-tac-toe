import range from 'lodash/utility/range'
import every from 'lodash/collection/every'
import flatten from 'lodash/array/flatten'

/**
 * Function that returns a new copy of the board to be rendered based on a cell position and player's turn
 * @param position
 * @param board
 * @param marker
 * @returns {*}
 */
export const updateBoard = (position, board, marker) => {
  const { x, y } = position
  return [
    ...board.slice(0, x),
    [
      ...board[x].slice(0, y),
      marker,
      ...board[x].slice(y + 1)
    ],
    ...board.slice(x + 1)
  ]
}

/**
 * Takes in an integer and generates new matrix to represent board
 * @param newSize
 */
export const changeBoardSize = (newSize) => {
  return new Array(newSize).fill(new Array(newSize).fill(''))
}

/**
 * Function called in reducer to check if the board has a winner.
 * @param board
 * @param n
 * @returns {boolean}
 */
export const checkForWinner = (board, n, currentPlayer) => {
  return findWinningCombos(board, n) ? currentPlayer : null
}

/**
 * Function to return if a winning combo has been found.
 * It delegates to helper functions that checks rows, columns, and diagonals.
 * @param board
 * @param n
 * @returns {boolean}
 */
const findWinningCombos = (board, n) => {
  return checkRows(board, n) || checkColumns(board, n) || checkDiagonals(board, n)
}

/**
 * Utility function to check the values of the rows/cols/diagonals to see if they all match.
 * @param line
 * @returns {boolean}
 */
const checkValues = (line) => {
  return line.every((cell) => {
    return cell !== '' && cell === line[0]
  })
}

/**
 * Function to check each column of board for a win
 * @param board
 * @param n
 * @returns {boolean}
 */
const checkColumns = (board, n) => {
  for (let i = 0; i < n; i++) {
    let cols = []
    for (let j = 0; j < n; j++) {
      cols.push(board[j][i])
    }
    if (checkValues(cols)) {
      return true
    }
  }

  return false
}

/**
 * Function to check each row of board for a win
 * @param board
 * @param n
 * @returns {boolean}
 */
const checkRows = (board, n) => {
  let rowWinner = false
  for (let i = 0; i < n; i++) {
    if (checkValues(board[i])) {
      rowWinner = true
    }
  }

  return rowWinner
}

/**
 * Function to check both major and minor diagonals of board for a win
 * @param board
 * @param n
 * @returns {boolean}
 */
const checkDiagonals = (board, n) => {
  const majorDiag = []
  const minorDiag = []

  for (let i = 0; i < n; i++) {
    majorDiag.push(board[i][i])
    minorDiag.push(board[i][n - 1 - i])
  }

  return checkValues(majorDiag) || checkValues(minorDiag)
}
