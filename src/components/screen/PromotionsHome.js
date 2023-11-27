// Import React
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

function PromotionsHome(props) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={[styleMaster.defaultFont, styles.title]}>Monthly Specials</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={[styleMaster.defaultFont, styles.content]}>20% off all spay and neuter services during the months of July </Text>
                <TouchableOpacity style={[styleMaster.defaultFont, styles.button]} onPress={() => console.log('book now pressed (PromotionsHome.js)')}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PromotionsHome;

const styles = StyleSheet.create({
    container: {
        // borderColor: "red",
        // borderWidth: 2,
        width: '100%',
        // aspectRatio: 1.81/1,
    }, 
    headingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: scale_V(21),
        fontWeight: "bold",
        paddingBottom: scale_mod(16),
        color: colors.darkBlue02,
    },
    contentContainer: {
        // borderWidth: 2,
        backgroundColor: "white",
        width: '100%',
        // aspectRatio: 2.29/1,
        height: scale_mod(150),
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: scale_mod(24),
        paddingLeft: scale_mod(16),
        paddingRight: scale_mod(16),
        paddingBottom: scale_mod(24),
        justifyContent: 'space-between',
        shadowOffset: {width: scale_mod(2), height: scale_mod(5)},
        // shadowOpacity: 0.15,
        shadowRadius: scale_mod(10),
        shadowColor: '#9F9F9F',
        elevation: 3,  
        zIndex: 1,

    },
    content: {
        fontSize: scale_V(18),
    },
    button: {
        width: '38%',
        aspectRatio: 3.25/1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
    buttonText: {
        fontSize: scale_V(16),
        color: colors.white
    }
})