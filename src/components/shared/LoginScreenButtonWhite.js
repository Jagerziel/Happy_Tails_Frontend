// Import React
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';

function LoginScreenButtonWhite( { text, handlePress } ) {
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: colors.white } ]} 
            onPress={handlePress}
            disabled={false}
        >
            <Text style={[styleMaster.defaultFont, styles.buttonText]}>{text}</Text>
        </TouchableOpacity>
    );
}

export default LoginScreenButtonWhite;

const styles = StyleSheet.create({
    buttonContainer: {
        // borderWidth: 2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        borderWidth: 2,
        borderColor: colors.primary,
        width: scale_mod(328),
        aspectRatio: 6.83/1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: scale_V(18),
    },
});