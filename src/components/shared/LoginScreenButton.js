// Import React
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';

function LoginScreenButton( { text, handlePress, disabled } ) {
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: disabled ? colors.primaryFade : colors.primary }]} 
            onPress={handlePress}
            disabled={disabled}
        >
            <Text style={[styleMaster.defaultFont, styles.buttonText]}>{text}</Text>
        </TouchableOpacity>
    );
}

export default LoginScreenButton;

const styles = StyleSheet.create({
    buttonContainer: {
        // borderWidth: 2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        width: scale_mod(328),
        aspectRatio: 6.83/1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: scale_V(18),
        lineHeight: scale_V(20),
        color: colors.white,
        fontFamily: 'RobotoRegular',
    },
});