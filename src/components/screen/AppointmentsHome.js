// Import React
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Components
import AppointmentItemHome from './AppointmentItemHome.js';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { appointmentData } from '../../data/testingData/testingData.js';

function AppointmentsHome(props) {
    const itemSeparator = () => <View style={{ marginHorizontal: scale_mod(5) }} />; // Gap for Flatlist

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={[styleMaster.defaultFont, styles.title]}>Appointments</Text>
                <TouchableOpacity onPress={() => console.log('view all pressed (AppointmentsHome.js)')}>
                    <Text style={[styleMaster.defaultFont, styles.viewAll]}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <FlatList 
                    keyExtractor={(appointment) => appointment.uid} // Key
                    ItemSeparatorComponent={itemSeparator} // Gap between items
                    data={appointmentData} // Data
                    renderItem={(data) => <AppointmentItemHome data={data}/>} // Component to be rendered
                    showsHorizontalScrollIndicator = { false } // Removes Scrollbar
                    scrollEnabled={ true } // Enables Scrolling
                    horizontal // Key to making flatlist scrollable
                />
            </View>
        </View>
    );
}

export default AppointmentsHome;

const styles = StyleSheet.create({
    container: {
        // borderColor: "red",
        // borderWidth: 2,
        width: '100%',
        aspectRatio: 2/1,
        marginTop: scale_mod(20),
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
        overflow: 'hidden',
    }, 
})