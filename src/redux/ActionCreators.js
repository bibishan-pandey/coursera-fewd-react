import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseURL';
// import { DISHES } from "../shared/dishes";

// for dishes
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errorMessage) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errorMessage
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

// thunk, i.e. function returns a function
// two dispatches
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    // fetch from shared dishes data
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES))
    // }, 2000);

    // fetch from json data
    return fetch(baseURL + 'dishes')
        .then(response => {
            if (response.ok) return response;
            else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => { throw new Error(error.message) })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
};


// for comments
export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        // if the key and value variable names are same we 
        // can simply write it as below that is equivalent 
        // as writing, dishId: dishId
        dishId,
        rating,
        author,
        comment
    };
    newComment.date = new Date().toISOString();
    return fetch(baseURL + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        console.log(response);
        if (response.ok) return response;
        else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    }, error => { throw new Error(error.message) })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
        console.log(`Post comments error: ${error.message}`);
        alert(`Post comments error: ${error.message}`);
    });
};

export const commentsFailed = (errorMessage) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errorMessage
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseURL + 'comments')
        .then(response => {
            if (response.ok) return response;
            else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => { throw new Error(error.message) })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};


// for promotions
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errorMessage) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errorMessage
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

// thunk, i.e. function returns a function
// two dispatches
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    // fetch from shared promotions data
    // setTimeout(() => {
    //     dispatch(addPromos(PROMOTIONS))
    // }, 2000);

    // fetch from json data
    return fetch(baseURL + 'promotions')
        .then(response => {
            if (response.ok) return response;
            else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => { throw new Error(error.message) })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
};


// for leaders
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errorMessage) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errorMessage
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));
    // fetch from json data
    return fetch(baseURL + 'leaders')
        .then(response => {
            if (response.ok) return response;
            else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => { throw new Error(error.message) })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));
};


// post feedBack
export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    const feedback = {
        // if the key and value variable names are same we 
        // can simply write it as below that is equivalent 
        // as writing, dishId: dishId
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message
    };
    feedback.date = new Date().toISOString();
    return fetch(baseURL + 'feedback', {
        method: 'POST',
        body: JSON.stringify(feedback),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        console.log(response);
        if (response.ok) return response;
        else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    }, error => { throw new Error(error.message) })
    .then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .catch(error => {
        console.log(`Post comments error: ${error.message}`);
        alert(`Post comments error: ${error.message}`);
    });
};
