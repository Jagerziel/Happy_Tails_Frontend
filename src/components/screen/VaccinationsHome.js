// Import React
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

// Import Assets
import HourGlass from '../../assets/hourglass.bottomhalf.fill.svg'
import SleepyCat01 from '../../assets/sleepy_cat_01.png'
import SleepyCat02 from '../../assets/sleepy_cat_02.png'

function VaccinationsHome( {petIDs, vaccinationsData }) {
    // console.log(vaccinationsData)
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={[styleMaster.defaultFont, styles.title]}>Vaccinations</Text>
                <TouchableOpacity onPress={() => console.log('view all pressed (VaccinationsHome.js)')}>
                    <Text style={[styleMaster.defaultFont, styles.viewAll]}>View All</Text>
                </TouchableOpacity>
            </View>
            {vaccinationsData.length > 0 ? 
            <View style={styles.contentContainerActive}>
                
            </View> :
            <View style={styles.contentContainerInactive}>
                <View style={styles.viewPartition}>
                    <Text style={[styles.defaultFont, styles.incativeText]}>Look like you don't have any vaccinations that are due soon.</Text>
                </View>
                <View style={[styles.viewPartition, {width: scale_mod(160)}]}>
                    <Image
                        style={styles.inactiveImg}
                        source={require('../../assets/sleepy_cat_02.png')}
                    />
                </View>
            </View>}
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
        marginTop: scale_mod(20),
        marginBottom: scale_mod(80),
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
        borderColor: "red",
        borderWidth: 2,
        backgroundColor: colors.white,
        width: '100%',
        height: scale_mod(205),
        // aspectRatio: 1.67/1,
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // flexWrap: 'wrap',

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