import * as helpers from './helpers'
import { SET_GAME, MAKE_MOVE } from '../constants/actionTypes'

//TODO: Generate this based on n
const boardGame = [
  [ {x: 0, y: 0, w: 4, h: 4, static: true, value: ''},
    {x: 4, y: 0, w: 4, h: 4, static: true, value: ''},
    {x: 8, y: 0, w: 4, h: 4, static: true, value: ''} ],
  [ {x: 0, y: 4, w: 4, h: 4, static: true, value: ''},
    {x: 4, y: 4, w: 4, h: 4, static: true, value: ''},
    {x: 8, y: 4, w: 4, h: 4, static: true, value: ''} ],
  [ {x: 0, y: 8, w: 4, h: 4, static: true, value: ''},
    {x: 4, y: 8, w: 4, h: 4, static: true, value: ''},
    {x: 8, y: 8, w: 4, h: 4, static: true, value: ''} ]
]

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
      console.log('winner', winner)
      const plays = state.totalPlays + 1
      console.log(plays)
      console.log('grids', Math.pow(state.gridSize, 2))
      const draw = plays === Math.pow(state.gridSize, 2) && winner === null ? true : false
      console.log('draw', draw)
      return Object.assign({}, state, {
        board: newBoard,
        playerTurn: currentPlayer === 'X' ? 'O' : 'X',
        winner,
        isTieGame: draw,
        totalPlays: plays
      })
    //TODO: Case of changing board size, have a function that generates a new board
      //function to generate new board based on n
    default:
      return state;
  }
}