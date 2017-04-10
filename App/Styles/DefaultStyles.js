import React from 'react'
import variables from './Variables'
import {Dimensions} from 'react-native'

import {
    StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window')
const button_width = ( width * 0.9 )

const defaultStyles = StyleSheet.create({
    quizWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(32,178,170,0.10)',
        paddingTop: 75,
        paddingHorizontal: 15,
    },
    questionWrap: {
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
    headerWrap: {
        height: 100,
        padding: 5,
    },
    headerText: {
        textAlign: 'center',
        padding: 3,
    },
    footerWrap: {
        height: 100,
        justifyContent: 'flex-end',
    }
});

module.exports = defaultStyles;