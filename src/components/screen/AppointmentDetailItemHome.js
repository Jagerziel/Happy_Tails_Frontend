import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Import constants and SVGs
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import Calendar from '../../assets/calendar.svg'
import Clock from '../../assets/clock.svg'
import GreenDot from '../../assets/green_dot.svg'

function AppointmentDetailItemHome( {data} ) {
    let id = data.item["_id"]
    const updateDateFormat = `${data.item.date.slice(5,7)}/${data.item.date.slice(8,10)}/${data.item.date.slice(0,4)}`

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.dateTimeContainer}>
                    <View style={styles.dateTimeSubContainer}>
                        <View style={styles.icon}>
                            <Calendar height={scale_mod(27)} width={scale_mod(29)}/>
                        </View>
                        <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{updateDateFormat}</Text>
                    </View>
                    <View style={styles.dateTimeSubContainer}>
                        <View style={styles.icon}>
                            <Clock height={scale_mod(24)} width={scale_mod(24)}/>
                        </View>
                        <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{data.item.time}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>

            </View>

        </View>
    );
}

export default AppointmentDetailItemHome;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: '100%',
        height: scale_mod(207),
        paddingTop: scale_mod(16),
        paddingBottom: scale_mod(16),
        paddingLeft: scale_mod(16),
        paddingRight: scale_mod(16),
        backgroundColor: colors.white,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'space-between',
    },
    subContainer: {
        // borderWidth: 2,
        
    },
    dateTimeContainer: {
        // borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: scale_mod(8),
        borderBottomWidth: 1,
        borderBottomColor: colors.greyscale08,
    },
    dateTimeSubContainer: {
        // borderWidth: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    dateTimeText: {
        // borderWidth: 2,
        fontFamily: "RobotoRegular"
        // alignSelf: 'center'
        // All code previously here is now contained in StyleMaster
        // Retained object item in case further customization is needed
    },
    buttonContainer: {
        borderWidth: 2,
        height: scale_mod(40),
    }
})