import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './NavbarCompo.css';

const NavbarCompo = () => {
    const [user, setUser] = useContext(UserContext);
    const { loggedInUser } = user;

    const history = useHistory();
    const handleLogin = () => {
        history.push('/login')
    };
    const handleLogout = () => {
        setUser({});
    };
    return (
        <Container className="pt-4">
            <Navbar expand="lg">
                <NavLink exact to="/">
                    <img
                        src={logo}
                        width="200px"
                        alt="logoImage"
                    />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink exact activeStyle={{ color: "#3f90fc" }} to="/">Home</NavLink>
                        <NavLink activeStyle={{ color: "#3f90fc" }} to="/donation">Donation</NavLink>
                        <NavLink activeStyle={{ color: "#3f90fc" }} to="/moreEvents">Events</NavLink>
                        <NavLink activeStyle={{ color: "#3f90fc" }} to="/blog">Blog</NavLink>
                        {loggedInUser &&
                            <NavLink activeStyle={{ color: "#3f90fc" }} to="/history">History</NavLink>
                        }
                    </Nav>
                    {loggedInUser 
                    ?
                    <Button
                        variant="primary"
                        onClick={handleLogout}
                        className="px-4 mr-3 font-weight-bold"
                    >logout
                    </Button>
                    :
                    <Button
                        variant="primary"
                        onClick={handleLogin}
                        className="px-4 mr-3 font-weight-bold"
                    >Login
                    </Button>
                    }
                    <Button
                        variant="dark"
                        className="px-4 font-weight-bold"
                    >Admin
                    </Button>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavbarCompo;