import React from 'react'
import { Button } from 'react-bootstrap';
import TeamPickers from './TeamPickers/TeamPickers';
import PredictButton from './PredictButton/PredictButton';

const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<p>Current User:</p>
				<TeamPickers></TeamPickers>
				<PredictButton></PredictButton>
			</div>
		)
	} else {
		return (
			
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	}
}

export default Home
