export const NEXT_QUESTION = 'NEXT_QUESTION';

import {combineReducers} from 'redux';

/**
 * Return App Title
 * @param state
 * @param action
 * @returns {string}
 */
const numberQuestionsReducer = (state = 5, action) => {
    return state;
}

const correctAnswersReducer = (state = 3, action) => {
    return state;
}

const falseAnswersReducer = (state = 2, action) => {
    return state;
}

const answerResultStringReducer = (state='results string?', action) => {
    return state;
}





/**
 * Return current question index
 * @param state
 * @param action
 * @returns {*}
 */
const currentQuestionReducer = (state = 0, action) => {

    switch (action.type) {
        case NEXT_QUESTION:
            console.log('next question');
            return action.payload;
            break;
        default:
            console.log('question reducer default state', state);
            return state;
    }
};

/**
 * Combine State
 * @type {Reducer<S>}
 */
export const reducer = combineReducers({
    currentQuestion: currentQuestionReducer,
    numberQuestions: numberQuestionsReducer,
    correctAnswers: correctAnswersReducer,
    falseAnswers: falseAnswersReducer,
    answerResultString: answerResultStringReducer,
});
