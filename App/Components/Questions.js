import React, {Component} from 'react'
import styles from '../Styles/DefaultStyles'
import { connect } from 'react-redux'
import ADD_POST from '../Store/reducers'

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
    questions: state.questions
})

//questions={this.state.questions}

class Question extends Component {

    constructor() {
        super()
    }

    render() {

        return (
            <View style={styles.demoWrap}>
                {this.props.questions.map((question, i) => <Text key={i}>{question.name}</Text>)}
                <TouchableHighlight
                    underlayColor="#FFF"
                    onPress={this.props.addQuestionPost}>
                    <Text>Button</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const mapActionsToProps = (dispatch) => ({
    addQuestionPost(post = {name: 'Question New'}) {
        dispatch({type: ADD_POST, payload: post})
    }
})

//module.exports = connect(mapStateToProps, null)(Question);
module.exports = connect(mapStateToProps, mapActionsToProps)(Question);
