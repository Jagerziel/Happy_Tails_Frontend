import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";

function SettingsScreen(props) {
  return (
    <View style={[styles.container, styleMaster.parent]}>
      <Text>This is the Settings Screen</Text>
      <Navigation />
    </View>
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
});
