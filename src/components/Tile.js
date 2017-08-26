import React from 'react';
import BingoStore from '../stores/BingoStore';
import BingoActions from '../actions/BingoActions';

export default class Tile extends React.Component{

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.tileData === nextProps.bingoNumber;
  }

  render() {
    const tileStyles = (this.props.tileData === this.props.bingoNumber) ? 'tile active animated pulse' : 'tile';
    return (
      <div className={tileStyles}>
          {this.props.tileData}
      </div>
    );
  }
}
