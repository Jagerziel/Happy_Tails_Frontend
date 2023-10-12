import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { colors } from '../../constants/colorPalette.js';

function AppointmentItemHome( { data } ) {

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text>{data.item.type}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default AppointmentItemHome;

const styles = StyleSheet.create({
    container: {
        borderColor: "green",
        borderWidth: 2,
        width: 280,
        height: 124,
        borderRadius: 7,
        backgroundColor: colors.white,
    }
})