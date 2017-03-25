import React, {Component} from 'react';
var api = require('../Utils/api');
var Entities = require('html-entities').XmlEntities;
import CorrectAnswer from './CorrectAnswer';
import FalseAnswer from './FalseAnswer';
import NextQuestion from './NextQuestion';

import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    WebView,
    TouchableHighlight,
} from 'react-native';

class Quiz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: false,
            questions: false,
            current: 0,
            buttonColor: [
                {bg: '#FCFCFC', text: '#111', shadow: '#FFF'},
                {bg: '#FCFCFC', text: '#111', shadow: '#FFF'},
                {bg: '#FCFCFC', text: '#111', shadow: '#FFF'},
                {bg: '#FCFCFC', text: '#111', shadow: '#FFF'},
            ],
            disabled: false,
            answerResult: false,
        }

        api.getQuestions().then((res) => {
            /**
             * when the question changes, just the state should change regarding the current question,
             * so you don't need to navigate to a new page...
             */
            console.log(res);

            /**
             * for multiple choice questions
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
                questions.push({
                    question: trivia_question.question,
                    answers: shuffleArray(answers),
                })
            });

            console.log(questions);

            this.setState({questions: questions});

            this.setState({isLoading: false});

        });
    }

    newQuestion(e) {
        //console.log( 'e is this: ' + e );
        this.setState({current: e});
    }

    chooseAnswer(key, correct) {
        console.log('answer chosen: ' + key + ' : ' + correct);

        const new_array = this.state.buttonColor;

        if (correct === 'true') {
            new_array[key].bg = '#3cb371';
            new_array[key].text = '#FAFAFA';
            new_array[key].shadow = 'rgba(0,0,0,0.2)';
            this.setState({answerResult: 'true-answer'});

        } else if (correct === 'false') {

            new_array[key].bg = '#ff4500';
            new_array[key].text = '#FAFAFA';
            new_array[key].shadow = 'rgba(0,0,0,0.2)';
            this.setState({answerResult: 'false-answer'});
        }
        else {
            // throw error?
        }

        this.setState({
            buttonColor: new_array,
            disabled: true,
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
                            style={[styles.button, {backgroundColor: this.state.buttonColor[key].bg}]}
                            underlayColor="#FFF"
                            activeOpacity={1}
                            disabled={this.state.disabled}
                            onPress={() => this.chooseAnswer(key, correct_name)}>
                            <Text
                                style={[styles.buttonText,{color: this.state.buttonColor[key].text, textShadowColor: this.state.buttonColor[key].shadow}]}>{answer_now}
                                - {correct_name}</Text>
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
                var AnswerResult = <CorrectAnswer />;
                break;
            case 'false-answer':
                var AnswerResult = <FalseAnswer />;
                break;
            default:
                var AnswerResult = <View></View>;
        }


        return (
            <View style={styles.quizWrap}>
                <NextQuestion currentQuestion={this.state.current} newQuestion={(e) => this.newQuestion(e)}/>
                {AnswerResult}
                {questions}
                <ActivityIndicator
                    animating={this.state.isLoading}
                    color="#333"
                    size="large"></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quizWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(32,178,170,0.10)',
        paddingHorizontal: 15,
    },
    questionWrap: {
        //backgroundColor: 'rgba(255,255,255,0.9)',
        backgroundColor: '#FCFCFC',
        marginTop: 100,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 1},
    },
    questionText: {
        color: '#111',
        fontWeight: 'bold',
        fontSize: 18,
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 1},
    },
    buttonText: {
        //color: '#111',
        fontWeight: 'bold',
        fontSize: 16,
        textShadowOffset: {width: 1, height: 1},

    },
});

module.exports = Quiz;
