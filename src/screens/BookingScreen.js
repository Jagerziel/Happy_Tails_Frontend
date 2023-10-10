import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";

function BookingScreen(props) {
  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
      <View style={[styleMaster.subParent]}>
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
    backgroundColor: "#eee",
  },
});
