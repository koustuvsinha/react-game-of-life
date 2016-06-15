import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import gameState from '../utils/GameState';
import Cell from './Cell'
import {observer} from 'mobx-react';

@observer
export default class GameArea extends Component {
  constructor(props) {
    super(props);
    this.cells = [];
  }
  render() {
    this.cells = [];
    for(var i = 0; i< 20; i++) {
      for(var j = 0; j<40; j++) {
        this.cells.push(<Cell x={i} y={j} state={gameState}/>);
      }
    }
    return(
      <div className="gameArea">
        {this.cells}
      </div>
    );
  }
}
