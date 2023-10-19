import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";
import DateTimePicker from "../../shared/DateTimePicker.js";

function AddPet08( { addPetData, setAddPetData, addPetComponents, setAddPetsComponents } ) {
  console.log(addPetData)

  function handleReturnToPrev () {
    setAddPetsComponents({...addPetComponents, AddPet07: true, AddPet08: false})
  }

  function handleDate(date) {
    setAddPetData({...addPetData, dob: date})
  }

  function handleNext () {
    setAddPetsComponents({...addPetComponents, AddPet08: false, AddPet09: true})
  }

  function handleSkip (key) {
    setAddPetData({...addPetData, [key]: ""})
    console.log(addPetData)
    setAddPetsComponents({...addPetComponents, AddPet08: false, AddPet09: true})
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
          <Text style={styles.heading}>{`When was ${addPetData.sex === "Female" ? "she" : "he" } born?`}</Text>
        </View>
        <Text style={[styleMaster.defaultFont, styles.subText]}>It’s ok if you don’t know the exact date. A lot of pet parents don’t. Give us your best guess to help us learn their age.</Text>
        <DateTimePicker 
          name={"Select Date"}
          handleDate={date => handleDate(date)}
        />
      </View>
      <View style={styles.bottomContainer}>
        <LoginScreenButton 
          text={'Next'}
          handlePress={() => handleNext()}
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

export default AddPet08;

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

