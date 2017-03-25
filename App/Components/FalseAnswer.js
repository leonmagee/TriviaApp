import React, {Component} from 'react';
import variables from '../Styles/Variables';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    resultText: {
        color: variables.brandPrimary,
        fontSize: 20,
        fontWeight: 'bold',
    }
});

class FalseAnswer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.resultText}>INCORRECT!</Text>
            </View>
        )
    }
}

module.exports = FalseAnswer;