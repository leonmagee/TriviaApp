/**
 * IOS Index file - this code can be shared between index.ios and index.android
 * @todo change NavigatorIOS to android equivalent
 */
import React, {Component} from 'react';
//import Main from './App/Components/Main';
//import Main from './App/Components/Quiz';
//import Main from './App/Components/QuizResult';
//import Main from './App/Components/StaggerTest';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class TriviaApp extends Component {
    render() {
        console.warn(JSON.stringify(this.state, null, 2))
        //throw new Error('yoooooo')
        return (
            <View style={styles.container}>
                <Text>Hello! Android Dev is working!</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

AppRegistry.registerComponent('TriviaApp', () => TriviaApp);
