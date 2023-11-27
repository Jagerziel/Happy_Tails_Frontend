// Import React
import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import NextArrow from '../../assets/next_arrow.svg'

// Selectable SVGs
import PillIcon from '../../assets/PillIcon.svg'
import LabratoryIcon from '../../assets/LabratoryIcon.svg'
import VaccinationIcon from '../../assets/VaccinationIcon.svg'
import AllergiesIcon from '../../assets/AllergiesIcon.svg'
import InvoicesIcon from '../../assets/InvoicesIcon.svg'
import ClinicIcon from '../../assets/ClinicIcon.svg'



function StaticInputFieldArrow( { name, arrowNext, svg } ) {

    function svgVerify ( key ) {
        if (key === 'PillIcon') return <PillIcon />
        if (key === 'LabratoryIcon') return <LabratoryIcon />
        if (key === 'VaccinationIcon') return <VaccinationIcon />
        if (key === 'AllergiesIcon') return <AllergiesIcon />
        if (key === 'InvoicesIcon') return <InvoicesIcon />
        if (key === 'ClinicIcon') return <ClinicIcon />
        return false
    }


    return (
        <View style={styles.container}
        >
            <View style={styles.subContainer}> 
                <View style={[styles.svgContainer, {
                    width: svg ? scale_mod(40) : 0,
                }]}>
                    {
                        svg ? 
                        svgVerify(svg) 
                        : <View></View>
                    }
                </View>
                <Text style={[styleMaster.defaultFont, styles.textField]}>{name}</Text>
            </View>
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
        borderColor: colors.grayscale06,
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
    subContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    svgContainer: {
        borderWidth: 2,

    },
    textField: {
        textAlign: 'left',
        fontSize: scale_V(18),
        includeFontPadding: false, // Removes default padding for Text 
        fontFamily: 'RobotoLight',
    }  
});
  