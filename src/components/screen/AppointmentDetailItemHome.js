// Import React
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Import constants and SVGs
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import Calendar from '../../assets/calendar.svg'
import Clock from '../../assets/clock.svg'
import GreenDot from '../../assets/green_dot.svg'

// Import Components
import LoginScreenButtonCustom from '../../components/shared/LoginScreenButtonCustom.js'

function AppointmentDetailItemHome( { 
    data, 
    petIDs,
    handleCancelAppt,
    handleRescheduleAppt 
} ) {
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
                <View style={styles.visitTypeContainer}>
                    <Text style={[styleMaster.defaultFont, styles.visitTypeHeader]}>{"Type of Visit: "}</Text>
                    <Text 
                        style={[styleMaster.defaultFont, styles.visitTypeText]}
                        numberOfLines={1}
                    >{data.item.type}</Text>
                </View>
                <View style={styles.visitTypeContainer}>
                    <Text style={[styleMaster.defaultFont, styles.visitTypeHeader]}>{"Address: \n"}</Text>
                    <Text 
                        style={[styleMaster.defaultFont, styles.visitTypeText]}
                        numberOfLines={2}
                    >{`5211 Cypress Creek Pkwy \nSuite Z, Houston, TX 77069`}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomSubContainerLeft}>
                        {
                            petIDs[data.item.pet_id][1] === "Dog" ?
                            <Image source={require(`../../assets/temp_pet_pic_dog.jpg`)} style={styles.petImg}/> :
                            <Image source={require(`../../assets/temp_pet_pic_cat.jpg`)} style={styles.petImg}/> 
                        }
                        <Text 
                            style={[styleMaster.defaultFont]}
                            numberOfLines={1}    
                        >{`${petIDs[data.item.pet_id][0]}`}</Text>
                    </View>
                    <View style={styles.bottomSubContainerRight}>
                        <View style={styles.icon}>
                            <GreenDot height={scale_mod(8)} width={scale_mod(8)}/>
                        </View>
                        <Text style={[styleMaster.defaultFont, {fontSize: scale_V(14), paddingLeft: scale_mod(8)}]}>{data.item.status}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <LoginScreenButtonCustom 
                    text={"Cancel"}
                    handlePress={handleCancelAppt}
                    disabled={true}
                    width={148}
                    height={40}
                    borderRadius={8}
                    fontSize={16}
                />
                <LoginScreenButtonCustom 
                    text={"Reschedule"}
                    handlePress={handleRescheduleAppt}
                    disabled={false}
                    width={148}
                    height={40}
                    borderRadius={8}
                    fontSize={16}
                />
            </View>

        </View>
    );
}

export default AppointmentDetailItemHome;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        width: '100%',
        height: scale_mod(259),
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
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
        
    },
    dateTimeContainer: {
        // borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: scale_mod(12),
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
        fontFamily: "RobotoRegular"
    },
    visitTypeContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
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
    petImg: {
        height: scale_mod(32),
        width: scale_mod(32),
        resizeMode: 'cover',
        borderRadius: scale_mod(8),
        marginRight: scale_mod(8),
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
    buttonContainer: {
        // borderWidth: 2,
        marginTop: scale_mod(21),
        height: scale_mod(40),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})