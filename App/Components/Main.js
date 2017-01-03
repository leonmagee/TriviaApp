/**
 * Home JS file
 */
import React, {Component} from 'react';
import Quiz from './Quiz';
import SvgElement from './SvgElement';
import svg_question from '../SVG/question';

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

class Main extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     isLoading: false,
        //     error: false,
        // }
    }

    startQuiz() {
        console.log('lets start the quiz');
        this.props.navigator.push({
            component: Quiz,
            title: 'Quiz',
            // passProps: {
            //     // city: this.state.city,
            //     // results: res.result.listings
            // },
            navigationBarHidden: false
        });
    }

    render() {

        const {width, height} = Dimensions.get('window');
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
                    <TouchableHighlight style={styles.buttonWrap} onPress={() => this.startQuiz()}
                                        underlayColor="rgba(255,255,255,0.9)">
                        <Text style={styles.button}>START</Text>
                    </TouchableHighlight>
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
        fontSize: 60,
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 1},
    },
    buttonWrap: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 15,
        borderRadius: 5,
    },
    button: {
        color: '#E51D12',
        fontWeight: 'bold',
        fontSize: 30,
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
