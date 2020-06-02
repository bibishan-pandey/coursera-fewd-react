import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const RenderCard = ({ item }) => {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                { item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
};

const Home = (props) => {
    return (
        <div className={"container"}>
            <div className={"row align-items-start mt-5 mb-5"}>
                <div className={"col-12 col-md mb-1"}>
                    <RenderCard item={props.dish} />
                </div>
                <div className={"col-12 col-md mb-1"}>
                    <RenderCard item={props.promotion} />
                </div>
                <div className={"col-12 col-md mb-1"}>
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
};

export default Home;