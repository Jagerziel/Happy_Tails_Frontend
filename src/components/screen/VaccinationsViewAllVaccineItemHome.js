// Import React
import React from 'react';
import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

function VaccinationsViewAllVaccineItemHome( { data } ) {
    console.log(data.item)
    // const updateDateFormat = `${data.item.date.slice(5,7)}/${data.item.date.slice(8,10)}/${data.item.last_vaccine_date.slice(0,4)}`

    function updateDateFormat ( date ) {
        return `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(0,4)}`
    }

    // Identify today's date and set at beginning of day
    let today = new Date()
    today.setHours(0, 0, 0, 0)
    // Convert Date Item for Comparison
    const dateForParse = data.item['expiration_date'].replaceAll("/","-")
    const convertDate = new Date(Date.parse(`${dateForParse}T00:00:00`))

    let expired = convertDate.getTime() < today.getTime() ? true : false
    /*
{"__v": 0, "_id": "654fa991b21d1573d90e52e7", "createdAt": "2023-11-11T16:19:29.040Z", "expiration_date": "2025/03/16", "last_vaccine_date": "2020/03/16", "pet_id": "653fc0b489f2742b8e25aec1", "updatedAt": "2023-11-11T16:19:29.040Z", "user_id": "6539503228bb6c8cbc5e42d4", "vaccine": "Super Rabies Vaccine"}
    */
    // console.log(updateDateFormat(data.item.last_vaccine_date))

    return (
        <View
            style={[styles.container]}
        >
            <View style={[styles.textContainer, styles.section01]}>
                <Text
                    style={[styleMaster.defaultFont, styles.text]}
                    numberOfLines={2}
                    includeFontPadding={false}
                >
                    {`${data.item.vaccine}`}
                </Text>
            </View>
            <View style={[styles.textContainer, styles.section02]}>
                <Text
                    style={[styleMaster.defaultFont, styles.text]}
                    numberOfLines={1}
                    includeFontPadding={false}
                >
                    {updateDateFormat(data.item.last_vaccine_date)}
                </Text>
            </View>
            <View style={[styles.textContainer, styles.section02]}>
                <Text
                    style={[styleMaster.defaultFont, styles.text, {
                        color: expired ? colors.error : colors.darkBlue
                    }]}
                    numberOfLines={1}
                    includeFontPadding={false}
                >
                    {updateDateFormat(data.item.expiration_date)}
                </Text>
            </View>
        </View>
    );
}

export default VaccinationsViewAllVaccineItemHome;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    textContainer: {
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'RalewaySemiBold',
        fontSize: scale_V(13), 
        fontVariant: ['lining-nums', 'proportional-nums'],
        color: colors.darkBlue,
        // lineHeight: scale_V(22)
    },
    section01: {
        // borderWidth: 2,
        width: '40%',
    },
    section02: {
        // borderWidth: 2,
        fontVariant: ['lining-nums', 'proportional-nums'],
        width: '30%',
    },
})