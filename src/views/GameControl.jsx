import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

@observer
export default class GameControl extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.state.toggleGameState();
  }

  render() {
    return(
      <div className="gameControl">
        <button className="ui labeled icon button" onClick={this.handleClick}>
          <i className={`icon ${this.props.state.nextState.toLowerCase()}`}></i>
          {this.props.state.nextState}
        </button>
      </div>
    );
  }
}
