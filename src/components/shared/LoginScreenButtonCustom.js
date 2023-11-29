// Import React
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';

function LoginScreenButtonCustom( { 
    text, 
    handlePress, 
    disabled, 
    width, 
    height,
    borderRadius,
    fontSize,
} ) {
    // Determine Aspect Ratio if a Height prop is provided
    let aspectRatio = height ? width / height : 6.46/1
    
    return (
        <TouchableOpacity 
            style={[styles.button, { 
                backgroundColor: disabled ? colors.primaryFade : colors.primary, 
                width: scale_mod(width),
                aspectRatio: aspectRatio,
                borderRadius: borderRadius ? borderRadius : 12
                }
            ]} 
            onPress={handlePress}
            disabled={disabled}
        >
            <Text style={[styleMaster.defaultFont, styles.buttonText, {
                fontSize: fontSize ? scale_V(fontSize) : scale_V(18)
            }]}>{text}</Text>
        </TouchableOpacity>
    );
}

export default LoginScreenButtonCustom;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: colors.white,
        fontFamily: "RobotoRegular",
    },
});