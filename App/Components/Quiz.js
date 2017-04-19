import React, {Component} from 'react'
var api = require('../Utils/api')
import styles from '../Styles/DefaultStyles'
import {QuestionsNew} from './QuestionsNew'
import {SampleQuestions} from './SampleQuestions'
import {connect} from 'react-redux'

import {
    Text,
    View,
} from 'react-native'


class _Quiz extends Component {

    // constructor() {
    //     super();
    // }

    nextQuestion(question_number) {
        this.props.goToNextQuestion(question_number);
        console.log('next question clicked');
    }

    render() {

        var arrayData = SampleQuestions[this.props.currentQuestion];
        /**
         * @todo convert header to stateless component?
         */
        return (
            <View style={styles.outerWrap}>

                <View style={styles.headerWrap}>
                    <Text style={styles.headerText}>Question {this.props.currentQuestion + 1} of {this.props.numberQuestions}</Text>
                    <Text style={styles.headerText}>Correct: {this.props.correctAnswers} -
                        Incorrect: {this.props.falseAnswers}</Text>
                    <Text>{this.props.answerResultString}</Text>
                </View>

                <View style={styles.quizWrap}>
                    <QuestionsNew
                        arrayData={arrayData}
                        nextQuestion={this.nextQuestion.bind(this)}
                    ></QuestionsNew>
                </View>

                <View style={styles.footerWrap}>
                    <Text>Footer Content</Text>
                </View>

            </View>//outer wrap
        )
    }
}

const mapStateToProps = (state) => ({
    currentQuestion: state.currentQuestion,
    numberQuestions: state.numberQuestions,
    correctAnswers: state.correctAnswers,
    falseAnswers: state.falseAnswers,
    answerResultString: state.answerResultString,
})

const mapActionsToProps = (dispatch) => ({
    goToNextQuestion(currentQuestion) {
        dispatch({type: 'NEXT_QUESTION', payload: currentQuestion})
    }
})

export const Quiz = connect(mapStateToProps, mapActionsToProps)(_Quiz);
