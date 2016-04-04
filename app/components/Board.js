import React, { Component } from 'react'
import ReactGridLayout from 'react-grid-layout'
import Cell from './Cell'
import '../styles/board.css';
import '../styles/react-grid-layout.css';

const makeBoard = ['X', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X']
class Board extends Component {
  clickHandler(a) {
    console.log('this is ', a)
  }
  render() {
    const cells = makeBoard.map((cellValue, index) => {
      return (<Cell key={index} marker={cellValue}/>)
    })
    return (

        <ReactGridLayout className="layout" cols={15} rowHeight={20} width={500}>
          <div onClick={this.clickHandler.bind()} className="line" key="a" _grid={{x: 0, y: 0, w: 4, h: 4, static: true}}>a</div>
          <div className="line" key="b" _grid={{x: 4, y: 0, w: 4, h: 4, static: true}}>b</div>
          <div className="line" key="c" _grid={{x: 8, y: 0, w: 4, h: 4, static: true}}>c</div>
          <div className="line" key="d" _grid={{x: 0, y: 4, w: 4, h: 4, static: true}}>d</div>
          <div className="line" key="e" _grid={{x: 4, y: 4, w: 4, h: 4, static: true}}>e</div>
          <div className="line" key="f" _grid={{x: 8, y: 4, w: 4, h: 4, static: true}}>f</div>
          <div className="line" key="g" _grid={{x: 0, y: 8, w: 4, h: 4, static: true}}>g</div>
          <div className="line" key="h" _grid={{x: 4, y: 8, w: 4, h: 4, static: true}}>h</div>
          <div className="line" key="i" _grid={{x: 8, y: 8, w: 4, h: 4, static: true}}>i</div>
        </ReactGridLayout>

    )
  }
}

export default Board