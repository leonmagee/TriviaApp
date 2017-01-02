/**
 * Home JS file
 */
import React, {Component} from 'react';
var SvgElement = require('./SvgElement');
var svg_question = require('../SVG/question.js');
var api = require('../Utils/api');
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

class Main extends Component {
    render() {

        const {width, height} = Dimensions.get('window');
        console.log(width);
        console.log(height);
        const num_horizontal = 4;
        const num_vertical = 7;
        const total_grid_items = ( num_horizontal * num_vertical );
        const grid_array = [];
        for (i = 0; i < total_grid_items; i++) {
            grid_array.push(i);
        }
        const item_width = ( ( ( width - 2 ) / num_horizontal ) - 2);
        const item_height = ( ( ( height - 2 ) / num_vertical ) - 2 );

        const grid = grid_array.map((item, key) => {
            return (
                <View style={[styles.gridItem, {width: item_width, height: item_height}]} key={key}>
                    <View style={styles.svgWrap}>
                        <SvgElement fill="rgba(0,0,0,0.1)" svg_data={svg_question}/>
                    </View>
                </View>
            )
        })

        return (
            <View style={styles.homeWrap}>
                <View style={[styles.homeTextWrap, {width: width, height: height}]}>
                    <Text style={styles.homeText}>QUIZIAN</Text>
                </View>
                {grid}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeWrap: {
        flex: 1,
        padding: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(32,178,170,0.85)',
    },
    homeTextWrap: {
        position: 'absolute',
        zIndex: 333,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 50,
        fontWeight: 'bold',
    },
    svgWrap: {
        //backgroundColor: 'blue',
    },
    gridItem: {
        backgroundColor: 'lightseagreen',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
    }
});

module.exports = Main;
