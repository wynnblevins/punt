import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class DivisionPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conferenceId: null
    }
  }

  render() {
    return (
      <FormGroup>
        <ControlLabel>{this.props.pickerLabel}</ControlLabel>
        <FormControl id={this.props.id} onChange={this.props.onTeamSelect} componentClass="select" 
          placeholder="select team" value={this.state.teamId}>
          {this.props.divisions.map((division) => {
            return <option key={division.id} value={division.id}>{division.name}</option>
          })}
        </FormControl>
      </FormGroup>
    );
  }
}

export default DivisionPicker;