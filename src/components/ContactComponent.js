import React, { Component } from 'react';
import { BreadcrumbItem, Breadcrumb, Label, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = (value) => value && value.length;
const maxLength = (len) => (value) => !(value) || (value.length) <= len; 
const minLength = (len) => (value) => (value) && (value.length) >= len; 
const isNumber = (value) => !isNaN(Number(value));
const validEmail = (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

class Contact extends Component {

    handleSubmit = (values) => {
        // console.log('Current State is: ' + JSON.stringify(values));
        this.props.postFeedback(values.firstname, 
            values.lastname, 
            values.telnum,
            values.email,
            values.agree,
            values.contactType,
            values.message);
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
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
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <div className={"row"}>
                                <div className={"col-12 col-md-6 form-group"}>
                                    <Label htmlFor="firstname">First Name</Label>
                                    <Col className={"p-0"}>
                                        <Control.text model=".firstname"
                                            id="firstname"
                                            name="firstname"
                                            placeholder="e.g. John"
                                            autoComplete="off"
                                            validators={{
                                                required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(20)
                                            }}
                                            className={"form-control"} />
                                        <Errors className="text-danger"
                                            model=".firstname"
                                            show="touched"
                                            messages={{
                                                required: '* Required! ',
                                                minLength: 'Must be >= 3 characters! ',
                                                maxLength: 'Must be <= 20 characters! '
                                            }} />
                                    </Col>
                                </div>
                                <div className={"col-12 col-md-6 form-group"}>
                                    <Label htmlFor="lastname">Last Name</Label>
                                    <Col className={"p-0"}>
                                        <Control.text model=".lastname"
                                            id="lastname"
                                            name="lastname"
                                            placeholder="e.g. Doe"
                                            autoComplete="off"
                                            validators={{
                                                required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(20)
                                            }}
                                            className={"form-control"} />
                                        <Errors className="text-danger"
                                            model=".lastname"
                                            show="touched"
                                            messages={{
                                                required: '* Required! ',
                                                minLength: 'Must be >= 3 characters! ',
                                                maxLength: 'Must be <= 20 characters! '
                                            }} />
                                    </Col>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-12 col-md-6 form-group"}>
                                    <Label htmlFor="telnum">Telephone Number</Label>
                                    <Col className={"p-0"}>
                                        <Control.text model=".telnum"
                                            id="telnum"
                                            name="telnum"
                                            placeholder="e.g. 852 1234 5678"
                                            autoComplete="off"
                                            validators={{
                                                required,
                                                minLength: minLength(10),
                                                maxLength: maxLength(10),
                                                isNumber
                                            }}
                                            className={"form-control"} />
                                        <Errors className="text-danger"
                                            model=".telnum"
                                            show="touched"
                                            messages={{
                                                required: '* Required! ',
                                                minLength: 'Must be 10 characters! ',
                                                maxLength: 'Must be 10 characters! ',
                                                isNumber: 'Must be only numbers! '
                                            }} />
                                    </Col>
                                </div>
                                <div className={"col-12 col-md-6 form-group"}>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Col className={"p-0"}>
                                        <Control.text model=".email"
                                            id="email"
                                            name="email"
                                            placeholder="e.g. johndoe@gmail.com"
                                            autoComplete="off"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                            className={"form-control"} />
                                        <Errors className="text-danger"
                                            model=".email"
                                            show="touched"
                                            messages={{
                                                required: '* Required! ',
                                                validEmail: 'Not a valid email! '
                                            }} />
                                    </Col>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-12 col-md-6 align-self-center"}>
                                    <div className={"col-12 col-md-12 form-group p-0"}>
                                        <Label htmlFor="message">Feedback Message</Label>
                                        <Col className={"p-0"}>
                                            <Control.textarea model=".message" id="message" name="message"
                                                rows={4}
                                                autoComplete="off"
                                                validators={{
                                                    required,
                                                    minLength: minLength(50),
                                                    maxLength: maxLength(500)
                                                }}
                                                className="form-control" />
                                            <Errors className="text-danger"
                                                model=".message"
                                                show="touched"
                                                messages={{
                                                    required: '* Required! ',
                                                    minLength: 'Must be 50 characters! ',
                                                    maxLength: 'Must be 50 characters! '
                                                }} />
                                        </Col>
                                    </div>
                                </div>
                                <div className={"col-12 col-md-6 align-self-center"}>
                                    <div className={"row form-group"}>
                                        <Col md={{ size: 6 }} className={"align-self-center"}>
                                            <div className={"form-check"}>
                                                <Label check>
                                                    <Control.checkbox model=".agree"
                                                        name="agree"
                                                        className={"form-check-input"} /> {' '}
                                                    <strong>May we contact you?</strong>
                                                </Label>
                                            </div>
                                        </Col>
                                        <Col md={{ size: 6 }}>
                                            <Control.select model=".contactType" name="contactType"
                                                className={"form-control"}>
                                                <option>Telephone</option>
                                                <option>Email</option>
                                            </Control.select>
                                        </Col>
                                        {/* {
                                            this.state.agree ?
                                                this.contactTypeTrue() : this.contactTypeFalse()
                                        } */}

                                    </div>
                                    <div className={"row"}>
                                        <Col md={{ size: 6 }} className={"d-flex align-items-end"}>
                                            <Button type="submit" color="primary">
                                                Send Feedback
                                            </Button>
                                        </Col>
                                    </div>
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
