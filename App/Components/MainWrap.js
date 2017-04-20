import React, {Component} from 'react';
import {Quiz} from './Quiz'
import {QuizResults} from './QuizResults';
import {connect} from 'react-redux';
import {View} from 'react-native';
import styles from '../Styles/DefaultStyles'

// console.log(this.state);
//
// const _MainWrap = () => (
//     <QuizResults />
//     // <Quiz />
// );

class _MainWrap extends Component {

    render() {

        //console.log(this.props);

        if (this.props.quizResults) {
            var mainComponent = <QuizResults />;
        } else {
            var mainComponent = <Quiz />;
        }

        return (
            <View style={styles.outerWrapMain}>
                {mainComponent}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    // currentQuestion: state.currentQuestion,
    // numberQuestions: state.numberQuestions,
    // correctAnswer: state.correctAnswer,
    // falseAnswer: state.falseAnswer,
    // answerSubmitted: state.answerSubmitted,
    // answerResultString: state.answerResultString,
    quizResults: state.quizResults,
})

const mapActionsToProps = (dispatch) => ({})

export const MainWrap = connect(mapStateToProps, mapActionsToProps)(_MainWrap);
