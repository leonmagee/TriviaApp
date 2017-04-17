import React, {Component} from 'react'
import styles from '../Styles/DefaultStyles'
import { connect } from 'react-redux'
//import ADD_POST from '../Store/reducers'
//const ADD_POST = 'ADD_POST';
import { ADD_QUESTION } from '../Store/reducers'

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

/**
 * I need to chagne this to 'new question', and simply have it change the current question state,
 * so really I'm just outputting an array of questions like I was before, but in this case the key will change
 * using redux which will then update the view
 * @param dispatch
 */
const mapActionsToProps = (dispatch) => ({
    addQuestionPost(post = {name: 'Question New'}) {
        // console.log('post is:');
        // console.log(post.nativeEvent);
        // console.log(post);
        //dispatch({type: ADD_POST, payload: post})
        dispatch({type: ADD_QUESTION, payload: {name: 'Question New'}})
    }
})

//module.exports = connect(mapStateToProps, null)(Question);
module.exports = connect(mapStateToProps, mapActionsToProps)(Question);
