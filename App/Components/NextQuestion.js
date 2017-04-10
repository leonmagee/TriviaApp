import React, {Component} from 'react';
import variables from '../Styles/Variables';
//import QuizResult from './QuizResult';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    nextQuestionWrap: {
        marginBottom: 40,
        backgroundColor: variables.brandThird,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    nextQuestion: {
        color: '#FFF',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 4,
    }
});

class NextQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: props.currentQuestion,
        }
        this.newQuestion = props.newQuestion;
    }

    getNextQuestion() {

        /**
         * skips the first update???
         */
        let updated_number = this.state.currentQuestion + 1;
        if ( this.props.numberQuestions === updated_number ) {
            //console.log( 'you maxed out' );
            /**
             * Navigate to new page
             */

            this.props.displayResults();


                // this.props.navigator.push({
                //     component: QuizResult,
                //     title: 'Results',
                //     passProps: {
                //         score: 33,
                //     },
                //     navigationBarHidden: false
                // });

        } else {
            this.setState({currentQuestion: updated_number});
            this.newQuestion(updated_number);
        }
    }
    render() {
        return (
            <TouchableHighlight onPress={() => this.getNextQuestion()} style={styles.nextQuestionWrap}
                                underlayColor={variables.brandThirdLite} >
                <Text style={styles.nextQuestion}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}

module.exports = NextQuestion;




