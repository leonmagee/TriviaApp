import React, {Component} from 'react';
import Quiz from './Quiz';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
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


class StartQuizButton extends Component {

    constructor() {
        super();
    }

    startQuiz() {
        this.props.navigator.push({
            component: Quiz,
            title: 'Quizian',
            navigationBarHidden: false
        });
    }

    render() {

        return (
            <TouchableHighlight style={styles.buttonWrap} onPress={() => this.startQuiz()}
                                underlayColor="rgba(255,255,255,0.9)">
                <Text style={styles.button}>{this.props.buttonText}</Text>
            </TouchableHighlight>
        )
    }

}

module.exports = StartQuizButton;