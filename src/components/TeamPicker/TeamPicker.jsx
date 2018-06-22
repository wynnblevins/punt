import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class TeamPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamId: null
    }
  }

  render() {
    return (
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
        <FormControl id={this.props.id} onChange={this.props.onTeamSelect} componentClass="select" 
          placeholder="select team" value={this.state.teamId}>
          {this.props.teams.map((team) => {
            return <option key={team.id} value={team.id}>{team.name}</option>
          })}
        </FormControl>
      </FormGroup>
    );
  }
}

export default TeamPicker;