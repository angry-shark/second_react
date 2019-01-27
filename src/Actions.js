import AppDispatcher from './AppDispatcher';
import * as ActionTypes from './ActionTypes';

export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type:ActionTypes.INCREMENT,
        counterCaption:counterCaption
    });
};

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({//dispatch传入一个Action
        type:ActionTypes.DECREMENT,
        counterCaption:counterCaption
    });
};