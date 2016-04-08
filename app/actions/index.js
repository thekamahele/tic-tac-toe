import * as actions from '../constants/actionTypes'

export function setGame(size = 3) {
  console.log('SIZE', size)
  return {
    type: actions.SET_GAME,
    size
  }
}

export function makeMove(position) {
  return {
    type: actions.MAKE_MOVE,
    position
  }
}

export function changeSize(size) {
  return {
    type: actions.CHANGE_SIZE,
    size
  }
}