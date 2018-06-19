import React from 'react';
import Predictor from './Predictor/Predictor';

const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				
			</div>
		)
	} else {
		return (
			<div className="Home">
				{/* Display logged out message here. */}
			</div>
		)
	}
}

export default Home;