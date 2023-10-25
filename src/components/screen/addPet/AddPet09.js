import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import TextInputField from "../../shared/TextInputField.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";

function AddPet09( { addPetData, setAddPetData, addPetComponents, setAddPetsComponents } ) {
  console.log(addPetData)

  function handleReturnToPrev () {
    setAddPetsComponents({...addPetComponents, AddPet08: true, AddPet09: false})
  }

  function handleImage () {
    Alert.alert(`Under Construction`,`Add a photo feature coming soon!`)
  }

  function handleNext () {
    setAddPetsComponents({...addPetComponents, AddPet09: false, AddPet10: true})
  }

  function handleSkip (key) {
    setAddPetData({...addPetData, [key]: ""})
    setAddPetsComponents({...addPetComponents, AddPet09: false, AddPet10: true})
  }

  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
      <View style={[styleMaster.subParent, styles.subContainer]}>
        <View style={styles.returnContainer}>
          <TouchableOpacity onPress={() => handleReturnToPrev()}>
            <ReturnArrowSVG />
          </TouchableOpacity>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{`Would you like to add a photo of ${addPetData.name}?`}</Text>
        </View>
        <TouchableOpacity onPress={() => handleImage()}>
          <View style={styles.photoPlaceholder}>

          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <LoginScreenButton 
          text={'Next'}
          handlePress={() => handleNext()}
        />
        <TouchableOpacity 
          style={styles.skipContainer} 
          onPress={() => handleSkip('name')}
        >
          <Text style={[styleMaster.defaultFont, styles.skipText]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AddPet09;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
  },
  subContainer: {
    display: "flex",
    alignItems: "center"
  },
  returnContainer: {
    alignSelf: 'flex-start',
    paddingTop: scale_mod(23),
    paddingLeft: scale_mod(15),
  },
  headingContainer: {
    // borderWidth: 2,
    width: scale_mod(328),
    paddingTop: scale_mod(40),
    paddingBottom: scale_mod(80),
  },
  heading: {
    fontFamily: 'RalewayBold',
    fontSize: scale_V(26),
    color: colors.black,
    textAlign: 'left',
  },
  photoPlaceholder: {
    // borderWidth: 2,
    height: scale_mod(168),
    width: scale_mod(168),
    backgroundColor: colors.grayscale03,
    borderRadius: scale_mod(84),
  },
  bottomContainer: {
    // borderWidth: 2,
    display: "flex",
    alignItems: "center",
    paddingBottom: scale_mod(32),
  },
  skipContainer: {
    paddingTop: scale_mod(24),
  },
  skipText: {
    color: colors.secondaryFade
  }
});
