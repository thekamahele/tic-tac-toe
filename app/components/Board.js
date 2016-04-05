import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactGridLayout from 'react-grid-layout'
import Cell from './Cell'
import '../styles/board.css';
import '../styles/react-grid-layout.css';

//TODO: pull from state
//const makeBoard = [
//  {x: 0, y: 0, w: 4, h: 4, static: true, value: 'x'},
//  {x: 4, y: 0, w: 4, h: 4, static: true, value: ''},
//  {x: 8, y: 0, w: 4, h: 4, static: true, value: ''},
//  {x: 0, y: 4, w: 4, h: 4, static: true, value: 'x'},
//  {x: 4, y: 4, w: 4, h: 4, static: true, value: 'x'},
//  {x: 8, y: 4, w: 4, h: 4, static: true, value: ''},
//  {x: 0, y: 8, w: 4, h: 4, static: true, value: ''},
//  {x: 4, y: 8, w: 4, h: 4, static: true, value: 'o'},
//  {x: 8, y: 8, w: 4, h: 4, static: true, value: 'x'}
//]

class Board extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cells = this.props.board.map((cellValue, index) => {
      return (
        <div className="layout line" key={index} _grid={cellValue}>
          <Cell position={{x: cellValue.x, y: cellValue.y, value: cellValue.value}}/>
        </div>
      )
    })
    return (
        <ReactGridLayout className="layout" cols={15} rowHeight={20} width={500}>
          {cells}
        </ReactGridLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.game.board
  }
}

export default connect(mapStateToProps, null)(Board)