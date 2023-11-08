import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Import constants and SVGs
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import Calendar from '../../assets/calendar.svg'
import Clock from '../../assets/clock.svg'
import GreenDot from '../../assets/green_dot.svg'

function AppointmentDetailItemHome(props) {
    return (
        <View style={styles.container}>
            <Text>Testing</Text>
        </View>
    );
}

export default AppointmentDetailItemHome;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: '100%',
        height: scale_mod(207),
    }
})