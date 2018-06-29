import React from 'react';

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