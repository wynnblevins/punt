import React from 'react';
import TeamPicker from '../TeamPicker/TeamPicker';
import DivisionPicker from '../DivisionPicker/DivisionPicker';

const Predictor = (props) => {

  if (props.predictionMade === false) {
    const divisionTeams = props.teams.filter((team) => team.division === props.selectedDivision);
    const pickerAOpts = props.teamBID ? divisionTeams.filter((team) => team.id != props.teamBID) : divisionTeams;
    const pickerBOpts = props.teamAID ? divisionTeams.filter((team) => team.id != props.teamAID) : divisionTeams;
    console.log(props, divisionTeams, pickerAOpts, pickerBOpts);
    return (
      <div className="pickersWrapper">
        <div className="row">
          <div className="col-xs-12">
            <DivisionPicker id="divisionPicker" divisions={props.divisions} 
              onDivisionSelect={props.onDivisionSelect} value={props.selectedDivision} pickerLabel="Select Division">
            </DivisionPicker>          
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <TeamPicker id='rightTeamPicker' 
              teams={pickerAOpts} 
              onTeamSelect={props.onTeamSelect} pickerLabel="Select Team A">
            </TeamPicker>    
          </div>
          <div className="col-sm-12 col-md-6">
            <TeamPicker id='leftTeamPicker' teams={props.teams} 
              teams={pickerBOpts}  
              onTeamSelect={props.onTeamSelect} pickerLabel="Select Team B">
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
              <TeamPicker id='rightTeamPicker'
                teams={props.teams.filter(team => team.division === props.selectedDivision )}
                onTeamSelect={props.onTeamSelect} pickerLabel="Select Team A">
              </TeamPicker>    
            </div>
            <div className="col-sm-12 col-md-6">
              <TeamPicker id='leftTeamPicker' teams={props.teams} 
                teams={props.teams.filter(team => team.division === props.selectedDivision)}
                onTeamSelect={props.onTeamSelect} pickerLabel="Select Team B">
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
              <DivisionPicker id='divisionPicker' divisions={props.divisions} 
                onDivisionSelect={props.onDivisionSelect} pickerLabel="Select Division">
              </DivisionPicker>                
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <TeamPicker id='rightTeamPicker'
                teams={props.teams.filter(team => team.division === props.selectedDivision )}
                onTeamSelect={props.onTeamSelect} 
                pickerLabel="Select Team A">
              </TeamPicker>    
            </div>
            <div className="col-sm-12 col-md-6">
              <TeamPicker id='leftTeamPicker' 
                teams={props.teams.filter(team => team.division === props.selectedDivision )}
                onTeamSelect={props.onTeamSelect} 
                pickerLabel="Select Team B">
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