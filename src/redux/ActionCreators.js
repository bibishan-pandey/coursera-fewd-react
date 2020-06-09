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
    return fetch(baseURL + 'dishess')
        .then(response => {
            if (response.ok) return response;
            else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response= response;
                throw error;
            }
        }, error => { throw new Error(error.message) })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
};


// for comments
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        // if the key and value variable names are same we 
        // can simply write it as below that is equivalent 
        // as writing, dishId: dishId
        dishId,
        rating,
        author,
        comment
    }
});

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
                error.response= response;
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
                error.response= response;
                throw error;
            }
        }, error => { throw new Error(error.message) })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
};