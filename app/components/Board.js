import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import ReactGridLayout from 'react-grid-layout'
import Cell from './Cell'
import GameOptions from './GameOptions'
import '../styles/board.css';

class Board extends Component {

  render() {
    const { board } = this.props
    const cellDimensions = []
    //Create objects to pass in to React Grid Layout
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const newCell = {
          x: j * 2,
          y: i * 2,
          w: 2,
          h: 2,
          static: true,
          position: [i, j],
          value: board[i][j]
        }
        cellDimensions.push(newCell)
      }
    }

    const cells = cellDimensions.map((cell, index) => {
      return (
        <div key={index} _grid={cell}>
          <Cell position={cell.position} value={cell.value}/>
        </div>
      )
    })

    return (
      <div className="boardStyles">
        <div>
          <GameOptions/>
        </div>
        <div>
          <ReactGridLayout cols={22} rowHeight={25} width={1000}>
            {cells}
          </ReactGridLayout>
        </div>
      </div>
    )
  }
}

Board.propTypes = {
  board: PropTypes.array
}

export default Board