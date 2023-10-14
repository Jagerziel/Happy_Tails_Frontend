import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Import constants and SVGs
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import Calendar from '../../assets/calendar.svg'
import Clock from '../../assets/clock.svg'
import GreenDot from '../../assets/green_dot.svg'

function AppointmentItemHome( { data } ) {
    return (
        <View style={styles.container}>
            <View style={styles.dateTimeContainer}>
                <View style={styles.dateTimeSubContainer}>
                    <Calendar height={scale_mod(27)} width={scale_mod(29)}/>
                    <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{data.item.date}</Text>
                </View>
                <View style={styles.dateTimeSubContainer}>
                    <Clock height={scale_mod(24)} width={scale_mod(24)}/>
                    <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{data.item.time}</Text>
                </View>
            </View>
            <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{data.item.type}</Text>
            <View style={styles.bottomContainer}>
                <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{`Who: ${data.item.pet_id}`}</Text>
                <View style={styles.bottomSubContainer}>
                    <View style={{paddingTop: scale_mod(2)}}>
                        <GreenDot height={scale_mod(8)} width={scale_mod(8)}/>
                    </View>
                    <Text style={[styleMaster.defaultFont, styles.dateTimeText, {fontSize: scale_V(14), paddingLeft: scale_mod(8)}]}>{data.item.status}</Text>
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
        width: scale_mod(280),
        height: scale_mod(124),
        borderRadius: 7,
        backgroundColor: colors.white,
        paddingTop: scale_mod(15),
        paddingLeft: scale_mod(18),
        paddingRight: scale_mod(18),
        paddingBottom: scale_mod(15),
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