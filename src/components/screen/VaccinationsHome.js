// Import React
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import HourGlass from '../../assets/hourglass.bottomhalf.fill.svg'
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

// Import Data
import { vaccinationData } from '../../data/testingData/testingData.js';

function VaccinationsHome(props) {
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
                        {vaccinationData[0].vaccine}
                    </Text>
                </View>
                <View style={styles.contentCenter}>
                    <HourGlass />
                </View>
                <View style={styles.contentRight}>
                    <Text style={[styleMaster.defaultFont, styles.fontStyle]}>Due Date</Text>
                    <Text style={[styleMaster.defaultFont, styles.fontStyle, {color: 'red'}]}>{vaccinationData[0].expiration_date}</Text>
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
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 21,
        fontWeight: "bold",
        paddingBottom: 14,
    },
    viewAll: {
        color: colors.secondary,
        fontSize: 17,
    },
    contentContainer: {
        // borderColor: "red",
        // borderWidth: 2,
        height: 89,
        backgroundColor: colors.white,
        width: '100%',
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row',
        // flexWrap: 'wrap',
    }, 
    contentLeft: {
        // borderColor: "red",
        // borderWidth: 2,
        flexGrow: 8,
        marginTop: 24,
        marginBottom: 24,
        marginLeft: 16,
    },
    contentCenter: {
        // borderColor: "red",
        // borderWidth: 2,
        flexGrow: 0.1,
        marginTop: 24,
        marginBottom: 24,
    },
    contentRight: {
        // borderColor: "red",
        // borderWidth: 2,
        flexGrow: 1,
        marginTop: 24,
        marginBottom: 24,
        marginRight: 16,
    },
    fontStyle: {
        // Code previously here is now contained in StyleMaster
        // Retained object item in the event further custom styling is needed
    }

})