import React from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const TeamPickers = props => {
  return (
    <div className="row">
      <div className="col-xs-6 col-md-6">
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>    
      </div>
      <div className="col-xs-6 col-md-6">
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
      </div>
    </div>
  );
}

export default TeamPickers;