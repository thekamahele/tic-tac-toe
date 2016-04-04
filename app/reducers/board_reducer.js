const SET_GAME = 'SET_GAME'

const initialState = {
  board: [[],[],[]]
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_GAME:
      return state + 1;
    default:
      return state;
  }
}