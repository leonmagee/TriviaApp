import {createStore} from 'redux';
import {reducer} from './reducers';

//const preloadedState = {currentQuestion: 0};
//const store = createStore(reducer, preloadedState);
// const store = createStore(reducer, {
//     currentQuestion: 0,
//     titleText: 'Hello World!',
// });

const store = createStore(reducer);

module.exports = store;