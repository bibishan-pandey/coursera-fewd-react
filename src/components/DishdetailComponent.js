import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const RenderDish = ({ dish }) => {
    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div></div>
        );
    }
};

const Comment = ({ comment }) => {
    return (
        <li key={comment.id}>
            <div className={"row"}>
                <div className={"col-6 align-self-center"}>
                    <p className={"lead font-weight-bold font-italic font-dark"}>
                        {comment.author}
                    </p>
                </div>
                <div className={"col-6 align-self-center"}>
                    <p className={"d-flex justify-content-end font-italic font-weight-light font-light"}>
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                    </p>
                </div>
            </div>
            <p className={"pl-3 text-secondary"}>{comment.comment}</p>
        </li>
    );
};

const RenderComments = ({ comments }) => {
    return (
        <div>
            <p className={"display-4 text-dark"}>Comments</p>
            <hr/>
            <ul className={"list-unstyled"}>
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </ul>
        </div>
    );
};

const DishDetail = (props) => {
    return (
        <div className={"container"}>
            <div className={"row mb-5"}>
                <div className={"col-12 col-md-6 mt-3"}>
                    <RenderDish dish={props.dish} />
                </div>
                <div className={"col-12 col-md-6 mt-3"}>
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;
