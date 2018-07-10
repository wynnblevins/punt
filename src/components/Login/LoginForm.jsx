import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="LoginForm">
					<form className="form-horizontal">
						<fieldset>
							<legend>Please Log In</legend>

							<div className="form-group">
								<label className="col-md-4 control-label" 
									for="usernameInput">Username</label>  
  							<div className="col-md-4">
									<input name="username"
										value={this.state.username}
										onChange={this.handleChange}
										id="usernameInput" 
										type="text" 
										placeholder="username" 
										className="form-control input-md"/>
  							</div>
							</div>

							<div className="form-group">
								<label className="col-md-4 control-label" 
									htmlFor="passwordInput">Password</label>
								<div className="col-md-4">
									<input id="passwordInput" 
										type="password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
										placeholder="password" 
										className="form-control input-md"/>
								</div>
							</div>

							<div className="form-group">
  							<div class="col-md-4">
									<button id="loginButton" name="loginButton" 
										className="btn btn-primary" onClick={this.handleSubmit}>Log In</button>
  							</div>
							</div>
						</fieldset>
					</form>
				</div>
			)
		}
	}
}

export default LoginForm
