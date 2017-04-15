import React, {Component} from 'react'
var api = require('../Utils/api')
import styles from '../Styles/DefaultStyles'
import Questions from './Questions'

import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'


class Quiz extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: true,
            //questions: false,
            numberQuestions: 5,
            demoText: 'Hello World!',
            questions: [
                {
                    name: 'Question 1',
                },
                {
                    name: 'Question 2',
                }
            ]
        }
    }

    // componentWillMount() {
    //     /**
    //      * get API data
    //      */
    //     //this.getNewData();
    // }
    //
    // getNewData() {
    //
    //     api.getQuestions(this.state.numberQuestions).then((res) => {
    //
    //         /**
    //          * Shuffle Array - by default correct answer is always in same position
    //          */
    //         function shuffleArray(array) {
    //             for (var i = array.length - 1; i > 0; i--) {
    //                 var j = Math.floor(Math.random() * (i + 1))
    //                 var temp = array[i]
    //                 array[i] = array[j]
    //                 array[j] = temp
    //             }
    //             return array
    //         }
    //
    //         const questions = []
    //         res.results.map((trivia_question) => {
    //             const answers = []
    //             answers.push({answer: trivia_question.correct_answer, correct: true})
    //             trivia_question.incorrect_answers.map((incorrect_answer) => {
    //                 answers.push({answer: incorrect_answer, correct: false})
    //             })
    //             questions.push({
    //                 question: trivia_question.question,
    //                 answers: shuffleArray(answers),
    //             });
    //         });
    //         this.setState({
    //             questions: questions,
    //             isLoading: false
    //         })
    //
    //         console.warn( 'state updated' );
    //         console.log(this.state);
    //
    //         /**
    //          * Get array of correct answer locations
    //          * @type {Array}
    //          */
    //         // const answerKeyArray = [];
    //         // const current_question_new = this.state.questions;
    //         // current_question_new.map((current_question_new_item, key_main) => {
    //         //     current_question_new_item.answers.map((item, key) => {
    //         //         if (item.correct == true) {
    //         //             answerKeyArray[key_main] = key
    //         //         }
    //         //     });
    //         // });
    //         //
    //         // this.setState({correctAnswerKey: answerKeyArray})
    //     })
    // }

    // updateText() {
    //     console.log('button pressed!');
    // }

    render() {

        return (
            <View style={styles.demoWrap}>
                <Text style={styles.demoText}>{this.state.demoText}</Text>
                <Questions></Questions>
            </View>
        )
    }
}

module.exports = Quiz;
