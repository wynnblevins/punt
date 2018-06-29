import React from 'react';
import TeamPicker from '../TeamPicker/TeamPicker';
import DivisionPicker from '../DivisionPicker/DivisionPicker';

const Predictor = (props) => {
  if (props.predictionMade === false) {
    return (
      <div className="pickersWrapper">
        <div className="row">
          <div className="col-xs-12">
            <DivisionPicker id="divisionPicker" divisions={props.divisions} 
              onDivisionSelect={props.onDivisionSelect} pickerLabel="Select Division">
            </DivisionPicker>          
          </div>
        </div>
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
      </div>
    );
  } else {
    if (props.teamAWinner) {
      return (
        <div className="pickersWrapper">
          <div className="row">
            <div className="col-xs-12">
              <DivisionPicker id="divisionPicker" divisions={props.divisions} 
                onDivisionSelect={props.onDivisionSelect} pickerLabel="Select Division">
              </DivisionPicker>
            </div>
          </div>
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
        </div>
      );
    } else {
      return (
        <div className="pickersWrapper">
          <div className="row">
            <div className="col-xs-12">
              <DivisionPicker id='rightTeamPicker' divisions={props.divisions} 
                onDivisionSelect={props.onDivisionSelect} pickerLabel="Select Division">
              </DivisionPicker>                
            </div>
          </div>
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
        </div>
      );
    }
  }   
};

export default Predictor;