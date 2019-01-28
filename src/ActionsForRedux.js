import * as ActionTypes from './ActionTypes';
/*此处return action 给store的dipatch*/
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