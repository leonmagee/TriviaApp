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


class Quiz extends Component {

    constructor() {
        super();
        // this.state = {
        //     isLoading: true,
        // }
    }

    nextQuestion(question_number) {
        //dispatch({type: 'NEXT_QUESTION', payload: question_number})

        this.props.goToNextQuestion(question_number);
        console.log( 'next question clicked' );

        // this.setState({
        //     currentQuestion: question_number,
        // })
    }

    render() {

        // if (!SampleQuestions[this.props.currentQuestion]) {
        //     var arrayData = SampleQuestions[0];
        //     console.log('not so far?');
        // } else {
        //     var arrayData = SampleQuestions[this.props.currentQuestion];
        //     console.log('undefined?');
        // }
        var arrayData = SampleQuestions[this.props.currentQuestion];
        console.log('testerz');
        console.log(arrayData);
        // console.log('test re-render');
        // console.log(this.props.currentQuestion);
        // console.log(this.state);

        return (
            <View style={styles.demoWrap}>
                <Text style={styles.demoText}>{this.props.titleText}</Text>
                <QuestionsNew
                    //SampleQuestions={SampleQuestions}
                    arrayData={arrayData}
                    //currentQuestion={this.state.currentQuestion}
                    //currentQuestion={this.props.currentQuestion}
                    nextQuestion={this.nextQuestion.bind(this)}
                ></QuestionsNew>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    currentQuestion: state.currentQuestion,
    titleText: state.titleText
})

const mapActionsToProps = (dispatch) => ({
    goToNextQuestion(currentQuestion) {
        dispatch({type: 'NEXT_QUESTION', payload: currentQuestion})
    }
})

// const mapActionsToProps = (dispatch) => ({
//     goToNextQuestion(post = {currentQuestion: 1}) {
//         /**
//          * How to access the actual properties from the post???
//          */
//         // console.log('post is:');
//         // console.log(post.nativeEvent);
//         // console.log(post);
//         //dispatch({type: ADD_POST, payload: post})
//         dispatch({type: 'NEXT_QUESTION', payload: {currentQuestion: 1}})
//     }
// })

//module.exports = connect(mapStateToProps, null)(Question);
//module.exports = connect(mapStateToProps, mapActionsToProps)(QuestionsNew);
//connect(mapStateToProps, mapActionsToProps)(QuestionsNew);

//export const Connectz = connect(null, mapActionsToProps)(QuestionsNew);

//module.exports = Quiz;
export const QuizReduxNew = connect(mapStateToProps, mapActionsToProps)(Quiz);
//export const QuizReduxNew = connect(mapStateToProps)(Quiz);

