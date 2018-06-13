import React from 'react';
import Predictor from './Predictor/Predictor';

const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<p>Current User:</p>
				<Predictor></Predictor>
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

export default Home;