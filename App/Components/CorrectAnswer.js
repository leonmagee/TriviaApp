import React, {Component} from 'react';
import variables from '../Styles/Variables';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    resultText: {
        color: variables.brandSecond,
        fontSize: 20,
        fontWeight: 'bold',
    }
});

class Correct extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.resultText}>CORRECT!</Text>
            </View>
        )
    }
}

module.exports = Correct;