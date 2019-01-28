import * as ActionTypes from './ActionTypes';

export const increment = (counterCaption) => {
    console.log("caption is " + counterCaption)
    return {
        type:ActionTypes.INCREMENT,
        counterCaption: counterCaption
    };
};

export const decrement = (counterCaption) => {
    console.log("caption is " + counterCaption)
    return {
        type:ActionTypes.DECREMENT,
        counterCaption: counterCaption
    };
};