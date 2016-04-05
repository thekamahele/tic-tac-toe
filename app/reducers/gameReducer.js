import { SET_GAME, MAKE_MOVE } from '../constants/actionTypes'

const initialState = {
  board: [[],[],[]],
  playerTurn: 'X',
  winner: null,
  isTieGame: false
}

export default function game(state = initialState, action) {
  switch (action.type) {
    case SET_GAME:
      return Object.assign({}, state, {

      })
    case MAKE_MOVE:
      return Object.assign({}, state, {

      })
    default:
      return state;
  }
}