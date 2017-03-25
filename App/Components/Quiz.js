import React, {Component} from 'react';
var api = require('../Utils/api');
var Entities = require('html-entities').XmlEntities;
//import CorrectAnswer from './CorrectAnswer';
//import FalseAnswer from './FalseAnswer';
import AnswerResults from './AnswerResults';
import NextQuestion from './NextQuestion';
import variables from '../Styles/Variables';

import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    WebView,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    quizWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(32,178,170,0.10)',
        paddingTop: 75,
        paddingHorizontal: 15,
    },
    questionWrap: {
        backgroundColor: '#FCFCFC',
        marginTop: 15,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderColor: variables.brandThirdLite,
        borderWidth: 2,
        // borderColor: variables.brandThird,
        // borderWidth: 3,
        //shadowColor: '#000',
        //shadowOpacity: 0.2,
        //shadowOffset: {width: 1, height: 1},
    },
    questionText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: variables.brandThird,
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 1,
        // shadowColor: '#000',
        // shadowOpacity: 0.2,
        // shadowOffset: {width: 1, height: 1},
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        textShadowOffset: {width: 1, height: 1},
    },
    headerWrap: {
        height: 70,
        padding: 5,
    },
    headerText: {
        textAlign: 'center',
        padding: 3,
    }
});

// let defaultButtonColors = [
//     {bg: '#FCFCFC', text: '#444', shadow: '#FFF'},
//     {bg: '#FCFCFC', text: '#444', shadow: '#FFF'},
//     {bg: '#FCFCFC', text: '#444', shadow: '#FFF'},
//     {bg: '#FCFCFC', text: '#444', shadow: '#FFF'},
// ];

