import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class DivisionPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      division: this.props.value,
    }
  }

  onSelect = (event) => {
    this.setState({ division: event.target.value });
    this.props.onDivisionSelect(event);
  }

  render() {
    return (
      <FormGroup>
        <ControlLabel>{this.props.pickerLabel}</ControlLabel>
        <FormControl id={this.props.id} onChange={this.onSelect} componentClass="select" 
          placeholder="select team" value={this.state.division}>
          {this.props.divisions.map((division) => {
            return <option key={division.id} value={division.name}>{division.name}</option>
          })}
        </FormControl>
      </FormGroup>
    );
  }
}

export default DivisionPicker;