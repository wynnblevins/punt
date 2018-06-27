import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './App.css';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Home from './components/Home';
import { Tabs, Tab } from 'react-bootstrap';
import Predictor from './components/Predictor/Predictor';
import Teams from './teams';

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<div>
				<Link to="#" className="nav-link" onClick={props._logout}>
					Logout
				</Link>
			  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
				  <Tab eventKey={2} title="Predictor">
						<Predictor onPredictClick={props.onPredictClick} 
							onTeamSelect={props.onTeamSelect} teams={props.teams}
							predictionMade={props.predictionMade} 
							teamAWinner={props.teamAWinner}></Predictor>
				  </Tab>
			  </Tabs>
			</div>
		)
	} else if (window.location.href.endsWith('/signup') || 
		window.location.href.endsWith('/login')) { 
		// if not signed in but on the signup page
		return (<div></div>);
	} 
	else {
		return (
			<div>		
				<Link to="/login">login</Link>
				<Link to="/signup">sign up</Link>
			</div>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			teams: Teams,
			loggedIn: false,
			user: null,
			teamAId: null,
			teamBId: null,
			teamAWinner: null,
			predictionMade: false
		}
		this._logout = this._logout.bind(this);
		this._login = this._login.bind(this);
	}
	
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios.post('/auth/login', {
				username,
				password
			}).then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			});
	}

	onTeamSelect = (e) => {
		const rightId = 'rightTeamPicker';
		const leftId = 'leftTeamPicker';

		if (e.target.id === rightId) {
			this.setState({ teamAID: e.target.value });
		} else if (e.target.id === leftId) {
			this.setState({ teamBID: e.target.value })
		} else {
			console.error('Holy crap, something is waaaay wrong');
		}
	}

	requestWinner = (self) => {
		let teamAId = self.state.teamAID;
		let teamBId = self.state.teamBID;
		let requestUrl = `/api/prediction/teamA/${teamAId}/teamB/${teamBId}`;
		
		console.log(`requested url is ${requestUrl}`);
		axios.get(requestUrl).then((response) => {
			if (response.data === true) {
				this.setState({teamAWinner: true});
				this.setState({predictionMade: true});
				console.log('team a is the winner.');
			} else {
				this.setState({teamAWinner: false});
				this.setState({predictionMade: true})
				console.log('team b is the winner.');
			}
		}).catch((err) => {
			throw err;
		});
	}
	
	render() {
		const self = this;
		
		return (
			<div className="App">
				<h1>This is the main App component</h1>
				<Header user={this.state.user} />
				{/* LINKS to our different 'pages' */}
				<DisplayLinks _logout={self._logout} loggedIn={self.state.loggedIn} 
				  teams={self.state.teams} onPredictClick={function () {
						self.requestWinner(self); 
					}} onTeamSelect={self.onTeamSelect} teamAWinner={self.state.teamAWinner}
					predictionMade={self.state.predictionMade}/>
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				<Route exact path="/" render={() => <Home user={this.state.user} />} />
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/signup" component={SignupForm} />
				{/* <LoginForm _login={this._login} /> */}
			</div>
		)
	}
}

export default App
