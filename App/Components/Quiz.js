import React, {Component} from 'react'
var api = require('../Utils/api')
var Entities = require('html-entities').XmlEntities
import AnswerResults from './AnswerResults'
import NextQuestion from './NextQuestion'
import variables from '../Styles/Variables'
import styles from '../Styles/DefaultStyles'
import QuizResult from './QuizResult'

import {
    Text,
    View,
    ActivityIndicator,
    TouchableHighlight,
    Platform,
} from 'react-native'

/**
 * Array of button styles
 * Clone using JSON.stringify to create copy without reference
 */
let defaultButtonColorsOrig = [
    {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
    {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
    {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
    {bg: '#FCFCFC', text: '#444', shadow: '#FFF', borderColor: variables.brandThirdLite},
]
defaultButtonColors = JSON.parse(JSON.stringify(defaultButtonColorsOrig))


class Quiz extends Component {

    constructor() {
        super() // calls the constructor method of 'Component'

        /**
         * @todo document what each state variable is for
         */
        this.state = {
            isLoading: true, // used to show loading spinner
            //error: false,
            questions: false, // ???
            current: 0, // current question
            buttonColor: defaultButtonColors, // array of colors ofr each button
            disabled: false, // when the final question has been answered?
            //answerResult: false, // becomes true when a question has been answered
            correctAnswers: 0, // total number of current correct answers
            falseAnswers: 0, // total number of current incorrect answers
            correctAnswerKey: false, // the array position of the current correct answer?
            nextQuestion: false, // to show the next question link
            numberQuestions: 2, // total number of questions
            quizContents: null, // current quiz body contents
            nextQuestionLink: <View></View>,
            answerResultString: <View></View>,
        }

        this.getNewData();



    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentDidMount() {
        console.log('component did mount')
        this.getQuestions();
        // this.setState(
        //     {quizContents: <View><Text>New quiz state</Text></View>}
        // )

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
        });

    }

    displayResults() {
        /**
         * Change this to showing the state on the current page of the results
         * I can still import the contents from the different module, I just can't use
         * navigation
         */
        //console.log('time for results!!!');
        // this.props.navigator.push({
        //     component: QuizResult,
        //     title: 'Results',
        //     passProps: {
        //         score: 33,
        //     },
        //     navigationBarHidden: false
        // });
    }

    newQuestion(e) {

        this.setState({
                current: e,
                disabled: false,
                //answerResult: false,
                buttonColor: defaultButtonColorsOrig,
                nextQuestion: false,
            }
        );

        // console.log( 'current number: ' + this.state.current );
        // console.log( 'number questions: ' + this.state.numberQuestions );
        //


        //     current: 0, // current question
        //     correctAnswers: 0, // total number of current correct answers
        //     falseAnswers: 0, // total number of current incorrect answers
        //     numberQuestions: 2, // total number of questions
        //     quizContents: null, // current quiz body contents

    }

    /**
     * Change background color of selected question and highlight correct answer
     */
    chooseAnswer(key, correct) {
        const new_array = this.state.buttonColor
        new_array[key].text = '#FAFAFA'
        new_array[key].shadow = 'rgba(0,0,0,0.2)'

        var NextQuestionLink = <NextQuestion currentQuestion={this.state.current}
                                             newQuestion={(e) => this.newQuestion(e)}
                                             numberQuestions={this.state.numberQuestions}
                                             navigator={this.props.navigator}
                                             text="NEXT QUESTION"
                                             displayResults={() => this.displayResults()}
        />

        if (correct === 'true') {
            new_array[key].bg = variables.brandSecond
            new_array[key].borderColor = variables.brandSecond
            var AnswerResultString = <AnswerResults text='CORRECT!' color={variables.brandSecond}/>
            // this.setState({
            //     answerResultString: AnswerResultString,
            //     nextQuestionLink: NextQuestionLink,
            // })
            /**
             * the answerResult state property might be unnecessary
             */
            this.setState({
                //answerResult: 'true-answer',
                correctAnswers: ( this.state.correctAnswers + 1),
                answerResultString: AnswerResultString,
                nextQuestionLink: NextQuestionLink,
            });
        } else if (correct === 'false') {
            new_array[key].bg = variables.brandPrimary
            new_array[key].borderColor = variables.brandPrimary
            var AnswerResultString = <AnswerResults text='INCORRECT!' color={variables.brandPrimary}/>
            this.setState({
                //answerResult: 'false-answer',
                falseAnswers: ( this.state.falseAnswers + 1),
                answerResultString: AnswerResultString,
                nextQuestionLink: NextQuestionLink,
            });

            // set correct answer to green
            const correct_key = this.state.correctAnswerKey[this.state.current]
            new_array[correct_key].bg = variables.brandSecond
            new_array[correct_key].borderColor = variables.brandSecond
            new_array[correct_key].text = '#FAFAFA'
            new_array[correct_key].shadow = 'rgba(0,0,0,0.2)'
        }

        this.setState({
            buttonColor: new_array,
            disabled: true,
            nextQuestion: true,
        })


        /**
         * Separate answer results into different method?
         */
        // switch (this.state.answerResult) {
        //     case 'true-answer':
        //         //var AnswerResult = <CorrectAnswer />;
        //         var AnswerResultString = <AnswerResults text='CORRECT!' color={variables.brandSecond}/>;
        //         break;
        //     case 'false-answer':
        //         var AnswerResultString = <AnswerResults text='INCORRECT!' color={variables.brandPrimary}/>;
        //         break;
        //     default:
        //         var AnswerResultString = <View></View>;
        // }

        //console.log(this.state);
        //
        // if (this.state.nextQuestion) {
        //     /**
        //      * I can change the link to see results after the final question has been clicked...
        //      * @type {XML}
        //      */
        //     //console.log( 'current: ' + this.state.current);
        //     //console.log( 'num questions: ' + this.state.numberQuestions);
        //     var NextQuestionLink = <NextQuestion currentQuestion={this.state.current}
        //                                                 newQuestion={(e) => this.newQuestion(e)}
        //                                                 numberQuestions={this.state.numberQuestions}
        //                                                 navigator={this.props.navigator}
        //                                                 text="NEXT QUESTION"
        //                                                 displayResults={() => this.displayResults()}
        //     />
        // } else {
        //     var NextQuestionLink = <View></View>;
        // }

        // this.setState({
        //     answerResultString: AnswerResultString,
        //     nextQuestionLink: NextQuestionLink,
        // })

    }

    getQuestions() {

        if (this.state.questions) {

            /**
             * Decode HTML Entities
             * @todo this isn't always working?
             * Maybe find a better api?
             */
            const entities = new Entities()

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
                            style={[styles.button, {
                                backgroundColor: this.state.buttonColor[key].bg,
                                borderColor: this.state.buttonColor[key].borderColor
                            }]}
                            underlayColor="#FFF"
                            activeOpacity={1}
                            disabled={this.state.disabled}
                            onPress={() => this.chooseAnswer(key, correct_name)}>
                            <Text
                                style={[styles.buttonText, {
                                    color: this.state.buttonColor[key].text,
                                    textShadowColor: this.state.buttonColor[key].shadow
                                }]}>{answer_now}</Text>
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

        this.setState({
            quizContents: <View>
                <View style={styles.headerWrap}>
                    <Text style={styles.headerText}>Question {this.state.current + 1}
                        of {this.state.numberQuestions}</Text>
                    <Text style={styles.headerText}>Correct: {this.state.correctAnswers} -
                        Incorrect: {this.state.falseAnswers}</Text>
                    {this.state.answerResultString}
                </View>
                {questions}
                <ActivityIndicator
                    animating={this.state.isLoading}
                    color="#333"
                    size="large"></ActivityIndicator>
                <View style={styles.footerWrap}>
                    {this.state.nextQuestionLink}
                </View>
            </View>
        })

    }

    render() {

        /**
         * In this method I need to check what the current state is???
         */
        //this.getQuestions();
        console.log(this.state);
        //console.log(Platform);

        return (
            <View style={styles.quizWrap}>
                {this.state.quizContents}
            </View>
        )
    }
}

module.exports = Quiz;
