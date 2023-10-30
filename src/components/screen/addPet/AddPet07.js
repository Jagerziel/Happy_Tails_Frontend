// Import React
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from 'react-native';

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import TextInputField from "../../shared/TextInputField.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";

const windowHeight = Dimensions.get('window').height;

function AddPet07( { addPetData, setAddPetData, addPetComponents, setAddPetsComponents } ) {
  // console.log(addPetData)

  function handleReturnToPrev () {
    setAddPetsComponents({...addPetComponents, AddPet06: true, AddPet07: false})
  }

  function handleNext () {
    setAddPetsComponents({...addPetComponents, AddPet07: false, AddPet08: true})
  }

  function handleSkip (key) {
    setAddPetData({...addPetData, [key]: ""})
    // console.log(addPetData)
    setAddPetsComponents({...addPetComponents, AddPet07: false, AddPet08: true})
  }

  function handleTextInput ( key, text ) {
    setAddPetData({...addPetData, [key]: text})
    // console.log(addPetData)
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
          <Text style={styles.heading}>{`Almost done. Do you know how much ${addPetData.name} weighs?`}</Text>
        </View>
        <Text style={[styleMaster.defaultFont, styles.subText]}>If you’re not sure, here here are some helpful guidelines.A gallon of milk is about 10 lbs and a stand mixer weights about 20 lbs.</Text>
        <TextInputField 
          placeholder={'Enter Weight'}
          handleTextInput={handleTextInput}
          name={"weight"}
        />
      </View>
      <View style={styles.bottomContainer}>
        <LoginScreenButton 
          text={'Next'}
          handlePress={() => handleNext()}
          disabled={addPetData.weight === "" ? true : false}
        />
        <TouchableOpacity 
          style={styles.skipContainer} 
          onPress={() => handleSkip('weight')}
        >
          <Text style={[styleMaster.defaultFont, styles.skipText]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AddPet07;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
  },
  subContainer: {
    display: "flex",
    alignItems: "center",
    minHeight: scale_mod(windowHeight * .6),
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

