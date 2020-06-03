import React, { Component } from 'react';
import { BreadcrumbItem, Breadcrumb, Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Telephone',
            message: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        console.log('Current State: ' + JSON.stringify(this.state));
        alert('Current State: ' + JSON.stringify(this.state));
        event.preventDefault();
    };

    render() {
        return (
            <div className="container">
                <div className={"row mt-5"}>
                    <div className={"col-12"}>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to={'/home'}>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Contact Us
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className={"col-12"}>
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 p-0">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-6 p-0">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                        <div className="btn-group mt-4" role="group">
                            <button type="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</button>
                            <button type="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</button>
                            <button type="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 p-0">
                        <h5>Map of our Location</h5>
                        <div>
                            <iframe title="map" width="100%" height="350" src="https://maps.google.com/maps?width=100%&amp;height=350&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(Ristorante%20Con%20Fusion)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
                <div className={"row row-content mb-5"}>
                    <div className={"col-12 p-0"}>
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className={"col-12 col-md-12 p-0"}>
                        <Form onSubmit={this.handleSubmit}>
                            <div className={"row"}>
                                <FormGroup className={"col-12 col-md-6"}>
                                    <Label htmlFor="firstname">First Name</Label>
                                    <Col className={"p-0"}>
                                        <Input type="text" id="firstname" name="firstname"
                                            placeholder="e.g. John"
                                            value={this.state.firstname}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup className={"col-12 col-md-6"}>
                                    <Label htmlFor="lastname">Last Name</Label>
                                    <Col className={"p-0"}>
                                        <Input type="text" id="lastname" name="lastname"
                                            placeholder="e.g. Doe"
                                            value={this.state.lastname}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                            </div>
                            <div className={"row"}>
                                <FormGroup className={"col-12 col-md-6"}>
                                    <Label htmlFor="telnum">Telephone Number</Label>
                                    <Col className={"p-0"}>
                                        <Input type="tel" id="telnum" name="telnum"
                                            placeholder="e.g. +852 1234 5678"
                                            value={this.state.telnum}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup className={"col-12 col-md-6"}>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Col className={"p-0"}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="e.g. johndoe@gmail.com"
                                            value={this.state.email}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                            </div>
                            <div className={"row"}>
                                <div className={"col-12 col-md-6 align-self-center"}>
                                    <FormGroup className={"col-12 col-md-12 p-0"}>
                                        <Label htmlFor="message">Feedback Message</Label>
                                        <Col className={"p-0"}>
                                            <Input type="textarea" id="message" name="message"
                                                rows={4}
                                                value={this.state.message}
                                                onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                </div>
                                <div className={"col-12 col-md-6 align-self-center"}>
                                    <FormGroup row>
                                        <Col md={{ size: 6 }} className={"align-self-center"}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" name="agree"
                                                        checked={this.state.agree}
                                                        onChange={this.handleInputChange} /> {' '}
                                                    <strong>May we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={{ size: 6 }}>
                                            <Input type="select" name="contactType"
                                                value={this.state.contactType}
                                                onChange={this.handleInputChange}>
                                                <option>Telephone</option>
                                                <option>Email</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{ size: 6, offset: 6 }} className={"d-flex justify-content-end"}>
                                            <Button type="submit" color="primary">
                                                Send Feedback
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
