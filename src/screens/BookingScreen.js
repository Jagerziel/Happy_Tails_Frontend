import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { colors } from "../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling";

// Import Assets
import ReturnArrowSVG from "../assets/return_arrow_blue.svg"


function BookingScreen(props) {

  function handleReturnToPrev () {
    console.log('Return to Home Button Pressed')
  }


  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
      <View style={[styleMaster.subParent]}>
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
        <Text>This is the Booking Screen</Text>

      </View>
      <Navigation />
    </SafeAreaView>
  );
}

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
  },
  headerContainer: {
    // borderWidth: 2,
    // flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: scale_mod(65),
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

});
