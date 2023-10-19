// Import React
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';

function TextInputField( { name, placeholder, handleTextInput } ) {
    const [ focused, setFocused ] = useState(false)
    
    function handleFocus() {
        setFocused(focus => !focus)
    }

    return (
        <View style={[
            styles.container,
            { borderColor: focused ? colors.primaryFade : colors.grayscale03 } // Conditionally style border
            ]}
        >
            <TextInput 
                type='text'
                style={[
                    styleMaster.defaultFont, 
                    styles.textInput,
                    
                ]}
                placeholder={placeholder}
                placeholderTextColor={colors.grayscale03}
                onChangeText={text => handleTextInput(name, text)}
                onFocus={() => handleFocus()}
                onBlur={() => handleFocus()}
            />
        </View>
    );
}

export default TextInputField;

const styles = StyleSheet.create({
    container: {
        borderWidth: scale_mod(2),
        width: scale_mod(328),
        aspectRatio: 6.83/1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: colors.white,
    },
    textInput: {
        width: scale_mod(296),
        textAlign: 'left',
        includeFontPadding: false, // Removes default padding for Text
        
    }  
});
  