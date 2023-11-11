// Import React
import React from 'react';
import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

// Import Assets
import HourGlass from '../../assets/hourglass.bottomhalf.fill.svg'
import Dog from '../../assets/temp_pet_pic_dog.jpg'
import Cat from '../../assets/temp_pet_pic_cat.jpg'

function VaccinationsItemHome( { data, petIDs} ) {
    console.log(data.item)

    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <HourGlass 
                    height={scale_mod(31)} 
                    width={scale_mod(25)}
                />
                <Text 
                    style={[styleMaster.defaultFont, styles.dateText]} 
                    includeFontPadding={false}
                    numberOfLines={1}
                >
                    {data.item.expiration_date}
                </Text>
            </View>
            <View style={styles.vaccineContainer}>
                <Text 
                    style={[styleMaster.defaultFont, styles.vaccineText]} 
                    includeFontPadding={false}
                    numberOfLines={1}
                >
                    {data.item.vaccine}
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image 
                    source={petIDs[data.item["pet_id"]][1] === "Dog" ? Dog : Cat}
                    style={styles.petImg}
                />
            </View>
        </View>
    );
}

export default VaccinationsItemHome;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    dateContainer: {
        // borderWidth: 2,
        flex: 6,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    dateText: {
        // borderWidth: 2,
        color: colors.error,
        fontFamily: "RobotoRegular",
        lineHeight: scale_V(16),
        fontSize: scale_V(15),
    },
    vaccineContainer: {
        flex: 8,
        display: 'flex',
        justifyContent: 'center',
    },
    vaccineText: {
        fontFamily: "RobotoLight",
        lineHeight: scale_V(16),
        fontSize: scale_V(15),
    },
    imgContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: scale_mod(9),
    },
    petImg: {
        height: scale_mod(32),
        width: scale_mod(32),
        borderRadius: 8,
        resizeMode: 'cover',
    },
})