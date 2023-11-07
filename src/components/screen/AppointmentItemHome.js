import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Import constants and SVGs
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import Calendar from '../../assets/calendar.svg'
import Clock from '../../assets/clock.svg'
import GreenDot from '../../assets/green_dot.svg'

function AppointmentItemHome( { data, petIDs } ) {
    // console.log(petIDs)
    return (
        <View style={styles.container}>
            <View style={styles.lineAccent}></View>
            <View style={styles.subContainer}>
                <View style={styles.dateTimeContainer}>
                    <View style={styles.dateTimeSubContainer}>
                        <View style={styles.icon}>
                            <Calendar height={scale_mod(27)} width={scale_mod(29)}/>
                        </View>
                        <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{data.item.date}</Text>
                    </View>
                    <View style={styles.dateTimeSubContainer}>
                        <View style={styles.icon}>
                            <Clock height={scale_mod(24)} width={scale_mod(24)}/>
                        </View>
                        <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{data.item.time}</Text>
                    </View>
                </View>
                <View style={styles.visitTypeContainer}>
                    <Text style={[styleMaster.defaultFont, styles.visitTypeHeader]}>{"Type of Visit: "}</Text>
                    <Text 
                        style={[styleMaster.defaultFont, styles.visitTypeText]}
                        numberOfLines={1}
                    >{data.item.type}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomSubContainerLeft}>
                        
                        <Text style={[styleMaster.defaultFont, styles.dateTimeText]}>{`Who: ${petIDs[data.item.pet_id][0]}`}</Text>
                    </View>
                    <View style={styles.bottomSubContainerRight}>
                        <View style={styles.icon}>
                            <GreenDot height={scale_mod(8)} width={scale_mod(8)}/>
                        </View>
                        <Text style={[styleMaster.defaultFont, styles.dateTimeText, {fontSize: scale_V(14), paddingLeft: scale_mod(8)}]}>{data.item.status}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default AppointmentItemHome;

const styles = StyleSheet.create({
    container: {
        // borderColor: "green",
        // borderWidth: 1,
        width: scale_mod(280),
        aspectRatio: 2/1,
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineAccent: {
        borderWidth: 1.5,
        borderColor: colors.primary,
        height: scale_mod(116),
        borderTopRightRadius: scale_mod(6),
        borderBottomRightRadius: scale_mod(6),
    },
    subContainer: {
        height: '100%',
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: scale_mod(15),
        paddingLeft: scale_mod(18),
        paddingRight: scale_mod(18),
        paddingBottom: scale_mod(15),
        justifyContent: 'space-between',
        borderRadius: 7,
    },
    dateTimeContainer: {
        // borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: scale_mod(8),
        borderBottomWidth: 2,
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
        // alignSelf: 'center'
        // All code previously here is now contained in StyleMaster
        // Retained object item in case further customization is needed
    },
    visitTypeContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // overflow: 'hidden',
        alignItems: 'center',
    },
    visitTypeHeader: {
        // borderWidth: 1,
        width: scale_mod(99),
        fontFamily: 'RalewayBold',
        fontSize: scale_V(14),
        color: colors.grayscale02,
    },
    visitTypeText: {
        // borderWidth: 1,
        flex: 1, // Ensures num of Lines doesn't overflow past View window
        fontFamily: 'RobotoLight',
        fontSize: scale_V(15),
    },
    icon: {
        // borderWidth: 2,
        // top: scale_mod(2),
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomSubContainerLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomSubContainerRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
})