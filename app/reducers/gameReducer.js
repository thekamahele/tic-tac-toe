
import { SET_GAME, MAKE_MOVE } from '../constants/actionTypes'
const boardGame = [
  {x: 0, y: 0, w: 4, h: 4, static: true, value: 'x'},
  {x: 4, y: 0, w: 4, h: 4, static: true, value: ''},
  {x: 8, y: 0, w: 4, h: 4, static: true, value: ''},
  {x: 0, y: 4, w: 4, h: 4, static: true, value: 'x'},
  {x: 4, y: 4, w: 4, h: 4, static: true, value: 'x'},
  {x: 8, y: 4, w: 4, h: 4, static: true, value: ''},
  {x: 0, y: 8, w: 4, h: 4, static: true, value: ''},
  {x: 4, y: 8, w: 4, h: 4, static: true, value: 'o'},
  {x: 8, y: 8, w: 4, h: 4, static: true, value: 'x'}
]
  //[
  //[' ', ' ', ' '],
  //  [' ', ' ', ' '],
  //  [' ', ' ', ' ']
  //],
const initialState = {
  board: boardGame,
  playerTurn: 'X',
  winner: null,
  isTieGame: false
}

const updateBoard = (position, board, marker) => {
  const newCell = board.reduce((memo, current, index) => {
    if(current.x === position.x && current.y === position.y) {
      memo.push(Object.assign({}, current, {value: marker}), index)
    }
    return memo
  }, [])

  return board.slice(0, newCell[1]).concat(newCell[0]).concat(board.slice(newCell[1] + 1))

}

export default function game(state = initialState, action) {
  switch (action.type) {
    case SET_GAME:
      return Object.assign({}, initialState)
    case MAKE_MOVE:
      //TODO: use a util function to return a new state of the board
      const currentPlayer = state.playerTurn
      const newBoard = updateBoard(action.position, state.board, state.playerTurn)
      return Object.assign({}, state, {
        board: newBoard,
        playerTurn: currentPlayer === 'X' ? 'O' : 'X'
      })
    //TODO: Case of changing board size, have a function that generates a new board
    default:
      return state;
  }
}