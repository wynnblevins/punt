import React from 'react';
import TeamPicker from '../TeamPicker/TeamPicker';

const Predictor = (props) => (
  <div className="row">
    <div className="col-xs-6 col-md-6">
      <TeamPicker id='rightTeamPicker' teams={props.teams} onTeamSelect={props.onTeamSelect}></TeamPicker>    
    </div>
    <div className="col-xs-6 col-md-6">
      <TeamPicker id='leftTeamPicker' teams={props.teams} onTeamSelect={props.onTeamSelect}></TeamPicker>
    </div>
    <button onClick={props.onPredictClick} 
      type="button" className="btn btn-primary btn-lg">Predict</button>
  </div>  
);


export default Predictor;