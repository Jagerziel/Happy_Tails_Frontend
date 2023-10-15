// Import React
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';

function TextInput( { text, handleTextInput } ) {
    return (
        <TouchableOpacity 
            style={""} 
            onPress={handleTextInput}
        >
            <Text style={[styleMaster.defaultFont]}>{text}</Text>
        </TouchableOpacity>
    );
}

export default TextInput;

const styles = StyleSheet.create({
    buttonContainer: {
        // borderWidth: 2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    
});
  