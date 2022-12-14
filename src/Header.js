import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link"  color='blue'>Home</Link></NavItem>
        <NavItem className="nav"><Link to="/profile" className="nav-link"> My Profile</Link></NavItem>
        <NavItem> <LoginButton/></NavItem>
        <NavItem> <LogoutButton/></NavItem>

        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
