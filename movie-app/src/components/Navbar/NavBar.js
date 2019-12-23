import React from "react";
import './NavBar.scss';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="nav-bar">
            <Navbar.Brand>
                <img src="/assets/img/pelicula.png" alt="" className="nav-bar_logo"/>
            </Navbar.Brand>
            <Navbar.Brand><p>MOVIES APP</p></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="basic-navbar " >
                <Nav className="mr-auto">
                    <Link to="/">INICIO</Link>
                    <Link to="/new-movies">NUEVAS</Link>
                    <Link to="/best-movies">POPULARES</Link>
                    <Link to="/my-movies">FAVORITAS</Link>
                    <Link to="/search">BUSCAR</Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;
