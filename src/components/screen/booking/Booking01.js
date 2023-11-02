// Import React
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import TextInputField from "../../shared/TextInputField.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";

function Booking01( { bookComponent, setBookComponent, bookingData, setBookingData } ) {

    function handleReturnToPrev () {

    }

    function handleNext () {

    }

    return (
        <SafeAreaView style={[styles.container, styleMaster.parent]}>
            <View style={[styleMaster.subParent, styles.subContainer]}>
                <Text>Booking01 Component</Text>
            </View>
        </SafeAreaView>
    )

    
}

export default Booking01

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grayscale06
    },  
    subContainer: {
        // borderWidth: 2,
        display: "flex",
        alignItems: "center",
    }

})