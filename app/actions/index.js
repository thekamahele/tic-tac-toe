import * as actions from '../constants/actionTypes'

export function setGame() {
  return {
    type: actions.SET_GAME
  }
}

export function makeMove(position) {
  return {
    type: actions.MAKE_MOVE,
    position
  }
}