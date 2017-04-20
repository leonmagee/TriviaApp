import React from 'react';
import {Text} from 'react-native';
import {combineReducers} from 'redux';
import styles from '../Styles/DefaultStyles';
import variables from '../Styles/Variables'
import {
    NEXT_QUESTION,
    QUIZ_RESULTS,
    ANSWER_SUBMITTED,
    CORRECT_ANSWER,
    INCORRECT_ANSWER
} from './actions';


/**
 * Return App Title
 * @param state
 * @param action
 * @returns {string}
 */
const numberQuestionsReducer = (state = 5, action) => {
    return state;
    /**
     * @todo this should be a default state in the store, not a reducer?
     */
}

const correctAnswerReducer = (state = 0, action) => {
    switch (action.type) {
        case CORRECT_ANSWER:
            return state + 1;
            break;
        default:
            return state;
    }
}

const falseAnswerReducer = (state = 0, action) => {
    switch (action.type) {
        case INCORRECT_ANSWER:
            return state + 1;
            break;
        default:
            return state;
    }
}

const answerSubmittedReducer = (state = false, action) => {
    switch (action.type) {
        case ANSWER_SUBMITTED:
            return true;
            break;
        case NEXT_QUESTION:
            return false;
            break;
        default:
            return state;
    }
}

const quizResultsReducer = (state = false, action) => {

    switch (action.type) {
        case QUIZ_RESULTS: {
            return true;
        }
        default:
            return state;
    }
}

const answerResultStringReducer = (state = '', action) => {
    const s = styles.correctIncorrectText;
    switch (action.type) {
        case CORRECT_ANSWER:
            return <Text style={[s, {color: variables.brandSecond}]}>CORRECT</Text>
            break;
        case INCORRECT_ANSWER:
            return <Text style={[s, {color: variables.brandPrimary}]}>INCORRECT</Text>
            break;
        default:
            return <Text></Text>
        //return <Text style={[s, {color: variables.brandSecond}]}>NULL</Text>
    }
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
            return state + 1;
            break;
        default:
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
    correctAnswer: correctAnswerReducer,
    falseAnswer: falseAnswerReducer,
    answerResultString: answerResultStringReducer,
    answerSubmitted: answerSubmittedReducer,
    quizResults: quizResultsReducer,
});
