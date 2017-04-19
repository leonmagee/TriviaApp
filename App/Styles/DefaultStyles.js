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
const headerFooterHeight = 125;

const defaultStyles = StyleSheet.create({
    outerWrap: { // wraps everything
        flex: 1,
        backgroundColor: 'rgba(32,178,170,0.10)',
    },

    headerWrap: { // header section
        height: headerFooterHeight,
        paddingHorizontal: 5,
        paddingVertical: 15,
        backgroundColor: 'red',
        justifyContent: 'flex-end',
    },
    headerText: { // text in header
        textAlign: 'center',
        padding: 3,
    },

    quizWrap: { // wraps middle questions
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        //backgroundColor: 'green',
    },
    questionWrap: { // individual question or answer
        backgroundColor: '#FCFCFC',
        marginTop: 15,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderColor: variables.brandThirdLite,
        borderWidth: 2,
        width: button_width
    },

    footerWrap: {
        height: headerFooterHeight,
        justifyContent: 'flex-end',
        backgroundColor: 'blue',
    },

    questionText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: variables.brandThird,
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 1,
        width: button_width
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        textShadowOffset: {width: 1, height: 1},
    },



    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
    },


});

module.exports = defaultStyles;