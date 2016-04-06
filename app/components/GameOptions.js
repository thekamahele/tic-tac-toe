import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setGame, changeSize } from '../actions/index'
import '../styles/main.css'

class GameOptions extends Component {
  resetGame() {
    this.props.setGame()
  }

  resizeBoard() {
    this.props.changeSize(Number(this.boardSize.value))
  }

  render () {
    return (
      <div id="gameOptions">
        <button onClick={this.resetGame.bind(this)}>New Game</button>
        <br/>
        <input type="number" ref={(ref) => this.boardSize = ref}/>
        <button onClick={this.resizeBoard.bind(this)}>Change Board Size</button>
      </div>
    )
  }
}

export default connect(null, { setGame, changeSize })(GameOptions)