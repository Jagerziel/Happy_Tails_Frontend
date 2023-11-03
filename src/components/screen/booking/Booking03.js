// Import React
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";
import { timeSelectionAM, timeSelectionPM } from "../../../data/data/data.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import LoginScreenButtonWhite from "../../shared/LoginScreenButtonWhite.js"
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";

function Booking03( { bookComponent, setBookComponent, bookingData, setBookingData } ) {
    function handleReturnToPrev () {
        setBookComponent({...bookComponent, "Booking02": true, "Booking03": false}) // navigate
    }

    function handleConfirmAppt () {
      console.log("Appointment Confirmed")
    }
    function handleCancelAppt () {
      console.log("Appointment Cancelled")
    }

    console.log(bookingData)

    return (
      <SafeAreaView style={[styles.container, styleMaster.parent]}>
        <View style={[styleMaster.subParent, styles.subContainer]}>
          <View style={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity  
                style={styles.returnContainer} 
                onPress={() => handleReturnToPrev()}
              >
                <ReturnArrowSVG />
              </TouchableOpacity>
              <Text style={[styleMaster.defaultFont, styles.headerText]}>
                Booking Appointment
              </Text>
            </View>
            <View style={styles.confirmationContainer}>
              <View>
                <Text> TESTING</Text>

              </View>
              <View style={styles.buttonContainer}>
                <LoginScreenButton
                  text={"Confirm Appointment"}
                  handlePress={() => handleConfirmAppt()}
                  disabled={false}
                />
                <View style={styles.buttonSpacer}></View>
                <LoginScreenButtonWhite
                  text={"Cancel"}
                  handlePress={() => handleCancelAppt()}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
}

export default Booking03

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        flex: 1,
        backgroundColor: colors.grayscale06,
      },
      subContainer: {
        // borderWidth: 2,
        display: "flex",
        alignContent: "center",
      },
      contentContainer: {
        // borderWidth: 2,
        display: "flex",
        alignItems: "center",
      },
      headerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: scale_mod(65),
        width: '100%',
      },
      returnContainer: {
        // borderWidth: 2,
        width: scale_mod(20)
      },
      headerText: {
        width: '100%',
        includeFontPadding: false,
        textAlign: "center",
        textAlign: "center",
        paddingRight: scale_mod(20), //Offsets space taken by return arrow
        fontFamily: "RalewayBold",
        fontSize: scale_V(17),
      },
      confirmationContainer: {
        borderWidth: 2,
        display: "flex",
        justifyContent: "space-between",
        width: scale_mod(344),
        aspectRatio: .72/1,
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingTop: scale_mod(24),
        paddingBottom: scale_mod(34),
      },
      buttonContainer: {
        alignSelf: "center",
      },
      buttonSpacer: {
        paddingTop: scale_mod(16),
      },
})