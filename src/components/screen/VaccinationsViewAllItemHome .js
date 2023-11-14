// Import React
import React from 'react';
import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

function VaccinationsViewAllItemHome( { data, handlePetSelection } ) {
    return (
        <View style={styles.container}>

        </View>
    );
}

export default VaccinationsViewAllItemHome;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
})