import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

@observer
export default class GameControl extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleClick() {
    this.props.state.toggleGameState();
  }

  clear() {
    this.props.state.prepareGameTable();
  }

  render() {
    return(
      <div className="gameControl">
        <button className="ui labeled icon button" onClick={this.handleClick}>
          <i className={`icon ${this.props.state.nextState.toLowerCase()}`}></i>
          {this.props.state.nextState}
        </button>
        <button className="ui labeled icon button" onClick={this.clear}>
          <i className="icon clear"></i>
          Clear
        </button>
      </div>
    );
  }
}
