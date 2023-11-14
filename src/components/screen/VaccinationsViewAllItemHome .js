// Import React
import React from 'react';
import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

function VaccinationsViewAllItemHome( { data, selectedPetID, handlePetSelection } ) {
    
    return (
        <TouchableOpacity 
            onPress={() => handlePetSelection(data.item["_id"])}
            style={[styles.container, {
                borderColor: selectedPetID === data.item['_id'] ? colors.primaryFade : colors.grayscale05

            }]}
            disabled={ selectedPetID === data.item['_id'] } // Conditionally Disable Button
        >
            <Text
                style={[styleMaster.defaultFont, styles.text]}
                numberOfLines={1}
                includeFontPadding={false}
            >
                {data.item.name}
            </Text>
        </TouchableOpacity>
    );
}

export default VaccinationsViewAllItemHome;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: scale_mod(112),
        height: scale_mod(38),
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: scale_mod(12),
        paddingRight: scale_mod(12),
        borderRadius: 8,
        backgroundColor: colors.white,
    },
    text: {
        fontFamily: 'RalewayBold',
        fontSize: scale_V(18), 
        lineHeight: scale_V(22)
    }
})