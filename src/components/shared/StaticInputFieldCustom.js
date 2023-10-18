// Import React
import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';

function StaticInputFieldCustom( { name , width } ) {
    return (
        <View style={[styles.container, {width: width}]}
        >
            <Text style={[styleMaster.defaultFont, styles.textField]}>{name}</Text>
        </View>
    );
}

export default StaticInputFieldCustom;

const styles = StyleSheet.create({
    container: {
        borderWidth: scale_mod(2),
        borderColor: colors.grayscale03,
        minWidth: 100,
        height: scale_mod(44),
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 12,
        paddingLeft: scale_mod(15),
        backgroundColor: colors.white,
        paddingTop: 0,
    },
    textField: {
        textAlign: 'left',
        fontSize: scale_V(15),
        includeFontPadding: false, // Removes default padding for Text 
        fontFamily: 'RobotoLight',
    }  
});