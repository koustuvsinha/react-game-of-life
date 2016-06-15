import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import gameState from '../utils/GameState';
import {observer} from 'mobx-react';

var hiddenDiv = {
  display: 'none'
}

@observer
export default class Cell extends Component {

  constructor(props) {
    super(props);
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.props.state.toggleState(this.props.x,this.props.y);
    this.forceUpdate();
  }

  getNumNeighboursAlive() {
    let nbrs = this.props.state.getNeighbours(this.props.x, this.props.y);
    let alive = 0;
    nbrs.map((x,i) => alive += this.props.state.getStatus(x.x,x.y));
    return alive;
  }

  evaluateLife() {
    let alive = this.getNumNeighboursAlive();
    if(this.isAlive() && (alive < 2 || alive > 3)) {
      //kill cell
      this.kill();
    } else if(!this.isAlive() && alive === 2) {
      this.resurrect();
    }
  }

  kill() {
    if(this.isAlive()) {
      setTimeout(() => {
        this.props.state.toggleState(this.props.x,this.props.y);
      },100);
    }
  }

  resurrect() {
    if(!this.isAlive()) {
      setTimeout(() => {
        this.props.state.toggleState(this.props.x,this.props.y);
      },100);
    }
  }

  isAlive() {
    if(this.props.state.getStatus(this.props.x,this.props.y) === 1) return true;
    else return false;
  }

  render() {
    return(
      <div className={`cell cell-${this.props.state.getStatus(this.props.x,this.props.y)}`} onClick={this.toggleState}>
        <div style={hiddenDiv}>
          {this.props.state.state}
        </div>
      </div>
    );
  }
}
