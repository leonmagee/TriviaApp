import React, {Component} from 'react';
import variables from '../Styles/Variables';
import StartQuizButton from './StartQuizButton';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    quizResultWrap: {
        paddingVertical: 130,
        paddingHorizontal: 20,
    },
    quizResultText: {
        fontSize: 20,
        color: variables.brandThird,
    }
});

class QuizResult extends Component {

    constructor(props) {
        super(props);

    }

    startNewQuiz() {
        /**
         * Navigate back to Quiz component
         */
        console.log('new quiz started');
    }

    render() {
        return (
            <View style={styles.quizResultWrap}>
                <Text style={styles.quizResultText}>
                    Congratulations! Your score is...
                </Text>
                <StartQuizButton buttonText="NEW QUIZ" navigator={this.props.navigator}/>
            </View>
        )
    }
}

module.exports = QuizResult;





