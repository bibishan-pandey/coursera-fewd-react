import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron, Nav, NavItem, Collapse, NavbarToggler, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { NavLink } from "react-router-dom";


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    // using arrow function, we need not bind
    // the function in the constructor with 'this'
    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin = (event) => {
        this.toggleModal();
        alert(
            'Username: ' + this.username.value +
            'Password: ' + this.password.value +
            'Remember Me: ' + this.remember.checked
        );
        event.preventDefault();
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
                            <Nav className={"ml-auto"} navbar>
                                <NavItem>
                                    <Button outline
                                        onClick={this.toggleModal}><i className="fa fa-sign-in"></i> Login</Button>
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
                                <p className={"text-justify"}>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmFor="username" className="font-weight-bold">Username</Label>
                                <Input type={"text"} 
                                    id="username"
                                    innerRef={(input) => this.username = input}
                                    name="username" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmFor="password" className="font-weight-bold">Password</Label>
                                <Input type={"password"}
                                    id="password"
                                    innerRef={(input) => this.password = input}
                                    name="password" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type={"checkbox"}
                                        id="remember"
                                        innerRef={(input) => this.remember = input}
                                        name="remember" />
                                    <span className="font-italic font-weight-bold">Remember me</span>
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Button type={"submit"} value={"submit"} color={"primary"}>Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;