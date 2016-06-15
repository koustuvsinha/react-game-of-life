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
    setInterval(() => this.update(),1000);
  }
  update() {
    // dont run if status is Pause
    if(gameState.state !== 'Pause') {
      for(var i = 0; i< 20; i++) {
        for(var j = 0; j<40; j++) {
          this.refs['cell-' + i + '' + j].evaluateLife();
        }
      }
    }
  }
  render() {
    this.cells = [];
    for(var i = 0; i< 20; i++) {
      for(var j = 0; j<40; j++) {
        this.cells.push(<Cell x={i} y={j} state={gameState} ref={'cell-' + i + '' + j}/>);
      }
    }
    return(
      <div className="gameArea">
        {this.cells}
      </div>
    );
  }
}
