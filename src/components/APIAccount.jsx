import React, { Component } from 'react';

class APIAccount extends Component {
  render() {
    return (
      <form className="form-horizontal">
				<div className="form-group">
          <label for="usernameField" className="control-label col-xs-4">Username</label> 
          <div className="col-xs-8">
            <input id="usernameField" name="usernameField" 
              type="text" className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <label for="passwordField" className="control-label col-xs-4">Password</label> 
          <div className="col-xs-8">
            <input id="passwordField" name="passwordField" 
              type="text" className="form-control"/>
          </div>
        </div> 
        <div className="form-group row">
    			<div className="col-xs-offset-4 col-xs-8">
							<button name="submit" type="button" 
								className="btn btn-primary">Submit</button>
    			</div>
  			</div>
			</form>
    );
  }
}

export default APIAccount;