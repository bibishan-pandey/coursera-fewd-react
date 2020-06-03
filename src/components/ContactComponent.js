import React from 'react';
import { BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

const Contact = (props) => {
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
            <div className="row row-content mb-5">
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
        </div>
    );
}

export default Contact;
