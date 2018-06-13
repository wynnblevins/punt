import React, { Component } from 'react';

class PredictButton extends Component {
  constructor(props) {
    super(props);
  }

  onPredictClick() {
    console.log('inside on predict click.');
  }

  render() {
    return (
      <button onClick={this.onPredictClick} 
        type="button" className="btn btn-primary btn-lg">Predict</button>  
    );
  }
}

export default PredictButton;