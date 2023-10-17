// Import React
import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';

function TextInputField( { name, placeholder, handleTextInput } ) {
    return (
        <View style={styles.container}>
            <TextInput 
                type='text'
                style={[styleMaster.defaultFont, styles.textInput]}
                placeholder={placeholder}
                placeholderTextColor={colors.grayscale03}
                onChangeText={text => handleTextInput(name, text)}
            />
        </View>
    );
}

export default TextInputField;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.grayscale03,
        width: scale_mod(328),
        aspectRatio: 6.83/1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    textInput: {
        width: scale_mod(296),
        textAlign: 'left'
    }  
});
  