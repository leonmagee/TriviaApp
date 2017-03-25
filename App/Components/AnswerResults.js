import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    }
});

class AnswerResults extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={[styles.resultText, {color: this.props.color}]}>{this.props.text}</Text>
            </View>
        )
    }
}

module.exports = AnswerResults;