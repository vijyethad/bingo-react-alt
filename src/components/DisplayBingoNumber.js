import React from 'react';

export default function DisplayBingoNumber(props) {
    return (
      <div className="current-number-container">
          {
              props.bingoNumber ?
                <div className="current-number">
                  <span>{props.bingoNumber}</span>
                </div>
              :
                null
          }
      </div>
    )
}
