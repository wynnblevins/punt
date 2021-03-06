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
import Divisions from './divisions';
import Description from './components/Description/Description';
import puntLogo from './images/football_logo_splash.png';

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<div>
				<Tabs defaultActiveKey={1} id="predictorTabs">
					<Tab eventKey={1} title="Predictor">
            <Predictor predictButtonEnabled={props.predictButtonEnabled}
              onPredictClick={props.onPredictClick} 
							onTeamSelect={props.onTeamSelect} 
							onDivisionSelect={props.onDivisionSelect}
							teams={props.teams} divisions={props.divisions}
							teamAID={props.teamAID}
							teamBID={props.teamBID}
							teamALogo={props.teamALogo}
							teamBLogo={props.teamBLogo}
							predictionMade={props.predictionMade} 
							teamAWinner={props.teamAWinner}
							selectedDivision={props.selectedDivision}
							showSpinner={props.showSpinner}></Predictor>
				  </Tab>
					<Tab eventKey={2} title="How it Works">
						<Description></Description>
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
			<div className="splash-app-logo">	
				<img src={puntLogo} className="img-responsive center-block"
							alt="football image"/>
				<a className="btn btn-default" href="/login">
					Log In <span className="glyphicon glyphicon-log-in"></span> 
				</a>
				<a className="btn btn-default" href="/signup">
					<span className="glyphicon glyphicon-user"></span> Sign Up 
				</a>
			</div>
		)
	}
}

class App extends Component {
  
  constructor() {
		super()
		this.state = {
      OVER_9000: 9001,
			teams: Teams,
			divisions: Divisions,
      selectedDivision: 'AFC East',
      predictButtonEnabled: false,
			loggedIn: false,
			user: null,
			teamAID: null,
			teamBID: null,
			teamALogo: null,
			teamBLogo: null,
			teamAWinner: null,
			predictionMade: false,
      showSpinner: false
		}
		this._logout = this._logout.bind(this);
		this._login = this._login.bind(this);
	}
	
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			if (!!response.data.user) {
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
		axios.post('/auth/logout').then(response => {
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
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			});
	}

  checkIsReady = () => {
    if ((this.state.teamAID && this.state.teamBID) 
    (this.state.teamAID !== this.state.OVER_9000) 
    && (this.state.teamBID !== this.state.OVER_9000)) {
      this.setState({predictButtonEnabled: true});
    } else {
      this.setState({predictButtonEnabled: false});
    }    
  }

	setImage = (teamId, rightTeam) => {
		let selectedTeam = this.state.teams.filter(team => teamId == team.id)[0];
    
    if (selectedTeam) {
      if (selectedTeam.id != this.state.OVER_9000 && !rightTeam) {
        this.setState({teamBLogo: selectedTeam.leftHelmet});
      } else if (selectedTeam.id === this.state.OVER_9000 && !rightTeam) {
        this.setState({teamBLogo: ''});
      } else if (selectedTeam.id === this.state.OVER_9000 && rightTeam) {
        this.setState({teamALogo: ''});
      } else {
        this.setState({teamALogo: selectedTeam.rightHelmet});
      }
    } else {
      if(rightTeam) {
        this.setState({teamALogo: ''});
      } else {
        this.setState({teamBLogo: ''});
      }   
    }
	}

	onTeamSelect = (e) => {
		const rightId = 'rightTeamPicker';
		const leftId = 'leftTeamPicker';

		if (e.target.id === rightId) {		
			this.setState({ teamBID: e.target.value }, () => {
				this.setImage(this.state.teamBID, true);
			});
		} else if (e.target.id === leftId) {
			this.setState({ teamAID: e.target.value }, () => {
				this.setImage(this.state.teamAID, false);
			});
		} else {
			let errString = 'Holy crap, something is waaaay wrong';
			console.error(errString);
			throw errString;
    }
	}

	onDivisionSelect = (e) => {
		this.setState({ 
			selectedDivision: e.target.value, 
			predictionMade: false,
			teamBID: null,
			teamAID: null,
			teamALogo: null,
			teamBLogo: null 
		});
	}

	requestWinner = (self) => {
		let teamAId = self.state.teamAID;
		let teamBId = self.state.teamBID;
		let requestUrl = `/api/prediction/teamA/${teamAId}/teamB/${teamBId}`;
		
		this.setState({ 
			showSpinner: true, 
			predictionMade: false 
		});
		
		axios.get(requestUrl).then((response) => {
			if (response.data === true) {
				this.setState({
					teamAWinner: true,
					predictionMade: true,
					showSpinner: false
				});
				console.log('team a is the winner.');
			} else {
				this.setState({
					teamAWinner: false,
					predictionMade: true,
					showSpinner: false
				});
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
				<Header user={this.state.user} _logout={self._logout} />
				{/* LINKS to our different 'pages' */}
				<DisplayLinks loggedIn={self.state.loggedIn} 
					teams={self.state.teams} 
					teamAID={self.state.teamAID}
					teamBID={self.state.teamBID}
					teamALogo={self.state.teamALogo}
					teamBLogo={self.state.teamBLogo}
					selectedDivision={self.state.selectedDivision} 
					divisions={self.state.divisions} 
					onPredictClick={function () {
						self.requestWinner(self); 
					}} onTeamSelect={self.onTeamSelect} 
					onDivisionSelect={self.onDivisionSelect}
					teamAWinner={self.state.teamAWinner}
					predictionMade={self.state.predictionMade}
					showSpinner={self.state.showSpinner}/>
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
