import React from 'react';
import { Styles, View, Text, headerTextStyle, Image, centerThings } from 'react-native';
import CurrentWeather from './weatherDetail/CurrentWeather';

export default class Weather extends React.Component {
    render() {
        return (
        <View style={styles.centerThings}>
           <CurrentWeather zip={this.props.zip}/>
        </View>

        )
    }
}

const styles = {
    headerTextStyle: {
        fontSize: 30,
        color: '#FFF',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerThings: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    }
};
