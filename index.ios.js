/**
 * IOS Index file - this code can be shared between index.ios and index.android
 * @todo find router to work with Android?
 * @todo remove libraries that you are not using? svg & swipe?
 */
import React, {Component} from 'react';
//import Main from './App/Components/Main'; // homepage component
import {Quiz} from './App/Components/Quiz';
import {Provider} from 'react-redux';
import store from './App/Store/store';

import {
    AppRegistry,
    //StyleSheet,
    //NavigatorIOS,  // @todo use this when homepage is being used
} from 'react-native';

export default class TriviaApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Quiz />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('TriviaApp', () => TriviaApp);