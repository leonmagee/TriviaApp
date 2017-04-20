/**
 * @todo use more descriptive terminology here
 * @todo it should be obvious what each style applies to
 */

import React from 'react'
import variables from './Variables'
import {Dimensions} from 'react-native'

import {
    StyleSheet,
} from 'react-native';

const {width} = Dimensions.get('window')
const button_width = ( width * 0.9 )

const defaultStyles = StyleSheet.create({
    outerWrap: { // wraps everything
        flex: 1,
        backgroundColor: 'rgba(32,178,170,0.10)',
    },

    headerWrap: { // header section
        height: 150,
        paddingHorizontal: 5,
        paddingTop: 30,
        //backgroundColor: 'red',
        justifyContent: 'center',
    },
    headerText: { // text in header
        textAlign: 'center',
        padding: 3,
    },
    correctIncorrectWrap: {
        height: 40,
        //backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    correctIncorrectText: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    quizWrap: { // wraps middle questions
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        //backgroundColor: 'green',
    },

    questionWrap: { // individual question
        backgroundColor: '#FCFCFC',
        marginTop: 15,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderColor: variables.brandThirdLite,
        borderWidth: 3,
        width: button_width
    },
    questionText: {
        fontWeight: 'bold',
        fontSize: 17,
        color: variables.brandThird,
        textAlign: 'center',
    },

    answerWrap: { // individual answer
        backgroundColor: '#FCFCFC',
        marginTop: 15,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderColor: variables.brandThirdLite,
        borderWidth: 1,
        width: button_width
    },
    answerText: {
        fontWeight: 'bold',
        fontSize: 17,
        color: variables.brandThird,
        textAlign: 'center',
    },

    footerWrap: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'blue',
    },


    // buttonWrap: {
    //     marginTop: 10,
    //     marginBottom: 10,
    //     paddingVertical: 10,
    //     paddingHorizontal: 15,
    //     borderRadius: 5,
    //     borderWidth: 1,
    //     width: button_width
    // },
    // buttonText: {
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     fontSize: 16,
    //     textShadowOffset: {width: 1, height: 1},
    // },

    nextButton: {
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        width: 200,
        backgroundColor: variables.brandThird,
        alignItems: 'center',
    },
    nextButtonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    },

    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
    },


});

module.exports = defaultStyles;