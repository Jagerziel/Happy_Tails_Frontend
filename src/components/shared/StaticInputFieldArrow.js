// Import React
import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import NextArrow from '../../assets/next_arrow.svg'

function StaticInputFieldArrow( { name, arrowNext, path } ) {
    return (
        <View style={styles.container}
        >
            <Text style={[styleMaster.defaultFont, styles.textField]}>{name}</Text>
            <TouchableOpacity onPress={arrowNext}>
                <NextArrow />
            </TouchableOpacity>
        </View>
    );
}

export default StaticInputFieldArrow;

const styles = StyleSheet.create({
    container: {
        borderWidth: scale_mod(2),
        borderColor: colors.grayscale03,
        width: '100%',
        aspectRatio: 7.795/1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 12,
        paddingLeft: scale_mod(15),
        paddingRight: scale_mod(15),
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
  