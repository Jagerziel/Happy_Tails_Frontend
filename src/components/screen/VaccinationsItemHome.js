// Import React
import React from 'react';
import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

// Import Assets
import HourGlass from '../../assets/hourglass.bottomhalf.fill.svg'
import SleepyCat01 from '../../assets/sleepy_cat_01.png'
import SleepyCat02 from '../../assets/sleepy_cat_02.png'

function VaccinationsItemHome(props) {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );
}

export default VaccinationsItemHome;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: '100%',
    }
})