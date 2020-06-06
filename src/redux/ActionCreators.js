import * as ActionTypes from './ActionTypes';
import { DISHES } from "../shared/dishes";

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
    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);
};