let defaultButtonColors = [
    {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
    {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
    {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
    {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
];

class Quiz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: false,
            questions: false,
            current: 0,
            buttonColor: defaultButtonColors,
            disabled: false,
            answerResult: false,
            correctAnswers: 0,
            falseAnswers: 0,
            correctAnswerKey: false,
            nextQuestion: false,
        }

        api.getQuestions().then((res) => {
            /**
             * for multiple choice questions
             * @todo adapter class to be extended for different APIs?
             */
            // results: Array[10]
            // Object
            // category (string) - "Entertainment: Video Games"
            // correct_answer (string) - "Rad Mobile"
            // incorrect_answers - Array[3]
            // question  (string) - "Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?"
            // type (string) - "multiple"

            /**
             * Shuffle Array
             * @param array
             * @returns {*}
             * @todo use this same function to randomize animation on main page
             */
            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array;
            }

            const questions = [];
            res.results.map((trivia_question) => {
                const answers = [];
                answers.push({answer: trivia_question.correct_answer, correct: true});
                trivia_question.incorrect_answers.map((incorrect_answer) => {
                    answers.push({answer: incorrect_answer, correct: false});
                })
                /**
                 * @todo I need to get the key of the correct answer ewre, not inside the render method..
                 */
                questions.push({
                    question: trivia_question.question,
                    answers: shuffleArray(answers),
                });
            });
            this.setState({questions: questions});
            this.setState({isLoading: false});

            /**
             * Get array of correct answer locations
             * @type {Array}
             */
            const answerKeyArray = [];
            const current_question_new = this.state.questions;
            current_question_new.map((current_question_new_item, key_main) => {
                current_question_new_item.answers.map((item, key) => {
                    if (item.correct == true) {
                        answerKeyArray[key_main] = key;
                    }
                });
            });

            this.setState({correctAnswerKey: answerKeyArray});


        });


    }

    newQuestion(e) {
        let defaultButtonColorsNew = [
            {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
            {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
            {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
            {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
        ];
        this.setState({
                current: e,
                disabled: false,
                answerResult: false,
                buttonColor: defaultButtonColorsNew,
                nextQuestion: false,
            }
        );
    }

    /**
     * Change background color of selected question
     * Also make the correct question green to indicate what the right answer was if you got it wrong...
     * @param key
     * @param correct
     */
    chooseAnswer(key, correct) {
        const new_array = this.state.buttonColor;
        if (correct === 'true') {
            new_array[key].bg = variables.brandSecond;
            new_array[key].borderColor = variables.brandSecond;
            new_array[key].text = '#FAFAFA';
            new_array[key].shadow = 'rgba(0,0,0,0.2)';
            this.setState({
                answerResult: 'true-answer',
                correctAnswers: ( this.state.correctAnswers + 1)
            });
        } else if (correct === 'false') {
            new_array[key].bg = variables.brandPrimary;
            new_array[key].borderColor = variables.brandPrimary;
            new_array[key].text = '#FAFAFA';
            new_array[key].shadow = 'rgba(0,0,0,0.2)';
            this.setState({
                answerResult: 'false-answer',
                falseAnswers: ( this.state.falseAnswers + 1)
            });


            // set correct answer to green
            const correct_key = this.state.correctAnswerKey[this.state.current];
            new_array[correct_key].bg = variables.brandSecond;
            new_array[correct_key].borderColor = variables.brandSecond;
            new_array[correct_key].text = '#FAFAFA';
            new_array[correct_key].shadow = 'rgba(0,0,0,0.2)';


            /**
             * Here I need to loop change the color of the correct answer to green.
             * @todo I can just create a state that reflects the key of the correct answers, and then
             * get that state here to update the color of the correct answer?
             */
        }
        else {
            // throw error?
        }

        this.setState({
            buttonColor: new_array,
            disabled: true,
            nextQuestion: true,
        });
    }

    render() {

        if (this.state.questions) {

            /**
             * Decode HTML Entities
             * @todo this isn't always working?
             * Maybe find a better api?
             */
            const entities = new Entities();

            const current_question = this.state.questions[this.state.current];
            const answers = current_question.answers.map((item, key) => {
                    if (item.correct == true) {
                        var correct_name = 'true';
                    } else {
                        var correct_name = 'false';
                    }

                    const answer_now = entities.decode(item.answer);
                    return (
                        <TouchableHighlight
                            key={key}
                            style={[styles.button, {backgroundColor: this.state.buttonColor[key].bg, borderColor: this.state.buttonColor[key].borderColor}]}
                            underlayColor="#FFF"
                            activeOpacity={1}
                            disabled={this.state.disabled}
                            onPress={() => this.chooseAnswer(key, correct_name)}>
                            <Text
                                style={[styles.buttonText,{color: this.state.buttonColor[key].text, textShadowColor: this.state.buttonColor[key].shadow}]}>{answer_now}</Text>
                        </TouchableHighlight>
                    );
                }
            );

            const question_now = entities.decode(current_question.question);

            var questions = (
                <View>
                    <View style={styles.questionWrap}>
                        <Text style={styles.questionText}>{question_now}</Text>
                    </View>
                    {answers}
                </View>
            )
        } else {
            var questions = (
                <View></View>
            )
        }

        switch (this.state.answerResult) {
            case 'true-answer':
                //var AnswerResult = <CorrectAnswer />;
                var AnswerResult = <AnswerResults text='CORRECT!' color={variables.brandSecond}/>;
                break;
            case 'false-answer':
                var AnswerResult = <AnswerResults text='INCORRECT!' color={variables.brandPrimary}/>;
                break;
            default:
                var AnswerResult = <View></View>;
        }

        if (this.state.nextQuestion) {
            var nextQuestionLink = <NextQuestion currentQuestion={this.state.current}
                                                 newQuestion={(e) => this.newQuestion(e)}/>;
        } else {
            var nextQuestionLink = <View></View>;
        }

        return (
            <View style={styles.quizWrap}>
                <View style={styles.headerWrap}>
                    <Text style={styles.headerText}>Question {this.state.current + 1} of 10</Text>
                    <Text style={styles.headerText}>Correct: {this.state.correctAnswers} -
                        Incorrect: {this.state.falseAnswers}</Text>
                    {AnswerResult}
                </View>
                {questions}
                <ActivityIndicator
                    animating={this.state.isLoading}
                    color="#333"
                    size="large"></ActivityIndicator>
                {nextQuestionLink}
            </View>
        )
    }
}

module.exports = Quiz;
