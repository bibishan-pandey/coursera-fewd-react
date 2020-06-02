import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const RenderDish = ({ dish }) => {
    if (dish != null) {
        return (
            <div className={"col-12 col-md-6 mt-3"}>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
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
                <div className={"col-7 align-self-center"}>
                    <p className={"font-weight-bold font-italic font-dark"}>
                        {comment.author}
                    </p>
                </div>
                <div className={"col-5 align-self-center"}>
                    <p className={"d-flex justify-content-end font-italic font-weight-light font-light"}>
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                    </p>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-12 align-self-center pl-4"}>
                    <p className={"text-secondary"}><i class="fa fa-comment" aria-hidden="true"></i> {comment.comment}</p>
                </div>
            </div>
            <hr />
        </li>
    );
};

const RenderComments = ({ comments }) => {
    return (
        <div className={"col-12 col-md-6 mt-3"}>
            <p className={"display-4 text-dark"}>Comments</p>
            <hr />
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
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
        </div>
    );
}

export default DishDetail;
