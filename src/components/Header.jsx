import React from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = props => {
	let Header;
	if (props.user === null) {
		Header = <p>Welcome to Punt, Please Log In.</p>
	} else if (props.user.firstName) {
		Header = (
			<Navbar collapseOnSelect>
  			<Navbar.Header>
    			<Navbar.Brand>
      			<a href="#brand">Punt</a>
    			</Navbar.Brand>
    			<Navbar.Toggle />
  			</Navbar.Header>
  			<Navbar.Collapse>
    			<Nav>
      			<NavItem>
							<p>Welcome, <strong>{props.user.local.firstName}</strong></p>
						</NavItem>
    			</Nav>
    			<Nav pullRight>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
    			</Nav>
  			</Navbar.Collapse>
			</Navbar>
		);
	} else if (props.user.local.username) {
		Header = (
			<Navbar collapseOnSelect>
  			<Navbar.Header>
    			<Navbar.Brand>
      			<a href="#brand">Punt</a>
    			</Navbar.Brand>
    			<Navbar.Toggle />
  			</Navbar.Header>
  			<Navbar.Collapse>
    			<Nav>
      			<NavItem>
							<p>Welcome, <strong>{props.user.local.username}</strong></p>
						</NavItem>
    			</Nav>
    			<Nav pullRight>
      			<NavItem eventKey={1} href="#">
							<Link to="#" id="logoutLink" className="nav-link" onClick={props._logout}>
								Logout
							</Link>
						</NavItem>
    			</Nav>
  			</Navbar.Collapse>
			</Navbar>
	  );
	}
	return (
		<div className="Header">
			{Header}
		</div>
	);
}

export default Header
