import React from 'react';
import TeamPicker from '../TeamPicker/TeamPicker';

const Predictor = (props) => {
  if (props.predictionMade === false) {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <TeamPicker id='rightTeamPicker' teams={props.teams} 
            onTeamSelect={props.onTeamSelect} pickerLabel="Select Team B">
          </TeamPicker>    
        </div>
        <div className="col-sm-12 col-md-6">
          <TeamPicker id='leftTeamPicker' teams={props.teams} 
            onTeamSelect={props.onTeamSelect} pickerLabel="Select Team A">
          </TeamPicker>
        </div>
        <div>
          <h1>Prediction Hasn't Been Made</h1>
        </div>
        <button onClick={props.onPredictClick} 
          type="button" className="btn btn-primary btn-lg">Predict</button>
      </div>
    );
  } else {
    if (props.teamAWinner) {
      return (
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <TeamPicker id='rightTeamPicker' teams={props.teams} 
              onTeamSelect={props.onTeamSelect} pickerLabel="Select Team B">
            </TeamPicker>    
          </div>
          <div className="col-sm-12 col-md-6">
            <TeamPicker id='leftTeamPicker' teams={props.teams} 
              onTeamSelect={props.onTeamSelect} pickerLabel="Select Team A">
            </TeamPicker>
          </div>
          <div>
            <h1>Team A Is The Winner</h1>
          </div>
          <button onClick={props.onPredictClick} 
            type="button" className="btn btn-primary btn-lg">Predict</button>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <TeamPicker id='rightTeamPicker' teams={props.teams} 
              onTeamSelect={props.onTeamSelect} pickerLabel="Select Team B">
            </TeamPicker>    
          </div>
          <div className="col-sm-12 col-md-6">
            <TeamPicker id='leftTeamPicker' teams={props.teams} 
              onTeamSelect={props.onTeamSelect} pickerLabel="Select Team A">
            </TeamPicker>
          </div>
          <div>
            <h1>Team B Is The Winner</h1>
          </div>
          <button onClick={props.onPredictClick} 
            type="button" className="btn btn-primary btn-lg">Predict</button>
        </div>
      );
    }
  }   
};


export default Predictor;