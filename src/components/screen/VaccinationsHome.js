// Import React
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import HourGlass from '../../assets/hourglass.bottomhalf.fill.svg'

// Import Data
import { vaccinationData } from '../../data/testingData/testingData.js';

function VaccinationsHome(props) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.title}>Vaccinations</Text>
                <TouchableOpacity onPress={() => console.log('view all pressed (VaccinationsHome.js)')}>
                    <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentLeft}>
                    <Text style={styles.fontStyle}>
                        {vaccinationData[0].vaccine}
                    </Text>
                </View>
                <View style={styles.contentCenter}>
                    <HourGlass />
                </View>
                <View style={styles.contentRight}>
                    <Text style={styles.fontStyle}>Due Date</Text>
                    <Text style={[styles.fontStyle, {color: 'red'}]}>{vaccinationData[0].expiration_date}</Text>
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
        marginTop: 20,
    }, 
    headingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 21,
        color: colors.darkBlue,
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
        fontSize: 16,
        color: colors.darkBlue,
    }

})