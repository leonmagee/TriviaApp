import React from 'react'
import styles from '../Styles/DefaultStyles'
import variables from '../Styles/Variables'

import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'

export const Questions = (props) => (
    <View>
        <View style={styles.questionWrap}>
            <Text style={styles.questionText}>{props.arrayData.question}</Text>
        </View>
        {props.arrayData.answers.map((answer, i) => (
            <TouchableHighlight style={styles.answerWrap} key={i}>
                <Text style={styles.answerText}>{answer.answer}</Text>
            </TouchableHighlight>
        ))}
    </View>
);