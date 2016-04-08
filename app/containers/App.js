import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import Board from '../components/Board';
import GameStatus from '../components/GameStatus'
import { configureStore } from '../store/configureStore';
import { Root } from '../containers/Root';

const store = configureStore()

class App extends Component {
  componentWillReceiveProps(nextProps) {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    ReactDOM.render(<Root store={store}/>
      , document.getElementById('app'));
    return true;
  }

  render() {
    return (
      <div className="main">
        <div>
          <GameStatus {...this.props} />
          <Board board={this.props.board}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    board: state.game.board,
    grid: state.game.gridSize,
    winner: state.game.winner,
    player: state.game.playerTurn,
    draw: state.game.isTieGame
  }
}
export default connect(mapStateToProps, null)(App)
