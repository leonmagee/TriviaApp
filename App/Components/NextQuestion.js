import React, {Component} from 'react';
import mainStyles from '../Styles/Variables';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    nextQuestionWrap: {
        marginTop: 100,
        backgroundColor: mainStyles.brandPrimary,
    },
    nextQuestion: {
        color: '#FFF',
        fontSize: 30,
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
        this.setState({currentQuestion: updated_number});
        console.log('number: ' + updated_number);
        this.newQuestion(updated_number);
    }

    render() {
        return (
            <TouchableHighlight onPress={() => this.getNextQuestion()} style={styles.nextQuestionWrap}>
                <Text style={styles.nextQuestion}>Next Question</Text>
            </TouchableHighlight>
        )
    }

}

module.exports = NextQuestion;




