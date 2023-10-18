import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import TextInputField from "../../shared/TextInputField.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";

function AddPet02( { addPetData, setAddPetData, addPetComponents, setAddPetsComponents } ) {
  console.log(addPetData)

  const [ imgSelected, setImgSelected ] = useState({
    dog: true,
    cat: false
  })
  
  useEffect(() => { 
    setAddPetData({...addPetData, type: "Dog"})
  }, [])
  
  function handleReturnToPrev () {
    setAddPetsComponents({...addPetComponents, AddPet01: true, AddPet02: false})
  }

  function handleNext () {
    setAddPetsComponents({...addPetComponents, AddPet02: false, AddPet03: true})
  }

  function handleSkip (key) {
    setAddPetData({...addPetData, [key]: ""})
    console.log(addPetData)
    setAddPetsComponents({...addPetComponents, AddPet02: false, AddPet03: true})
  }

  function handlePetSelect ( type ) {
    if (type === "Dog") {
      setAddPetData({...addPetData, type: "Dog"})
      setImgSelected({dog: true, cat: false})
    }
    if (type === "Cat") {
      setAddPetData({...addPetData, type: "Cat"})
      setImgSelected({dog: false, cat: true})
    }
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
          <Text style={styles.heading}>{`What’s a cute name. Is ${addPetData.name} a cat or a dog?`}</Text>
        </View>
        <View style={styles.petSelectContainer}>
          <Image source={require('../../../assets/temp_pet_pic_dog.jpg')} style={styles.imgProperties}/>
          <Image source={require('../../../assets/temp_pet_pic_cat.jpg')} style={styles.imgProperties}/>
        </View>
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

export default AddPet02;

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
    paddingTop: scale_mod(40),
    paddingBottom: scale_mod(80),
  },
  heading: {
    fontFamily: 'RalewayBold',
    fontSize: scale_V(26),
    color: colors.black,
    textAlign: 'left',
  },
  petSelectContainer: {
    // borderWidth: 2,
    width: '90%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
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
  },
  imgProperties: {
    height: scale_mod(100),
    width: scale_mod(100),
    resizeMode: 'cover',
    borderRadius: scale_mod(8),
  }
});

