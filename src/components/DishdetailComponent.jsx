import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderDish(dish) {
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
    }

    renderComments(comments) {
        return (
            <div>
                <h4>Comments</h4>
                <ul className={"list-unstyled"}>
                    {comments.map(comment => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {comment.date}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className={"row mb-5"}>
                <div className={"col-12 col-md-6 mt-3"}>
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className={"col-12 col-md-6 mt-3"}>
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            </div>
        );
    }

}

export default DishDetail;
