import React, {Component} from 'react';
import variables from '../Styles/Variables';

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
    },
    nextQuestion: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
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
            <TouchableHighlight onPress={() => this.getNextQuestion()} style={styles.nextQuestionWrap}
                                underlayColor={variables.brandThirdLite} >
                <Text style={styles.nextQuestion}>NEXT QUESTION</Text>
            </TouchableHighlight>
        )
    }

}

module.exports = NextQuestion;




