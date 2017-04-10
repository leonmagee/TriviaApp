import React, {Component} from 'react';
import variables from '../Styles/Variables';
//import StartQuizButton from './StartQuizButton';
import Quiz from './Quiz';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    NavigatorIOS,
} from 'react-native';

const styles = StyleSheet.create({
    quizResultWrap: {
        paddingVertical: 130,
        paddingHorizontal: 20,
    },
    quizResultText: {
        fontSize: 20,
        color: variables.brandThird,
    },
    buttonWrap: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 15,
        borderRadius: 5,
    },
    button: {
        color: '#E51D12',
        fontWeight: 'bold',
        fontSize: 30,
    },
});

class QuizResult extends Component {

    constructor() {
        super();
    }

    // startNewQuiz() {
    //     /**
    //      * Navigate back to Quiz component
    //      */
    //     console.log('new quiz started');
    // }

    startQuiz() {
        /**
         * Replace this with a method passed in via props
         */
        //console.log(this.props.navigator);
        // this.props.navigator.push({
        //     component: Quiz,
        //     title: 'Quizian',
        //     navigationBarHidden: false
        // });
    }

    render() {
        return (
            <View style={styles.quizResultWrap}>
                <Text style={styles.quizResultText}>
                    Congratulations! Your score is {this.props.score}
                </Text>
                <TouchableHighlight style={styles.buttonWrap} onPress={() => this.startQuiz()}
                                    underlayColor="rgba(255,255,255,0.9)">
                    <Text style={styles.button}>NEW QUIZ</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

module.exports = QuizResult;





