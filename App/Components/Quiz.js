import React, {Component} from 'react'
var api = require('../Utils/api')
import styles from '../Styles/DefaultStyles'
import {Questions} from './Questions'
import {SampleQuestions} from '../Data/SampleQuestions'
import {connect} from 'react-redux'
import variables from '../Styles/Variables'

import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native'


class _Quiz extends Component {

    // constructor() {
    //     super();
    // }

    nextQuestion(question_number) {

        if ( ( this.props.currentQuestion + 1 ) === this.props.numberQuestions ) {
            //console.log( 'time for results' );
            this.props.goToResults();
        } else {

            this.props.goToNextQuestion(question_number);
        }

    }

    answerChosen(correct) {
        /**
         * Check if answer is correct or not???
         */
        console.log('answer was correct: ', correct);

        this.props.answerButtonClicked();

        if (correct) {
            this.props.correctAnswerClicked();
        } else {
            this.props.incorrectAnswerClicked();
        }
    }

    render() {

        var arrayData = SampleQuestions[this.props.currentQuestion];
        /**
         * @todo convert header to stateless component?
         */

        if ( this.props.answerSubmitted ) {
            var nextQuestionButton = <TouchableHighlight
                underlayColor={variables.brandThirdLite}
                onPress={() => this.nextQuestion(1)}
                style={styles.nextButton}>
                <Text style={styles.nextButtonText}>NEXT QUESTION</Text>
            </TouchableHighlight>
        } else {
            var nextQuestionButton = <Text></Text>
        }

        return (
            <View style={styles.outerWrap}>

                <View style={styles.headerWrap}>
                    <Text style={styles.headerText}>
                        Question {this.props.currentQuestion + 1} of {this.props.numberQuestions}
                    </Text>
                    <Text style={styles.headerText}>
                        Correct: {this.props.correctAnswer} - Incorrect: {this.props.falseAnswer}
                    </Text>
                    <View style={styles.correctIncorrectWrap}>
                        {this.props.answerResultString}
                    </View>
                </View>

                <View style={styles.quizWrap}>
                    <Questions
                        arrayData={arrayData}
                        answerChosen={(correct) => this.answerChosen(correct)}
                        answerSubmitted={this.props.answerSubmitted}
                    ></Questions>
                </View>

                <View style={styles.footerWrap}>
                    {nextQuestionButton}
                </View>

            </View>//outer wrap
        )
    }
}

const mapStateToProps = (state) => ({
    currentQuestion: state.currentQuestion,
    numberQuestions: state.numberQuestions,
    correctAnswer: state.correctAnswer,
    falseAnswer: state.falseAnswer,
    answerSubmitted: state.answerSubmitted,
    answerResultString: state.answerResultString,
})

const mapActionsToProps = (dispatch) => ({
    goToNextQuestion(currentQuestion) {
        dispatch({type: 'NEXT_QUESTION', payload: currentQuestion})
    },
    answerButtonClicked() {
        dispatch({type: 'ANSWER_SUBMITTED'})
    },
    correctAnswerClicked() {
        dispatch({type: 'CORRECT_ANSWER'})
    },
    incorrectAnswerClicked() {
        dispatch({type: 'INCORRECT_ANSWER'})
    },
    goToResults() {
        dispatch({type: 'QUIZ_RESULTS'})
    }
})

export const Quiz = connect(mapStateToProps, mapActionsToProps)(_Quiz);
