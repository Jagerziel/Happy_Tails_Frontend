// Import React
import React from 'react';
import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

// Import Components
import VaccinationsItemHome from './VaccinationsItemHome.js';

function VaccinationsHome( {petIDs, vaccinationsData }) {
    // console.log(vaccinationsData)
    const itemSeparator = () => <View style={{ marginVertical: scale_mod(8) }} />; // Gap for Flatlist
    // console.log(petIDs)

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={[styleMaster.defaultFont, styles.title]}>Vaccinations</Text>
                <TouchableOpacity onPress={() => console.log('view all pressed (VaccinationsHome.js)')}>
                    <Text style={[styleMaster.defaultFont, styles.viewAll]}>View All</Text>
                </TouchableOpacity>
            </View>
            {vaccinationsData.length !== undefined && 
            vaccinationsData.length > 0 
            ? 
            <View style={styles.contentContainerActive}>
                <View style={styles.lineAccent}></View>
                <View style={styles.subContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={[styleMaster.defaultFont, styles.titleText]}>Due Vaccination</Text>
                    </View>
                    <FlatList 
                        keyExtractor={(vaccinationsData) => vaccinationsData["_id"]} // Key
                        ItemSeparatorComponent={itemSeparator} // Gap between items
                        data={vaccinationsData.slice(0,3)} // Data
                        renderItem={(data) => <VaccinationsItemHome data={data} petIDs={petIDs}/>} // Component to be rendered
                        showsVerticalScrollIndicator = { false } // Removes Scrollbar
                        scrollEnabled={ false } // Enables Scrolling
                    />
                </View>
            </View> 
            :
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
            </View>
            }
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
        // borderColor: "red",
        // borderWidth: 2,
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
    lineAccent: {
        borderWidth: 1.5,
        borderColor: colors.red,
        height: scale_mod(181),
        borderTopRightRadius: scale_mod(6),
        borderBottomRightRadius: scale_mod(6),
    },
    subContainer: {
        height: '100%',
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: scale_mod(14),
        paddingLeft: scale_mod(15),
        paddingRight: scale_mod(15),
        // paddingBottom: scale_mod(15),
        // justifyContent: 'space-between',
        borderRadius: 7,
    },
    titleContainer: {
        // borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: scale_mod(8),
        borderBottomWidth: 1,
        borderBottomColor: colors.greyscale08,
        marginBottom: scale_mod(14),
    },
    titleText: {
        fontSize: scale_V(14),
        fontFamily: "RobotoRegular",
        color: colors.grayscale02,
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