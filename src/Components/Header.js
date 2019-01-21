import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {
    render (){
        return (
            <div>
                {/* Grey with black text */}
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/addEmp">Add new employee</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">New 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">Disabled</a>
                        </li>
                    </ul>
                </nav>
                
                {/* <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <h3>MERN Stack CRUD Operations</h3>
                        </Navbar.Brand>
                    </Navbar.Header>

                    <Nav>
                        <NavItem href="/">Home
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem href="/addEmp">Add new employee
                            <Link to="/addEmp">Add new employee</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
                 */}
            </div>
        );
    }
}

export default Header;