import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navigation from "../components/shared/Navigation";

function AboutUsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is the About Us Screen</Text>
      <Navigation />
    </View>
  );
}

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
