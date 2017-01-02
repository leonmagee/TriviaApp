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

        api.getQuestions().then((res) =>
        {
          console.log(res);
        });



        return (
            <View style={styles.quizWrap}>
                <Text>quiz has started</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quizWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(32,178,170,0.85)',
    },
});

module.exports = Main;
