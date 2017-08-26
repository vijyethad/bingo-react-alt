import alt from '../alt';

class BingoActions {
    constructor() {
        this.generateActions(
            'getRandomNumbersForBoard',
            'generateBingoNumber',
            'convertListToMatrix'
        )
    }
}

export default alt.createActions(BingoActions);
