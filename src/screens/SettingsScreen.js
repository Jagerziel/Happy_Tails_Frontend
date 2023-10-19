import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";

function SettingsScreen(props) {
  return (
    <SafeAreaView style={[styleMaster.parent, styles.container]}>
      <View style={[styleMaster.subParent]}>
        <View style={styles.headerContainer}>
          <Text style={[styleMaster.defaultFont, styles.headerText]}>Settings</Text>
          <Text style={[styleMaster.defaultFont, styles.logoutText]}>Log Out</Text>


        </View>

      </View>
      <Navigation />
    </SafeAreaView>
  );
}

export default SettingsScreen;

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
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: scale_V(32),
    fontFamily: "RalewayBold",
  },
  logoutText: {
    fontFamily: "RobotoThin",
    color: colors.black,
    paddingRight: scale_mod(7),
  }
});
