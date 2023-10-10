// Import React
import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

// Import Components
import UserProfileHome from "../components/screen/UserProfileHome.js";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";

function HomeScreen(props) {
  return (
    <View style={[styles.container, styleMaster.parent]}>
      <Text>This is the home screen</Text>
      <Navigation />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
