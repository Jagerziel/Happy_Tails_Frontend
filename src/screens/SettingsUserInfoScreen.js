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

function SettingsUserInfoScreen(props) {
  const [ toggle , setToggle ] = useState(false)

  // Navigation
  const navigation = useNavigation();
  const route = useRoute();

  function handleSaveUser () {
    /* 
    **************************************************
      ERASE STORED DATA
    **************************************************
    */
    console.log('User Information Saved')
  }

  function toggleFunc () {
    setToggle(prev => !prev)
    console.log(`Toggle switched to ${!toggle}`)
  }

  return (
    <SafeAreaView style={[styleMaster.parent, styles.container]}>
      <ScrollView style={[styleMaster.subParent]}>
        <View style={styles.headerContainer}>
          <Text style={[styleMaster.defaultFont, styles.headerText]}>Settings</Text>
        </View>
        <Text style={[styleMaster.defaultFont, styles.title]}>General</Text>
        <View style={styles.staticInputContainer}>
          <StaticInputFieldToggle name={"Face ID"} toggleFunc={() => toggleFunc()}/>
        </View>
       


      </ScrollView>
      <Navigation />
    </SafeAreaView>
  );
}

export default SettingsUserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    // alignItems: "center",
    // justifyContent: "center",
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
  logoutText: {
    fontFamily: "RobotoLight",
    color: colors.black,
    paddingRight: scale_mod(7),
  },
  title: {
    fontSize: scale_V(21),
    fontFamily: "RalewayBold",
    paddingTop: scale_mod(28),
    paddingBottom: scale_mod(8),
  },
  staticInputContainer: {
    paddingTop: scale_mod(8),
  }
});
