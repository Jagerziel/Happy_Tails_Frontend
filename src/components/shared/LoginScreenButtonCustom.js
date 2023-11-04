// Import React
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';

function LoginScreenButtonCustom( { text, handlePress, disabled, width } ) {
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: disabled ? colors.primaryFade : colors.primary, width: scale_mod(width) }]} 
            onPress={handlePress}
            disabled={disabled}
        >
            <Text style={[styleMaster.defaultFont, styles.buttonText]}>{text}</Text>
        </TouchableOpacity>
    );
}

export default LoginScreenButtonCustom;

const styles = StyleSheet.create({
    button: {
        aspectRatio: 6.46/1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: scale_V(18),
        color: colors.white,
        fontFamily: "RobotoLight"
    },
});