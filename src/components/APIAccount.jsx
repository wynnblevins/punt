import React, { Component } from 'react';

class APIAccount extends Component {
  render() {
    return (
      <form className="form-horizontal">
				<div className="form-group col-xs-offset-2 col-xs-8">
          <label for="usernameField" className="control-label">Username</label> 
          <div className="col-xs-offset-2 col-xs-8">
            <input id="usernameField" name="usernameField" 
              type="text" className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <label for="passwordField" className="control-label">Password</label> 
          <div>
            <input id="passwordField" name="passwordField" 
              type="text" className="form-control"/>
          </div>
        </div> 
        <div className="form-group row">
    			<div className="col-xs-offset-2 col-xs-8">
							<button name="submit" type="button" 
								className="btn btn-primary">Submit</button>
    			</div>
  			</div>
			</form>
    );
  }
}

export default APIAccount;