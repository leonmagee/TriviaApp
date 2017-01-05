/**
 * IOS Index file - this code can be shared between index.ios and index.android
 */
import React, {Component} from 'react';
import Main from './App/Components/Main';
//import Main from './App/Components/StaggerTest';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';

export default class TriviaApp extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    component: Main,
                    title: 'Home',
                }}
                navigationBarHidden={true}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

AppRegistry.registerComponent('TriviaApp', () => TriviaApp);
