// Import React
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../../constants/colorPalette.js';
import { styleMaster } from '../../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../../data/functions/normalizeScaling.js';

function SymptomsItem( { data,  symptoms, setSymptoms } ) {

    function handlePress () {
        const updatedSymptoms = [...symptoms]
        updatedSymptoms[data.item.idx].status = !updatedSymptoms[data.item.idx].status
        setSymptoms(updatedSymptoms)
    }

    return (
        <TouchableOpacity style={[styles.container,{
            backgroundColor: symptoms[data.item.idx].status ? colors.primary : colors.white,
        }]} onPress={handlePress}>
            <Text style={[styleMaster.defaultFont, styles.text, {
                color: symptoms[data.item.idx].status ? colors.white : styleMaster.defaultFont.color,
            }]}>
                {data.item.name}
            </Text>
        </TouchableOpacity>
    );
}

export default SymptomsItem;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        borderColor: colors.primary,
        margin: scale_mod(7),
        paddingTop: scale_mod(10),
        paddingBottom: scale_mod(10),
        paddingLeft: scale_mod(16),
        paddingRight: scale_mod(16),
        borderRadius: 12,
        backgroundColor: colors.white,
    }, 
    text: {
        fontSize: scale_V(15)
    }

})