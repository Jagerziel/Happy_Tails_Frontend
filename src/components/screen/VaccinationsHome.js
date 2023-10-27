// Import React
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import HourGlass from '../../assets/hourglass.bottomhalf.fill.svg'
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

// // Import Data
// import { vaccinationData } from '../../data/testingData/testingData.js';

function VaccinationsHome( {petIDs, vaccinationsData }) {
    console.log(vaccinationsData)
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={[styleMaster.defaultFont, styles.title]}>Vaccinations</Text>
                <TouchableOpacity onPress={() => console.log('view all pressed (VaccinationsHome.js)')}>
                    <Text style={[styleMaster.defaultFont, styles.viewAll]}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentLeft}>
                    <Text style={[styleMaster.defaultFont, styles.fontStyle]}>
                        {vaccinationsData[0].vaccine}
                    </Text>
                </View>
                <View style={styles.contentCenter}>
                    <HourGlass />
                </View>
                <View style={styles.contentRight}>
                    <Text style={[styleMaster.defaultFont, styles.fontStyle]}>Due Date</Text>
                    <Text style={[styleMaster.defaultFont, styles.fontStyle, {color: '#FF2E2E'}]}>{vaccinationsData[0].expiration_date}</Text>
                </View>
            </View>
        </View>
    );
}

export default VaccinationsHome;

const styles = StyleSheet.create({
    container: {
        // borderColor: "red",
        // borderWidth: 2,
        width: '100%',
        aspectRatio: 1.82/1,
        // marginTop: 20,
    }, 
    headingContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: scale_V(21),
        fontWeight: "bold",
        paddingBottom: scale_mod(14),
    },
    viewAll: {
        color: colors.secondary,
        fontSize: scale_V(17),
    },
    contentContainer: {
        // borderColor: "red",
        // borderWidth: 2,
        backgroundColor: colors.white,
        width: '100%',
        aspectRatio: 3.87/1,
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // flexWrap: 'wrap',
    }, 
    contentLeft: {
        // borderColor: "red",
        // borderWidth: 2,
        flexGrow: 8,
        marginTop: scale_mod(24),
        marginBottom: scale_mod(24),
        marginLeft: scale_mod(16),
    },
    contentCenter: {
        // borderColor: "red",
        // borderWidth: 2,
        flexGrow: 0.1,
        marginTop: scale_mod(6),
        marginBottom: scale_mod(24),
    },
    contentRight: {
        // borderColor: "red",
        // borderWidth: 2,
        flexGrow: 1,
        marginTop: scale_mod(24),
        marginBottom: scale_mod(24),
        marginRight: scale_mod(16),
    },
    fontStyle: {
        // Code previously here is now contained in StyleMaster
        // Retained object item in the event further custom styling is needed
    }

})