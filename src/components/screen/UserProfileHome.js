// Import React
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';

function UserProfileHome(props) {
    return (
        <View style={styles.container}>
            <Text style={[styleMaster.defaultFont, styles.heading]}>Hi, [Username]</Text>
            <Image source={require('../../assets/temp_profile_pic.jpg')} style={styles.profileImg}/>
        </View>
    );
}

export default UserProfileHome;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        width: '100%',
        aspectRatio: 2.1/1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        fontSize: scale_V(32),
        fontWeight: 700,
    },
    profileImg: {
        height: scale_mod(72),
        width: scale_mod(72),
        resizeMode: 'cover',
        borderRadius: scale_mod(7),
    }
})