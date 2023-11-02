// Import React
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';

function TextInputFieldCustom( { name, placeholder, handleTextInput, width, height } ) {
    const [ focused, setFocused ] = useState(false)
    
    
    function handleFocus() {
        setFocused(focus => !focus)
    }

    return (
        <View style={[
            styles.container,{
                borderColor: focused ? colors.primaryFade : colors.grayscale06, // Conditionally style border
                width: scale_mod(width),
                height: scale_mod(height),
            } 
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
                multiline={true}
                underlineColorAndroid={'transparent'}
            />
        </View>
    );
}

export default TextInputFieldCustom;

const styles = StyleSheet.create({
    container: {
        borderWidth: scale_mod(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: colors.white,
        paddingTop: scale_mod(14),
        paddingBottom: scale_mod(14),
        paddingLeft: scale_mod(18),
        paddingRight: scale_mod(18),
    },
    textInput: {
        // borderWidth: 2,
        height: '100%',
        textAlignVertical: 'top',
        textAlign: 'left',
        includeFontPadding: false, // Removes default padding for Text
        fontSize: scale_mod(15),
    }  
});
  