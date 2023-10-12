// Import React
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Components
import AppointmentItemHome from './AppointmentItemHome.js';

// Import Palette
import { colors } from '../../constants/colorPalette.js';

import { appointmentData } from '../../data/testingData/testingData.js';

function AppointmentsHome(props) {
    const itemSeparator = () => {
        return <View style={{ height: 10, marginHorizontal:10 }} />;
    };

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
                    style={styles.contentFlatList}
                    keyExtractor={(appointment) => appointment.uid}
                    ItemSeparatorComponent={itemSeparator}
                    data={appointmentData}
                    renderItem={(data) => <AppointmentItemHome data={data}/>}
                    showsHorizontalScrollIndicator = { false }
                    scrollEnabled={ true }
                    horizontal
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