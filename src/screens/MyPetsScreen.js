import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navigation from "../components/shared/Navigation";

function MyPetsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is the My Pets Screen</Text>
      <Navigation />
    </View>
  );
}

export default MyPetsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
