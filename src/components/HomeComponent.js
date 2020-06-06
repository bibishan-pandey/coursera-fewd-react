import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Loading } from './LoadingComponent';

const RenderCard = ({ item, isLoading, errorMessage }) => {
    if (isLoading) {
        return (
            <Loading />
        );
    } else if (errorMessage) {
        return (
            <h4>{errorMessage}</h4>
        );
    } else {
        return (
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
};

const Home = (props) => {
    return (
        <div className={"container"}>
            <div className={"row align-items-start mt-5 mb-5"}>
                <div className={"col-12 col-md mb-1"}>
                    <RenderCard item={props.dish}
                        isLoading={props.dishesLoading}
                        errorMessage={props.dishesError} />
                </div>
                <div className={"col-12 col-md mb-1"}>
                    <RenderCard item={props.promotion} />
                </div>
                <div className={"col-12 col-md"}>
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
};

export default Home;