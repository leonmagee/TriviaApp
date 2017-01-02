/**
 * Home JS file
 */
import React, {Component} from 'react';
var api = require('../Utils/api');
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class Main extends Component {
    render() {

        return (
            <View>
                <Text>quiz has started</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quizWrap: {
        flex: 1,
        padding: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(32,178,170,0.85)',
    },
});

module.exports = Main;
