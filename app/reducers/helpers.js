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
  let newCell = board.map((row, rowIndex) => {
    return row.reduce((memo, current, colIndex) => {
      if (current.x === position.x && current.y === position.y) {
        memo.push(Object.assign({}, current, {value: current.value || marker}), rowIndex, colIndex)
      }
      return memo
    }, [])
  })

  newCell = newCell.filter((cellData) => {
    return cellData.length > 1
  })[0]

  return board.map((row, index) => {
    if (index === newCell[1]) {
      return row.slice(0, newCell[2]).concat(newCell[0]).concat(row.slice(newCell[2] + 1))
    }
    return row
  })
}

/**
 * Function called in reducer to check if the board has a winner. It delegates to helper functions
 * that checks rows, columns, and diagonals.
 * @param board
 * @param n
 * @returns {boolean}
 */
export const checkForWinner = (board, n = 3, currentPlayer) => {
  let rows = checkRows(board, n)
  let cols = checkColumns(board, n)
  let diagonals = checkDiagonals(board, n)

  if (rows || cols || diagonals) {
    return currentPlayer
  } else {
    return null
  }
}

/**
 * Utility function to check the values of the rows/cols/diagonals
 * @param line
 * @returns {boolean}
 */
const checkValues = (line) => {
  return line.every((cell, i, row) => {
    return cell.value !== '' && cell.value === row[0].value
  })
}

/**
 * Function to check each column of board for a win
 * @param board
 * @param n
 * @returns {boolean}
 */
export const checkColumns = (board, n) => {
  for (let i = 0; i < board.length; i++) {
    let cols = []
    for (let j = 0; j < board[i].length; j++) {
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
export const checkRows = (board, n) => {
  let rowWinner = false

  for (let i = 0; i < n; i++) {
    let checkVals = board[i].every((cell, i, row) => {
      return cell.value !== '' && cell.value === row[0].value
    })

    if (checkVals) {
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
export const checkDiagonals = (board, n) => {
  const majorDiag = []
  const minorDiag = []

  for(let i = 0; i < board.length; i++) {
    majorDiag.push(board[i][i])
    minorDiag.push(board[i][board.length - 1 - i])
  }

  return checkValues(majorDiag) || checkValues(minorDiag) ? true : false

}
