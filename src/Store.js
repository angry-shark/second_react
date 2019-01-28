import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
};

//store接收到ui控件传的action自动将action分发到reducer
const store = createStore(reducer,initValues);

export default store;

