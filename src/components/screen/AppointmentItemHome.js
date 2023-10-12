import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/colorPalette.js';

import Clock from '../../assets/clock.svg'

function AppointmentItemHome( { data } ) {

    return (
        <View style={styles.container}>
            <View style={styles.dateTimeContainer}>
                {/* <Image source={require('../../assets/clock.svg')} style={styles.svg}/> */}
                <Clock />
            </View>
            <Text>{data.item.type}</Text>
        </View>
    );
}

export default AppointmentItemHome;

const styles = StyleSheet.create({
    container: {
        // borderColor: "green",
        // borderWidth: 2,
        width: 280,
        height: 124,
        borderRadius: 7,
        backgroundColor: colors.white,
        paddingTop: 15,
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 15,
    },
    dateTimeContainer: {

    },
    dateTime: {
        
    },
    svg: {
        height: 10,
        width: 10,
    }
})