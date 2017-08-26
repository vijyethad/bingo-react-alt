import alt from '../alt';

import BingoActions from '../actions/BingoActions';
import UniqueRandomNumber from '../utils/UniqueRandomNumber';

class BingoStore {
    constructor() {
        this.bindActions(BingoActions);
        this.bingoNumber = null;
    }

    static shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    static getRandomNumbersForBoard() {
        let numbers = [];
        for (let i = 1; i <= 100; i++) {
            numbers.push(i);
        }
        let randomNumbers = this.shuffle(numbers);
        return randomNumbers;
    }

    static convertListToMatrix(list, elementsPerSubArray) {
       var matrix = [], i, k;
       for (i = 0, k = -1; i < list.length; i++) {
           if (i % elementsPerSubArray === 0) {
               k++;
               matrix[k] = [];
           }
           matrix[k].push(list[i]);
       }
       return matrix;
    }

    onGenerateBingoNumber() {
        this.bingoNumber = UniqueRandomNumber();
    }
}

export default alt.createStore(BingoStore);
