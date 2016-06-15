import {observable, computed} from 'mobx';
import request from 'request';

const gameState =  new class GameState {
    @observable gameArray = [];
    @observable rowNum = 40;
    @observable colNum = 20;

    constructor() {
      this.prepareGameTable();
    }

    prepareGameTable() {
      var row = [...Array(this.rowNum)];
      row = row.map((x,i) => 0);
      this.gameArray = [...Array(this.colNum)];
      this.gameArray = this.gameArray.map((y,i) => row);
      console.log(this.gameArray);
    }

    getStatus(x,y) {
      return this.gameArray[x][y];
    }
}();

export default gameState;
