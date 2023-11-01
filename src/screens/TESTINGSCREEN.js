import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { colors } from "../constants/colorPalette.js";
import { TESTComponent } from "../store/TESTComponent";

function TESTINGSCREEN(props) {
  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
      <View style={[styleMaster.subParent]}>
        <Text>This is the Booking Screen</Text>
        <TESTComponent />
      </View>
      <Navigation />
    </SafeAreaView>
  );
}

export default TESTINGSCREEN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
  },
});
