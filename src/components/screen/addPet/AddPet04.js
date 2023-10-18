import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import TextInputField from "../../shared/TextInputField.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";

function AddPet04( { addPetData, setAddPetData, addPetComponents, setAddPetsComponents } ) {
  console.log(addPetData)

  function handleReturnToPrev () {
    setAddPetsComponents({...addPetComponents, AddPet03: true, AddPet04: false})
  }

  function handleNext () {
    setAddPetsComponents({...addPetComponents, AddPet04: false, AddPet05: true})
  }

  function handleSkip (key) {
    setAddPetData({...addPetData, [key]: ""})
    console.log(addPetData)
    setAddPetsComponents({...addPetComponents, AddPet04: false, AddPet05: true})
  }

  function handleTextInput ( key, text ) {
    setAddPetData({...addPetData, [key]: text})
    console.log(addPetData)
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
          <Text style={styles.heading}>{`What kind of ${addPetData.type.toLowerCase()} is ${addPetData.name}?`}</Text>
        </View>
        <Text style={[styleMaster.defaultFont, styles.subText]}>You can give your best guess here, too.</Text>
        <TextInputField 
          placeholder={'Enter Breed'}
          handleTextInput={handleTextInput}
          name={"breed"}
        />
      </View>
      <View style={styles.bottomContainer}>
        <LoginScreenButton 
          text={'Next'}
          handlePress={() => handleNext()}
        />
        <TouchableOpacity 
          style={styles.skipContainer} 
          onPress={() => handleSkip('breed')}
        >
          <Text style={[styleMaster.defaultFont, styles.skipText]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AddPet04;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
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
    paddingBottom: scale_mod(38),
  },
  heading: {
      fontFamily: 'RalewayBold',
      fontSize: scale_V(26),
      color: colors.black,
      textAlign: 'left',
  },
  subText: {
    width: scale_mod(328),
    paddingBottom: scale_mod(44),
    fontFamily: 'RobotoLight',
    fontSize: scale_V(15),
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

