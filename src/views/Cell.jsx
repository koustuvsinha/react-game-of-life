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
    setInterval(() => this.evaluateLife(),1000);
  }

  toggleState() {
    this.props.state.toggleState(this.props.x,this.props.y);
    this.forceUpdate();
    console.log(this.getNumNeighboursAlive());
  }

  getNumNeighboursAlive() {
    let nbrs = this.props.state.getNeighbours(this.props.x, this.props.y);
    let alive = 0;
    nbrs.map((x,i) => alive += this.props.state.getStatus(x.x,x.y));
    return alive;
  }

  evaluateLife() {
    // dont run if status is Pause
    if(this.props.state.state !== 'Pause') {
      let alive = this.getNumNeighboursAlive();
      if(this.isAlive() && alive < 2) {
        //kill cell
        this.kill();
      }
      if(!this.isAlive() && alive > 2) {
        this.resurrect();
      }
    }
  }

  kill() {
    if(this.isAlive()) {
      setTimeout(() => {
        this.props.state.toggleState(this.props.x,this.props.y);
      }, 500);
    }
  }

  resurrect() {
    if(!this.isAlive()) {
      setTimeout(() => {
        this.props.state.toggleState(this.props.x,this.props.y);
      }, 500);
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
