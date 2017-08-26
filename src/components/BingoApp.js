import React from 'react';

import BingoStore from '../stores/BingoStore';
import BingoBoard from './BingoBoard.js';

class BingoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumbersForBoard: BingoStore.getRandomNumbersForBoard(),
        }
    }

    render() {
        return (
            <div className="BingoApp">
                <BingoBoard randomNumbersForBoard={this.state.randomNumbersForBoard} />
            </div>
        );
    }
};

export default BingoApp;
