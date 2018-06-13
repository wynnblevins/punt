import React, { Component } from 'react';
import PredictButton from '../PredictButton/PredictButton';
import TeamPickers from '../TeamPickers/TeamPickers';

class Predictor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TeamPickers></TeamPickers>
        <PredictButton></PredictButton>
      </div>  
    );
  }
}

export default Predictor;