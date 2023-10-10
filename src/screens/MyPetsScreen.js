import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";

function MyPetsScreen(props) {
  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
        <View style={[styleMaster.subParent]}>
            <Text>This is the My Pets Screen</Text>
        </View>
      <Navigation />
    </SafeAreaView>
  );
}

export default MyPetsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
