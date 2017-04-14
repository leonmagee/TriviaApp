import React, {Component} from 'react'
var api = require('../Utils/api')
//var Entities = require('html-entities').XmlEntities
//import AnswerResults from './AnswerResults'
//import NextQuestion from './NextQuestion'
//import variables from '../Styles/Variables'
import styles from '../Styles/DefaultStyles'
//import QuizResult from './QuizResult'

import {
    Text,
    View,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native'

/**
 * Array of button styles
 * Clone using JSON.stringify to create copy without reference
 */

class Quiz extends Component {

    constructor() {
        super() // calls the constructor method of 'Component'

        /**
         * @todo document what each state variable is for
         */
        this.state = {
            isLoading: true,
            questions: false,
            //quizContentsNew: <View style={styles.demoWrap}><Text style={styles.demoText}>Hello App!</Text></View>,
        }

        //this.getNewData();

    }

    componentWillMount() {
    }

    componentDidMount() {
        // this.setState({
        //     quizContentsNew: <View style={styles.demoWrap}><Text style={styles.demoText}>Hello App!</Text></View>,
        // })
    }

    getNewData() {

        api.getQuestions(this.state.numberQuestions).then((res) => {

            /**
             * Shuffle Array - by default correct answer is always in same position
             * @todo have file for helper functions?
             */
            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1))
                    var temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
                return array
            }

            const questions = []
            res.results.map((trivia_question) => {
                const answers = []
                answers.push({answer: trivia_question.correct_answer, correct: true})
                trivia_question.incorrect_answers.map((incorrect_answer) => {
                    answers.push({answer: incorrect_answer, correct: false})
                })
                questions.push({
                    question: trivia_question.question,
                    answers: shuffleArray(answers),
                });
            });
            this.setState({
                questions: questions,
                isLoading: false
            })
            //this.setState({isLoading: false})

            /**
             * Get array of correct answer locations
             * @type {Array}
             */
            const answerKeyArray = [];
            const current_question_new = this.state.questions;
            current_question_new.map((current_question_new_item, key_main) => {
                current_question_new_item.answers.map((item, key) => {
                    if (item.correct == true) {
                        answerKeyArray[key_main] = key
                    }
                });
            });

            this.setState({correctAnswerKey: answerKeyArray})
        })
    }

    render() {

        return (
            <View style={styles.demoWrap}>
                <Text style={styles.demoText}>Hello World!</Text>
            </View>
        )
    }
}

module.exports = Quiz;
