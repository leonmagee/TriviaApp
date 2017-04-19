/**
 * Home JS file
 * First file to load - I should break apart the animations into smaller components
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
    Animated,
} from 'react-native';


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
        backgroundColor: '#20b2aa', // 'lightseagreen', //#20b2aa
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
    }
});


const {width, height} = Dimensions.get('window');
const num_horizontal = 6;
const num_vertical = 10;
const total_grid_items = ( num_horizontal * num_vertical );
const grid_array = [];
for (i = 0; i < total_grid_items; i++) {
    grid_array.push(i);
}

/**
 * @todo change this to only use grid array?
 * @type {Array}
 */
//const grid_array = grid_array;
const item_width = ( ( ( width - 2 ) / num_horizontal ) - 2);
const item_height = ( ( ( height - 2 ) / num_vertical ) - 2 );









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
            title: 'Quizian',
            // passProps: {
            //     // city: this.state.city,
            //     // results: res.result.listings
            // },
            navigationBarHidden: false
        });
    }


    componentWillMount() {
        this.animatedValue = [];
        grid_array.forEach((item) => {

            this.animatedValue[item] = new Animated.Value(0);
        })
    }

    componentDidMount() {
        const animated_timing = grid_array.map((a) => {
            Animated.timing(this.animatedValue[a], {
                toValue: 9,
                duration: 10000,
            }).start()
        });
        Animated.stagger(5000, animated_timing);
    }


    render() {

        const grid = grid_array.map((item, key) => {

                const interpolateColor = this.animatedValue[item].interpolate({
                    inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    outputRange: ['#20b2aa', '#089CCA', '#07CA88', '#10CAC0', '#5CCA9D', '#089CCA', '#07CA88', '#10CAC0', '#5CCA9D', '#20b2aa'],
                    // white / blue / green / aqua / light green
                })
                const animatedStyle = {
                    backgroundColor: interpolateColor,
                }


            return (
                <Animated.View style={[styles.gridItem, {width: item_width, height: item_height}, animatedStyle]} key={key}>
                    <View style={styles.svgWrap}>
                        <SvgElement fill="rgba(0,0,0,0.1)" svg_data={svg_question}/>
                    </View>
                </Animated.View>
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

module.exports = Main;
