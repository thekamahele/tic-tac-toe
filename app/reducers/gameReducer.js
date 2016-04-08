import * as helpers from './helpers'
import { SET_GAME, MAKE_MOVE, CHANGE_SIZE } from '../constants/actionTypes'

const boardGame = helpers.changeBoardSize(3)
const initialState = {
  board: boardGame,
  playerTurn: 'X',
  winner: null,
  isTieGame: false,
  gridSize: 3,
  totalPlays: 0
}

export default function game(state = initialState, action) {
  switch (action.type) {
    case SET_GAME:
      return Object.assign({}, initialState)

    case MAKE_MOVE:
      const currentPlayer = state.playerTurn
      const newBoard = helpers.updateBoard(action.position, state.board, state.playerTurn)
      const winner = helpers.checkForWinner(newBoard, state.gridSize, state.playerTurn)
      const plays = state.totalPlays + 1
      const draw = plays === Math.pow(state.gridSize, 2) && winner === null

      return Object.assign({}, state, {
        board: newBoard,
        playerTurn: currentPlayer === 'X' ? 'O' : 'X',
        winner,
        isTieGame: draw,
        totalPlays: plays
      })

    case CHANGE_SIZE:
      const resizedBoard = helpers.changeBoardSize(action.size)
      return Object.assign({}, initialState, {
        gridSize: action.size,
        board: resizedBoard
      })

    default:
      return state;
  }
}