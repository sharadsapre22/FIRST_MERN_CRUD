import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {
    render (){
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <h3>MERN Stack CRUD Operations</h3>
                        </Navbar.Brand>
                    </Navbar.Header>

                    <Nav>
                        <NavItem href="/">Home
                            {/* <Link to="/">Home</Link> */}
                        </NavItem>
                        <NavItem href="/addEmp">Add new employee
                            {/* <Link to="/addEmp">Add new employee</Link> */}
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;