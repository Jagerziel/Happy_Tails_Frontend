import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colorPalette.js';

function PromotionsHome(props) {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.title}>Testing</Text>
                <TouchableOpacity onPress={() => console.log('view all pressed (PromotionsHome.js)')}>
                    <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.content}>20% off all spay and neuter services during the months of July </Text>
                <TouchableOpacity style={styles.button} onPress={() => console.log('book now pressed (PromotionsHome.js)')}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PromotionsHome;

const styles = StyleSheet.create({
    container: {
        // borderColor: "red",
        // borderWidth: 2,
        width: '100%',
        marginTop: 20,
    }, 
    headingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 21,
        color: colors.darkBlue,
        fontWeight: "bold",
        paddingBottom: 14,
    },
    viewAll: {
        color: colors.secondary,
    },
    contentContainer: {
        backgroundColor: "white",
        height: 150,
        width: '100%',
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 24,
        justifyContent: 'space-between'

    },
    content: {
        fontSize: 18,
    },
    button: {
        width: 130,
        height: 40,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
    buttonText: {
        fontSize: 16,
        color: colors.white
    }
})