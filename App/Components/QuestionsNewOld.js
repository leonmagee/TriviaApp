import React, {Component} from 'react'
import styles from '../Styles/DefaultStyles'
import { connect } from 'react-redux'
import { NEXT_QUESTION } from '../Store/reducers'
import {SampleQuestions} from './SampleQuestions'

import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native'

/**
 * Array of button styles
 * Clone using JSON.stringify to create copy without reference
 */
// const mapStateToProps = (state) => ({
//     currentQuestion: state.currentQuestion
// })

//questions={this.state.questions}
export const QuestionsNew = (props) => (
<View style={styles.newQuestionWrap}>
<Text>{SampleQuestions[this.props.currentQuestion].question}</Text>
</View>
{SampleQuestions[this.props.currentQuestion].answers.map((answer, i) => (
    <View style={styles.newQuestionWrap} key={i}>
        <Text>{answer.answer}</Text>
    </View>
))}
<TouchableHighlight
    underlayColor="#FFF"
    onPress={() => this.props.nextQuestion()}>
    <Text>Next Question</Text>
</TouchableHighlight>
);



// class Question extends Component {
//
//     constructor() {
//         super()
//     }
//
//     render() {
//
//         return (
//             <View style={styles.demoWrap}>
//                 {this.props.questions.map((question, i) => <Text key={i}>{question.name}</Text>)}
//                 <TouchableHighlight
//                     underlayColor="#FFF"
//                     onPress={this.props.addQuestionPost}>
//                     <Text>Button</Text>
//                 </TouchableHighlight>
//             </View>
//         )
//     }
// }

/**
 * I need to chagne this to 'new question', and simply have it change the current question state,
 * so really I'm just outputting an array of questions like I was before, but in this case the key will change
 * using redux which will then update the view
 * @param dispatch
 */
// const mapActionsToProps = (dispatch) => ({
//     addQuestionPost(post = {name: 'Question New'}) {
//         // console.log('post is:');
//         // console.log(post.nativeEvent);
//         // console.log(post);
//         //dispatch({type: ADD_POST, payload: post})
//         dispatch({type: ADD_QUESTION, payload: {name: 'Question New'}})
//     }
// })

//module.exports = connect(mapStateToProps, null)(Question);
//module.exports = connect(mapStateToProps, mapActionsToProps)(Question);
