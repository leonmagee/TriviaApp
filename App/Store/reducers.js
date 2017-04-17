export const ADD_QUESTION = 'ADD_QUESTION';
export const NEXT_QUESTION = 'NEXT_QUESTION';
const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
const FETCH_QUESTIONS_COMPLETE = 'FETCH_QUESTIONS_COMPLETE';

import {combineReducers} from 'redux';

const user = (state = {}, action) => {
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
            console.log('FETCH_QUESTIONS triggered');
            return state;
        case FETCH_QUESTIONS_COMPLETE:
            console.log('FETCH_QUESTIONS_COMPLETE triggered');
            return action.payload;
        case ADD_QUESTION:
            console.log('ADD_QUESTION triggered');
            return [
                action.payload,
                ...state
            ];
        case NEXT_QUESTION:
            console.log('NEXT_QUESTION action triggered...');
            return [
                action.payload,
                ...state
            ];
        default:
            console.log('default state triggered');
            return state;
    }
};

//const reducer = combineReducers({questions, data: () => {}})
export const reducer = combineReducers({questions, user})
//module.exports = reducer;
