import React from 'react'
import { Button } from 'react-bootstrap';
import TeamPickers from './TeamPickers/TeamPickers';

const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<p>Current User:</p>
				<TeamPickers></TeamPickers>
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
