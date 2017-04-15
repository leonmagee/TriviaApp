import React, {Component} from 'react'
import styles from '../Styles/DefaultStyles'
import { connect } from 'react-redux'

import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'

/**
 * Array of button styles
 * Clone using JSON.stringify to create copy without reference
 */

const mapStateToProps = (state) => ({
    demoText: state.demoText
})

class Quiz extends Component {




    render() {

        return (
            <View style={styles.demoWrap}>
                {this.props.posts.map(
            </View>
        )
    }
}

module.exports = connect(mapStateToProps, null)(Quiz);
