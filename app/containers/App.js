import React, { Component } from 'react';
import Board from '../components/Board';
import GameStatus from '../components/GameStatus'
import GameOptions from '../components/GameOptions'

import './../styles/react-grid-layout.css'
import './../styles/main.css'

//TODO: pass game status
const stat = 'hey testing status'
export default class App extends Component {
  render() {
    return (
        <div className="main">
          <div>
            <GameOptions/>
          </div>

          <div>
            <GameStatus status={stat}/>
            <Board />
          </div>
        </div>
    )
  }
}