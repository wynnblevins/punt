import React from 'react';

const PredictionOutcome = (props) => {
  if (props.predictionMade === false && props.showSpinner === false) {
    return (
      <div>
        <h1>Prediction Has Not Been Made</h1>
      </div>
    );
  } else if (props.predictionMade === false && props.showSpinner === true) {
    return (
      <div>
        <img src="./spinner_rsz.gif" alt="Getting prediction"/>
      </div>
    );
  } else {
    if (props.teamAWinner) {
      return (
        <div>
          <h1>Team A Is The Winner</h1>
        </div>
      );  
    } else {
      return (
        <div>
          <h1>Team B Is The Winner</h1>
        </div>
      );
    }
  }
};

export default PredictionOutcome;