// Import React
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Components
import AppointmentItemHome from './AppointmentItemHome.js';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { sortByDateAndTime } from '../../data/functions/sortData.js';

function AppointmentsHome( { petIDs, appointmentData }) {
    // Navigation
    const navigation = useNavigation();
    const route = useRoute();

    const itemSeparator = () => <View style={{ marginHorizontal: scale_mod(5) }} />; // Gap for Flatlist

    // Alleviates error when no appointments are available or an appointment is deleted.
    const appointmentDataShallowCopy = () => {
        try {
            return [...appointmentData] 
        } catch (error) {
            return []
        }
    }
    const sortedAppointmentData = sortByDateAndTime(appointmentDataShallowCopy(), "after")

    function handleViewAll () {
        navigation.navigate('HomeAppointmentDetailsScreen')   
    }

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={[styleMaster.defaultFont, styles.title]}>Appointments</Text>
                <TouchableOpacity onPress={handleViewAll}>
                    <Text style={[styleMaster.defaultFont, styles.viewAll]}>View All</Text>
                </TouchableOpacity>
            </View>
            {
                sortedAppointmentData.length > 0 ?
                <View style={styles.contentContainerActive}>
                    <FlatList 
                        keyExtractor={(appointment) => appointment["_id"]} // Key
                        ItemSeparatorComponent={itemSeparator} // Gap between items
                        data={sortedAppointmentData} // Data
                        renderItem={(data) => 
                            <AppointmentItemHome 
                                data={data} 
                                petIDs={petIDs}
                            />} // Component to be rendered
                        showsHorizontalScrollIndicator = { false } // Removes Scrollbar
                        scrollEnabled={ true } // Enables Scrolling
                        horizontal // Key to making flatlist scrollable
                    />
                </View> :
                <View style={styles.contentContainerInactive}>
                <View style={styles.viewPartition}>
                    <Text style={[styles.defaultFont, styles.incativeText]}>Looks like you don’t have any upcoming appointments.</Text>
                </View>
                <View style={[styles.viewPartition, {width: scale_mod(160)}]}>
                    <Image
                        style={styles.inactiveImg}
                        source={require('../../assets/sleepy_cat_01.png')}
                    />
                </View>
            </View>

            }
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
        justifyContent: 'space-between',
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
    contentContainerActive: {
        // borderColor: "red",
        // borderWidth: 2,
        overflow: 'hidden',
    }, 
    contentContainerInactive: {
        // borderWidth: 2,
        width: `100%`,
        aspectRatio: 2.66/1,
        paddingTop: scale_mod(34),
        paddingBottom: scale_mod(37),
        paddingRight: scale_mod(24),
        paddingLeft: scale_mod(24),
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 7,
        backgroundColor: colors.white,
    },
    viewPartition: {
        // borderWidth: 2,
        flexShrink: 1,
        justifyContent: 'center'
    },
    incativeText: {
        fontSize: scale_V(18),
        fontFamily: "RobotoRegular",
        lineHeight: scale_V(18),
    },  
    inactiveImg: {
        width: scale_mod(104),
        aspectRatio: 1.44/1,
        alignSelf: 'flex-end'
    },
})
