/**
 * IOS Index file - this code can be shared between index.ios and index.android
 */
import React, {Component} from 'react';
//import Main from './App/Components/Main';
//import Main from './App/Components/Quiz';
//import Main from './App/Components/QuizResult';
//import Main from './App/Components/StaggerTest';
//import Main from './App/Components/Quiz-Redux';
import {MainWrap} from './App/Components/MainWrap';
import {Provider} from 'react-redux';
import store from './App/Store/store';

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
            <Provider store={store}>
                <MainWrap />
                <NavigatorIOS
                    style={styles.container}
                    initialRoute={{
                        component: MainWrap,
                        title: 'Home',
                    }}
                    navigationBarHidden={false}
                />
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

AppRegistry.registerComponent('TriviaApp', () => TriviaApp);
