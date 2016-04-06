import React, { Component } from 'react'
import { connect } from 'react-redux'

class GameStatus extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {winner, player, draw} = this.props
    return (
      <div>
        {draw ? 'It\'s a draw! Try again.' :
          !winner ? `Player ${player}, your turn` : `Congratulations ${winner}, you won!`}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    winner: state.game.winner,
    player: state.game.playerTurn,
    draw: state.game.isTieGame
  }
}

export default connect(mapStateToProps, null)(GameStatus)