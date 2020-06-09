import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, BreadcrumbItem, Breadcrumb, Col, Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseURL } from '../shared/baseURL';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (value) => value && value.length;
const maxLength = (len) => (value) => !(value) || (value.length) <= len;
const minLength = (len) => (value) => (value) && (value.length) >= len;

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };

    handleSubmit = (values) => {
        this.toggleModal();
        // console.log('Current State is: ' + JSON.stringify(values));
        // alert('Current State is: ' + JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment)
    };

    render() {
        return (
            <div className={"col-6 p-0"}>
                <Button outline
                    onClick={this.toggleModal}><i className="fa fa-edit"></i> Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className={"row"}>
                                <div className={"col-12 col-md-12 form-group"}>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Col className={"p-0"}>
                                        <Control.select model=".rating" name="rating"
                                            className={"form-control"}
                                            defaultValue="1">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Control.select>
                                    </Col>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-12 col-md-12 form-group"}>
                                    <Label htmlFor="author">Your Name</Label>
                                    <Col className={"p-0"}>
                                        <Control.text model=".author"
                                            id="author"
                                            name="author"
                                            placeholder="e.g. John Doe"
                                            autoComplete="off"
                                            validators={{
                                                required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(15)
                                            }}
                                            className={"form-control"} />
                                        <Errors className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                required: '* Required! ',
                                                minLength: 'Must be >= 3 characters! ',
                                                maxLength: 'Must be <= 15 characters! '
                                            }} />
                                    </Col>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-12 col-md-12 form-group"}>
                                    <Label htmlFor="comment">Feedback Message</Label>
                                    <Col className={"p-0"}>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            rows={4}
                                            autoComplete="off"
                                            validators={{
                                                required,
                                                minLength: minLength(15),
                                                maxLength: maxLength(500)
                                            }}
                                            className="form-control" />
                                        <Errors className="text-danger"
                                            model=".comment"
                                            show="touched"
                                            messages={{
                                                required: '* Required! ',
                                                minLength: 'Must be 15 characters! ',
                                                maxLength: 'Must be 500 characters! '
                                            }} />
                                    </Col>
                                </div>
                            </div>
                            <div className={"row"}>
                                <Col md={{ size: 6 }} className={"d-flex align-items-end"}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
};

const RenderDish = ({ dish }) => {
    if (dish != null) {
        return (
            <div className={"col-12 col-md-6"}>
                <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        <CardImg width="100%" src={baseURL + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
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
        <Fade in>
            <li key={comment.id}>
                <div className={"row"}>
                    <div className={"col-7 align-self-center"}>
                        <p className={"font-weight-bold font-italic text-dark"}>
                            {comment.author}
                        </p>
                    </div>
                    <div className={"col-5 align-self-center"}>
                        <p className={"d-flex justify-content-end font-italic font-weight-light text-secondary"}>
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 align-self-center pl-4"}>
                        <p className={"text-secondary"}><i className="fa fa-comment" aria-hidden="true"></i> {comment.comment}</p>
                    </div>
                </div>
                <hr />
            </li>
        </Fade>
    );
};

const RenderComments = ({ comments, postComment, dishId }) => {
    return (
        <div className={"col-12 col-md-6"}>
            <p className={"display-4 text-dark"}>Comments</p>
            <hr />
            <ul className={"list-unstyled"}>
                <Stagger in>
                    {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                </Stagger>
            </ul>
            <CommentForm dishId={dishId} postComment={postComment} />
        </div>
    );
};

const DishDetail = (props) => {
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
                    <h4>{props.errorMessage}</h4>
                </div>
            </div>
        );
    } else if (props.commentsErrorMessage) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.commentsErrorMessage}</h4>
                </div>
            </div>
        );
    } else if (props.dish != null) {
        return (
            <div className={"container"}>
                <div className={"row mt-5"}>
                    <div className={"col-12"}>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to={'/home'}>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to={'/menu'}>Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className={"col-12"}>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className={"row mb-5"}>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        dishId={props.dish.id} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;
