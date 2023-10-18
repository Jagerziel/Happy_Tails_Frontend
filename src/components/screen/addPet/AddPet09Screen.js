import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { styleMaster } from "../../constants/stylesMaster.js";
import { colors } from "../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../components/shared/LoginScreenButton.js";
import TextInputField from "../../components/shared/TextInputField.js";

function AddPet09Screen( { route, navigation } ) {
  
  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
      <View style={[styleMaster.subParent]}>
        <Text>AddPet Screen 09</Text>
      </View>
    </SafeAreaView>
  );
}

export default AddPet09Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
