// Import React
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Components
import AppointmentItemHome from './AppointmentItemHome.js';

// Import Palette
import { colors } from '../../constants/colorPalette.js';

import { appointmentData } from '../../data/testingData/testingData.js';

function AppointmentsHome(props) {
    const itemSeparator = () => <View style={{ marginHorizontal: 5 }} />; // Gap for Flatlist

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.title}>Appointments</Text>
                <TouchableOpacity onPress={() => console.log('view all pressed (AppointmentsHome.js)')}>
                    <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <FlatList 
                    style={styles.contentFlatList} // Style
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
        overflow: 'hidden',
    }, 
    contentFlatList: {

    }
})