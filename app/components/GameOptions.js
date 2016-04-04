import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/main.css'

class GameOptions extends Component {
  render () {
    return (
      <div id="gameOptions">
        <button>New Game</button>
        <br/>
        <button>Change Board Size</button>
      </div>
    )
  }
}

export default GameOptions