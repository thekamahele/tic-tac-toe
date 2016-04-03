import { combineReducers } from 'redux';
import BoardReducer from '../board/board_reducer.js';

const rootReducer = combineReducers({
  board: BoardReducer
});

export default rootReducer;