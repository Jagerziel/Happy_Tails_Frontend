// Import React
import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import GreyDot from '../../assets/grey_dot.svg'
import OrangeDot from '../../assets/orange_dot.svg'

function CheckboxButton( { name, active } ) {
    const conditionalBorder = active ? 
        {
            borderWidth: 2,
            borderColor: colors.primaryFade,
        } : {}

    return (
        <TouchableOpacity style={[
            styles.container,
            conditionalBorder
            ]}
        >
            <Text style={[styleMaster.defaultFont, styles.textField]}>{name}</Text>
            {
                active ? <OrangeDot /> : <GreyDot />
            }
        </TouchableOpacity>
    );
}

export default CheckboxButton;

const styles = StyleSheet.create({
    container: {
        // borderWidth: scale_mod(2),
        // borderColor: colors.grayscale03,
        width: scale_mod(328),
        height: scale_mod(44),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
        paddingLeft: scale_mod(15),
        paddingRight: scale_mod(16),
        backgroundColor: colors.white,
        paddingTop: 0,
    },
    textField: {
        // borderWidth: 2,
        textAlign: 'left',
        fontSize: scale_V(15),
        includeFontPadding: false, // Removes default padding for Text 
        fontFamily: 'RobotoLight',
    },
    
});