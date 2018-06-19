import React, { Component } from 'react';
import TeamPickers from '../TeamPickers/TeamPickers';

class Predictor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamAId: null,
      teamBId: null
    }
  }

  setTeamA(e) {
    console.log('inside setTeamA of Predictor component');
  }

  setTeamB(e) {
    console.log('inside setTeamB of Predictor component');
  }

  render() {
    return (
      
      <TeamPickers teamAChanged={(id) => {
          this.setTeamA(id); 
        }} teamBChanged={(id) => {
          this.setTeamB(id);
        }}></TeamPickers>  
    );
  }
}

export default Predictor;