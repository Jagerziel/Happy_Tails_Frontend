import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { colors } from "../constants/colorPalette.js";
import {
  scale_H,
  scale_V,
  scale_mod,
} from "../data/functions/normalizeScaling.js";
import { styleMaster } from "../constants/stylesMaster.js";

// Import Components
import LoginScreenButton from "../components/shared/LoginScreenButton";

function MyPetsScreen(props) {

  function handleAddPet (target) {
    console.log(`${target} button pressed`);
  }

  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
        <ScrollView style={[styleMaster.subParent, styles.subContainer]}>
          <View style={styles.headingContainer}>
            <Text style={[styleMaster.defaultFont, styles.heading]}>Your Pets</Text>
          </View>
          <ScrollView style={styles.petsContainer}>
            <Text>hello</Text>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <LoginScreenButton
              text={"Add a new Pet"}
              handlePress={() => handleAddPet("Add a new Pet")}
            />
          </View>
        </ScrollView>
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
  subContainer: {
    borderWidth: 2,
    // height: '100%',
    width: '100%',
  },
  headingContainer: {
    borderWidth: 2,
    borderColor: 'red',
    paddingTop: scale_mod(46),
    paddingBottom: scale_mod(40),
  },
  heading: {
    fontSize: scale_V(32),
    fontFamily: "RalewayBold",
  },
  petsContainer: {
    borderWidth: 2,
    height: scale_mod(500),
  },
  buttonContainer: {
    alignSelf: "center"
  }
});
