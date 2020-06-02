import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron, Nav, NavItem, Collapse, NavbarToggler } from "reactstrap";
import { NavLink } from "react-router-dom";


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
    }

    // using arrow function, we need not bind
    // the function in the constructor with 'this'
    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            // <></> is also syntax for React.Fragment
            <React.Fragment>
                <Navbar dark expand={"md"}>
                    <div className={"container"}>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className={"mr-auto"} href="/">
                            <img src={"assets/images/logo.png"} height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className={"nav-link"} to="/home">
                                        <i className="fa fa-home"></i> Home
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={"nav-link"} to="/aboutus">
                                        <i className="fa fa-info"></i> About Us
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={"nav-link"} to="/menu">
                                        <i className="fa fa-list"></i> Menu
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={"nav-link"} to="/contactus">
                                        <i className="fa fa-address-card"></i> Contact Us
                                </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className={"container p-0"}>
                        <div className={"row row-header"}>
                            <div className={"col-12 col-sm-6"}>
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;