import React from 'react';
import TeamPicker from '../TeamPicker/TeamPicker';
import DivisionPicker from '../DivisionPicker/DivisionPicker';
import PredictionOutcome from '../PredictionOutcome/PredictionOutcome';
import TeamHelmet from '../TeamHelmet/TeamHelmet';

const Predictor = (props) => {
  const divisionTeams = props.teams.filter((team) => team.division === props.selectedDivision);
  const pickerAOpts = props.teamBID ? divisionTeams.filter((team) => team.id != props.teamBID) : divisionTeams;
  const pickerBOpts = props.teamAID ? divisionTeams.filter((team) => team.id != props.teamAID) : divisionTeams;
  
  return (
    <div className="panelWrapper">
      <div className="row">
        <div className="col-xs-12">
          <DivisionPicker id="divisionPicker" divisions={props.divisions} 
            onDivisionSelect={props.onDivisionSelect} value={props.selectedDivision} 
            pickerLabel="Select Division">
          </DivisionPicker>          
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <TeamPicker id='leftTeamPicker' 
            teams={pickerAOpts} 
            onTeamSelect={props.onTeamSelect} pickerLabel="Select Team A">
          </TeamPicker>    
        </div>
        <div className="col-sm-12 col-md-6">
          <TeamPicker id='rightTeamPicker' 
            teams={pickerBOpts}  
            onTeamSelect={props.onTeamSelect} pickerLabel="Select Team B">
          </TeamPicker>
        </div>
        <div className="row">
          <div className="hidden-xs visible-sm visible-md visible-lg visible-xl">
            <div className="col-sm-4">
              <TeamHelmet teamLogo={props.teamBLogo}></TeamHelmet>
            </div>
            <div className="col-sm-4">
              <PredictionOutcome teamAWinner={props.teamAWinner} 
                predictionMade={props.predictionMade} 
                showSpinner={props.showSpinner}></PredictionOutcome>
            </div>
            <div className="col-sm-4">
              <TeamHelmet teamLogo={props.teamALogo}></TeamHelmet>  
            </div>
          </div>
          <div className="hidden-sm visible-xs">
            <div className="col-xs-12">
              <TeamHelmet teamLogo={props.teamBLogo}></TeamHelmet>
            </div>
            <div className="col-xs-12">
              <TeamHelmet teamLogo={props.teamALogo}></TeamHelmet>
            </div>
            <div className="col-sm-4">
              <PredictionOutcome teamAWinner={props.teamAWinner} 
                predictionMade={props.predictionMade} 
                showSpinner={props.showSpinner}></PredictionOutcome>  
            </div>
          </div>
        </div>
        <button disabled={props.predictButtonEnabled} onClick={props.onPredictClick} 
          type="button" className="btn btn-primary btn-lg">Predict</button>
      </div>
    </div>
  );
}; 

export default Predictor;