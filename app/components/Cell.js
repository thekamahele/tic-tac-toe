import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { makeMove } from '../actions/index'

class Cell extends Component {
  handleClick(pos) {
    //Will only fire if the square is empty and there is no winner
    if (this.props.value === '' && !this.props.winner) {
      this.playerMove(pos)
    }
  }

  playerMove(position) {
    this.props.makeMove({x: position[0], y: position[1]})
  }

  render() {
    return (
      <div className="cell" onClick={() => { this.handleClick(this.props.position) }}>
        {this.props.value}
      </div>
    )
  }
}

Cell.propTypes = {
  position: PropTypes.array,
  value: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    winner: state.game.winner
  }
}

export default connect(mapStateToProps, {makeMove})(Cell)
