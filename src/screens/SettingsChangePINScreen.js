// Import React
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Components
import Navigation from "../components/shared/Navigation";
import StaticInputFieldArrow from "../components/shared/StaticInputFieldArrow.js";
import StaticInputFieldToggle from "../components/shared/StaticInputFieldToggle.js";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";
import ReturnArrowSVG from "../assets/return_arrow_blue.svg"

function SettingsChangePINScreen(props) {
    const [ toggle , setToggle ] = useState(false)

    // Navigation
    const navigation = useNavigation();
    const route = useRoute();

    function handleReturnToPrev () {
        navigation.navigate("SettingsScreen")
    }
    
    function arrowNext ( path ) {
        console.log(`${path} button pressed`)
    }

    function toggleFunc () {
        setToggle(prev => !prev)
        console.log(`Toggle switched to ${!toggle}`)
    }

    return (
        <SafeAreaView style={[styleMaster.parent, styles.container]}>
        <ScrollView style={[styleMaster.subParent]}>
          <View style={styles.returnContainer}>
            <TouchableOpacity onPress={() => handleReturnToPrev()}>
              <ReturnArrowSVG />
            </TouchableOpacity>
          </View>
          <View style={styles.headerContainer}>
              <Text style={[styleMaster.defaultFont, styles.headerText]}>PIN</Text>
          </View>
          <View style={styles.staticInputContainer}>
              <StaticInputFieldToggle name={"PIN"} toggleFunc={() => toggleFunc()}/>
          </View>
          <View style={styles.staticInputContainer}>
              <StaticInputFieldArrow name={"Change PIN"} arrowNext={() => arrowNext('Change PIN')} path={'Change PIN'}/>
          </View>
        </ScrollView>
        <Navigation />
        </SafeAreaView>
    );
}

export default SettingsChangePINScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
    // alignItems: "center",
    // justifyContent: "center",
  },
  returnContainer: {
    alignSelf: 'flex-start',
    // paddingTop: scale_mod(23),
    // paddingLeft: scale_mod(15),
    paddingBottom: scale_mod(12),
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
  },
  staticInputContainer: {
    paddingTop: scale_mod(8),
  }
});
