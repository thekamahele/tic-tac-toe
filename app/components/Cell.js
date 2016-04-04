import React, { Component } from 'react'
import '../styles/board.css';

class Cell extends Component {
  render() {
    console.log('props', this.props)
    const { marker } = this.props
    console.log('marker', marker)
    return (
      <div className="cell">{marker}</div>
    )
  }
}

export default Cell