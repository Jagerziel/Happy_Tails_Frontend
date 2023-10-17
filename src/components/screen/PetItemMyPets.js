import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Import constants and SVGs
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';


function PetItemMyPets( { data } ) {
    return (
        <View style={styles.container}>
            <Text>Testing</Text>
        </View>
    );
}

export default PetItemMyPets;

const styles = StyleSheet.create({
    container: {
        borderColor: "green",
        borderWidth: 2,
        width: '100%',
        height: scale_mod(100),
    },

})