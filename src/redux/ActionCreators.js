import * as ActionTypes from './ActionTypes';

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
