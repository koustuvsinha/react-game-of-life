import {observable, computed} from 'mobx';
import request from 'request';

const gameState =  new class GameState {
    @observable gameArray = [];
    @observable rowNum = 40;
    @observable colNum = 20;
    @observable state = 'Play';
    @observable nextState = 'Pause';

    constructor() {
      this.prepareGameTable();
    }

    prepareGameTable() {
      var row = [...Array(this.rowNum)];
      row = row.map((x,i) => 0);
      this.gameArray = [...Array(this.colNum)];
      this.gameArray = this.gameArray.map((y,i) => row);
    }

    getStatus(x,y) {
      return this.gameArray[x][y];
    }

    toggleState(x,y) {
      if(this.gameArray[x][y] === 0) {
        this.gameArray[x][y] = 1;
      } else {
        this.gameArray[x][y] = 0;
      }
    }

    toggleGameState() {
      if(this.state == 'Play') {
        this.state = 'Pause';
        this.nextState = 'Pause';
      } else {
        this.state = 'Play';
        this.nextState = 'Play';
      }
    }

    getNeighbours(x,y) {
      let nbrs = [];
      if(x >= 1) {
        nbrs.push({x: x-1, y: y});
        if(y >= 1) {
          nbrs.push({x: x-1, y: y - 1});
        }
        if(y + 1 < this.rowNum) {
          nbrs.push({x: x-1, y: y + 1});
        }
      }
      if(x + 1 < this.colNum) {
        nbrs.push({x : x + 1, y: y});
        if(y >= 1) {
          nbrs.push({x: x + 1, y: y - 1});
        }
        if(y + 1 < this.rowNum) {
          nbrs.push({x : x + 1, y: y + 1});
        }
      }
      if(y >= 1) {
        nbrs.push({x : x, y: y - 1});
      }
      if(y + 1 < this.rowNum) {
        nbrs.push({x : x, y: y + 1});
      }
      return nbrs;
    }
}();

export default gameState;
