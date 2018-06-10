import React from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const TeamPickers = props => {
  return (
    <div className="row">
      <div className="col-xs-6 col-md-6">
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="76">Arizona, Cardinals</option>
            <option value="68">Atlanta, Falcons </option>
            <option value="56">Baltimore, Ravens</option>
            <option value="48">Buffalo Bills</option>
            <option value="69">Carolina, Panthers</option>
            <option value="60">Chicago, Bears</option>
            <option value="57">Cincinatti, Bengals</option>
            <option value="58">Clevland, Browns</option>
            <option value="52">Dallas, Cowboys</option>
            <option value="72">Denver, Broncos</option>
            <option value="61">Detroit, Lions</option>
            <option value="62">Green Bay, Packers</option>
            <option value="64">Houston, Texans</option>
            <option value="65">Indianapolis, Colts</option>
            <option value="66">Jacksonville, Jaguars</option>
            <option value="73">Kansas City, Chiefs</option>
            <option value="75">Los Angeles, Chargers</option>
            <option value="77">Los Angeles, Rams</option>
            <option value="49">Miami, Dolphins</option>
            <option value="63">Minnesota, Vikings</option>
            <option value="50">New England, Patriots</option>
            <option value="70">New Orleans, Saints</option>
            <option value="53">New York, Giants</option>
            <option value="51">New York, Jets</option>
            <option value="74">Oakland, Raiders</option>
            <option value="54">Philadelphia, Eagles</option>
            <option value="59">Pittsburg, Steelers</option>
            <option value="78">San Francisco, 49ers</option>
            <option value="79">Seattle, Seahawks</option>
            <option value="71">Tampa Bay, Buccaneers</option>
            <option value="62">Tennessee, Titans</option>
            <option value="55">Washington, Redskins</option>
          </FormControl>
        </FormGroup>    
      </div>
      <div className="col-xs-6 col-md-6">
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="76">Arizona, Cardinals</option>
            <option value="68">Atlanta, Falcons </option>
            <option value="56">Baltimore, Ravens</option>
            <option value="48">Buffalo Bills</option>
            <option value="69">Carolina, Panthers</option>
            <option value="60">Chicago, Bears</option>
            <option value="57">Cincinatti, Bengals</option>
            <option value="58">Clevland, Browns</option>
            <option value="52">Dallas, Cowboys</option>
            <option value="72">Denver, Broncos</option>
            <option value="61">Detroit, Lions</option>
            <option value="62">Green Bay, Packers</option>
            <option value="64">Houston, Texans</option>
            <option value="65">Indianapolis, Colts</option>
            <option value="66">Jacksonville, Jaguars</option>
            <option value="73">Kansas City, Chiefs</option>
            <option value="75">Los Angeles, Chargers</option>
            <option value="77">Los Angeles, Rams</option>
            <option value="49">Miami, Dolphins</option>
            <option value="63">Minnesota, Vikings</option>
            <option value="50">New England, Patriots</option>
            <option value="70">New Orleans, Saints</option>
            <option value="53">New York, Giants</option>
            <option value="51">New York, Jets</option>
            <option value="74">Oakland, Raiders</option>
            <option value="54">Philadelphia, Eagles</option>
            <option value="59">Pittsburg, Steelers</option>
            <option value="78">San Francisco, 49ers</option>
            <option value="79">Seattle, Seahawks</option>
            <option value="71">Tampa Bay, Buccaneers</option>
            <option value="62">Tennessee, Titans</option>
            <option value="55">Washington, Redskins</option>
          </FormControl>
        </FormGroup>
      </div>
    </div>
  );
}

export default TeamPickers;