// Import React
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Import Constants
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';


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
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        fontSize: 32,
        fontWeight: "bold",
    },
    profileImg: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
        borderRadius: 7,
    }
})