import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Animated,
    Text,
    Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get("window");
const num_boxes = [];
for (var i = 0; i < 72; i++) {
    num_boxes.push(i);
}
const box_width = ( ( width / 6 ) - 1 );
const box_height = ( ( height / 12 ) - 1);

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        padding: 3,
        paddingTop: 7,
    },
    box: {
        backgroundColor: '#FFF',
        width: box_width,
        height: box_height,
    },
    boxInner: {
        flex: 1,
        margin: 2,
    }
})


class StaggerCustom extends Component {

    componentWillMount() {
        this.animatedValue = [];
        num_boxes.forEach((item) => {

            this.animatedValue[item] = new Animated.Value(0);
        })
    }

    componentDidMount() {
        const animated_timing = num_boxes.map((a) => {
            Animated.timing(this.animatedValue[a], {
                toValue: 9,
                duration: 10000,
            }).start()
        });
        Animated.stagger(5000, animated_timing);
    }

    render() {

        const render_boxes = num_boxes.map((a, i) => {

            const interpolateColor = this.animatedValue[a].interpolate({
                inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                outputRange: ['#5CCA9D', '#089CCA', '#07CA88', '#10CAC0', '#5CCA9D', '#089CCA', '#07CA88', '#10CAC0', '#5CCA9D', '#089CCA'],
                // white / blue / green / aqua / light green
            })
            const animatedStyle = {
                backgroundColor: interpolateColor,
            }

            return (
                <View key={i} style={[styles.box]}>
                    <Animated.View style={[styles.boxInner, animatedStyle]}></Animated.View>
                </View>
            )
        });

        return (
            <View style={styles.container}>
                {render_boxes}
            </View>
        )
    }
}

module.exports = StaggerCustom;