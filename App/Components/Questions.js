import React from 'react'
import styles from '../Styles/DefaultStyles'
import variables from '../Styles/Variables'

import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'

const buttonStyles = (correct, answerSubmited) => {
    if ( answerSubmited ) {
        if (correct) {
            return styles.answerCorrect
        } else {
            return styles.answerIncorrect
        }
    }
}

const buttonTextStyles = (correct, answerSubmited) => {
    if ( answerSubmited ) {
        if (correct) {
            return styles.answerCorrectText
        } else {
            return styles.answerIncorrectText
        }
    }
}

export const Questions = (props) => (
    <View>
        <View style={styles.questionWrap}>
            <Text style={styles.questionText}>{props.arrayData.question}</Text>
        </View>
        {props.arrayData.answers.map((answer, i) => (
            <TouchableHighlight
                style={[styles.answerWrap, buttonStyles(answer.correct, props.answerSubmitted)]} key={i}
                underlayColor={variables.brandThirdLite}
                disabled={props.answerSubmitted}
                onPress={() => props.answerChosen(answer.correct)}
            >
                <Text style={[styles.answerText, buttonTextStyles(answer.correct, props.answerSubmitted)]}>{answer.answer}</Text>
            </TouchableHighlight>
        ))}
    </View>
);