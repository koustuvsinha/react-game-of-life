import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import gameState from '../utils/GameState';
import {observer} from 'mobx-react';

@observer
export default class Cell extends Component {
  render() {
    return(
      <div className={`cell cell-${this.props.state.getStatus(this.props.x,this.props.y)}`}>
        &nbsp;
      </div>
    );
  }
}
