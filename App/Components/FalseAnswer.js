/**
 * Correct Answer Template
 * @todo make a wrapper component for both correct and false answers
 * @todo make a component to retrieve the corredct answer when the false answer is selected?
 * or else you can simply make the correct answer light up green when the flase answer is chosen
 */
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    //ActivityIndicator,
    //WebView,
    //TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    resultWrap: {
        marginTop: 120,
    },
    resultText: {
        color: 'red',
        fontSize: 30,
    }
});

class FalseAnswer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.resultWrap}>
                <Text style={styles.resultText}>Your answer is false!</Text>
            </View>
        )
    }

}

module.exports = FalseAnswer;




