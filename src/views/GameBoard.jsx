import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import gameState from '../utils/GameState';
import GameArea from './GameArea'
import {observer} from 'mobx-react';

@observer
export default class GameBoard extends Component {
  render() {
    return(
      <div className="table-view">
        <div className="ui grid">
          <div className="eleven wide column">
            <h2 className="page-title">FCC Game of Life</h2>
          </div>
        </div>
        <hr/>
        <GameArea/>
      </div>
    );
  }
}
