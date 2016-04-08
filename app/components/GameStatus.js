import React, { PropTypes } from 'react'

const GameStatus = (props) => {
  const {winner, player, draw} = props
  return (
      <div className="status">
        {draw ? 'It\'s a draw! Try again.' :
          !winner ? `Player ${player}, your turn` : `Congratulations ${winner}, you won!`}
      </div>
    )
}

GameStatus.propTypes = {
  winner: PropTypes.bool,
  player: PropTypes.string,
  draw: PropTypes.bool
}

export default GameStatus