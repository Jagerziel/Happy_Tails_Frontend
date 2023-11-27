// Import React
import React, { useState } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import Components
import Navigation from "../components/shared/Navigation";
import LoginScreenButton from "../components/shared/LoginScreenButton.js";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";

function AboutUsScreen(props) {
  function handlePress(target) {
    Alert.alert(`Under Construction`,`Start a New Chat feature coming soon!`)
    console.log(`${target} button pressed`);
  }


  return (
    <SafeAreaView style={[styleMaster.parent, styles.container]}>
      <ScrollView style={[styleMaster.subParent]}>
        <View style={styles.headerContainer}>
          <Text style={[styleMaster.defaultFont, styles.headerText]}>Contact Info</Text>
        </View>
        <Text style={[styleMaster.defaultFont, styles.title]}>Our Address</Text>
        <View>
          <Text style={[styleMaster.defaultFont, styles.text]}>4140 Parker Rd.</Text>
          <Text style={[styleMaster.defaultFont, styles.text]}>Allentown, New Mexico 31134</Text>
        </View>
        <Text style={[styleMaster.defaultFont, styles.title]}>Hours</Text>
        <View style={[styles.hoursContainer]}>
          <View style={styles.hoursSubContainer}>
            <Text style={[styleMaster.defaultFont, styles.text]}>Mon-Fri:</Text>
          </View>
          <Text style={[styleMaster.defaultFont, styles.text, {fontFamily: 'RobotoLight'}]}>6am - 7pm</Text>
        </View>
        <View style={[styles.hoursContainer]}>
          <View style={styles.hoursSubContainer}>
            <Text style={[styleMaster.defaultFont, styles.text]}>Sat:</Text>
          </View>
          <Text style={[styleMaster.defaultFont, styles.text, {fontFamily: 'RobotoLight'}]}>8am - 5pm</Text>
        </View>
        <View style={[styles.hoursContainer]}>
          <View style={styles.hoursSubContainer}>
            <Text style={[styleMaster.defaultFont, styles.text]}>Sun:</Text>
          </View>
          <Text style={[styleMaster.defaultFont, styles.text, {fontFamily: 'RobotoLight'}]}>9am - 4pm</Text>
        </View>
        <Text style={[styleMaster.defaultFont, styles.title]}>Phone Number</Text>
        <View>
          <Text style={[styleMaster.defaultFont, styles.text]}>(808) 555-0111</Text>
        </View>
        <Text style={[styleMaster.defaultFont, styles.title]}>Email</Text>
        <View>
          <Text style={[styleMaster.defaultFont, styles.text]}>bill.sanders@example.com</Text>
        </View>
        <Text style={[styleMaster.defaultFont, styles.title]}>Do you have a question?</Text>
        <Text style={[styleMaster.defaultFont, styles.title, { paddingTop: 0, paddingBottom: scale_mod(32)}]}>Ask it right now!</Text>
        <LoginScreenButton 
          text={"Start a New chat"}
          handlePress={() => handlePress("Start a New Chat")}
        />

      </ScrollView>
      <Navigation />
    </SafeAreaView>
  );
}

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    paddingBottom: scale_mod(4),
  },
  headerText: {
    fontSize: scale_V(32),
    fontFamily: "RalewayBold",
    color: colors.darkBlue02,
  },
  title: {
    fontSize: scale_V(21),
    fontFamily: "RalewayBold",
    paddingTop: scale_mod(28),
    paddingBottom: scale_mod(8),
    color: colors.darkBlue02,
  },
  text: {

  },
  hoursContainer: {
    display: "flex",
    flexDirection: "row",
  },
  hoursSubContainer: {
    width: scale_mod(81),
  },
});
