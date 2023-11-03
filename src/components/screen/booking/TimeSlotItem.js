// Import React
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../../constants/colorPalette.js';
import { styleMaster } from '../../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../../data/functions/normalizeScaling.js';

function TimeSlotItem( { data, selected, handleSelectTime } ) {
    return (
        <TouchableOpacity style={[styles.container,
        {
            backgroundColor: selected ? colors.primary : colors.white,
        }
        ]} onPress={() => handleSelectTime(data.item)}>
            <Text style={[styleMaster.defaultFont, styles.text, 
            {
                color: selected ? colors.white : colors.black,
                fontFamily: selected ? "RobotoRegular" : "RobotoLight"
            }
            ]}>
                {data.item}
            </Text>
        </TouchableOpacity>
    );
}

export default TimeSlotItem;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.primary,
        // margin: scale_mod(3.5),
        // paddingTop: scale_mod(4),
        // paddingBottom: scale_mod(4),
        // paddingLeft: scale_mod(4),
        // paddingRight: scale_mod(4),
        borderRadius: 12,
        backgroundColor: colors.white,
        width: scale_mod(72),
        height: scale_mod(38),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    text: {
        fontSize: scale_V(14),
        fontFamily: "RobotoLight",
        // includeFontPadding: false,
    }

})