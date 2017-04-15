export const ADD_POST = 'ADD_POST';
const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
const FETCH_QUESTIONS_COMPLETE = 'FETCH_QUESTIONS_COMPLETE';
import {combineReducers} from 'redux';

const data = (state = {}) => {
    return state;
}

/**
 * 'questions' must match the prop name
 */
const questions = (state = [
                       {name: 'Question 1'},
                       {name: 'Question 2'},
                       {name: 'Question 3'}
                   ], action) => {

    switch (action.type) {
        case FETCH_QUESTIONS:
            console.log('one happened?');
            return state;
        case FETCH_QUESTIONS_COMPLETE:
            console.log('two happened?');
            return action.payload;
        case ADD_POST:
            console.log('add post triggered');
            return [
                action.payload,
                ...state
            ];
        default:
            console.log('three happened?');
            return state;
    }
};

//const reducer = combineReducers({questions, data: () => {}})
const reducer = combineReducers({questions, data})
module.exports = reducer;
