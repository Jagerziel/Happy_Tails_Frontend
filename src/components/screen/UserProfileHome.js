// Import React
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

function UserProfileHome( { userData }) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={[styleMaster.defaultFont, styles.heading]}>{`Hi, ${userData.first_name}`}</Text>
                <Image source={require('../../assets/temp_profile_pic.jpg')} style={styles.profileImg}/>
            </View>
        </View>
    );
}

export default UserProfileHome;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        width: '100%',
        // aspectRatio: 2.68/1,
        height: scale_mod(120),
        justifyContent: 'flex-end',
        marginBottom: scale_mod(20)
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        fontSize: scale_V(32),
        fontWeight: 700,
        color: colors.darkBlue02,
    },
    profileImg: {
        height: scale_mod(72),
        width: scale_mod(72),
        resizeMode: 'cover',
        borderRadius: scale_mod(7),
    }
})