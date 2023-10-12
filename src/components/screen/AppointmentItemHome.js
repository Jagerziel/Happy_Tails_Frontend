import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Import constants and SVGs
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import Calendar from '../../assets/calendar.svg'
import Clock from '../../assets/clock.svg'
import GreenDot from '../../assets/green_dot.svg'

function AppointmentItemHome( { data } ) {
    return (
        <View style={styles.container}>
            <View style={styles.dateTimeContainer}>
                <View style={styles.dateTimeSubContainer}>
                    <Calendar height={27} width={29}/>
                    <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{data.item.date}</Text>
                </View>
                <View style={styles.dateTimeSubContainer}>
                    <Clock height={24} width={24}/>
                    <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{data.item.time}</Text>
                </View>
            </View>
            <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{data.item.type}</Text>
            <View style={styles.bottomContainer}>
                <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{`Who: ${data.item.pet_id}`}</Text>
                <View style={styles.bottomSubContainer}>
                    <View style={{paddingTop: 2}}>
                        <GreenDot height={8} width={8}/>
                    </View>
                    <Text style={[styleMaster.defaultFont, styles.dateTimeText, {fontSize: 14, paddingLeft: 8}]}>{data.item.status}</Text>
                </View>
            </View>
        </View>
    );
}

export default AppointmentItemHome;

const styles = StyleSheet.create({
    container: {
        // borderColor: "green",
        // borderWidth: 2,
        width: 280,
        height: 124,
        borderRadius: 7,
        backgroundColor: colors.white,
        paddingTop: 15,
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 15,
        justifyContent: 'space-between'
    },
    dateTimeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateTimeSubContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    dateTimeText: {
        // All code previously here is now contained in StyleMaster
        // Retained object item in case further customization is needed
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomSubContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})