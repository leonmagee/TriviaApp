/**
 * Home JS file
 */
import React, {Component} from 'react';
var api = require('../Utils/api');
var Entities = require('html-entities').XmlEntities;

import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    WebView,
} from 'react-native';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: false,
            questions: false,
            current: 0,
        }


        const questions = [];

        api.getQuestions().then((res) => {
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
            res.results.map((item) => {
                const answers = [];
                answers.push({answer: item.correct_answer, correct: true});
                item.incorrect_answers.map((item2) => {
                    answers.push({answer: item2, correct: false});
                })
                questions.push({
                    question: item.question,
                    answers: shuffleArray(answers),
                })
            });

            console.log(questions);

            this.setState({questions: questions});

            this.setState({isLoading: false});

        });
    }

    render() {

        if (this.state.questions) {

            /**
             * Decode HTML Entities
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
                        <View style={styles.answerWrap} key={key}>
                            <Text style={styles.answerText}>{answer_now} - {correct_name}</Text>
                        </View>
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

        return (
            <View style={styles.quizWrap}>
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
        backgroundColor: 'rgba(32,178,170,0.20)',
    },
    questionWrap: {
        backgroundColor: 'rgba(255,255,255,0.9)',
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
    answerWrap: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 1},
    },
    answerText: {
        color: '#111',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

module.exports = Main;
