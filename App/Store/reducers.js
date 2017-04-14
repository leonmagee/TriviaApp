const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
const FETCH_QUESTIONS_COMPLETE = 'FETCH_QUESTIONS_COMPLETE';

const questions = (state = [], action) => {

    switch (action.type) {
        case FETCH_QUESTIONS:
            return state;
        case FETCH_QUESTIONS_COMPLETE:
            return action.payload;
        default:
            return state;
    }
};