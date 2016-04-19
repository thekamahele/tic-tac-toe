import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setGame, changeSize } from '../actions/index'

class GameOptions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: null
    }
  }

  resetGame() {
    this.props.setGame()
  }

  resizeBoard() {
    const size = Number(this.boardSize.value)
    if (size > 9 || size < 3) {
      this.setState({
        errorMessage: 'Sorry, please enter a value between 3-9'
      })
    } else {
      this.props.changeSize(Number(this.boardSize.value))
    }
  }

  render() {
    const { errorMessage } = this.state
    return (
      <div>
        <div id="gameOptions">
          <button onClick={this.resetGame.bind(this)}>New Game</button>
          <br/>
          <input type="number" ref={(ref) => this.boardSize = ref}/>
          {errorMessage ? <span>{errorMessage}</span> : null}
          <button onClick={this.resizeBoard.bind(this)}>Change Board Size</button>
        </div>
      </div>
    )
  }
}

export default connect(null, {setGame, changeSize})(GameOptions)
