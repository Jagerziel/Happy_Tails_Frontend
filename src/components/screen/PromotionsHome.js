import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colorPalette.js';

function PromotionsHome(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Testing</Text>
        </View>
    );
}

export default PromotionsHome;

const styles = StyleSheet.create({
    container: {
        borderColor: "red",
        borderWidth: 2,
        height: 100,
        width: '100%',
    }, 
    title: {
        fontSize: 21,
        color: colors.darkBlue
    }
})