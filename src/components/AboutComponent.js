import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { baseURL } from '../shared/baseURL';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Fade, Stagger } from 'react-animation-components';

const RenderLeader = ({ leader }) => {
    return (
        <Media tag="li">
            <Media left middle>
                <Media object src={baseURL + leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation} - {leader.abbr}</p>
                <p className={"text-justify"}>{leader.description}</p>
            </Media>
        </Media>
    );
};

const About = (props) => {
    console.log(props.errorMessage);
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errorMessage) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="display-1 text-danger">{props.errorMessage}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        const leaders = props.leaders.map((leader) => {
            return (
                <Fade in>
                    <div key={leader.id} className="col-12 mt-2 p-0">
                        <RenderLeader leader={leader} />
                    </div>
                </Fade>
            );
        });

        return (
            <div className="container">
                <div className={"row mt-5"}>
                    <div className={"col-12"}>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to={'/home'}>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                About Us
                        </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className={"col-12"}>
                        <h3>About Us</h3>
                        <hr />
                    </div>
                </div>
                <div className={"row row-content"}>
                    <div className="col-12 col-md-6 pl-0 align-self-center">
                        <h2>Our History</h2>
                        <p className={"text-justify"}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                        <p className={"text-justify"}>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                    </div>
                    <div className="col-12 col-md-6 pr-0 align-self-center">
                        <Card>
                            <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                            <CardBody>
                                <div className={"row"}>
                                    <p className={"col-6 font-weight-bold"}>Started</p>
                                    <p className={"col-6"}>3 Feb. 2013</p>
                                </div>
                                <div className={"row"}>
                                    <p className={"col-6 font-weight-bold"}>Major Stake Holder</p>
                                    <p className={"col-6"}>HK Fine Foods Inc.</p>
                                </div>
                                <div className={"row"}>
                                    <p className={"col-6 font-weight-bold"}>Last Year's Turnover</p>
                                    <p className={"col-6"}>$1,250,375</p>
                                </div>
                                <div className={"row"}>
                                    <p className={"col-6 font-weight-bold"}>Employees</p>
                                    <p className={"col-6"}>40</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 p-0">
                        <Card>
                            <CardBody className="bg-faded">
                                <blockquote className="blockquote">
                                    <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                    <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 p-0">
                        <h2>Corporate Leadership</h2>
                    </div>
                    <div className="col-12 mb-5 p-0">
                        <Media className={"p-0"} list>
                            <Stagger in>
                                {leaders}
                            </Stagger>
                        </Media>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;    