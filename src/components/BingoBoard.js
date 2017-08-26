import React from 'react';

import BingoStore from '../stores/BingoStore';
import BingoActions from '../actions/BingoActions';
import Tile from './Tile';
import DisplayBingoNumber from './DisplayBingoNumber';

class BingoBoard extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = {
            bingoNumber: BingoStore.getState().bingoNumber
        }
    }

    componentDidMount() {
        BingoStore.listen(this._onChange);
    }

    componentWillUnmount() {
        BingoStore.unlisten(this._onChange);
    }

    _onChange() {
        this.setState({
            bingoNumber: BingoStore.getState().bingoNumber
        });
    }

    render() {
      var wrapperStyles = (this.state.bingoNumber === null) ? 'wrapper gray-board' : 'wrapper';
        return (
            <div>
                <div className={wrapperStyles}>
                    {this._renderBingoBoard()}
                </div>
                <DisplayBingoNumber bingoNumber={this.state.bingoNumber} />
                <button onClick={this._onBingoButtonClick} className="bingo-button">Bingo!</button>
            </div>
        );
    }

    _onBingoButtonClick() {
        BingoActions.generateBingoNumber();
    }

    _renderBingoBoard() {
        var board = [];
        var tiles = BingoActions.convertListToMatrix(this.props.randomNumbersForBoard, 10).map((rowNumbers) => {
            var n = rowNumbers.length;
            for(n = 0; n < rowNumbers.length; n++) {
                board.push(
                    <Tile tileData={rowNumbers[n]} key={rowNumbers[n]} bingoNumber={this.state.bingoNumber} />
                );
            }
        });
        return board;
    }
};

export default BingoBoard;
