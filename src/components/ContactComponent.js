import React, { Component } from 'react';
import { BreadcrumbItem, Breadcrumb, Form, FormGroup, Label, Input, Col, Button, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: true,
            contactType: 'Telephone',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
                message: false
            },
        };
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: {
                ...this.state.touched, [field]: true
            }
        });
    };

    validate = (firstname, lastname, telnum, email, message) => {
        const noErrors = true;
        const errors = {
            firstname: '* Required! >= 3 characters',
            lastname: '* Required! >= 3 characters',
            telnum: '* Required! Can contain numbers only',
            email: '* Required!',
            message: '* Required! >= 100 characters'
        };
        
        if (this.state.touched.firstname && firstname.length < 3) {
            errors.firstname = '* Required! >= 3 characters';
        } else if (this.state.touched.firstname && firstname.length > 20) {
            errors.firstname = '* Required! <= 20 characters';
        } else if (this.state.touched.firstname && noErrors) {
            errors.firstname = '';
        }

        if (this.state.touched.lastname && lastname.length < 3) {
            errors.lastname = '* Required! >= 3 characters';
        } else if (this.state.touched.lastname && lastname.length > 20) {
            errors.lastname = '* Required! <= 20 characters';
        } else if (this.state.touched.lastname && noErrors) {
            errors.lastname = '';
        }

        const numReg = /^\d+$/;
        if (this.state.touched.telnum && !numReg.test(telnum)) {
            errors.telnum = '* Required! Can contain numbers only';
        } else if (this.state.touched.telnum && telnum.length !== 10) {
            errors.telnum = 'Not a valid telephone number';
        } else if (this.state.touched.telnum && noErrors) {
            errors.telnum = '';
        }

        const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.touched.email && email === '') {
            errors.email = '* Required!';
        }
        else if (this.state.touched.email && !emailReg.test(email)) {
            errors.email = 'Not a valid email';
        } else if (this.state.touched.email && noErrors) {
            errors.email = '';
        }

        if (this.state.touched.message && message.length < 100) {
            errors.message = '* Required! >= 100 characters';
        } else if (this.state.touched.message && message.length > 500) {
            errors.message = '* Required! <= 500 characters';
        } else if (this.state.touched.message && noErrors) {
            errors.message = '';
        }

        return errors;
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    };

    contactTypeFalse = () => {
        return (
            <Col md={{ size: 6 }}>
                <Input type="select" name="contactType"
                    value='---------'
                    disabled={true}>
                    <option>Telephone</option>
                    <option>Email</option>
                </Input>
            </Col>
        );
    };

    contactTypeTrue = () => {
        return (
            <Col md={{ size: 6 }}>
                <Input type="select" name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}>
                    <option>Telephone</option>
                    <option>Email</option>
                </Input>
            </Col>
        );
    };

    render() {

        const errors = this.validate(this.state.firstname, this.state.lastname,
            this.state.telnum, this.state.email, this.state.message);

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
                                            autoComplete="off"
                                            value={this.state.firstname}
                                            valid={errors.firstname === ''}
                                            invalid={errors.firstname !== ''}
                                            onBlur={this.handleBlur('firstname')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>
                                            {errors.firstname}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup className={"col-12 col-md-6"}>
                                    <Label htmlFor="lastname">Last Name</Label>
                                    <Col className={"p-0"}>
                                        <Input type="text" id="lastname" name="lastname"
                                            placeholder="e.g. Doe"
                                            autoComplete="off"
                                            value={this.state.lastname}
                                            valid={errors.lastname === ''}
                                            invalid={errors.lastname !== ''}
                                            onBlur={this.handleBlur('lastname')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>
                                            {errors.lastname}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                            </div>
                            <div className={"row"}>
                                <FormGroup className={"col-12 col-md-6"}>
                                    <Label htmlFor="telnum">Telephone Number</Label>
                                    <Col className={"p-0"}>
                                        <Input type="tel" id="telnum" name="telnum"
                                            placeholder="e.g. 852 1234 5678"
                                            autoComplete="off"
                                            value={this.state.telnum}
                                            valid={errors.telnum === ''}
                                            invalid={errors.telnum !== ''}
                                            onBlur={this.handleBlur('telnum')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>
                                            {errors.telnum}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup className={"col-12 col-md-6"}>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Col className={"p-0"}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="e.g. johndoe@gmail.com"
                                            autoComplete="off"
                                            value={this.state.email}
                                            valid={errors.email === ''}
                                            invalid={errors.email !== ''}
                                            onBlur={this.handleBlur('email')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>
                                            {errors.email}
                                        </FormFeedback>
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
                                                autoComplete="off"
                                                value={this.state.message}
                                                valid={errors.message === ''}
                                                invalid={errors.message !== ''}
                                                onBlur={this.handleBlur('message')}
                                                onChange={this.handleInputChange} />
                                            <FormFeedback>
                                                {errors.message}
                                            </FormFeedback>
                                        </Col>
                                    </FormGroup>
                                </div>
                                <div className={"col-12 col-md-6 align-self-center"}>
                                    <FormGroup row className={"pt-2 pb-2"}>
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
                                        {
                                            this.state.agree ? 
                                                this.contactTypeTrue() : this.contactTypeFalse()
                                        }

                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{ size: 6 }} className={"d-flex align-items-end"}>
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
