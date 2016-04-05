import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeMove } from '../actions/index'
import ReactGridLayout from 'react-grid-layout'
import '../styles/board.css';

class Cell extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(a) {
    //TODO: dispatch action to mark board
    console.log('this state', this.props.playerTurn)
    console.log('this is ', a)
    this.props.makeMove({x: a.x, y: a.y})
  }

  render() {
    return (
      <div className="cell" onClick={() => {this.handleClick(this.props.position)}}>
        {/*<img src={`${this.state.marker}`} alt=""/>*/}
        {this.props.position.value}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    playerTurn: state.game.playerTurn
  }
}

export default connect(mapStateToProps, { makeMove })(Cell)